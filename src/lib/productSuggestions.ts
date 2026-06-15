import {
  productPages,
  type ProductPageConfig,
  type ProductFamily,
} from "@/data/productPages";
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

// ---------------------------------------------------------------------------
// Inferência de família a partir do slug. Regras ordenadas — primeira vence.
// ---------------------------------------------------------------------------
const FAMILY_RULES: Array<{ test: (s: string) => boolean; family: ProductFamily }> = [
  // Tags trio (precisam vir antes de "tag-de-brincos")
  { test: (s) => s.includes("trio-de-brincos-e-colar") || s.includes("trio-brincos-e-colar"), family: "tags-trio-brincos-colar" },
  { test: (s) => s.includes("trio-de-brincos") || s.includes("trio-brincos") || s.includes("trio-de-colar"), family: "tags-trio-brincos" },

  // Combos brincos + colar
  { test: (s) => s.includes("brincos-e-colar"), family: "tags-brincos-colar" },

  // Tags por peça
  { test: (s) => s.includes("tag") && s.includes("brincos"), family: "tags-brincos" },
  { test: (s) => s.includes("tag") && (s.includes("anel") || s.includes("aneis")), family: "tags-aneis" },
  { test: (s) => s.includes("tag") && (s.includes("colar") || s.includes("colares")), family: "tags-colares" },
  { test: (s) => s.includes("tag") && (s.includes("pulseira") || s.includes("pulseiras")), family: "tags-pulseiras" },
  { test: (s) => s.includes("semaninha"), family: "tags-semaninha" },
  { test: (s) => s.includes("tag") && (s.includes("lacos") || s.includes("tiaras")), family: "tags-lacos-tiaras" },
  { test: (s) => s.includes("tag-de-acessorios") || s.includes("tag-acessorios"), family: "tags-acessorios-genericas" },

  // Sacolinhas / caixinhas
  { test: (s) => s.includes("caixinha"), family: "caixinhas" },
  { test: (s) => s.includes("sacolinha") || s.includes("sacola"), family: "sacolinhas" },

  // Cartões / certificados
  { test: (s) => s.includes("certificado"), family: "certificados-garantia" },
  { test: (s) => s.includes("cartao-de-agradecimento") || s.includes("agradecimento"), family: "cartoes-agradecimento" },
  { test: (s) => s.includes("cartao-de-visitas") || s.includes("visitas"), family: "cartoes-visitas" },

  // Adesivos
  { test: (s) => s.includes("adesivo") && (s.includes("anel") || s.includes("aneis")), family: "adesivos-anel" },
  { test: (s) => s.includes("adesivo") && (s.includes("fecha") || s.includes("sacola")), family: "adesivos-fecha-sacola" },
  { test: (s) => s.includes("adesivo"), family: "adesivos-redondos" },

  // Etiquetas
  { test: (s) => s.includes("mini-etiqueta"), family: "mini-etiquetas" },
  { test: (s) => s.includes("etiqueta"), family: "etiquetas-roupas" },

  // Kits
  { test: (s) => s.includes("kit"), family: "kits" },
];

const inferFamily = (page: ProductPageConfig): ProductFamily => {
  if (page.productFamily) return page.productFamily;
  const s = page.slug.toLowerCase();
  for (const rule of FAMILY_RULES) if (rule.test(s)) return rule.family;
  return "papelaria";
};

// Cache por slug — productPages é estático.
const familyCache = new Map<string, ProductFamily>();
const familyOf = (page: ProductPageConfig): ProductFamily => {
  const cached = familyCache.get(page.slug);
  if (cached) return cached;
  const f = inferFamily(page);
  familyCache.set(page.slug, f);
  return f;
};

// ---------------------------------------------------------------------------
// Famílias adjacentes para "Outros modelos" (fallback quando a primária é pequena).
// ---------------------------------------------------------------------------
const RELATED_FAMILY_MAP: Record<ProductFamily, ProductFamily[]> = {
  "tags-brincos": ["tags-trio-brincos", "tags-brincos-colar"],
  "tags-trio-brincos": ["tags-brincos", "tags-trio-brincos-colar"],
  "tags-aneis": ["tags-acessorios-genericas"],
  "tags-colares": ["tags-brincos-colar", "tags-trio-brincos-colar"],
  "tags-brincos-colar": ["tags-brincos", "tags-trio-brincos-colar", "tags-colares"],
  "tags-trio-brincos-colar": ["tags-trio-brincos", "tags-brincos-colar"],
  "tags-pulseiras": ["tags-acessorios-genericas"],
  "tags-acessorios-genericas": ["tags-brincos", "tags-aneis"],
  "tags-semaninha": ["tags-brincos", "tags-acessorios-genericas"],
  "tags-lacos-tiaras": [],
  "sacolinhas": ["caixinhas"],
  "caixinhas": ["sacolinhas"],
  "cartoes-visitas": ["cartoes-agradecimento"],
  "cartoes-agradecimento": ["cartoes-visitas", "certificados-garantia"],
  "certificados-garantia": ["cartoes-agradecimento"],
  "adesivos-redondos": ["adesivos-fecha-sacola"],
  "adesivos-fecha-sacola": ["adesivos-redondos"],
  "adesivos-anel": ["adesivos-redondos"],
  "etiquetas-roupas": ["mini-etiquetas"],
  "mini-etiquetas": ["etiquetas-roupas"],
  "kits": [],
  "papelaria": [],
};

// ---------------------------------------------------------------------------
// Famílias complementares para "Combine com".
// ---------------------------------------------------------------------------
const TAG_COMP: ProductFamily[] = [
  "sacolinhas",
  "adesivos-redondos",
  "cartoes-agradecimento",
  "cartoes-visitas",
];

const COMPLEMENTARY_FAMILY_MAP: Record<ProductFamily, ProductFamily[]> = {
  "tags-brincos": TAG_COMP,
  "tags-trio-brincos": TAG_COMP,
  "tags-aneis": TAG_COMP,
  "tags-colares": TAG_COMP,
  "tags-brincos-colar": TAG_COMP,
  "tags-trio-brincos-colar": TAG_COMP,
  "tags-pulseiras": TAG_COMP,
  "tags-acessorios-genericas": TAG_COMP,
  "tags-semaninha": TAG_COMP,
  "tags-lacos-tiaras": ["sacolinhas", "adesivos-redondos", "cartoes-agradecimento"],
  "sacolinhas": ["tags-brincos", "adesivos-fecha-sacola", "cartoes-agradecimento"],
  "caixinhas": ["tags-brincos", "adesivos-fecha-sacola", "cartoes-agradecimento"],
  "cartoes-visitas": ["adesivos-redondos", "sacolinhas", "tags-brincos"],
  "cartoes-agradecimento": ["tags-brincos", "sacolinhas", "adesivos-redondos"],
  "certificados-garantia": ["tags-brincos", "sacolinhas", "adesivos-redondos"],
  "adesivos-redondos": ["sacolinhas", "tags-brincos", "cartoes-agradecimento"],
  "adesivos-fecha-sacola": ["sacolinhas", "tags-brincos", "cartoes-agradecimento"],
  "adesivos-anel": ["tags-aneis", "sacolinhas", "cartoes-visitas"],
  "etiquetas-roupas": ["cartoes-agradecimento", "adesivos-redondos", "sacolinhas"],
  "mini-etiquetas": ["cartoes-agradecimento", "adesivos-redondos", "sacolinhas"],
  "kits": ["sacolinhas", "adesivos-redondos", "cartoes-agradecimento"],
  "papelaria": ["cartoes-visitas", "tags-brincos", "sacolinhas"],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
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

const rotate = <T,>(arr: T[], seed: string): T[] => {
  if (arr.length <= 1) return arr;
  const off = hash(seed) % arr.length;
  return [...arr.slice(off), ...arr.slice(0, off)];
};

const pagesByFamily = (family: ProductFamily, excludeSlug: string): ProductPageConfig[] =>
  productPages.filter((p) => p.slug !== excludeSlug && familyOf(p) === family);

// ---------------------------------------------------------------------------
// "Outros modelos" — mesma família, depois famílias adjacentes.
// ---------------------------------------------------------------------------
export const getRelatedProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length) {
    return resolveSlugs(current.relatedSlugs).slice(0, limit);
  }

  const family = familyOf(current);
  const seen = new Set<string>();
  const picked: ProductPageConfig[] = [];

  const pushFrom = (pages: ProductPageConfig[]) => {
    for (const p of pages) {
      if (picked.length >= limit) return;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      picked.push(p);
    }
  };

  // 1) Mesma família, rotacionada para variar entre páginas.
  pushFrom(rotate(pagesByFamily(family, currentSlug), currentSlug));

  // 2) Famílias adjacentes, se faltar.
  if (picked.length < limit) {
    for (const adj of RELATED_FAMILY_MAP[family] ?? []) {
      if (picked.length >= limit) break;
      pushFrom(rotate(pagesByFamily(adj, currentSlug), currentSlug + adj));
    }
  }

  return picked.map(toItem);
};

// ---------------------------------------------------------------------------
// "Combine com" — famílias complementares, distribuídas round-robin.
// ---------------------------------------------------------------------------
export const getComplementaryProducts = (currentSlug: string, limit = 6): SuggestionItem[] => {
  const current = productPages.find((p) => p.slug === currentSlug);
  if (!current) return [];

  if (current.crossSellSlugs && current.crossSellSlugs.length) {
    return resolveSlugs(current.crossSellSlugs).slice(0, limit);
  }

  const family = familyOf(current);
  const compFamilies = COMPLEMENTARY_FAMILY_MAP[family] ?? [];
  if (!compFamilies.length) return [];

  const buckets = compFamilies.map((f) =>
    rotate(pagesByFamily(f, currentSlug), currentSlug + f)
  );

  const seen = new Set<string>();
  const picked: ProductPageConfig[] = [];
  let i = 0;
  while (picked.length < limit) {
    let pickedThisRound = false;
    for (let b = 0; b < buckets.length && picked.length < limit; b++) {
      const item = buckets[b][i];
      if (item && !seen.has(item.slug)) {
        seen.add(item.slug);
        picked.push(item);
        pickedThisRound = true;
      }
    }
    if (!pickedThisRound) break;
    i++;
  }

  return picked.map(toItem);
};
