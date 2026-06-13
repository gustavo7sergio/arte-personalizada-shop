import { productPages, type ProductPageConfig } from "@/data/productPages";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";

export interface SuggestionItem {
  slug: string;
  displayName: string;
  categoryLabel: string;
  categorySlug: string;
  image?: string;
  minPrice: number;
}

// Categorias complementares por categoria. Mantém coerência: tags ↔ embalagens ↔ identidade.
const COMPLEMENTARY_MAP: Record<string, string[]> = {
  "tags-personalizadas-para-semijoias": [
    "sacolinhas-personalizadas-para-semijoias",
    "adesivos-personalizados-para-semijoias",
    "cartoes-personalizados-para-semijoias",
    "kits-de-tags-para-semijoias",
  ],
  "sacolinhas-personalizadas-para-semijoias": [
    "tags-personalizadas-para-semijoias",
    "adesivos-personalizados-para-semijoias",
    "cartoes-personalizados-para-semijoias",
  ],
  "cartoes-personalizados-para-semijoias": [
    "tags-personalizadas-para-semijoias",
    "sacolinhas-personalizadas-para-semijoias",
    "adesivos-personalizados-para-semijoias",
  ],
  "adesivos-personalizados-para-semijoias": [
    "sacolinhas-personalizadas-para-semijoias",
    "tags-personalizadas-para-semijoias",
    "cartoes-personalizados-para-semijoias",
  ],
  "etiquetas-personalizadas-para-roupas": [
    "adesivos-personalizados-para-semijoias",
    "cartoes-personalizados-para-semijoias",
    "papelaria-personalizada",
  ],
  "tags-personalizadas-para-lacos-e-tiaras": [
    "adesivos-personalizados-para-semijoias",
    "sacolinhas-personalizadas-para-semijoias",
    "cartoes-personalizados-para-semijoias",
  ],
  "kits-de-tags-para-semijoias": [
    "tags-personalizadas-para-semijoias",
    "cartoes-personalizados-para-semijoias",
    "sacolinhas-personalizadas-para-semijoias",
  ],
  "papelaria-personalizada": [
    "cartoes-personalizados-para-semijoias",
    "adesivos-personalizados-para-semijoias",
    "tags-personalizadas-para-semijoias",
  ],
};

const STOP_TOKENS = new Set([
  "tag", "tags", "de", "do", "da", "para", "e", "com", "personalizada", "personalizado",
  "personalizadas", "personalizados", "cm", "semijoias", "semijoia", "acessorios", "acessorio",
]);

const tokens = (slug: string): string[] =>
  slug.split("-").filter((t) => t && !STOP_TOKENS.has(t) && !/^\d/.test(t));

const minPriceOf = (page: ProductPageConfig): number => {
  const prices = page.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .flatMap((p) => p!.variants.flatMap((v) => v.prices.map((r) => r.cash)))
    .filter((n) => n > 0);
  return prices.length ? Math.min(...prices) : 0;
};

const heroImageOf = (page: ProductPageConfig): string | undefined => {
  for (const id of page.productIds) {
    const raw = productImages[id];
    if (Array.isArray(raw) && raw.length) return raw[0];
    if (typeof raw === "string") return raw;
  }
  return undefined;
};

const toItem = (page: ProductPageConfig): SuggestionItem => ({
  slug: page.slug,
  displayName: page.displayName,
  categoryLabel: page.categoryLabel,
  categorySlug: page.categorySlug,
  image: heroImageOf(page),
  minPrice: minPriceOf(page),
});

// "Outros modelos": mesma categoria, ordenado por similaridade de tokens no slug.
export const getRelatedProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];
  const currentTokens = new Set(tokens(current.slug));

  const sameCategory = productPages.filter(
    (p) => p.categorySlug === current.categorySlug && p.slug !== current.slug
  );

  const scored = sameCategory.map((p) => {
    const t = tokens(p.slug);
    const score = t.reduce((acc, tk) => acc + (currentTokens.has(tk) ? 1 : 0), 0);
    return { page: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(({ page }) => toItem(page));
};

// "Combine com": categorias complementares, distribuído entre elas.
export const getComplementaryProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];
  const compCats = COMPLEMENTARY_MAP[current.categorySlug] ?? [];
  if (!compCats.length) return [];

  // pega round-robin pelas categorias complementares para garantir variedade
  const buckets = compCats.map((cat) =>
    productPages.filter((p) => p.categorySlug === cat && p.slug !== current.slug)
  );

  const picked: ProductPageConfig[] = [];
  let i = 0;
  while (picked.length < limit) {
    let pickedThisRound = false;
    for (let b = 0; b < buckets.length && picked.length < limit; b++) {
      const item = buckets[b][i];
      if (item) {
        picked.push(item);
        pickedThisRound = true;
      }
    }
    if (!pickedThisRound) break;
    i++;
  }

  return picked.map(toItem);
};
