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

// Categorias complementares por categoria.
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
  "formato", "especial",
]);

// Tokens "de família" recebem peso extra na similaridade ("Outros modelos").
const FAMILY_TOKENS = new Set([
  "brincos", "anel", "aneis", "colar", "colares", "pulseira", "pulseiras",
  "trio", "mini", "semaninha", "lacos", "tiaras", "redonda", "redondo",
  "sacolinha", "sacola", "caixinha", "maleta", "certificado",
  "agradecimento", "visitas", "fecha", "bloco", "panfleto",
]);

const tokens = (slug: string): string[] =>
  slug.split("-").filter((t) => t && !STOP_TOKENS.has(t) && !/^\d/.test(t));

// Hash determinístico simples para rotação estável por slug.
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

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

const resolveSlugs = (slugs: string[]): SuggestionItem[] =>
  slugs
    .map((s) => productPages.find((p) => p.slug === s))
    .filter((p): p is ProductPageConfig => Boolean(p))
    .map(toItem);

// Rotaciona um array começando em um offset baseado no hash do slug.
const rotate = <T,>(arr: T[], seed: string): T[] => {
  if (arr.length <= 1) return arr;
  const off = hash(seed) % arr.length;
  return [...arr.slice(off), ...arr.slice(0, off)];
};

// "Outros modelos": mesma categoria, prioriza tokens de família, com rotação por slug nos empates.
export const getRelatedProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];

  // Override manual.
  if (current.relatedSlugs && current.relatedSlugs.length) {
    return resolveSlugs(current.relatedSlugs).slice(0, limit);
  }

  const currentTokens = new Set(tokens(current.slug));

  const sameCategory = productPages.filter(
    (p) => p.categorySlug === current.categorySlug && p.slug !== current.slug
  );

  const scored = sameCategory.map((p) => {
    const t = tokens(p.slug);
    const score = t.reduce((acc, tk) => {
      if (!currentTokens.has(tk)) return acc;
      return acc + (FAMILY_TOKENS.has(tk) ? 3 : 1);
    }, 0);
    return { page: p, score };
  });

  // Empates rotacionam por hash do slug atual para evitar listas idênticas entre páginas.
  const rotated = rotate(scored, current.slug);
  rotated.sort((a, b) => b.score - a.score);

  return rotated.slice(0, limit).map(({ page }) => toItem(page));
};

// "Combine com": categorias complementares, distribuídas e rotacionadas por slug.
export const getComplementaryProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];

  // Override manual.
  if (current.crossSellSlugs && current.crossSellSlugs.length) {
    return resolveSlugs(current.crossSellSlugs).slice(0, limit);
  }

  const compCats = COMPLEMENTARY_MAP[current.categorySlug] ?? [];
  if (!compCats.length) return [];

  // Rotaciona o conteúdo de cada bucket por slug atual → cada página vê itens diferentes.
  const buckets = compCats.map((cat) =>
    rotate(
      productPages.filter((p) => p.categorySlug === cat && p.slug !== current.slug),
      current.slug + cat
    )
  );

  const picked: ProductPageConfig[] = [];
  let i = 0;
  while (picked.length < limit) {
    let pickedThisRound = false;
    for (let b = 0; b < buckets.length && picked.length < limit; b++) {
      const item = buckets[b][i];
      if (item && !picked.find((p) => p.slug === item.slug)) {
        picked.push(item);
        pickedThisRound = true;
      }
    }
    if (!pickedThisRound) break;
    i++;
  }

  return picked.map(toItem);
};
