export type CategoryFAQ = { q: string; a: string };

export type CategoryContent = {
  seoTitle: string;
  seoDescription: string;
  intro: string[]; // parágrafos
  faqs: CategoryFAQ[];
};

export const categoryContent: Record<string, CategoryContent> = {
  "tags-personalizadas-para-semijoias": {
    seoTitle: "Tags Personalizadas para Semijoias | GS Cartões",
    seoDescription:
      "Tags personalizadas para brincos, anéis, colares e pulseiras de semijoias, prata e bijuterias. Modelos exclusivos com sua logo e envio para todo o Brasil.",
    intro: [
      "As tags personalizadas da GS Cartões são desenvolvidas para marcas de semijoias, prata e bijuterias que desejam apresentar seus produtos de forma mais profissional.",
      "Temos modelos para brincos, anéis, colares, conjuntos e diversos acessórios. Além disso, a maioria das tags pode ter medidas, formatos, cortes e furos adaptados conforme a necessidade de cada marca.",
      "Também oferecemos diferentes opções de papel e acabamentos para deixar o material ainda mais alinhado à identidade visual do seu negócio.",
    ],
    faqs: [],
  },
  "sacolinhas-personalizadas-para-semijoias": {
    seoTitle: "Sacolinhas Personalizadas para Semijoias | GS Cartões",
    seoDescription:
      "Sacolinhas personalizadas para semijoias, prata e bijuterias. Arte com logo e identidade visual da sua marca. Envio para todo o Brasil.",
    intro: [
      "Sacolinhas personalizadas para semijoias, prata e bijuterias, desenvolvidas para valorizar a apresentação da sua marca e tornar a entrega dos produtos ainda mais especial.",
      "A arte é totalmente personalizada com a identidade visual da sua marca, incluindo logo, cores e elementos gráficos. Os modelos e tamanhos seguem os padrões disponíveis, garantindo uma produção prática e com excelente acabamento para suas embalagens.",
    ],
    faqs: [],
  },
  "cartoes-personalizados-para-semijoias": {
    seoTitle: "Cartões Personalizados para Semijoias | GS Cartões",
    seoDescription:
      "Cartões de visita, agradecimento, garantia e mais para semijoias e bijuterias. Personalizados com sua logo e identidade visual.",
    intro: [
      "Cartões personalizados para semijoias, prata e bijuterias, ideais para fortalecer a identidade da sua marca em cada venda.",
      "Produzimos cartões de visita, cartão de agradecimento, certificado de garantia e outros modelos personalizados com sua logo, informações e identidade visual, ajudando a transmitir mais profissionalismo e organização para o seu negócio.",
    ],
    faqs: [],
  },
  "adesivos-personalizados-para-semijoias": {
    seoTitle: "Adesivos Personalizados para Semijoias | GS Cartões",
    seoDescription:
      "Adesivos personalizados para embalagens, sacolas e caixas de semijoias e bijuterias. Com a identidade visual da sua marca.",
    intro: [
      "Adesivos personalizados para semijoias, prata e bijuterias, perfeitos para utilizar em embalagens, sacolas, caixas e outros materiais da sua marca.",
      "Produzidos com a sua identidade visual, ajudam a criar uma apresentação mais alinhada e profissional em cada detalhe da experiência da cliente.",
    ],
    faqs: [],
  },
  "etiquetas-personalizadas-para-roupas": {
    seoTitle: "Etiquetas Personalizadas para Roupas | GS Cartões",
    seoDescription:
      "Etiquetas personalizadas para roupas com logo e identidade visual da sua marca. Mais profissionalismo para o seu negócio.",
    intro: [
      "Etiquetas personalizadas para roupas, desenvolvidas para marcas que desejam apresentar seus produtos de forma mais profissional e organizada.",
      "Podem ser personalizadas com logo, informações da marca e outros detalhes importantes, criando uma identificação visual alinhada ao estilo do seu negócio.",
    ],
    faqs: [],
  },
  "kits-de-tags-para-semijoias": {
    seoTitle: "Kits de Tags para Semijoias | GS Cartões",
    seoDescription:
      "Kits práticos com os principais modelos de tags para semijoias, prata e bijuterias. Personalizados com a sua marca e com preço vantajoso.",
    intro: [
      "Os kits de tags são uma opção prática para quem deseja ter os principais modelos de tags para semijoias em uma única compra.",
      "Com diferentes formatos para usar em brincos, colares, anéis, pulseiras e outros acessórios, os kits ajudam a manter uma apresentação mais organizada e profissional, além de oferecer um custo mais vantajoso do que adquirir cada modelo separadamente.",
      "Todos os modelos são personalizados com a identidade visual da sua marca.",
    ],
    faqs: [],
  },
  "papelaria-personalizada": {
    seoTitle: "Papelaria Personalizada | GS Cartões",
    seoDescription:
      "Papelaria personalizada com a identidade visual da sua marca: panfletos, banners, blocos de pedido e mais. Envio para todo o Brasil.",
    intro: [],
    faqs: [],
  },
  "tags-personalizadas-para-lacos-e-tiaras": {
    seoTitle: "Tags Personalizadas para Laços e Tiaras | GS Cartões",
    seoDescription:
      "Tags personalizadas para laços, tiaras e acessórios de cabelo, com logo e identidade visual da sua marca.",
    intro: [],
    faqs: [],
  },
};
