// Produtos marcados com o selo "Mais vendido".
// Lista curada — não adicionar itens sem solicitação explícita.
export const BEST_SELLER_PRODUCT_IDS = [
  "mini-tag-brincos-p",        // Mini Tag de Brincos 4,8 × 4,25 cm
  "tag-brincos-p",             // Tag de Brincos 4 × 2,5 cm
  "tag-trio-brincos-m",        // Tag Trio de Brincos 5,5 × 4,8 cm
  "tag-trio-brincos-88x48",    // Tag Trio de Brincos 8,8 × 4,8 cm
  "sacolinha-acessorios-couche", // Sacolinha 16,5 × 12 × 4,5 cm
  "caixinha-acessorios-maleta",  // Caixinha 4,4 × 7,3 × 5,6 cm
  "cartao-visitas",            // Cartão de Visitas 8,8 × 4,8 cm
  "certificado-garantia",      // Certificado de Garantia 8,8 × 4,8 cm
  "certificado-garantia-mini", // Mini Certificado de Garantia 4,8 × 4,25 cm
  "etiqueta-roupas",           // Etiqueta de Roupas 8,8 × 4,8 cm
] as const;

const BEST_SELLER_SET = new Set<string>(BEST_SELLER_PRODUCT_IDS);

export const isBestSeller = (productId?: string) =>
  !!productId && BEST_SELLER_SET.has(productId);

export const hasBestSeller = (productIds: string[] = []) =>
  productIds.some((id) => BEST_SELLER_SET.has(id));
