export type CategoryFAQ = { q: string; a: string };

export type CategoryContent = {
  seoTitle: string;
  seoDescription: string;
  intro: string[]; // parágrafos
  faqs: CategoryFAQ[];
};

export const categoryContent: Record<string, CategoryContent> = {
  "tags-de-acessorios": {
    seoTitle: "Tags de Acessórios Personalizadas para Semijoias — GS Cartões",
    seoDescription:
      "Tags personalizadas para brincos, anéis, colares e pulseiras de semijoias, prata e bijuterias. Modelos exclusivos com sua logo e envio para todo o Brasil.",
    intro: [
      "As tags personalizadas da GS Cartões são desenvolvidas para marcas de semijoias, prata e bijuterias que desejam apresentar seus produtos de forma mais profissional.",
      "Temos modelos para brincos, anéis, colares, conjuntos e diversos acessórios. Além disso, a maioria das tags pode ter medidas, formatos, cortes e furos adaptados conforme a necessidade de cada marca.",
      "Também oferecemos diferentes opções de papel e acabamentos para deixar o material ainda mais alinhado à identidade visual do seu negócio.",
    ],
    faqs: [],
  },
};
