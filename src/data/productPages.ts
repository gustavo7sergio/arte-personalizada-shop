// Piloto: páginas individuais de produto. Mapeia slug → produtos do catálogo + SEO.
// Cada entrada vira uma rota /produto/:slug. Para os primeiros produtos do piloto,
// múltiplos produtos do catálogo (mesmas linhas com tamanhos diferentes) podem ser
// agrupados em uma única página — cada um se torna uma variante na ProductPage.

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
    slug: "tag-de-brincos-personalizada",
    productIds: ["tag-brincos-p", "tag-brincos-m", "tag-brincos-g"],
    displayName: "Tag de Brincos Personalizada",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada para Semijoias | GS Cartões",
    seoDescription:
      "Tag de Brincos personalizada nos tamanhos P, M e G. Papel couchê 250g, frente e verso coloridos, brilho total e formato sob medida para a sua marca.",
    longDescription: [
      "A Tag de Brincos personalizada da GS Cartões é desenvolvida sob medida para valorizar suas semijoias, em três tamanhos (P, M e G) com layout exclusivo da sua marca.",
      "Impressa em papel couchê 250g de alta qualidade, com frente e verso coloridos e brilho total na frente. Possibilidade de acabamentos adicionais como verniz localizado e papel 300g sob orçamento.",
    ],
  },
  {
    slug: "mini-tag-de-brincos-personalizada",
    productIds: ["mini-tag-brincos-p"],
    displayName: "Mini Tag de Brincos Personalizada",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Mini Tag de Brincos Personalizada para Semijoias | GS Cartões",
    seoDescription:
      "Mini Tag de Brincos personalizada 4,8 × 4,25 cm. Papel couchê 250g, frente e verso coloridos com brilho total. Ideal para acompanhar pares delicados de brincos.",
    longDescription: [
      "A Mini Tag de Brincos da GS Cartões é a opção compacta (4,8 × 4,25 cm) para acompanhar pares delicados, sem competir com a peça.",
      "Impressa em papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos adicionais (papel 300g e verniz localizado) disponíveis sob consulta.",
    ],
  },
];

export const productPageBySlug = (slug: string) =>
  productPages.find((p) => p.slug === slug);

// Reverse index: dado um id de produto do catálogo, retorna a página individual (se houver).
export const productPageByProductId = (productId: string) =>
  productPages.find((p) => p.productIds.includes(productId));
