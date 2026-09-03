import { BEST_SELLER_PRODUCT_IDS } from "@/data/bestSellers";

export type ProductBadgeKey = "best-seller" | "best-value" | "new-launch";

// Produtos marcados com o selo "💰 Melhor custo-benefício".
// Lista curada — não adicionar itens sem solicitação explícita.
export const BEST_VALUE_PRODUCT_IDS = [
  "mini-tag-brincos-p",           // Mini Tag de Brincos 4,8 × 4,25 cm
  "tag-trio-brincos-p",           // Tag Trio de Brincos 4,8 × 4,1 cm
  "tag-brincos-colar-p",          // Tag de Brincos e Colar 8,8 × 4,8 cm
  "mini-tag-anel",                // Mini Tag de Anel 3,9 × 1,7 cm
  "tag-acessorios",               // Tag de Acessórios 8,8 × 4,8 cm
  "tag-acessorios-padronizada-p", // Tag de Acessórios Padronizada Pequena
  "tag-acessorios-padronizada-m", // Tag de Acessórios Padronizada Média
  "caixinha-acessorios-maleta",   // Caixinha 4,4 × 7,3 × 5,6 cm
  "cartao-agradecimento-p",       // Mini Cartão de Agradecimento 4,8 × 4,25 cm
  "certificado-garantia-mini",    // Mini Certificado de Garantia 4,8 × 4,25 cm
  "cartao-visitas",               // Cartão de Visitas 8,8 × 4,8 cm
  "adesivo-redondo-3",            // Adesivo Redondo 3 × 3 cm
  "adesivo-anel",                 // Adesivo para Anel 7 × 1,7 cm
  "mini-etiqueta-roupas",         // Mini Etiqueta de Roupas 4,8 × 4,25 cm
  "kit-6000-materiais-g",         // Kit Completo de Tags 2
] as const;

// Produtos marcados com o selo "✨ Lançamento".
export const NEW_LAUNCH_PRODUCT_IDS = [
  "sacola-acessorios-21x15x7", // Sacola Personalizada 21 × 15 × 7 cm
  "sacola-acessorios-12x12x6", // Sacola Personalizada 12 × 12 × 6 cm
  "ecobag-30x30",              // Ecobag Personalizada 30 × 30 cm
  "embalagem-almofada",        // Embalagem Almofada 8 × 8,5 cm
] as const;

const NEW_LAUNCH_SET = new Set<string>(NEW_LAUNCH_PRODUCT_IDS);
const BEST_SELLER_SET = new Set<string>(BEST_SELLER_PRODUCT_IDS);
const BEST_VALUE_SET = new Set<string>(BEST_VALUE_PRODUCT_IDS);

/** Ordem fixa de exibição: "Mais vendido" sempre acima. */
export const getProductBadges = (productId?: string): ProductBadgeKey[] => {
  if (!productId) return [];
  const badges: ProductBadgeKey[] = [];
  if (NEW_LAUNCH_SET.has(productId)) badges.push("new-launch");
  if (BEST_SELLER_SET.has(productId)) badges.push("best-seller");
  if (BEST_VALUE_SET.has(productId)) badges.push("best-value");
  return badges;
};

/** Badges agregadas de uma página que agrupa vários produtos. */
export const getBadgesForProductIds = (productIds: string[] = []): ProductBadgeKey[] => {
  const badges: ProductBadgeKey[] = [];
  if (productIds.some((id) => NEW_LAUNCH_SET.has(id))) badges.push("new-launch");
  if (productIds.some((id) => BEST_SELLER_SET.has(id))) badges.push("best-seller");
  if (productIds.some((id) => BEST_VALUE_SET.has(id))) badges.push("best-value");
  return badges;
};
