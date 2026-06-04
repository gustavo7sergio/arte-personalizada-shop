// Páginas individuais de produto. Cada slug mapeia para 1 produto do catálogo
// (sem consolidar tamanhos visualmente diferentes na mesma URL) + metadados de SEO.

export interface ProductPageConfig {
  slug: string;
  productIds: string[]; // produtos do catálogo que compõem essa página
  displayName: string;
  categorySlug: string; // slug da categoria pai (para breadcrumb)
  categoryLabel: string; // rótulo curto da categoria no breadcrumb
  seoTitle: string;
  seoDescription: string;
  longDescription?: string[];
}

export const productPages: ProductPageConfig[] = [
  {
    slug: "mini-tag-de-brincos-personalizada-4-8x4-25-cm",
    productIds: ["mini-tag-brincos-p"],
    displayName: "Mini Tag de Brincos Personalizada 4,8 × 4,25 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Mini Tag de Brincos Personalizada 4,8 × 4,25 cm | GS Cartões",
    seoDescription:
      "Mini Tag de Brincos personalizada 4,8 × 4,25 cm em papel couchê 250g, frente e verso coloridos com brilho total. Ideal para acompanhar pares delicados de brincos.",
    longDescription: [
      "A Mini Tag de Brincos Personalizada 4,8 × 4,25 cm da GS Cartões é a opção compacta para acompanhar pares delicados de semijoias, sem competir visualmente com a peça.",
      "Impressa em papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos adicionais (papel 300g e verniz localizado) disponíveis sob consulta.",
    ],
  },
  {
    slug: "tag-de-brincos-personalizada-4x2-5-cm",
    productIds: ["tag-brincos-p"],
    displayName: "Tag de Brincos Personalizada 4 × 2,5 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 4 × 2,5 cm | GS Cartões",
    seoDescription:
      "Tag de Brincos personalizada 4 × 2,5 cm em papel couchê 250g, frente e verso coloridos com brilho total. Formato slim para identificar brincos da sua marca de semijoias.",
    longDescription: [
      "A Tag de Brincos Personalizada 4 × 2,5 cm é o formato slim ideal para identificar brincos sem ocupar muito espaço na embalagem.",
      "Impressa em papel couchê 250g, frente e verso coloridos com brilho total na frente. Furo de pendurar, cortes especiais, papel couchê 300g e verniz localizado disponíveis sob orçamento.",
    ],
  },
  {
    slug: "tag-de-brincos-personalizada-6x6-cm",
    productIds: ["tag-brincos-g"],
    displayName: "Tag de Brincos Personalizada 6 × 6 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 6 × 6 cm | GS Cartões",
    seoDescription:
      "Tag de Brincos personalizada 6 × 6 cm em papel couchê 250g, frente e verso coloridos com brilho total. Formato quadrado amplo com destaque para a sua marca de semijoias.",
    longDescription: [
      "A Tag de Brincos Personalizada 6 × 6 cm da GS Cartões oferece área generosa para destacar a identidade da sua marca de semijoias junto ao produto.",
      "Impressa em papel couchê 250g, frente e verso coloridos com brilho total na frente. Furo de pendurar, cortes especiais, papel couchê 300g e verniz localizado disponíveis sob orçamento.",
    ],
  },
];

export const productPageBySlug = (slug: string) =>
  productPages.find((p) => p.slug === slug);

// Reverse index: dado um id de produto do catálogo, retorna a página individual (se houver).
export const productPageByProductId = (productId: string) =>
  productPages.find((p) => p.productIds.includes(productId));
