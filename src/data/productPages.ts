// Páginas individuais por produto. Cada slug = 1 produto do catálogo.
// Conteúdo único por página: SEO, H1, meta description, descrição comercial+técnica e FAQs próprios.

export const PRODUCTION_DEADLINE_SHORT = "5 a 6 dias úteis";
export const PRODUCTION_DEADLINE_ANSWER =
  "O prazo de produção é de 5 a 6 dias úteis, e começa a contar após a criação da arte.\nO prazo de entrega depende do seu CEP, e calculamos isso para você pelo nosso WhatsApp!";

export interface ProductFAQ { q: string; a: string }

// Família funcional/visual do produto. Usada para sugestões coerentes em ProductPage.
// Quando ausente em uma página, é inferida automaticamente a partir do slug
// (ver inferProductFamily em src/lib/productSuggestions.ts).
export type ProductFamily =
  | "tags-brincos"
  | "tags-trio-brincos"
  | "tags-aneis"
  | "tags-colares"
  | "tags-brincos-colar"
  | "tags-trio-brincos-colar"
  | "tags-pulseiras"
  | "tags-acessorios-genericas"
  | "tags-semaninha"
  | "tags-lacos-tiaras"
  | "sacolinhas"
  | "caixinhas"
  | "cartoes-visitas"
  | "cartoes-agradecimento"
  | "certificados-garantia"
  | "adesivos-redondos"
  | "adesivos-anel"
  | "adesivos-fecha-sacola"
  | "etiquetas-roupas"
  | "mini-etiquetas"
  | "kits"
  | "papelaria";

export interface ProductPageConfig {
  slug: string;
  productIds: string[];
  displayName: string;
  categorySlug: string;
  categoryLabel: string;
  seoTitle: string;
  seoDescription: string;
  longDescription: string[];
  faqs: ProductFAQ[];
  // Mapa opcional: índice da variante (flat) → índice da imagem na galeria.
  // Quando definido, trocar de variante muda a imagem principal automaticamente.
  variantImageMap?: number[];
  // Override manual de família (caso a inferência por slug não seja precisa).
  productFamily?: ProductFamily;
  // Override manual de sugestões. Quando definidos, substituem o algoritmo automático.
  relatedSlugs?: string[];      // "Outros modelos"
  crossSellSlugs?: string[];    // "Combine com"
  // Vídeo do YouTube embed opcional (ex: "x68ZOs2XjOU")
  youtubeVideoId?: string;
}

const FAQ_PRAZO: ProductFAQ = { q: "Qual o prazo de produção?", a: PRODUCTION_DEADLINE_ANSWER };
const FAQ_ARTE: ProductFAQ = {
  q: "Vocês criam a arte personalizada?",
  a: "Sim. Trabalhamos com criação de arte 100% personalizada para a sua marca. Você pode usar sua logo, cores, redes sociais e qualquer outra informação que desejar! Essa etapa é feita após fechar o pedido conosco. O prazo é de apenas 1 dia útil para criação e depois de você aprovar essa etapa encaminhamos para a confecção dos materiais!",
};
const FAQ_PAGAMENTO: ProductFAQ = {
  q: "Como funciona o pagamento?",
  a: "Você tem 10% de desconto no PIX ou à vista, ou pode parcelar em até 6x sem juros no cartão. A finalização do pedido é feita pelo WhatsApp oficial.",
};

const wrapFaqs = (extras: ProductFAQ[]): ProductFAQ[] => [FAQ_PRAZO, FAQ_ARTE, ...extras, FAQ_PAGAMENTO];

export const productPages: ProductPageConfig[] = [
  // ─────────── TAGS DE ACESSÓRIOS ───────────
  {
    slug: "mini-tag-de-brincos-personalizada-4-8x4-25-cm",
    productIds: ["mini-tag-brincos-p"],
    displayName: "Mini Tag de Brincos Personalizada 4,8x4,25 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Mini Tag de Brincos Personalizada 4,8x4,25 cm | GS Cartões",
    seoDescription: "Mini tag de brincos personalizada 4,8x4,25 cm para semijoias. Arte exclusiva da sua marca, frente e verso coloridos e brilho total na frente.",
    longDescription: [
      "Compacta e elegante, a Mini Tag de Brincos 4,8x4,25 cm valoriza pares delicados de semijoias sem competir visualmente com a peça. É a escolha ideal para marcas que querem uma apresentação clean e profissional.",
      "Impressa em papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em papel 300g e verniz localizado disponíveis sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "É possível usar esse tamanho para brincos pequenos e médios?", a: "Sim. O formato 4,8x4,25 cm acomoda muito bem brincos pequenos e médios, mantendo destaque para a sua logo." }]),
    youtubeVideoId: "x68ZOs2XjOU",
  },
  {
    slug: "tag-de-brincos-personalizada-4x2-5-cm",
    productIds: ["tag-brincos-p"],
    displayName: "Tag de Brincos Personalizada 4x2,5 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 4x2,5 cm | GS Cartões",
    seoDescription: "Tag de brincos personalizada 4x2,5 cm em formato slim para semijoias. Arte exclusiva, couchê 250g e brilho total na frente.",
    longDescription: [
      "A Tag de Brincos 4x2,5 cm tem formato slim, perfeito para identificar brincos sem ocupar muito espaço na embalagem e dando destaque para o nome da sua marca.",
      "Produzida em papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes especiais, papel 300g e verniz localizado disponíveis sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "É possível adicionar furo para pendurar?", a: "Sim. Furos e cortes especiais são opcionais e podem ser orçados junto com seu pedido pelo WhatsApp." }]),
  },
  {
    slug: "tag-de-brincos-personalizada-6x6-cm",
    productIds: ["tag-brincos-g"],
    displayName: "Tag de Brincos Personalizada 6x6 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 6x6 cm | GS Cartões",
    seoDescription: "Tag de brincos personalizada 6x6 cm com formato quadrado amplo. Arte exclusiva da sua marca, couchê 250g e brilho total na frente.",
    longDescription: [
      "Com formato quadrado amplo, a Tag de Brincos 6x6 cm dá destaque generoso para a identidade visual da sua marca de semijoias, com presença forte no momento da entrega.",
      "Impressa em papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes especiais, papel 300g e verniz localizado disponíveis sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "É um bom tamanho para argolas e brincos maiores?", a: "Sim. O formato 6x6 cm acomoda muito bem argolas e brincos maiores, mantendo equilíbrio visual entre tag e peça." }]),
  },
  {
    slug: "tag-de-brincos-personalizada-8-8x4-8-cm",
    productIds: ["tag-brincos-m"],
    displayName: "Tag de Brincos Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag de brincos personalizada 8,8x4,8 cm em papel couchê 250g, frente e verso coloridos. Ideal para destacar sua marca de semijoias.",
    longDescription: [
      "A Tag de Brincos 8,8x4,8 cm oferece área generosa para nome, slogan e instruções de cuidado, sem perder a leveza para acompanhar o par de brincos.",
      "Impressa em papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes, papel couchê 300g e verniz localizado disponíveis sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar essa tag também para colares pequenos?", a: "Sim. Pelo tamanho equilibrado, ela também funciona bem em colares delicados e conjuntos menores." }]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-5-5x4-8-cm",
    productIds: ["tag-trio-brincos-m"],
    displayName: "Tag de Trio de Brincos Personalizada 5,5x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Trio de Brincos Personalizada 5,5x4,8 cm | GS Cartões",
    seoDescription: "Tag para trio de brincos 5,5x4,8 cm com 3 furos para fixar todas as peças. Arte personalizada para sua marca de semijoias.",
    longDescription: [
      "Pensada para acomodar trios de brincos em uma única tag, o formato 5,5x4,8 cm mantém a apresentação organizada e reforça o cuidado da sua marca com cada combinação.",
      "Em papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos para encaixe dos brincos, cortes especiais e acabamentos disponíveis sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "A tag já vem com os furos para fixar os 3 pares?", a: "Os furos para fixação são opcionais e configurados conforme o seu modelo de brinco. Você confirma os detalhes pelo WhatsApp antes da produção." }]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-4-8x4-1-cm",
    productIds: ["tag-trio-brincos-p"],
    displayName: "Tag de Trio de Brincos Personalizada 4,8x4,1 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Trio de Brincos Personalizada 4,8x4,1 cm | GS Cartões",
    seoDescription: "Tag de trio de brincos 4,8x4,1 cm, formato compacto e elegante para semijoias. Arte 100% personalizada da sua marca.",
    longDescription: [
      "O formato mais compacto da linha trio, ideal para marcas que preferem uma tag discreta sem perder o impacto visual da sua identidade.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos para os brincos, cortes especiais e acabamentos sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Esse modelo cabe trios de brincos pequenos?", a: "Sim, foi pensado especificamente para trios delicados, mantendo a tag proporcional aos brincos." }]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-8x6-5-cm",
    productIds: ["tag-trio-brincos-g"],
    displayName: "Tag de Trio de Brincos Personalizada 8x6,5 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Trio de Brincos Personalizada 8x6,5 cm | GS Cartões",
    seoDescription: "Tag para trio de brincos 8x6,5 cm com espaço amplo para combinar 3 pares. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "Tag grande e versátil para trios completos, com espaço sobrando para apresentar a logo, breve descrição e instruções de uso de forma elegante.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes especiais conforme o modelo dos brincos.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar esse tamanho para combos com argolas?", a: "Sim. O formato 8x6,5 cm comporta combos que incluem argolas e brincos maiores com folga." }]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-8-8x4-8-cm",
    productIds: ["tag-trio-brincos-88x48"],
    displayName: "Tag de Trio de Brincos Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Trio de Brincos Personalizada 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag horizontal para trio de brincos 8,8x4,8 cm. Formato alongado com excelente leitura da marca em couchê 250g.",
    longDescription: [
      "O formato 8,8x4,8 cm é alongado e horizontal, oferecendo ótima leitura da logo enquanto distribui os 3 pares de brincos de forma equilibrada.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes opcionais sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "Esse modelo é parecido com o cartão de visitas?", a: "Sim, é o mesmo padrão de tamanho de cartão de visitas, mas com furos e acabamento próprios para acomodar 3 pares de brincos." }]),
  },
  {
    slug: "tag-semaninha-personalizada-8-8x4-8-cm",
    productIds: ["tag-semaninha"],
    displayName: "Tag Semaninha Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Semaninha Personalizada 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag semaninha personalizada 8,8x4,8 cm para kits de brincos da semana. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "Pensada para os tradicionais kits de \"brincos da semana\", a Tag Semaninha 8,8x4,8 cm organiza 7 pares de forma divertida e reforça a curadoria da sua marca.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos para encaixe dos brincos sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "A arte já vem com os dias da semana?", a: "Sim. A arte é montada já incluindo os dias da semana, alinhada à identidade visual da sua marca." }]),
  },
  {
    slug: "tag-de-brincos-e-colar-personalizada-9-94x6-cm",
    productIds: ["tag-brincos-colar-g"],
    displayName: "Tag de Brincos e Colar Personalizada 9,94x6 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos e Colar Personalizada 9,94x6 cm | GS Cartões",
    seoDescription: "Tag para conjunto de brincos e colar 9,94x6 cm. Formato amplo para apresentar a peça completa com a sua marca.",
    longDescription: [
      "Ideal para conjuntos completos, a tag 9,94x6 cm acomoda brincos e colar na mesma peça, dando ao kit uma apresentação mais profissional na vitrine e na entrega.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes e acabamentos especiais sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "É possível adaptar a tag para conjuntos com pulseira?", a: "Em muitos casos sim, dependendo do tamanho das peças. Envie o modelo pelo WhatsApp para confirmar a viabilidade." }]),
  },
  {
    slug: "tag-de-brincos-e-colar-personalizada-8-8x4-8-cm",
    productIds: ["tag-brincos-colar-p"],
    displayName: "Tag de Brincos e Colar Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos e Colar Personalizada 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag de brincos e colar 8,8x4,8 cm em formato compacto, com arte personalizada para apresentar seus conjuntos de semijoias.",
    longDescription: [
      "Versão mais econômica e compacta para conjuntos de brincos e colar, mantendo o padrão visual da sua marca em uma única tag prática.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes especiais opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Qual a diferença para o modelo 9,94x6 cm?", a: "Esse modelo é mais compacto e econômico. O 9,94x6 cm oferece mais área para a arte e acomoda conjuntos maiores com folga." }]),
    youtubeVideoId: "z4XmNspPpVE",
  },
  {
    slug: "tag-de-brincos-e-colar-personalizada-formato-especial",
    productIds: ["tag-brincos-colar-especial"],
    displayName: "Tag de Brincos e Colar Personalizada Formato Especial",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos e Colar Formato Especial | GS Cartões",
    seoDescription: "Tag personalizada em formato especial para conjuntos de brincos e colar, dentro do limite de 8,8x4,8 cm. Liberdade total de criação.",
    longDescription: [
      "Para marcas que querem fugir do retangular tradicional, essa opção permite criar formatos exclusivos dentro do limite de 8,8x4,8 cm, com cortes personalizados que reforçam sua identidade.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Corte especial incluso. Outros acabamentos sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso enviar um formato exclusivo?", a: "Sim. Você envia a referência ou ideia do formato pelo WhatsApp e nossa equipe valida a viabilidade dentro das medidas." }]),
  },
  {
    slug: "tag-trio-de-brincos-e-colar-personalizada-9x6-5-cm",
    productIds: ["tag-trio-brincos-colar-g"],
    displayName: "Tag Trio de Brincos e Colar Personalizada 9x6,5 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio de Brincos e Colar 9x6,5 cm | GS Cartões",
    seoDescription: "Tag para trio de brincos + colar 9x6,5 cm. Formato generoso para apresentar conjuntos completos com sua identidade visual.",
    longDescription: [
      "Para conjuntos mais robustos com trios de brincos e colar, o formato 9x6,5 cm acomoda todas as peças sem perder a presença visual da sua marca.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes especiais sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar essa tag para gargantilhas curtas?", a: "Sim. Gargantilhas curtas e colares delicados se encaixam bem nesse formato." }]),
  },
  {
    slug: "tag-trio-de-brincos-e-colar-personalizada-8-8x4-8-cm",
    productIds: ["tag-trio-brincos-colar-p"],
    displayName: "Tag Trio de Brincos e Colar Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio de Brincos e Colar 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag compacta para trio de brincos e colar 8,8x4,8 cm. Apresentação organizada de conjuntos com sua marca em couchê 250g.",
    longDescription: [
      "Tag horizontal e econômica para combos completos, mantém a organização do conjunto sem ocupar muito espaço na embalagem.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Cabem 3 pares de brincos sem ficar apertado?", a: "Sim, o layout é montado de forma a acomodar os 3 pares e o colar com bom espaçamento." }]),
  },
  {
    slug: "mini-tag-de-anel-personalizada-3-9x1-7-cm",
    productIds: ["mini-tag-anel"],
    displayName: "Mini Tag de Anel Personalizada 3,9x1,7 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Mini Tag de Anel Personalizada 3,9x1,7 cm | GS Cartões",
    seoDescription: "Mini tag de anel personalizada 3,9x1,7 cm. Formato discreto para identificar anéis sem comprometer a peça.",
    longDescription: [
      "Pequena, discreta e elegante, a Mini Tag de Anel é o complemento ideal para apresentar anéis com profissionalismo, sem desviar a atenção da peça.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em papel 300g e verniz localizado sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso colocar tamanho ou material no verso?", a: "Sim, o verso pode conter informações como tamanho do anel, código e material — definidos na criação da arte." }]),
  },
  {
    slug: "tag-de-anel-personalizada-7x3-cm",
    productIds: ["tag-anel"],
    displayName: "Tag de Anel Personalizada 7x3 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Anel Personalizada 7x3 cm | GS Cartões",
    seoDescription: "Tag de anel personalizada 7x3 cm para semijoias. Formato alongado, ideal para destacar a sua marca junto à peça.",
    longDescription: [
      "Formato alongado e refinado, a Tag de Anel 7x3 cm oferece equilíbrio entre área para a logo e discrição na exposição do produto.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes, papel 300g e verniz localizado opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar essa tag para anéis ajustáveis?", a: "Sim, ela funciona bem com anéis fixos e ajustáveis. O encaixe é definido conforme o tipo de peça." }]),
  },
  {
    slug: "tag-de-acessorios-personalizada-8-8x4-8-cm",
    productIds: ["tag-acessorios"],
    displayName: "Tag de Acessórios Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Personalizada 8,8x4,8 cm | GS Cartões",
    seoDescription: "Tag de acessórios 8,8x4,8 cm com opção frente e verso ou só frente. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "Versátil e equilibrada, a Tag de Acessórios 8,8x4,8 cm serve tanto para brincos quanto para colares e pulseiras delicadas, sendo uma das opções mais procuradas para uso geral.",
      "Couchê 250g, com escolha entre frente e verso coloridos ou apenas frente, com brilho total na frente. Furos e cortes especiais opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Qual a diferença entre frente e verso x só frente?", a: "Frente e verso permite usar o verso para informações da marca, redes sociais e cuidados. A opção \"só frente\" reduz o custo quando o verso não é necessário." }]),
  },
  {
    slug: "tag-de-acessorios-personalizada-8-8x9-94-cm",
    productIds: ["tag-acessorios-grande"],
    displayName: "Tag de Acessórios Personalizada Grande 8,8x9,94 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Personalizada 8,8x9,94 cm | GS Cartões",
    seoDescription: "Tag grande para acessórios 8,8x9,94 cm. Ótima área para destacar marca, conceito e instruções de cuidado.",
    longDescription: [
      "Formato grande para marcas que querem dar protagonismo à logo, contar uma breve história ou incluir manual de cuidados no mesmo cartão.",
      "Papel couchê 250g, com escolha entre frente e verso ou só frente, brilho total na frente. Furos e cortes especiais sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "Esse formato cabe em sacolinhas P?", a: "Em sacolinhas P pode ficar apertado. Para esse tamanho, recomendamos sacolinhas M ou caixinhas maiores." }]),
  },
  {
    slug: "tag-de-acessorios-personalizada-redonda-8-4x9-8-cm",
    productIds: ["tag-acessorios-redonda"],
    displayName: "Tag de Acessórios Personalizada Redonda 8,4x9,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Redonda 8,4x9,8 cm | GS Cartões",
    seoDescription: "Tag de acessórios em formato arredondado 8,4x9,8 cm. Visual diferenciado para marcas que buscam um toque exclusivo.",
    longDescription: [
      "Para marcas que querem fugir do retangular, o formato arredondado 8,4x9,8 cm traz um visual moderno e exclusivo, ótimo para reforçar uma identidade mais delicada.",
      "Papel couchê 250g, com frente e verso ou só frente, brilho total na frente. Corte especial arredondado já incluso.",
    ],
    faqs: wrapFaqs([{ q: "O corte arredondado é cobrado à parte?", a: "Não. Para esse modelo, o corte arredondado já está incluso no preço." }]),
  },
  {
    slug: "tag-de-acessorios-personalizada-13x4-8-cm",
    productIds: ["tag-acessorios-dupla"],
    displayName: "Tag de Acessórios Personalizada 13x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Personalizada 13x4,8 cm | GS Cartões",
    seoDescription: "Tag horizontal alongada 13x4,8 cm para acessórios. Ideal para colares e peças com mais comprimento.",
    longDescription: [
      "Tag alongada e horizontal, perfeita para colares, gargantilhas e peças que pedem mais comprimento na apresentação.",
      "Couchê 250g, com frente e verso ou só frente, brilho total na frente. Furos e cortes especiais sob orçamento.",
    ],
    faqs: wrapFaqs([{ q: "Posso dobrar essa tag ao meio?", a: "Sim. Esse formato funciona bem como tag dobrada, dependendo da arte e da posição do furo." }]),
  },
  {
    slug: "tag-de-acessorios-padronizada-pequena",
    productIds: ["tag-acessorios-padronizada-p"],
    displayName: "Tag de Acessórios Padronizada Pequena",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Padronizada Pequena | GS Cartões",
    seoDescription: "Tag de acessórios padronizada com formatos 4,25x4,8 / 4x4 / 4x3 cm. Custo reduzido e ótima qualidade.",
    longDescription: [
      "Linha econômica para marcas que querem manter qualidade e identidade visual com um investimento menor. Você escolhe entre os formatos padronizados disponíveis.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Não permite alteração de cortes e furos.",
    ],
    faqs: wrapFaqs([{ q: "Posso pedir um formato fora dos padrões dessa linha?", a: "Não. Essa linha trabalha apenas com os formatos 4,25x4,8 / 4x4 / 4x3 cm para manter o preço reduzido. Para formatos exclusivos, use as tags sob medida." }]),
  },
  {
    slug: "tag-de-acessorios-padronizada-media",
    productIds: ["tag-acessorios-padronizada-m"],
    displayName: "Tag de Acessórios Padronizada Média",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Acessórios Padronizada Média | GS Cartões",
    seoDescription: "Tag de acessórios padronizada nos formatos 8,7x4,8 / 8,8x4,8 / 7x4,8 cm. Custo reduzido com excelente acabamento.",
    longDescription: [
      "Tags padronizadas no tamanho mais usado pelas marcas de semijoias, com preço otimizado para quem quer escalar a produção sem perder qualidade.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Não permite alteração de cortes e furos.",
    ],
    faqs: wrapFaqs([{ q: "Posso receber a tag com furo?", a: "Esse modelo não permite alteração de cortes e furos. Para furos personalizados, consulte as linhas sob medida." }]),
  },
  {
    slug: "tag-de-anel-personalizada-3-3x2-6-cm",
    productIds: ["tag-anel-3-3x2-6"],
    displayName: "Tag de Anel Personalizada 3,3x2,6 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Anel Personalizada 3,3x2,6 cm | GS Cartões",
    seoDescription: "Tag de anel personalizada 3,3x2,6 cm. Formato compacto com cantos arredondados, arte 100% personalizada em couchê 250g.",
    longDescription: [
      "Tag de anel compacta no formato 3,3x2,6 cm, com cantos arredondados e furo para apresentação delicada dos seus anéis.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em papel 300g e verniz localizado sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso colocar tamanho ou material no verso?", a: "Sim, o verso pode conter informações como tamanho do anel, código e material — definidos na criação da arte." }]),
  },
  {
    slug: "tag-de-anel-personalizada-4x4-cm",
    productIds: ["tag-anel-padronizada-pequena"],
    displayName: "Tag de Anel Personalizada 4x4 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Anel Personalizada 4x4 cm | GS Cartões",
    seoDescription: "Tag de anel personalizada 4x4 cm. Formato quadrado com ótima área para logo e identidade da sua marca em couchê 250g.",
    longDescription: [
      "Tag quadrada 4x4 cm para anéis, com área generosa para a sua logo e elementos de marca, mantendo a leveza na exposição da peça.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em papel 300g e verniz localizado sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso pedir esse formato sem furo?", a: "Sim. Furo e cortes especiais são opcionais e podem ser definidos na criação da arte." }]),
  },
  {
    slug: "tag-de-anel-padronizada-6-5x2-3-cm",
    productIds: ["tag-anel-padronizada-media"],
    displayName: "Tag de Anel Padronizada 6,5x2,3 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Anel Padronizada 6,5x2,3 cm | GS Cartões",
    seoDescription: "Tag de anel padronizada 6,5x2,3 cm com formato alongado e ótimo destaque para a marca.",
    longDescription: [
      "Formato alongado padronizado para anéis, com mais área para a sua logo e informações da marca, mantendo a discrição na exposição.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Não permite alteração de cortes e furos.",
    ],
    faqs: wrapFaqs([{ q: "Esse modelo cabe em embalagens pequenas?", a: "Sim. Por ser alongado e fino, encaixa bem em sacolinhas pequenas e caixinhas." }]),
  },

  // ─────────── SACOLINHAS ───────────
  {
    slug: "sacolinha-personalizada-para-semijoias-16-5x12x4-5-cm",
    productIds: ["sacolinha-acessorios-couche"],
    displayName: "Sacolinha Personalizada para Semijoias 16,5x12x4,5 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacolinha Personalizada para Semijoias 16,5x12x4,5 cm",
    seoDescription: "Sacolinha personalizada para semijoias em couchê 250g, formato 16,5x12x4,5 cm. Identidade visual da sua marca em cada entrega.",
    longDescription: [
      "Embalagem pensada para transformar a entrega das suas semijoias em uma experiência memorável, com a identidade visual da sua marca impressa do lado externo.",
      "Papel couchê 250g, externo colorido. Não acompanha laço. Disponível em arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "A sacolinha já vem com alça e laço?", a: "Não acompanha laço." }]),
    youtubeVideoId: "c7cT417IiaE",
  },
  {
    slug: "sacolinha-personalizada-para-semijoias",
    productIds: ["sacolinha-acessorios-cartao"],
    displayName: "Sacolinha Personalizada para Semijoias",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacolinha Personalizada para Semijoias | GS Cartões",
    seoDescription: "Sacolinha personalizada em papel cartão 300g para semijoias. Tamanhos P e M com a identidade visual da sua marca.",
    longDescription: [
      "Versão mais encorpada das nossas sacolinhas, perfeita para marcas que buscam uma embalagem com mais estrutura e percepção de valor.",
      "Papel cartão 300g, externo colorido, sem enobrecimento. Disponível nos tamanhos P (6x15,4x10 cm) e M (7,2x18,5x13 cm).",
    ],
    faqs: wrapFaqs([{ q: "Qual tamanho devo escolher?", a: "O P serve bem para peças pequenas e únicas. O M comporta conjuntos e múltiplas peças com folga." }]),
    // Gallery: [0]=mockup, [1]=medida P, [2]=medida M
    variantImageMap: [1, 2],
    youtubeVideoId: "quNu3NURs6o",
  },
  {
    slug: "sacola-personalizada-para-acessorios-21x15x7-cm",
    productIds: ["sacola-acessorios-21x15x7"],
    displayName: "Sacola Personalizada para Acessórios 21x15x7 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacola Personalizada para Acessórios 21x15x7 cm | GS Cartões",
    seoDescription: "Sacola personalizada para acessórios em papel sulfite 150g, 21x15x7 cm, com ilhós e cordão. Acabamento sofisticado para a sua marca de semijoias.",
    longDescription: [
      "Sacola maior e elegante, ideal para entregas com mais de uma peça ou para presentear. Acabamento com ilhós e cordão e impressão colorida na parte externa.",
      "Papel sulfite 150g sem verniz. Não trabalhamos com fidelização de cores — variações leves de tonalidade entre lotes são normais.",
    ],
    faqs: wrapFaqs([{ q: "A sacola acompanha ilhós e cordão?", a: "Sim, acompanha ilhós e cordão para alça." }]),
  },
  {
    slug: "sacola-personalizada-para-acessorios-12x12x6-cm",
    productIds: ["sacola-acessorios-12x12x6"],
    displayName: "Sacola Personalizada para Acessórios 12x12x6 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacola Personalizada para Acessórios 12x12x6 cm | GS Cartões",
    seoDescription: "Sacola personalizada para acessórios em papel sulfite 150g, 12x12x6 cm, com ilhós e cordão. Tamanho compacto e elegante para semijoias.",
    longDescription: [
      "Modelo compacto e quadrado, perfeito para acomodar brincos, anéis e peças pequenas com a identidade visual da sua marca em destaque.",
      "Papel sulfite 150g sem verniz, com ilhós e cordão. Não trabalhamos com fidelização de cores — variações leves de tonalidade entre lotes são normais.",
    ],
    faqs: wrapFaqs([{ q: "A sacola acompanha ilhós e cordão?", a: "Sim, acompanha ilhós e cordão para alça." }]),
  },
  {
    slug: "ecobag-personalizada-30x30-cm",
    productIds: ["ecobag-30x30"],
    displayName: "Ecobag Personalizada 30x30 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Ecobag Personalizada 30x30 cm | GS Cartões",
    seoDescription: "Ecobag personalizada 30x30 cm em tecido microfibra, com a logo e identidade visual da sua marca de semijoias. Acabamento elegante e reutilizável.",
    longDescription: [
      "A Ecobag 30x30 cm em tecido microfibra é uma embalagem reutilizável e sofisticada, perfeita para entregar conjuntos completos de semijoias e fidelizar clientes que valorizam apresentação.",
      "Estampa colorida na parte externa com a sua logo e identidade visual. Não trabalhamos com fidelização de cores — variações leves de tonalidade entre lotes são normais.",
    ],
    faqs: wrapFaqs([{ q: "A ecobag pode ser usada como sacola de presente?", a: "Sim. Por ser reutilizável e ter visual elegante, é muito usada como sacola de presente e ação de fidelização." }]),
  },
  {

    slug: "sacola-plastica-personalizada-alca-vazada",
    productIds: ["sacola-plastica"],
    displayName: "Sacola Plástica Personalizada Alça Vazada",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacolas Plásticas Personalizadas Alça Vazada | GS Cartões",
    seoDescription: "Sacolas plásticas personalizadas com alça vazada em polietileno PEAD 0,13mm. Vários tamanhos para sua marca.",
    longDescription: [
      "Opção prática, resistente e econômica para entregas em quantidade, mantendo o cuidado visual com a logo da sua marca impressa na frente.",
      "Polietileno PEAD 0,13mm, externo colorido, sem enobrecimento. Disponível em 16x22, 20x30, 25x35 e 30x40 cm. Impressão apenas na frente.",
    ],
    faqs: wrapFaqs([
      { q: "Quantas cores a sacolinha oferece e a logo pode ser colorida?", a: "A sacolinha está disponível em 8 cores. A impressão da sua logo é feita em apenas uma cor." },
      { q: "Posso personalizar frente e verso?", a: "Esse modelo tem apenas impressão na frente." },
    ]),
  },
  {
    slug: "caixinha-personalizada-para-acessorios-6-3x6-3x3-cm",
    productIds: ["caixinha-acessorios-p"],
    displayName: "Caixinha Personalizada para Acessórios 6,3x6,3x3 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Caixinha Personalizada para Acessórios 6,3x6,3x3 cm",
    seoDescription: "Caixinha personalizada para acessórios 6,3x6,3x3 cm em papel cartão 300g com laminação fosca externa.",
    longDescription: [
      "Caixinha quadrada e refinada para apresentar pares de brincos, anéis e peças pequenas com sofisticação no momento da entrega.",
      "Papel cartão 300g, externo colorido com laminação fosca. Não acompanha berço interno.",
    ],
    faqs: wrapFaqs([{ q: "A caixinha vem com berço para a peça?", a: "Não acompanha berço interno. Caso queira, você pode adicionar uma espuma ou cartão internamente após receber." }]),
  },
  {
    slug: "caixinha-personalizada-para-acessorios-8-3x8-3x5-cm",
    productIds: ["caixinha-acessorios-m"],
    displayName: "Caixinha Personalizada para Acessórios 8,3x8,3x5 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Caixinha Personalizada para Acessórios 8,3x8,3x5 cm",
    seoDescription: "Caixinha personalizada 8,3x8,3x5 cm para semijoias e conjuntos. Papel cartão 300g com laminação fosca.",
    longDescription: [
      "Versão maior da nossa caixinha quadrada, ideal para conjuntos completos ou peças com volume um pouco maior, mantendo a percepção premium na entrega.",
      "Papel cartão 300g, externo colorido com laminação fosca. Não acompanha berço interno.",
    ],
    faqs: wrapFaqs([{ q: "Cabem conjuntos de brincos e colar?", a: "Sim. Esse tamanho acomoda conjuntos compactos com folga, especialmente para colares delicados." }]),
  },
  {
    slug: "caixinha-personalizada-para-semijoias-4-4x7-3x5-6-cm",
    productIds: ["caixinha-acessorios-maleta"],
    displayName: "Caixinha Personalizada para Semijoias 4,4 x 7,3 x 5,6 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Caixinha Personalizada para Semijoias 4,4 x 7,3 x 5,6 cm",
    seoDescription: "Caixinha personalizada para semijoias 4,4 x 7,3 x 5,6 cm. Ideal para brincos, anéis, colares e pulseiras, valorizando a apresentação da sua marca.",
    longDescription: [
      "Caixinha personalizada para semijoias no formato 4,4 x 7,3 x 5,6 cm, ideal para brincos, anéis, colares delicados e pulseiras. O tamanho compacto valoriza a apresentação da peça e reforça a percepção premium da sua marca.",
      "Papel couchê 250g, externo colorido. Sem brilho de 100 a 200 unidades; com brilho de 500 a 5000 unidades.",
    ],
    faqs: wrapFaqs([{ q: "Por que o acabamento muda conforme a quantidade?", a: "Acima de 500 unidades conseguimos aplicar brilho com custo viável. Em quantidades menores, o acabamento é sem brilho para manter o preço acessível." }]),
    youtubeVideoId: "LGti6M0NkK8",
  },

  // ─────────── CARTÕES ───────────
  {
    slug: "certificado-de-garantia-personalizado-8-8x4-8-cm",
    productIds: ["certificado-garantia"],
    displayName: "Certificado de Garantia Personalizado 8,8x4,8 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Certificado de Garantia Personalizado 8,8x4,8 cm",
    seoDescription: "Certificado de garantia personalizado 8,8x4,8 cm para semijoias. Transmita confiança e profissionalismo em cada venda.",
    longDescription: [
      "Mais do que um cartão, um certificado de garantia transmite confiança e reforça a credibilidade da sua marca em cada venda.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em 300g e verniz localizado sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso adicionar QR Code do meu WhatsApp?", a: "Sim. QR Codes, redes sociais e dados de contato podem entrar na arte conforme sua necessidade." }]),
  },
  {
    slug: "mini-certificado-de-garantia-personalizado-4-8x4-25-cm",
    productIds: ["certificado-garantia-mini"],
    displayName: "Mini Certificado de Garantia Personalizado 4,8x4,25 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Mini Certificado de Garantia 4,8x4,25 cm | GS Cartões",
    seoDescription: "Mini certificado de garantia 4,8x4,25 cm para semijoias. Formato compacto, ideal para embalagens menores.",
    longDescription: [
      "Versão compacta do certificado de garantia, perfeita para sacolinhas pequenas e embalagens onde o espaço é limitado.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos extras sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Esse formato cabe em sacolinhas P?", a: "Sim, foi pensado justamente para encaixar bem em sacolinhas pequenas e caixinhas." }]),
  },
  {
    slug: "certificado-de-garantia-personalizado-dobrado",
    productIds: ["certificado-garantia-dobrado"],
    displayName: "Certificado de Garantia Personalizado Dobrado",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Certificado de Garantia Dobrado Personalizado | GS Cartões",
    seoDescription: "Certificado de garantia dobrado personalizado. Fechado 8,8x4,8 cm e aberto 8,8x9,6 cm. Mais espaço para informações da sua marca.",
    longDescription: [
      "Com formato dobrado, esse certificado oferece o dobro de área para informações, termos de garantia, cuidados e mensagens especiais da sua marca.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Fechado: 8,8x4,8 cm. Aberto: 8,8x9,6 cm.",
    ],
    faqs: wrapFaqs([{ q: "A dobra já vem pronta?", a: "Sim. Os certificados são entregues com a dobra de fábrica, prontos para uso." }]),
  },
  {
    slug: "cartao-de-agradecimento-personalizado-8-8x9-94-cm",
    productIds: ["cartao-agradecimento-g"],
    displayName: "Cartão de Agradecimento Personalizado 8,8x9,94 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Cartão de Agradecimento Personalizado 8,8x9,94 cm",
    seoDescription: "Cartão de agradecimento 8,8x9,94 cm para semijoias. Toque pessoal que fideliza a cliente em cada entrega.",
    longDescription: [
      "Um simples cartão de agradecimento muda completamente a percepção da entrega. É o tipo de detalhe que fideliza a cliente e gera recomendação.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em 300g e furo de pendurar opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar mensagens diferentes para cada lote?", a: "Sim. A cada novo pedido podemos ajustar mensagens, datas e detalhes da arte." }]),
  },
  {
    slug: "mini-cartao-de-agradecimento-personalizado-4-8x4-25-cm",
    productIds: ["cartao-agradecimento-p"],
    displayName: "Mini Cartão de Agradecimento Personalizado 4,8x4,25 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Mini Cartão de Agradecimento 4,8x4,25 cm | GS Cartões",
    seoDescription: "Mini cartão de agradecimento 4,8x4,25 cm. Toque charmoso e elegante para acompanhar suas peças.",
    longDescription: [
      "Versão pequena e elegante do cartão de agradecimento, perfeito quando o espaço da embalagem é limitado, mas o carinho com a cliente é prioridade.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos opcionais sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Cabe em sacolinhas pequenas?", a: "Sim, é o tamanho ideal para sacolinhas P e caixinhas." }]),
  },
  {
    slug: "cartao-de-visitas-personalizado-8-8x4-8-cm",
    productIds: ["cartao-visitas"],
    displayName: "Cartão de Visitas Personalizado 8,8x4,8 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Cartão de Visitas Personalizado 8,8x4,8 cm | GS Cartões",
    seoDescription: "Cartão de visitas personalizado 8,8x4,8 cm para semijoias. Apresentação profissional para a sua marca.",
    longDescription: [
      "Indispensável para qualquer marca, o cartão de visitas mantém você presente na rotina da cliente e facilita indicações boca a boca.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamento em 300g opcional.",
    ],
    faqs: wrapFaqs([{ q: "Posso pedir versões diferentes para sócios?", a: "Sim. Podemos imprimir várias versões com dados diferentes dentro do mesmo pedido." }]),
  },
  {
    slug: "cartao-de-visitas-personalizado-verniz-localizado-8-8x5-1-cm",
    productIds: ["cartao-visitas-verniz"],
    displayName: "Cartão de Visitas Personalizado com Verniz Localizado 8,8x5,1 cm",
    categorySlug: "cartoes-personalizados-para-semijoias",
    categoryLabel: "Cartões",
    seoTitle: "Cartão de Visitas com Verniz Localizado 8,8x5,1 cm",
    seoDescription: "Cartão de visitas premium com verniz localizado 8,8x5,1 cm. Acabamento fosco com detalhes brilhantes para uma marca de alto padrão.",
    longDescription: [
      "Linha premium com acabamento fosco e detalhes em verniz localizado para destacar logo ou elementos da arte. O resultado é refinado, com toque sofisticado.",
      "Papel couchê 250g, fosco com verniz localizado. Frente e verso coloridos. Acabamento em 300g opcional.",
    ],
    faqs: wrapFaqs([{ q: "O verniz localizado pode destacar qualquer elemento?", a: "Sim. Definimos em conjunto na criação da arte quais elementos vão receber o verniz brilhante." }]),
  },

  // ─────────── ADESIVOS ───────────
  {
    slug: "adesivo-personalizado-para-anel-7x1-7-cm",
    productIds: ["adesivo-anel"],
    displayName: "Adesivo Personalizado para Anel 7x1,7 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Personalizado para Anel 7x1,7 cm | GS Cartões",
    seoDescription: "Adesivo personalizado para anel 7x1,7 cm com alça de 2,35 cm. Identificação prática e elegante para sua marca.",
    longDescription: [
      "Forma prática e elegante de identificar anéis com a logo da sua marca, sem precisar usar uma tag tradicional.",
      "Papel couchê 90g, frente colorida, sem brilho. Tamanho 7x1,7 cm com alça de 2,35 cm.",
    ],
    faqs: wrapFaqs([{ q: "O adesivo cola bem no anel?", a: "Sim, o adesivo é desenvolvido para fixar com firmeza, mas também permite remoção sem danificar a peça." }]),
  },
  {
    slug: "adesivo-redondo-personalizado-3x3-cm",
    productIds: ["adesivo-redondo-3"],
    displayName: "Adesivo Redondo Personalizado 3x3 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Redondo Personalizado 3x3 cm | GS Cartões",
    seoDescription: "Adesivo redondo personalizado 3x3 cm para fechar embalagens, decorar cartões e reforçar a marca em sacolas e caixinhas.",
    longDescription: [
      "Compacto e versátil, o adesivo redondo 3x3 cm é perfeito para selar embalagens menores, etiquetar acessórios e reforçar a marca em vários pontos da entrega.",
      "Papel couchê 80g, frente colorida e sem brilho.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar para fechar sacolinhas?", a: "Sim. É um dos usos mais comuns: aplicar como selo no fechamento da embalagem." }]),
    youtubeVideoId: "Ektei2vCGss",
  },
  {
    slug: "adesivo-redondo-personalizado-4-8x4-8-cm",
    productIds: ["adesivo-redondo-4-8"],
    displayName: "Adesivo Redondo Personalizado 4,8x4,8 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Redondo Personalizado 4,8x4,8 cm | GS Cartões",
    seoDescription: "Adesivo redondo personalizado 4,8x4,8 cm com sua marca em destaque. Ideal para fechar sacolas e caixinhas de semijoias.",
    longDescription: [
      "Maior e com mais espaço para a logo, o adesivo redondo 4,8x4,8 cm dá destaque total à identidade da marca no fechamento da embalagem.",
      "Papel couchê 80g, frente colorida e sem brilho.",
    ],
    faqs: wrapFaqs([{ q: "Posso usar para fechar sacolinhas?", a: "Sim. É um dos usos mais comuns: aplicar como selo no fechamento da embalagem." }]),
    youtubeVideoId: "Ektei2vCGss",
  },
  {
    slug: "adesivo-fecha-sacola-personalizado-couche-10x4-cm",
    productIds: ["adesivo-fecha-sacola-couche"],
    displayName: "Adesivo Fecha Sacola Personalizado Couchê 10x4 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Fecha Sacola Personalizado Couchê 10x4 cm",
    seoDescription: "Adesivo fecha sacola personalizado em papel couchê, 10x4 cm. Acabamento prático e elegante para suas entregas.",
    longDescription: [
      "Funcional e elegante, esse adesivo lacra a sacolinha e reforça a presença da marca no exato momento do fechamento da entrega.",
      "Papel couchê 80g, frente colorida e sem brilho. Tamanho aberto: 10x4 cm.",
    ],
    faqs: wrapFaqs([{ q: "Qual a diferença para a versão em sulfite?", a: "O couchê tem acabamento mais nobre. A versão sulfite é mais simples e levemente maior (10x5 cm)." }]),
  },
  {
    slug: "adesivo-fecha-sacola-personalizado-sulfite-10x5-cm",
    productIds: ["adesivo-fecha-sacola-sulfite"],
    displayName: "Adesivo Fecha Sacola Personalizado Sulfite 10x5 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Fecha Sacola Sulfite 10x5 cm | GS Cartões",
    seoDescription: "Adesivo fecha sacola em papel sulfite 80g, 10x5 cm. Solução prática e econômica para fechar embalagens com a sua marca.",
    longDescription: [
      "Opção mais econômica para fechar embalagens com a identidade da sua marca, sem abrir mão da personalização.",
      "Papel sulfite 80g, frente colorida e sem brilho. Tamanho aberto: 10x5 cm.",
    ],
    faqs: wrapFaqs([{ q: "Esse adesivo cola bem em sacolinhas plásticas?", a: "Sim, funciona bem em sacolinhas de papel e plásticas. Para superfícies muito lisas, recomendamos pressionar com firmeza." }]),
  },

  // ─────────── ETIQUETAS DE ROUPAS ───────────
  {
    slug: "etiqueta-personalizada-para-roupas-8-8x4-8-cm",
    productIds: ["etiqueta-roupas"],
    displayName: "Etiqueta Personalizada para Roupas 8,8x4,8 cm",
    categorySlug: "etiquetas-personalizadas-para-roupas",
    categoryLabel: "Etiquetas para Roupas",
    seoTitle: "Etiqueta Personalizada para Roupas 8,8x4,8 cm | GS Cartões",
    seoDescription: "Etiqueta personalizada para roupas 8,8x4,8 cm. Tag em papel para identificar peças com a identidade da sua marca.",
    longDescription: [
      "Para marcas de moda que querem apresentar suas peças com profissionalismo, a etiqueta personalizada é o detalhe que transforma um produto em \"marca\".",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos em 300g e verniz localizado opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Posso pendurar essa etiqueta direto na peça?", a: "Sim. Furos para barbante ou fio são opcionais e podem ser solicitados no pedido." }]),
  },
  {
    slug: "mini-etiqueta-personalizada-para-roupas-4-8x4-25-cm",
    productIds: ["mini-etiqueta-roupas"],
    displayName: "Mini Etiqueta Personalizada para Roupas 4,8x4,25 cm",
    categorySlug: "etiquetas-personalizadas-para-roupas",
    categoryLabel: "Etiquetas para Roupas",
    seoTitle: "Mini Etiqueta para Roupas 4,8x4,25 cm | GS Cartões",
    seoDescription: "Mini etiqueta para roupas 4,8x4,25 cm. Tag compacta e elegante para peças mais delicadas.",
    longDescription: [
      "Versão compacta da etiqueta de roupas, ideal para acessórios de moda, peças infantis e marcas que preferem um visual minimalista.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Acabamentos opcionais sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Funciona bem em peças infantis?", a: "Sim. Por ser compacta, é uma das opções preferidas de marcas de roupa infantil." }]),
  },
  {
    slug: "etiqueta-personalizada-para-roupas-formato-especial",
    productIds: ["etiqueta-roupas-especial"],
    displayName: "Etiqueta Personalizada para Roupas Formato Especial",
    categorySlug: "etiquetas-personalizadas-para-roupas",
    categoryLabel: "Etiquetas para Roupas",
    seoTitle: "Etiqueta para Roupas Formato Especial | GS Cartões",
    seoDescription: "Etiqueta para roupas em formato especial, até 8,8x4,8 cm. Liberdade total de criação para sua marca.",
    longDescription: [
      "Para marcas de moda que querem fugir do padrão, essa opção permite criar etiquetas em formatos exclusivos dentro do limite de 8,8x4,8 cm.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Corte especial incluso.",
    ],
    faqs: wrapFaqs([{ q: "Posso enviar um formato inspirado em alguma referência?", a: "Sim. Você envia a referência pelo WhatsApp e validamos a viabilidade dentro do limite de tamanho." }]),
  },

  // ─────────── TAGS LAÇOS E TIARAS ───────────
  {
    slug: "tag-personalizada-para-lacos-e-tiaras-9x6-5-cm",
    productIds: ["tag-lacos-tiaras-p1"],
    displayName: "Tag Personalizada para Laços e Tiaras 9x6,5 cm",
    categorySlug: "tags-personalizadas-para-lacos-e-tiaras",
    categoryLabel: "Tags de Laços e Tiaras",
    seoTitle: "Tag para Laços e Tiaras 9x6,5 cm | GS Cartões",
    seoDescription: "Tag personalizada para laços e tiaras 9x6,5 cm. Apresentação encantadora para sua marca de acessórios de cabelo.",
    longDescription: [
      "Pensada para marcas de acessórios de cabelo, essa tag valoriza laços e tiaras com uma apresentação que encanta e fideliza.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos, cortes e acabamentos sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Posso adaptar para laços maiores?", a: "Sim. Esse tamanho é versátil e atende a maior parte dos modelos. Para laços muito grandes, consulte os formatos 12,5x8,8 ou 15x8,8 cm." }]),
  },
  {
    slug: "tag-personalizada-para-lacos-e-tiaras-7-5x9-5-cm",
    productIds: ["tag-lacos-tiaras-p2"],
    displayName: "Tag Personalizada para Laços e Tiaras 7,5x9,5 cm",
    categorySlug: "tags-personalizadas-para-lacos-e-tiaras",
    categoryLabel: "Tags de Laços e Tiaras",
    seoTitle: "Tag para Laços e Tiaras 7,5x9,5 cm | GS Cartões",
    seoDescription: "Tag para laços e tiaras 7,5x9,5 cm em formato vertical. Visual delicado para marcas infantis e de moda.",
    longDescription: [
      "Formato vertical mais alongado, ideal para laços que pedem uma apresentação delicada e que prioriza a altura no display.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Esse formato cabe em embalagens de papelaria infantil?", a: "Sim, encaixa bem em embalagens padrão e caixinhas usadas no mercado infantil." }]),
  },
  {
    slug: "tag-personalizada-para-lacos-e-tiaras-15x4-82-cm",
    productIds: ["tag-lacos-tiaras-m"],
    displayName: "Tag Personalizada para Laços e Tiaras 15x4,82 cm",
    categorySlug: "tags-personalizadas-para-lacos-e-tiaras",
    categoryLabel: "Tags de Laços e Tiaras",
    seoTitle: "Tag para Laços e Tiaras 15x4,82 cm | GS Cartões",
    seoDescription: "Tag horizontal alongada 15x4,82 cm para laços e tiaras. Excelente para apresentar tiaras com sua marca em destaque.",
    longDescription: [
      "Modelo horizontal alongado, ótimo para acomodar tiaras de forma reta e elegante, com excelente destaque para a logo da sua marca.",
      "Papel couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes sob consulta.",
    ],
    faqs: wrapFaqs([{ q: "Funciona como apoio para tiara ficar reta?", a: "Sim, o formato horizontal ajuda a manter a tiara reta no display, melhorando a apresentação." }]),
  },
  {
    slug: "tag-personalizada-para-lacos-e-tiaras-15x8-8-cm",
    productIds: ["tag-lacos-tiaras-g1"],
    displayName: "Tag Personalizada para Laços e Tiaras 15x8,8 cm",
    categorySlug: "tags-personalizadas-para-lacos-e-tiaras",
    categoryLabel: "Tags de Laços e Tiaras",
    seoTitle: "Tag para Laços e Tiaras 15x8,8 cm | GS Cartões",
    seoDescription: "Tag grande 15x8,8 cm para laços e tiaras volumosos. Mais espaço para arte e melhor sustentação da peça.",
    longDescription: [
      "Para laços maiores e tiaras volumosas, esse formato oferece sustentação visual e área generosa para a logo, mensagem e cuidados.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Funciona como suporte para laços grandes?", a: "Sim. Pela área maior, ele sustenta bem laços volumosos e em camadas." }]),
  },
  {
    slug: "tag-personalizada-para-lacos-e-tiaras-12-5x8-8-cm",
    productIds: ["tag-lacos-tiaras-g2"],
    displayName: "Tag Personalizada para Laços e Tiaras 12,5x8,8 cm",
    categorySlug: "tags-personalizadas-para-lacos-e-tiaras",
    categoryLabel: "Tags de Laços e Tiaras",
    seoTitle: "Tag para Laços e Tiaras 12,5x8,8 cm | GS Cartões",
    seoDescription: "Tag 12,5x8,8 cm para laços e tiaras. Formato equilibrado entre destaque e tamanho da peça.",
    longDescription: [
      "Formato equilibrado entre os modelos grande e médio, ideal para marcas que querem destaque visual sem exagerar no tamanho da tag.",
      "Couchê 250g, frente e verso coloridos e brilho total na frente. Furos e cortes opcionais.",
    ],
    faqs: wrapFaqs([{ q: "Qual a diferença para o modelo 15x8,8 cm?", a: "É um pouco menor em largura, o que dá um visual mais proporcional para laços médios." }]),
  },

  // ─────────── KITS ───────────
  {
    slug: "kit-basico-de-tags-1",
    productIds: ["kit-600-tags"],
    displayName: "Kit Básico de Tags 1",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Básico de Tags 1 - Formatos Padronizados | GS Cartões",
    seoDescription: "Kit Básico de Tags 1 com 600 tags personalizadas em formatos padronizados. Solução prática e econômica para marcas iniciantes de semijoias.",
    longDescription: [
      "Kit ideal para marcas iniciantes que querem ter os principais formatos de tag em uma única compra, com economia em relação a pedir cada modelo separadamente.",
      "Inclui mix de formatos padronizados em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada. Não permite alteração de cortes e furos.",
    ],
    faqs: wrapFaqs([{ q: "Posso escolher outros formatos no kit?", a: "Não. Os kits trabalham com formatos fixos para manter o preço otimizado. Para combinações personalizadas, peça orçamento individual." }]),
  },
  {
    slug: "kit-completo-de-tags-1",
    productIds: ["kit-800-materiais-g"],
    displayName: "Kit Completo de Tags 1",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Completo de Tags 1 - Tags e Certificados Personalizados",
    seoDescription: "Kit Completo de Tags 1 com 800 materiais gráficos personalizados: tags e certificados de garantia. Combo completo para marcas de semijoias.",
    longDescription: [
      "Kit completo que combina tags e certificados de garantia, perfeito para marcas que querem padronizar toda a comunicação visual em uma compra única.",
      "Mix de formatos padronizados em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Quais formatos vêm nesse kit?", a: "O kit inclui combinações de tags 4,25x4,8 / 8,8x4,8 / mini tag 3,9x1,7 cm e certificados. Confira a lista detalhada na ficha técnica do produto." }]),
  },
  {
    slug: "kit-basico-de-tags-2",
    productIds: ["kit-5000-tags"],
    displayName: "Kit Básico de Tags 2",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Básico de Tags 2 - Formatos Padronizados | GS Cartões",
    seoDescription: "Kit Básico de Tags 2 com 5 mil tags personalizadas em mix de formatos. Solução para marcas em escala com excelente custo por unidade.",
    longDescription: [
      "Kit voltado para marcas em escala, com excelente custo por unidade e estoque grande para os principais formatos.",
      "Mix de tags em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Esse kit cabe no meu fluxo de produção?", a: "Para marcas que vendem várias unidades por semana, sim. Para volumes menores, recomendamos começar pelo Kit Básico de Tags 1 ou pelo Kit Completo 1." }]),
  },
  {
    slug: "kit-completo-de-tags-2",
    productIds: ["kit-6000-materiais-g"],
    displayName: "Kit Completo de Tags 2",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Compra em Escala: 6.000 Tags e Certificados para Semijoias",
    seoDescription: "Reposição de estoque em alto volume: 6.000 tags e certificados personalizados com o menor custo por unidade para marcas de semijoias que já vendem em escala.",
    longDescription: [
      "Pensado para marcas de semijoias que já giram estoque com frequência, o Kit Completo de Tags 2 concentra 6.000 materiais gráficos em um único pedido, eliminando a rotina de recomprar tags e certificados a cada campanha.",
      "Ao consolidar toda a reposição em uma única produção, você reduz o custo por unidade ao mínimo praticado pela GS Cartões. Ideal para quem: marcas com faturamento recorrente",
    ],
    faqs: wrapFaqs([
      { q: "Esse kit é melhor se você precisa de mais quantidades de materiais, se você já vende muitas semijoias.", a: "Sim. Este kit apresenta um custo por unidade menor do que somar volumes menores, além de eliminar uma segunda aprovação de arte e um segundo prazo de produção. Para marcas que já sabem que consumirão o volume, é a opção mais econômica." },
      { q: "Posso parcelar um pedido desse porte?", a: "Sim. O kit pode ser dividido em até 6x sem juros no cartão, e há 10% de desconto para pagamento à vista via PIX. Condições especiais para pedidos recorrentes podem ser combinadas pelo WhatsApp." },
      { q: "Consigo repetir exatamente esse kit daqui a alguns meses?", a: "Sim. Mantemos sua arte aprovada em arquivo. Nas próximas reposições, basta confirmar que deseja repetir o mesmo layout e o pedido segue direto para produção, sem nova etapa de aprovação." },
    ]),
  },
  {
    slug: "kit-essencial-1-tags-personalizadas-para-semijoias",
    productIds: ["kit-essencial-1"],
    displayName: "Kit Essencial 1 - Tags Personalizadas para Semijoias",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Essencial 1 - Tags Personalizadas para Semijoias",
    seoDescription: "Kit Essencial 1 com 300 tags personalizadas em formatos padronizados. Combo prático e econômico para marcas de semijoias.",
    longDescription: [
      "Kit Essencial 1 reúne 300 tags em três formatos padronizados, ideal para quem quer começar com um mix equilibrado de tags para brincos, brincos e colar e cartelas.",
      "Inclui 100 uni 4,25×4,8 cm + 100 uni 8,8×4,8 cm + 100 uni 8,8×4,8 cm em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Posso escolher outros formatos no kit?", a: "Não. Os kits trabalham com formatos fixos para manter o preço otimizado. Para combinações personalizadas, peça orçamento individual." }]),
  },
  {
    slug: "kit-essencial-2-tags-personalizadas-para-semijoias",
    productIds: ["kit-essencial-2"],
    displayName: "Kit Essencial 2 - Tags Personalizadas para Semijoias",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Essencial 2 - Tags Personalizadas para Semijoias",
    seoDescription: "Kit Essencial 2 com 300 tags personalizadas em formatos padronizados. Mix versátil para marcas de semijoias.",
    longDescription: [
      "Kit Essencial 2 traz 300 tags em três formatos padronizados, combinando tags de brincos, trio de brincos e brincos e colar para diversificar a apresentação das suas peças.",
      "Inclui 100 uni 4,25×4,8 cm + 100 uni 4,25×4,8 cm + 100 uni 8,8×4,8 cm em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Posso escolher outros formatos no kit?", a: "Não. Os kits trabalham com formatos fixos para manter o preço otimizado. Para combinações personalizadas, peça orçamento individual." }]),
  },
  {
    slug: "kit-essencial-3-tags-personalizadas-para-semijoias",
    productIds: ["kit-essencial-3"],
    displayName: "Kit Essencial 3 - Tags Personalizadas para Semijoias",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Essencial 3 - Tags Personalizadas para Semijoias",
    seoDescription: "Kit Essencial 3 com 400 tags personalizadas, incluindo mini tags de anel. Excelente custo-benefício para marcas de semijoias.",
    longDescription: [
      "Kit Essencial 3 oferece 400 tags com mini tags de anel inclusas, perfeito para marcas que vendem anéis junto a outras peças e querem padronizar toda a apresentação.",
      "Inclui 200 uni mini tag 3,9×1,7 cm + 100 uni 4,25×4,8 cm + 100 uni 8,8×4,8 cm em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Posso escolher outros formatos no kit?", a: "Não. Os kits trabalham com formatos fixos para manter o preço otimizado. Para combinações personalizadas, peça orçamento individual." }]),
  },
  {
    slug: "kit-essencial-4-tags-personalizadas-para-semijoias",
    productIds: ["kit-essencial-4"],
    displayName: "Kit Essencial 4 - Tags Personalizadas para Semijoias",
    categorySlug: "kits-de-tags-para-semijoias",
    categoryLabel: "Kits",
    seoTitle: "Kit Essencial 4 - Tags Personalizadas para Semijoias",
    seoDescription: "Kit Essencial 4 com 300 tags personalizadas em formatos padronizados. Mix completo para marcas de semijoias.",
    longDescription: [
      "Kit Essencial 4 reúne 300 tags em três formatos padronizados, ideal para marcas que querem diversidade entre tags de brincos, trio de brincos e brincos e colar.",
      "Inclui 100 uni 4,25×4,8 cm + 100 uni 4,25×4,8 cm + 100 uni 8,8×4,8 cm em couchê 250g, frente e verso coloridos e brilho total na frente. Arte 100% personalizada.",
    ],
    faqs: wrapFaqs([{ q: "Posso escolher outros formatos no kit?", a: "Não. Os kits trabalham com formatos fixos para manter o preço otimizado. Para combinações personalizadas, peça orçamento individual." }]),
  },


  // ─────────── PAPELARIA ───────────
  {
    slug: "bloco-de-pedidos-personalizado-15x10-cm",
    productIds: ["bloco-pedidos"],
    displayName: "Bloco de Pedidos Personalizado 15x10 cm",
    categorySlug: "papelaria-personalizada",
    categoryLabel: "Papelaria",
    seoTitle: "Bloco de Pedidos Personalizado 15x10 cm | GS Cartões",
    seoDescription: "Bloco de pedidos personalizado 15x10 cm com 100 folhas. Disponível em colorido ou preto e branco para sua marca.",
    longDescription: [
      "Organização que faz diferença no dia a dia: anote pedidos com a cara da sua marca e mantenha um histórico físico bem feito.",
      "100 folhas por bloco, 15x10 cm. Versão colorida em sulfite 90g e versão preto e branco em sulfite 75g. Impressão na frente.",
    ],
    faqs: wrapFaqs([{ q: "Posso pedir o bloco com canhoto?", a: "Sim. Modelos com canhoto, numeração e duas vias podem ser cotados pelo WhatsApp." }]),
  },
  {
    slug: "panfleto-personalizado",
    productIds: ["panfleto"],
    displayName: "Panfleto Personalizado",
    categorySlug: "papelaria-personalizada",
    categoryLabel: "Papelaria",
    seoTitle: "Panfleto Personalizado para Semijoias | GS Cartões",
    seoDescription: "Panfletos personalizados em papel couchê para divulgar a sua marca. Frete grátis a partir de 1000 unidades.",
    longDescription: [
      "Ainda eficiente para divulgar lançamentos, promoções e participação em eventos, especialmente para marcas que atuam em mercados regionais.",
      "Até 500 uni: 10x15 cm em couchê 120g, frente colorida sem brilho. A partir de 1000 uni: 10x14 cm em couchê 90g, frente colorida. Frete grátis a partir de 1000 unidades.",
    ],
    faqs: wrapFaqs([{ q: "Por que o tamanho muda conforme a quantidade?", a: "Para volumes maiores, alteramos o formato e gramatura para manter o preço acessível, sem perder qualidade visual." }]),
  },
  {
    slug: "display-pix-personalizado-10x15-cm",
    productIds: ["display-pix-10x15"],
    displayName: "Display PIX Personalizado 10x15 cm",
    categorySlug: "papelaria-personalizada",
    categoryLabel: "Papelaria",
    seoTitle: "Display PIX Personalizado 10x15 cm | GS Cartões",
    seoDescription: "Display PIX personalizado 10x15 cm em acrílico cristal 2mm, com QR code, logo e identidade visual da sua marca. Apresentação profissional no caixa.",
    longDescription: [
      "Display em acrílico cristal 2mm no formato L, com base dobrada de 5 cm para apoio firme em balcões, vitrines e mesas de eventos. Ideal para apresentar o QR code do PIX com a identidade visual da sua marca.",
      "Arte 100% personalizada com sua logo, QR code, cores e detalhes da marca. Não trabalhamos com fidelização de cores — variações leves de tonalidade entre lotes são normais.",
    ],
    faqs: wrapFaqs([{ q: "Vocês geram o QR code do PIX?", a: "Você envia o QR code da sua chave PIX e nós aplicamos na arte, garantindo leitura perfeita pela câmera." }]),
  },
];


export const productPageBySlug = (slug: string) =>
  productPages.find((p) => p.slug === slug);

export const productPageByProductId = (productId: string) =>
  productPages.find((p) => p.productIds.includes(productId));
