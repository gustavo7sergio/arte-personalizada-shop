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
      "A Mini Tag para Brincos 4,8 × 4,25 cm é indicada para brincos pequenos e médios, sendo uma ótima opção para quem busca uma apresentação delicada sem ocupar muito espaço. O modelo possui cortes laterais que acomodam brincos de argola, oferecendo mais versatilidade para diferentes tipos de peças.",
      "Sua arte é totalmente personalizada. Você pode incluir sua logo, redes sociais, QR Code, informações da marca e escolher as cores que combinam com a identidade visual do seu negócio.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Essa tag serve para quais brincos?", a: "A Mini Tag é indicada para brincos pequenos e médios, graças ao cortes de abinhas em volta do furo, também é uma excelente opção para modelos de argolas menores." },
      { q: "Tenho dúvidas se esse tamanho serve para meus brincos.", a: "Sem problemas. Envie uma foto das suas peças pelo WhatsApp e nossa equipe ajudará você a escolher o tamanho mais adequado antes da compra." },
      { q: "Posso colocar minha logo?", a: "Sim. A arte é totalmente personalizada e pode incluir logo, nome da marca, redes sociais, QR Code, informações de contato e outros elementos." },
      { q: "Posso mudar as cores?", a: "Sim. As cores são definidas conforme a identidade visual da sua marca." },
      { q: "Posso alterar a posição dos furos e cortes?", a: "Sim. Nos modelos personalizados podemos alterar a posição dos furos e cortes para atender ao seu tipo de semijoia.\n\nNas tags padrão essa alteração não é possível." },
      { q: "Posso adicionar ou remover furos e cortes?", a: "Sim. Nos modelos personalizados é possível adicionar ou remover furos e cortes conforme sua necessidade.\n\nAlgumas alterações podem gerar custo adicional. Nossa equipe informará os valores antes da produção." },
      { q: "Vocês criam a arte?", a: "Sim. Desenvolvemos a arte da sua tag com base na identidade visual da sua marca." },
      { q: "Qual papel é utilizado?", a: "As tags são produzidas em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de acabamento sob consulta." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag para Brincos Personalizada 4x2,5 cm é uma das menores opções da nossa linha, sendo ideal para brincos pequenos e delicados. Também é muito procurada por marcas que utilizam caixinhas, maletas e outras embalagens compactas para semijoias, onde o espaço interno é mais reduzido.",
      "A arte é totalmente personalizada. Você pode incluir sua logo, nome da marca, redes sociais, QR Code, informações de contato e escolher as cores que representam a identidade visual do seu negócio. Caso precise de outra medida, também produzimos tags personalizadas conforme a sua necessidade.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: wrapFaqs([
      { q: "Essa tag serve para quais brincos?", a: "Este modelo é indicado principalmente para brincos pequenos e delicados. Caso trabalhe com brincos médios, grandes ou argolas maiores, recomendamos um tamanho maior para proporcionar um melhor encaixe e apresentação da peça." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Envie uma foto dos seus brincos pelo WhatsApp e nossa equipe ajudará você a escolher o tamanho mais adequado para as suas peças." },
      { q: "Posso colocar minha logo?", a: "Sim. A arte é totalmente personalizada e pode incluir sua logo, nome da marca, redes sociais, QR Code, telefone e outras informações." },
      { q: "Posso escolher as cores?", a: "Sim. A personalização é feita de acordo com a identidade visual da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Nos modelos personalizados podemos produzir em outras medidas conforme a sua necessidade.\n\nO menor tamanho que conseguimos fabricar é 2,5 cm. Para medidas maiores, não há limite máximo.\n\nAs tags padrão não permitem alteração de tamanho." },
      { q: "Posso alterar a posição dos furos?", a: "Sim. Nos modelos personalizados podemos alterar a posição dos furos para que a tag fique mais adequada ao seu tipo de brinco.\n\nNas tags padrão essa alteração não é possível." },
      { q: "Posso adicionar ou remover furos e cortes?", a: "Sim. Nos modelos personalizados é possível adicionar ou remover furos e cortes conforme a necessidade da sua marca.\n\nDependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Vocês criam a arte?", a: "Sim. Nossa equipe desenvolve a arte personalizada utilizando sua logo, cores e demais informações da marca." },
      { q: "Qual papel é utilizado?", a: "Produzimos as tags em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papel e acabamento sob consulta." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ]),
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
      "A Tag para Brincos Personalizada 6x6 cm oferece uma área maior para acomodar diferentes modelos de brincos e destacar ainda mais a identidade visual da sua marca. É uma excelente opção para quem procura mais espaço para a apresentação da peça e para incluir informações personalizadas na tag.",
      "A arte é totalmente personalizada. Você pode incluir sua logo, redes sociais, QR Code, informações de contato e escolher as cores que representam a identidade visual do seu negócio. Caso precise de outra medida, também produzimos tags personalizadas conforme a sua necessidade.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: wrapFaqs([
      { q: "Essa tag serve para quais brincos?", a: "Por possuir uma área maior, este modelo pode ser utilizado em diferentes tamanhos de brincos, principalmente quando a marca deseja uma apresentação com mais destaque ou precisa de mais espaço para a identidade visual." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Envie uma foto dos seus brincos pelo WhatsApp e nossa equipe ajudará você a escolher o tamanho mais adequado para as suas peças." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. A arte é totalmente personalizada. Você pode incluir sua logo, escolher as cores da sua marca, adicionar redes sociais, QR Code, telefone e outras informações que desejar." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos tags personalizadas em diferentes medidas para atender à necessidade de cada marca.\n\nO menor tamanho que conseguimos fabricar é 2,5 cm. Se você precisar de uma medida específica, entre em contato com nossa equipe pelo WhatsApp para avaliarmos a melhor opção para o seu projeto." },
      { q: "Posso alterar a posição dos furos?", a: "Sim. Podemos alterar a posição dos furos para que a tag fique mais adequada ao seu tipo de brinco." },
      { q: "Posso adicionar ou remover furos e cortes?", a: "Sim. É possível adicionar ou remover furos e cortes conforme a necessidade da sua marca.\n\nDependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores antes da produção." },
      { q: "Eu já tenho a arte. Posso enviar?", a: "Sim. Caso você já tenha a arte pronta, basta enviá-la para nossa equipe. Se preferir, também podemos desenvolver uma arte personalizada para a sua marca." },
      { q: "Qual papel é utilizado?", a: "Produzimos as tags em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papel e acabamento sob consulta." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ]),
  },
  {
    slug: "tag-de-brincos-personalizada-8-8x4-8-cm",
    productIds: ["tag-brincos-m"],
    displayName: "Tag de Brincos Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos Personalizada 8,8x4,8cm | GS Cartões",
    seoDescription: "Tag de brincos personalizada 8,8x4,8 cm em papel couchê 250g, frente e verso coloridos. Ideal para destacar sua marca de semijoias.",
    longDescription: [
      "A Tag de Brincos Personalizada 8,8x4,8 cm oferece mais espaço para destacar sua marca e adicionar informações importantes sem comprometer a organização da peça.",
      "Além da personalização com sua logo, cores e identidade visual, esse modelo é ideal para quem deseja incluir instruções de conservação, garantia, redes sociais, espaço para preço ou outras informações que agregam valor ao atendimento.",
      "Os furos e os cortes podem ser adaptados conforme a necessidade do seu produto. Também é possível adicionar ou remover furos e cortes personalizados mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: wrapFaqs([
      { q: "Para quais brincos essa tag é indicada?", a: "É uma excelente opção para brincos médios e grandes ou para marcas que desejam incluir mais informações na própria tag. O tamanho maior oferece mais espaço para personalização sem prejudicar a apresentação da peça." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Nossa equipe pode ajudar a escolher o tamanho mais adequado de acordo com o tipo de brinco, embalagem ou forma como você expõe seus produtos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Desenvolvemos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-5-5x4-8-cm",
    productIds: ["tag-trio-brincos-m"],
    displayName: "Tag Trio Brincos Personalizada 5,5x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio Brincos Personalizada 5,5x4,8 cm | GS Cartões",
    seoDescription: "Tag para trio de brincos 5,5x4,8 cm com 3 furos para fixar todas as peças. Arte personalizada para sua marca de semijoias.",
    longDescription: [
      "A Tag Trio de Brincos Personalizada 5,5x4,8 cm foi desenvolvida para acomodar até três pares de brincos de forma organizada, mantendo uma apresentação limpa e funcional.",
      "Você pode personalizar a tag com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Os furos e cortes também podem ser adaptados conforme a necessidade da peça, mediante consulta.",
      "É uma excelente opção para quem procura uma tag compacta para trios de brincos, sem abrir mão de uma boa área para personalização.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: wrapFaqs([
      { q: "Essa tag serve para qualquer trio de brincos?", a: "Ela é indicada para a maioria dos trios de brincos pequenos e médios. Caso utilize peças maiores, nossa equipe pode indicar um modelo com mais espaço." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Podemos ajudar você a escolher a medida mais adequada de acordo com o tamanho dos brincos, da embalagem ou da forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ]),
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-4-8x4-1-cm",
    productIds: ["tag-trio-brincos-p"],
    displayName: "Tag Trio Brincos Personalizada 4,8x4,1 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio Brincos Personalizada 4,8x4,1 cm | GS Cartões",
    seoDescription: "Tag de trio de brincos 4,8x4,1 cm, formato compacto e elegante para semijoias. Arte 100% personalizada da sua marca.",
    longDescription: [
      "A Tag Trio de Brincos Personalizada 4,8x4,1 cm é uma opção compacta para organizar e apresentar até três pares de brincos de forma prática.",
      "Seu tamanho reduzido é ideal para quem utiliza embalagens menores ou deseja aproveitar melhor o espaço sem abrir mão da personalização. Você pode incluir sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca.",
      "Também é possível alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Para quais trios de brincos essa tag é indicada?", a: "Esse modelo é indicado principalmente para trios de brincos pequenos. Caso utilize peças maiores ou queira mais espaço entre os brincos, podemos indicar outros modelos." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Nossa equipe pode ajudar você a escolher o tamanho mais adequado de acordo com o tipo de brinco, embalagem ou forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-8x6-5-cm",
    productIds: ["tag-trio-brincos-g"],
    displayName: "Tag Trio Brincos Personalizada 8x6,5 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio Brincos Personalizada 8x6,5 cm | GS Cartões",
    seoDescription: "Tag para trio de brincos 8x6,5 cm com espaço amplo para combinar 3 pares. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "A Tag Trio de Brincos Personalizada 8x6,5 cm é indicada para quem busca mais espaço tanto para acomodar três pares de brincos quanto para destacar a identidade da marca.",
      "O tamanho maior proporciona uma apresentação mais organizada para brincos maiores ou com formatos variados, além de oferecer uma área mais ampla para personalização com logo, cores, informações de contato, redes sociais, QR Code e outros elementos da sua identidade visual.",
      "Também é possível alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Para quais trios de brincos essa tag é indicada?", a: "Esse modelo é ideal para trios com brincos médios ou maiores, ou para quem prefere mais espaço entre as peças e uma apresentação mais destacada." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Nossa equipe pode ajudar você a escolher a medida mais adequada de acordo com o tamanho dos brincos, da embalagem ou da forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
  },
  {
    slug: "tag-de-trio-de-brincos-personalizada-8-8x4-8-cm",
    productIds: ["tag-trio-brincos-88x48"],
    displayName: "Tag Trio Brincos Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Trio Brincos Personalizada 8,8x4,8cm | GS Cartões",
    seoDescription: "Tag horizontal para trio de brincos 8,8x4,8 cm. Formato alongado com excelente leitura da marca em couchê 250g.",
    longDescription: [
      "A Tag Trio de Brincos Personalizada 8,8x4,8 cm combina um formato horizontal com uma excelente área para personalização, sendo uma ótima opção para apresentar até três pares de brincos de forma organizada.",
      "Além de acomodar os brincos com conforto, esse modelo permite destacar sua marca com mais equilíbrio, oferecendo espaço para logo, informações de contato, redes sociais, QR Code e outros elementos da identidade visual.",
      "Também é possível alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Para quais trios de brincos essa tag é indicada?", a: "Esse modelo é indicado para quem procura uma tag horizontal, com boa distribuição dos brincos e uma área maior para destacar a identidade da marca. É uma excelente opção para trios de brincos pequenos e médios." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Nossa equipe pode ajudar você a escolher a medida mais adequada de acordo com o tamanho dos brincos, da embalagem ou da forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
  },
  {
    slug: "tag-semaninha-personalizada-8-8x4-8-cm",
    productIds: ["tag-semaninha"],
    displayName: "Tag Semaninha Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag Semaninha Personalizada 8,8x4,8cm | GS Cartões",
    seoDescription: "Tag semaninha personalizada 8,8x4,8 cm para kits de brincos da semana. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "A Tag Semaninha Personalizada 8,8x4,8 cm é ideal para quem vende kits com sete pares de brincos em uma única embalagem. Ela mantém as peças organizadas e ainda oferece um excelente espaço para personalizar a identidade visual da sua marca.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua empresa. Também é possível alterar as medidas, a posição dos furos e adaptar outros detalhes do modelo conforme a necessidade do seu projeto.",
      "Se precisar de uma configuração diferente, nossa equipe pode desenvolver uma tag personalizada para atender às características da sua marca.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Quantos pares de brincos cabem nessa tag?", a: "Esse modelo foi desenvolvido para acomodar sete pares de brincos, sendo uma excelente opção para kits conhecidos como \"semaninha\"." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso fazer adaptações nesse modelo?", a: "Sim. Podemos alterar as medidas, a posição dos furos e adaptar outros detalhes do modelo conforme a necessidade da sua marca. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar as possibilidades." },
      { q: "Essa tag serve apenas para brincos?", a: "Ela foi desenvolvida para kits com sete pares de brincos, mas, dependendo das peças que você vende, nossa equipe pode orientar sobre possíveis adaptações ou indicar o modelo mais adequado." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Brincos e Colar Personalizada 9,94x6 cm foi desenvolvida para apresentar conjuntos de semijoias de forma organizada, acomodando o colar e os brincos na mesma tag.",
      "Você pode personalizar o layout com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar a posição dos furos e do corte para o colar, além de adicionar ou remover furos e cortes conforme a necessidade da peça, mediante consulta.",
      "É uma ótima opção para quem busca uma apresentação prática, sem abrir mão da personalização.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Essa tag serve para qualquer conjunto de colar e brincos?", a: "Ela atende a maioria dos conjuntos de semijoias. Caso utilize correntes mais grossas, gargantilhas ou pingentes maiores, nossa equipe pode indicar um modelo mais adequado." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Podemos ajudar você a escolher a medida mais indicada de acordo com o tamanho do colar, dos brincos, da embalagem ou da forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e o corte para o colar?", a: "Sim. Podemos alterar a posição dos furos, modificar o corte onde o colar é encaixado, além de adicionar ou remover furos e cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
  },
  {
    slug: "tag-de-brincos-e-colar-personalizada-8-8x4-8-cm",
    productIds: ["tag-brincos-colar-p"],
    displayName: "Tag de Brincos e Colar Personalizada 8,8x4,8 cm",
    categorySlug: "tags-personalizadas-para-semijoias",
    categoryLabel: "Tags para Semijoias",
    seoTitle: "Tag de Brincos e Colar Personalizada 8,8x4,8cm | GS Cartões",
    seoDescription: "Tag de brincos e colar 8,8x4,8 cm em formato compacto, com arte personalizada para apresentar seus conjuntos de semijoias.",
    longDescription: [
      "A Tag de Brincos e Colar Personalizada 8,8x4,8 cm é o nosso modelo de conjunto mais vendido. Ela foi desenvolvida para acomodar colar e brincos na mesma tag, oferecendo um excelente equilíbrio entre espaço para personalização e apresentação das peças.",
      "Você pode personalizar o modelo com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar a posição dos furos, modificar o corte para o colar e adicionar ou remover furos e cortes personalizados, mediante consulta.",
      "Se você está em dúvida sobre qual modelo escolher para seus conjuntos, essa costuma ser a opção preferida das nossas clientes.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Por que essa é a tag de conjunto mais vendida?", a: "Ela atende muito bem a maioria dos conjuntos de semijoias, oferecendo um ótimo equilíbrio entre espaço para acomodar o colar, os brincos e a personalização da arte. Se ainda tiver dúvidas, nossa equipe pode ajudar você a escolher o modelo mais adequado para as suas peças." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Sem problemas. Nossa equipe pode ajudar você a escolher a medida mais adequada de acordo com o tamanho das peças, da embalagem ou da forma como seus produtos serão expostos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e o corte para o colar?", a: "Sim. Podemos alterar a posição dos furos, modificar o corte onde o colar é encaixado, além de adicionar ou remover furos e cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Brincos e Colar Personalizada Formato Especial é ideal para marcas que desejam fugir dos formatos tradicionais e criar uma apresentação ainda mais exclusiva para suas semijoias.",
      "Produzimos modelos em formatos personalizados, como borboletas, diamantes, corações, flores e diversos outros formatos desenvolvidos conforme a identidade visual da sua marca. Você também pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos.",
      "Além do formato da tag, também é possível alterar a posição dos furos, modificar o corte para o colar e adicionar ou remover furos e cortes personalizados, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Posso criar um formato exclusivo para minha marca?", a: "Sim. Produzimos tags em diversos formatos personalizados. Caso tenha uma ideia específica, nossa equipe pode avaliar a viabilidade e desenvolver um modelo exclusivo para a sua marca." },
      { q: "Posso escolher qualquer formato?", a: "Na maioria dos casos, sim. Antes da produção avaliamos se o formato é compatível com o tamanho da peça e com o processo de corte para garantir um bom resultado." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e o corte para o colar?", a: "Sim. Podemos alterar a posição dos furos, modificar o corte onde o colar é encaixado, além de adicionar ou remover furos e cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag Trio de Brincos e Colar Personalizada 9x6,5 cm foi desenvolvida para acomodar um colar e até três pares de brincos na mesma tag, mantendo uma apresentação organizada e prática.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar a posição dos furos, modificar o corte para o colar e adicionar ou remover furos e cortes personalizados, mediante consulta.",
      "Se você vende conjuntos com mais de um par de brincos, esse modelo oferece mais espaço para acomodar as peças sem abrir mão da personalização.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Essa tag comporta quantos brincos?", a: "Esse modelo foi desenvolvido para acomodar um colar e até três pares de brincos. Caso precise de uma configuração diferente de furos ou cortes, entre em contato com nossa equipe." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Nossa equipe pode ajudar você a escolher o modelo mais adequado de acordo com o tamanho das peças, da embalagem ou da forma como pretende apresentar seus produtos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e o corte para o colar?", a: "Sim. Podemos alterar a posição dos furos, modificar o corte onde o colar é encaixado, além de adicionar ou remover furos e cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "Ideal para quem vende conjuntos com um colar e até três pares de brincos, a Tag Trio de Brincos e Colar Personalizada 8,8x4,8 cm reúne todas as peças em uma única tag, mantendo a organização e uma boa área para personalização.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar a posição dos furos, modificar o corte para o colar e adicionar ou remover furos e cortes personalizados, mediante consulta.",
      "Se precisar de um modelo com outra disposição de furos, cortes ou medidas, nossa equipe pode avaliar a melhor solução para o seu projeto.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Quantos brincos cabem nessa tag?", a: "Esse modelo foi desenvolvido para acomodar um colar e até três pares de brincos. Caso precise de uma configuração diferente, podemos adaptar os furos e cortes conforme a necessidade da sua marca." },
      { q: "Tenho dúvidas se esse tamanho é o ideal.", a: "Nossa equipe pode ajudar você a escolher a medida mais adequada de acordo com o tamanho das peças, da embalagem ou da forma como pretende apresentar seus produtos." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e o corte para o colar?", a: "Sim. Podemos alterar a posição dos furos, modificar o corte onde o colar é encaixado, além de adicionar ou remover furos e cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Mini Tag de Anel Personalizada 3,9x1,7 cm é uma excelente opção para identificar e apresentar anéis de forma prática, ocupando pouco espaço e mantendo a identidade visual da sua marca.",
      "Por ser um modelo padrão, é possível personalizar apenas a arte da tag, incluindo sua logo, cores, informações de contato, QR Code e outros elementos da identidade da sua empresa. O formato, as medidas e a posição dos furos não podem ser alterados.",
      "Produzida em papel couchê 250g, ela é ideal para quem procura uma solução pronta para anéis, com personalização da arte e excelente acabamento.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Posso alterar o tamanho ou o formato dessa tag?", a: "Não. Esse é um modelo padrão, portanto suas medidas, formato e posição dos furos não podem ser alterados." },
      { q: "O que posso personalizar?", a: "Você pode personalizar toda a arte da tag, incluindo logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Essa tag serve para qualquer anel?", a: "Ela foi desenvolvida para acomodar a maioria dos modelos de anéis. Caso tenha alguma peça com características diferentes, entre em contato com nossa equipe para avaliarmos a melhor opção." },
      { q: "Qual papel é utilizado?", a: "Produzimos essa tag em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
    seoTitle: "Tag de Acessórios Personalizada 8,8x4,8cm | GS Cartões",
    seoDescription: "Tag de acessórios 8,8x4,8 cm com opção frente e verso ou só frente. Arte exclusiva da sua marca em couchê 250g.",
    longDescription: [
      "A Tag de Acessórios Personalizada 8,8x4,8 cm é uma opção versátil para quem trabalha com diferentes tipos de acessórios. Seu formato permite acomodar diversas peças, como brincos, colares, pulseiras, correntes e outros acessórios, adaptando-se à necessidade da sua marca.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade visual da sua empresa. Também é possível alterar a posição dos furos, adicionar ou remover furos e modificar os cortes conforme a necessidade da peça, mediante consulta.",
      "Caso precise de outro tamanho ou de uma configuração diferente, nossa equipe pode desenvolver uma versão personalizada para o seu projeto.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Quais acessórios podem ser utilizados nessa tag?", a: "Esse modelo pode ser utilizado para diversos tipos de acessórios. Caso tenha dúvidas se ela atende às peças que você vende, nossa equipe pode ajudar a escolher o modelo mais indicado." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e modificar os cortes conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Acessórios Personalizada Redonda 8,4x9,8 cm é uma excelente opção para quem busca um modelo versátil, podendo ser utilizada para diversos tipos de acessórios, como brincos, colares, pulseiras, correntes e muito mais.",
      "Seu formato diferenciado oferece bastante espaço para personalização, permitindo incluir sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca.",
      "Também é possível alterar a posição dos furos, adicionar ou remover furos e cortes personalizados conforme a necessidade das peças. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar as possibilidades.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Quais acessórios posso utilizar nessa tag?", a: "Esse modelo pode ser utilizado para diversos tipos de acessórios, como brincos, colares, pulseiras, correntes, pingentes e outros produtos. Caso tenha dúvidas sobre a compatibilidade com a sua peça, nossa equipe pode ajudar na escolha." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e criar cortes personalizados conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Acessórios Personalizada 13x4,8 cm é uma ótima opção para quem procura uma tag versátil para diferentes tipos de acessórios. Seu formato alongado e o corte lateral facilitam a acomodação das peças, sendo muito utilizada para colares, correntes, pulseiras e diversos outros acessórios.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar a posição dos furos, adicionar ou remover furos e modificar os cortes conforme a necessidade da sua peça, mediante consulta.",
      "Caso precise de um modelo com outras medidas ou uma configuração diferente, nossa equipe pode desenvolver uma versão personalizada para a sua marca.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Para quais acessórios essa tag é indicada?", a: "Esse modelo pode ser utilizado para diversos tipos de acessórios, como colares, correntes, pulseiras, brincos e outras peças. Caso tenha dúvidas sobre a compatibilidade com o seu produto, nossa equipe pode ajudar na escolha." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso alterar os furos e cortes?", a: "Sim. Podemos alterar a posição dos furos, adicionar ou remover furos e modificar os cortes conforme a necessidade da sua peça. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar os valores." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "As Tags des Acessórios Padronizada reúne diferentes modelos pequenos prontos para quem procura uma solução prática para apresentar brincos, colares, pulseiras, correntes e outros acessórios.",
      "Você pode escolher o modelo que melhor atende às suas peças e personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca.",
      "Por se tratar de uma linha padronizada, não é possível alterar o formato, as medidas, a posição dos furos ou os cortes da tag. A personalização é realizada apenas na arte.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Posso escolher o modelo da tag?", a: "Sim. Você deve escolher entre os modelos disponíveis para encontrar a opção que melhor atende aos acessórios da sua marca." },
      { q: "O que posso personalizar?", a: "Você pode personalizar toda a arte da tag, incluindo logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho, o formato ou os furos?", a: "Não. Como essa é uma linha de tags padronizadas, não é possível alterar as medidas, o formato, os furos ou os cortes." },
      { q: "Para quais acessórios essa tag pode ser utilizada?", a: "Ela pode ser utilizada para diversos tipos de acessórios. Caso tenha dúvidas sobre qual modelo escolher, nossa equipe pode ajudar você a encontrar a opção mais adequada." },
      { q: "Qual papel é utilizado?", a: "Produzimos essa tag em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "As Tags de Acessórios Padronizadas Média reúne modelos prontos para quem procura mais opções de formatos e configurações para apresentar diferentes tipos de acessórios.",
      "Você pode escolher o modelo que melhor atende às suas peças e personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca.",
      "Por se tratar de uma linha de tags padronizadas, não é possível alterar o formato, as medidas, a posição dos furos ou os cortes da tag. A personalização é realizada apenas na arte.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Qual a diferença entre as tags padronizadas pequenas e médias?", a: "A principal diferença está nas medidas e nos modelos disponíveis. As tags médias oferecem mais opções de formatos e podem atender melhor determinados tipos de acessórios. Se tiver dúvidas sobre qual escolher, nossa equipe pode ajudar." },
      { q: "Posso escolher o modelo da tag?", a: "Sim. Você pode escolher entre os modelos disponíveis para encontrar a opção que melhor atende aos acessórios da sua marca." },
      { q: "O que posso personalizar?", a: "Você pode personalizar toda a arte da tag, incluindo logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho, o formato ou os furos?", a: "Não. Como essa é uma linha de tags padronizadas, não é possível alterar as medidas, o formato, os furos ou os cortes." },
      { q: "Para quais acessórios essa tag pode ser utilizada?", a: "Ela pode ser utilizada para diversos tipos de acessórios. Caso tenha dúvidas sobre qual modelo escolher, nossa equipe pode ajudar você a encontrar a opção mais adequada." },
      { q: "Qual papel é utilizado?", a: "Produzimos essa tag em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Anel Personalizada 3,3x2,6 cm é ideal para apresentar anéis de forma organizada, oferecendo espaço para personalizar a identidade visual da sua marca sem ocupar mais espaço do que o necessário.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar as medidas, a posição do furo e outros detalhes do modelo conforme a necessidade do seu projeto.",
      "Se precisar de uma configuração diferente, nossa equipe pode desenvolver uma tag personalizada para atender às características da sua marca.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Essa tag serve para qualquer tipo de anel?", a: "Ela atende a maioria dos modelos de anéis. Caso tenha alguma necessidade específica, nossa equipe pode ajudar você a escolher o modelo mais adequado." },
      { q: "Preciso de algum acessório para prender o anel na tag?", a: "Sim. Para utilizar este modelo é necessário o uso de uma presilha para anel, responsável por fixar a peça na tag. A presilha não acompanha este produto." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso fazer adaptações nesse modelo?", a: "Sim. Podemos alterar as medidas, a posição do furo e adaptar outros detalhes do modelo conforme a necessidade da sua marca. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar as possibilidades." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Anel Personalizada 4x4 cm é uma excelente opção para quem procura uma tag com mais espaço para personalização, sem deixar de valorizar a apresentação dos anéis.",
      "Você pode personalizar a arte com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Também é possível alterar as medidas, a posição do furo e adaptar outros detalhes do modelo conforme a necessidade do seu projeto.",
      "Se precisar de uma configuração diferente, nossa equipe pode desenvolver uma tag personalizada para atender às características da sua marca.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "Essa tag serve para qualquer tipo de anel?", a: "Ela atende a maioria dos modelos de anéis. Caso tenha alguma necessidade específica, nossa equipe pode ajudar você a escolher o modelo mais adequado." },
      { q: "Posso personalizar a arte da tag?", a: "Sim. Você pode personalizar a tag com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho da tag?", a: "Sim. Produzimos modelos em medidas personalizadas conforme a necessidade da sua marca. O menor tamanho que produzimos é de 2,5 cm." },
      { q: "Posso fazer adaptações nesse modelo?", a: "Sim. Podemos alterar as medidas, a posição do furo e adaptar outros detalhes do modelo conforme a necessidade da sua marca. Dependendo da alteração solicitada, poderá haver um custo adicional. Consulte nossa equipe para verificar as possibilidades." },
      { q: "Qual papel é utilizado?", a: "Produzimos em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Também oferecemos outras opções de papéis e acabamentos sob consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
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
      "A Tag de Anel Padronizada 6,5x2,3 cm é uma solução prática para apresentar anéis de forma organizada, mantendo a identidade visual da sua marca.",
      "Por se tratar de um modelo padronizado, você pode escolher esse formato e personalizar apenas a arte da tag com sua logo, cores, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca. Não é possível alterar as medidas, o formato ou o corte deste modelo.",
      "O encaixe do anel é feito diretamente no corte em \"X\" da tag, dispensando o uso de presilhas ou outros acessórios.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta."
    ],
    faqs: [
      { q: "O que posso personalizar nessa tag?", a: "Você pode personalizar toda a arte da tag, incluindo logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Posso alterar o tamanho ou o formato dessa tag?", a: "Não. Como este é um modelo padronizado, não é possível alterar as medidas, o formato ou o corte da tag." },
      { q: "Preciso de algum acessório para prender o anel?", a: "Não. Neste modelo o encaixe do anel é feito diretamente no corte em \"cruz\" da própria tag, dispensando o uso de presilhas." },
      { q: "Essa tag serve para qualquer tipo de anel?", a: "Ela atende a maioria dos modelos de anéis. Caso tenha dúvidas sobre a compatibilidade com a sua peça, nossa equipe pode orientar você na escolha do modelo mais adequado." },
      { q: "Qual papel é utilizado?", a: "Produzimos essa tag em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta. O verniz localizado também pode ser aplicado, mediante consulta." }
    ],
  },

  // ─────────── SACOLINHAS ───────────
  {
    slug: "sacolinha-personalizada-para-semijoias-16-5x12x4-5-cm",
    productIds: ["sacolinha-acessorios-couche"],
    displayName: "Sacolinha Personalizada para Semijoias 16,5x12x4,5 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacolinha Personalizada Semijoias 16,5x12x4,5cm",
    seoDescription: "Sacolinha personalizada para semijoias em couchê 250g, formato 16,5x12x4,5 cm. Identidade visual da sua marca em cada entrega.",
    longDescription: [
      "A Sacolinha Personalizada para Semijoias 16,5 x 12 x 4,5 cm é uma excelente opção para entregar brincos, colares, pulseiras, conjuntos e outros acessórios de forma prática e organizada.",
      "Produzida em papel couchê 250g, ela é enviada desmontada para facilitar o transporte, mas sua montagem é simples e rápida, sem necessidade de cola.",
      "A arte é totalmente personalizada com a identidade visual da sua marca, permitindo incluir sua logo, cores, informações de contato, QR Code e outros elementos personalizados.",
      "Caso tenha dúvidas se este tamanho atende aos produtos que você vende, nossa equipe pode ajudar você a escolher o modelo mais adequado.",
    ],
    faqs: [
      { q: "Quais produtos cabem nessa sacolinha?", a: "Ela é indicada para transportar brincos, colares, pulseiras, conjuntos e outros acessórios. Caso tenha dúvidas sobre o tamanho ideal para os seus produtos, nossa equipe pode orientar você." },
      { q: "A sacolinha é enviada montada?", a: "Não. Ela é enviada desmontada para facilitar o transporte e reduzir o volume no envio. A montagem é simples, rápida e não necessita de cola." },
      { q: "Posso personalizar toda a sacolinha?", a: "Sim. A arte é totalmente personalizada com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da sacolinha?", a: "Produzimos esse modelo em papel couchê 250g, com impressão colorida na parte externa e excelente acabamento." },
      { q: "A sacolinha acompanha laço?", a: "Não. Este modelo não acompanha laço." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Sacolinha Personalizada para Semijoias é uma opção mais estruturada, ideal para quem procura uma embalagem firme e resistente para entregar seus produtos.",
      "Disponível nos tamanhos P e M, ela pode ser utilizada para transportar diferentes tipos de semijoias e acessórios, conforme o volume das peças.",
      "Produzida em papel cartão 300g, é enviada desmontada para facilitar o transporte. Sua montagem é simples, rápida e não necessita de cola.",
      "A arte é totalmente personalizada com a identidade visual da sua marca, permitindo incluir logo, cores, informações de contato, QR Code e outros elementos personalizados.",
    ],
    faqs: [
      { q: "Qual a diferença entre os tamanhos P e M?", a: "Os dois modelos possuem o mesmo formato, mudando apenas as dimensões. Caso tenha dúvidas sobre qual tamanho atende melhor aos seus produtos, nossa equipe pode ajudar na escolha." },
      { q: "A sacolinha é enviada montada?", a: "Não. Ela é enviada desmontada para facilitar o transporte e reduzir o volume no envio. A montagem é simples e rápida, sem necessidade de cola." },
      { q: "Posso personalizar toda a sacolinha?", a: "Sim. A arte é totalmente personalizada com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da sacolinha?", a: "Este modelo é produzido em papel cartão 300g, proporcionando uma estrutura mais firme para a embalagem." },
      { q: "A sacolinha acompanha laço?", a: "Não. Este modelo não acompanha laço." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
    seoDescription: "Sacola personalizada para acessórios em papel sulfite 150g, 21x15x7 cm, com ilhós metálicos e alças de cordão. Acabamento elegante para a sua marca de semijoias.",
    longDescription: [
      "A Sacola Personalizada para Acessórios 21x15x7 cm é indicada para quem busca uma embalagem maior para transportar semijoias e acessórios com praticidade. Seu tamanho é ideal para acomodar pedidos com mais de uma peça ou produtos de maior volume.",
      "Produzida em papel sulfite 150g, conta com ilhós metálicos e alças de cordão, oferecendo um acabamento elegante para complementar a identidade visual da sua marca.",
      "A arte é desenvolvida de forma personalizada, permitindo incluir sua logo, cores, informações de contato, QR Code e outros elementos personalizados da sua empresa.",
      "Caso tenha dúvidas sobre qual tamanho atende melhor aos produtos que você vende, nossa equipe está à disposição para ajudar na escolha.",
    ],
    faqs: [
      { q: "Quais produtos cabem nessa sacola?", a: "Este modelo é indicado para transportar semijoias, acessórios e pedidos com maior volume. Caso tenha dúvidas sobre a capacidade da sacola, nossa equipe pode orientar você na escolha do tamanho mais adequado." },
      { q: "Posso personalizar toda a sacola?", a: "Sim. A arte é totalmente personalizada e pode incluir logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade visual da sua marca." },
      { q: "Qual o material da sacola?", a: "Este modelo é produzido em papel sulfite 150g, com impressão colorida na parte externa, ilhós metálicos e alças de cordão." },
      { q: "A sacola acompanha alças?", a: "Sim. Este modelo já acompanha alças de cordão." },
      { q: "A impressão é feita dos dois lados?", a: "A impressão colorida é realizada na parte externa da sacola. Caso tenha alguma necessidade específica, consulte nossa equipe." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
  },
  {
    slug: "sacola-personalizada-para-acessorios-12x12x6-cm",
    productIds: ["sacola-acessorios-12x12x6"],
    displayName: "Sacola Personalizada para Acessórios 12x12x6 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacola Personalizada para Acessórios 12x12x6 cm | GS Cartões",
    seoDescription: "Sacola personalizada para acessórios em papel sulfite 150g, 12x12x6 cm, com ilhós metálicos e alças de cordão. Tamanho compacto e elegante para semijoias.",
    longDescription: [
      "A Sacola Personalizada para Acessórios 12x12x6 cm é uma opção compacta para entregar semijoias e pequenos acessórios com mais organização e identidade visual.",
      "Produzida em papel sulfite 150g, possui impressão colorida na parte externa, ilhós metálicos e alças de cordão, formando uma embalagem leve e prática para o dia a dia.",
      "A arte é desenvolvida conforme a identidade da sua marca, permitindo incluir logo, cores, informações de contato, QR Code e outros elementos personalizados.",
      "Se tiver dúvidas sobre a capacidade desta sacola, nossa equipe pode ajudar você a escolher o tamanho mais adequado.",
    ],
    faqs: [
      { q: "Quais produtos cabem nessa sacola?", a: "Ela é indicada para transportar brincos, anéis, pulseiras, colares e outros acessórios de menor volume. Caso tenha dúvidas sobre a capacidade da sacola, nossa equipe pode orientar você na escolha do modelo ideal." },
      { q: "Posso personalizar toda a sacola?", a: "Sim. A arte é totalmente personalizada com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da sacola?", a: "Este modelo é produzido em papel sulfite 150g, com impressão colorida na parte externa, ilhós metálicos e alças de cordão." },
      { q: "A sacola acompanha alças?", a: "Sim. Este modelo acompanha alças de cordão e ilhós metálicos." },
      { q: "A impressão é feita dos dois lados?", a: "A impressão colorida é realizada na parte externa da sacola. Caso tenha interesse em um projeto diferente, consulte nossa equipe." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
    displayName: "Sacola Plástica Personalizada Alça Boca de Palhaço",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Sacola Plástica Personalizada Alça Boca de Palhaço | GS Cartões",
    seoDescription: "Sacola plástica personalizada com alça boca de palhaço em polietileno PEAD 0,13 mm. Disponível em quatro tamanhos e oito cores para sua marca.",
    longDescription: [
      "A Sacola Plástica Personalizada com Alça Boca de Palhaço é uma opção prática para entregar roupas, acessórios, semijoias e diversos outros produtos. Disponível em quatro tamanhos e oito opções de cores, ela permite escolher a combinação que melhor representa a identidade da sua marca.",
      "Produzida em polietileno PEAD 0,13 mm, possui alça vazada e impressão na parte frontal da sacola. A personalização é feita com a aplicação da sua logo em uma única cor, conforme o modelo escolhido.",
      "Caso tenha dúvidas sobre qual tamanho ou cor atende melhor às suas necessidades, nossa equipe pode ajudar você na escolha.",
    ],
    faqs: [
      { q: "Quais produtos posso colocar nessa sacola?", a: "Ela pode ser utilizada para roupas, acessórios, semijoias e diversos outros produtos. A escolha do tamanho ideal depende das dimensões dos itens que serão transportados." },
      { q: "Quais tamanhos estão disponíveis?", a: "Este modelo está disponível nos tamanhos 16x22 cm, 20x30 cm, 25x35 cm e 30x40 cm." },
      { q: "Quais cores estão disponíveis?", a: "Você pode escolher entre oito cores de sacola: transparente, azul, amarelo, vermelho, verde, rosa, branca e preta." },
      { q: "Como funciona a personalização?", a: "A personalização é realizada com a sua logo impressa na parte frontal da sacola, utilizando apenas uma cor. Caso tenha dúvidas sobre a aplicação da sua arte, nossa equipe pode orientar você." },
      { q: "Qual o material da sacola?", a: "Este modelo é produzido em polietileno PEAD 0,13 mm." },
      { q: "A impressão é feita dos dois lados?", a: "Não. A impressão é realizada apenas na parte frontal da sacola." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
  },
  {
    slug: "caixinha-personalizada-para-acessorios-6-3x6-3x3-cm",
    productIds: ["caixinha-acessorios-p"],
    displayName: "Caixinha Personalizada para Acessórios 6,3x6,3x3 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Caixinha Personalizada para Acessórios 6,3x6,3x3 cm",
    seoDescription: "Caixinha personalizada para acessórios 6,3x6,3x3 cm em papel cartão 300g com laminação fosca externa. Envio desmontado, com montagem simples e rápida.",
    longDescription: [
      "A Caixinha Personalizada para Acessórios 6,3x6,3x3 cm é indicada para embalar semijoias e pequenos acessórios com praticidade. Seu formato compacto é uma boa opção para brincos, anéis, pingentes e outras peças de tamanho semelhante.",
      "Produzida em papel cartão 300g, possui laminação fosca na parte externa e é enviada desmontada, com montagem simples e rápida. Este modelo não acompanha berço interno.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, cores, informações de contato, QR Code e outros elementos personalizados.",
      "Caso tenha dúvidas se este tamanho atende aos produtos que você vende, nossa equipe pode ajudar você a escolher o modelo mais adequado.",
    ],
    faqs: [
      { q: "Quais produtos cabem nessa caixinha?", a: "Ela é indicada para embalar brincos, anéis, pingentes e outros acessórios de tamanho semelhante. Caso tenha dúvidas sobre a capacidade da caixinha, nossa equipe pode orientar você na escolha do modelo ideal." },
      { q: "A caixinha acompanha berço interno?", a: "Não. Este modelo não acompanha berço interno." },
      { q: "Posso personalizar toda a caixinha?", a: "Sim. A arte é totalmente personalizada com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da caixinha?", a: "Este modelo é produzido em papel cartão 300g, com laminação fosca na parte externa." },
      { q: "A caixinha é enviada montada?", a: "Não. Ela é enviada desmontada, com montagem simples e rápida." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
  },
  {
    slug: "caixinha-personalizada-para-acessorios-8-3x8-3x5-cm",
    productIds: ["caixinha-acessorios-m"],
    displayName: "Caixinha Personalizada para Acessórios 8,3x8,3x5 cm",
    categorySlug: "sacolinhas-personalizadas-para-semijoias",
    categoryLabel: "Sacolinhas",
    seoTitle: "Caixinha Personalizada para Acessórios 8,3x8,3x5 cm",
    seoDescription: "Caixinha personalizada 8,3x8,3x5 cm para semijoias e conjuntos. Papel cartão 300g com laminação fosca. Envio desmontado, montagem simples.",
    longDescription: [
      "A Caixinha Personalizada para Acessórios 8,3x8,3x5 cm é indicada para quem precisa de uma embalagem com maior capacidade para semijoias e acessórios. Seu tamanho acomoda peças maiores ou conjuntos, sendo uma ótima alternativa quando a versão menor não atende à necessidade da sua marca.",
      "Produzida em papel cartão 300g, possui laminação fosca na parte externa e é enviada desmontada. Sua montagem é simples e rápida, sem necessidade de cola. Este modelo não acompanha berço interno.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, cores, informações de contato, QR Code e outros elementos personalizados.",
      "Caso tenha dúvidas sobre qual tamanho de caixinha atende melhor aos seus produtos, nossa equipe pode ajudar você na escolha.",
    ],
    faqs: [
      { q: "Quais produtos cabem nessa caixinha?", a: "Ela é indicada para embalar semijoias, conjuntos e acessórios que necessitam de um pouco mais de espaço interno. Caso tenha dúvidas sobre a capacidade da caixinha, nossa equipe pode orientar você na escolha do modelo ideal." },
      { q: "Qual a diferença entre esta caixinha e a versão 6,3x6,3x3 cm?", a: "Este modelo possui maior capacidade interna, sendo indicado para peças maiores ou conjuntos. A versão 6,3x6,3x3 cm é mais indicada para brincos, anéis, pingentes e acessórios menores." },
      { q: "A caixinha acompanha berço interno?", a: "Não. Este modelo não acompanha berço interno." },
      { q: "Posso personalizar toda a caixinha?", a: "Sim. A arte é totalmente personalizada com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da caixinha?", a: "Este modelo é produzido em papel cartão 300g, com laminação fosca na parte externa." },
      { q: "A caixinha vai montada?", a: "Não. Ela é enviada desmontada e sua montagem é simples e rápida, sem necessidade de cola." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Caixinha Personalizada para Semijoias 4,4 x 7,3 x 5,6 cm é indicada para embalar brincos, colares, pulseiras e outros acessórios de menor volume. Por ser um modelo compacto, ela se adapta melhor a tags e cartões menores, proporcionando uma apresentação organizada das peças.",
      "Produzida em papel couchê 250g, a caixinha é enviada desmontada para facilitar o transporte e reduzir o custo do frete. A montagem é simples e rápida, sem necessidade de cola.",
      "A arte é totalmente personalizada com a identidade visual da sua marca, permitindo incluir logo, cores, informações de contato, QR Code e outros elementos.",
      "Caso tenha dúvidas se este modelo atende aos acessórios que você vende, a página conta com um vídeo demonstrando diferentes formas de utilização da caixinha, facilitando a visualização da capacidade interna.",
    ],
    faqs: [
      { q: "Quais acessórios cabem nessa caixinha?", a: "Ela é indicada para brincos, colares, pulseiras e outros acessórios de menor volume. Como o tamanho das peças pode variar, recomendamos assistir ao vídeo disponível na página para visualizar melhor a capacidade da caixinha." },
      { q: "A caixinha vai montada?", a: "Não. Ela é enviada desmontada para facilitar o transporte e reduzir o custo do frete. A montagem é simples e rápida, sem necessidade de cola." },
      { q: "Posso personalizar a caixinha?", a: "Sim. A arte é totalmente personalizada na parte externa com sua logo, cores, fontes, informações de contato, redes sociais, QR Code e outros elementos da identidade da sua marca." },
      { q: "Qual o material da caixinha?", a: "Produzimos esse modelo em papel couchê 250g, com impressão colorida e excelente acabamento." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Certificado de Garantia Personalizado 8,8x4,8 cm é uma forma prática de informar as condições de garantia dos seus produtos e transmitir mais segurança aos seus clientes. Além de reforçar a credibilidade da sua marca, ele também pode incluir orientações de conservação e outras informações importantes para o pós-venda.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, informações da empresa, regras de garantia, instruções de conservação, QR Code e outros elementos personalizados.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também oferecemos opções em papel couchê 300g e verniz localizado, mediante consulta.",
    ],
    faqs: wrapFaqs([
      { q: "Quais informações posso colocar no certificado?", a: "O conteúdo é totalmente personalizado. Você pode incluir, por exemplo: Logo da empresa; Condições de garantia; Prazo de garantia; Instruções de conservação; Informações de contato; Redes sociais; QR Code; Outras informações importantes para seus clientes." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível." },
      { q: "O texto da garantia é personalizado?", a: "Sim. Você pode enviar o texto que já utiliza na sua empresa ou solicitar alterações para atender à necessidade do seu negócio." },
      { q: "Posso produzir o certificado em papel fosco?", a: "Sim. Também oferecemos opções com acabamento fosco e verniz localizado. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ]),
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
      "O Mini Certificado de Garantia Personalizado 4,8x4,25 cm é uma excelente opção para quem deseja entregar informações sobre garantia sem ocupar muito espaço na embalagem. Seu formato compacto combina perfeitamente com caixinhas, sacolas e embalagens menores, mantendo uma apresentação organizada.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, informações da empresa, condições de garantia, QR Code, redes sociais e outras informações importantes para seus clientes.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também pode ser produzido em papel 300g, com acabamento fosco ou verniz localizado, mediante consulta."
    ],
    faqs: [
      { q: "Quais informações posso colocar no mini certificado?", a: "O conteúdo é totalmente personalizado. Você pode incluir:\n\n Logo da empresa.\n\n Condições de garantia.\n\n Prazo de garantia.\n\n Instruções de conservação.\n\n Informações de contato.\n\n Redes sociais.\n\n QR Code.\n\n Outras informações importantes para seus clientes." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível." },
      { q: "Quando vale a pena escolher o mini certificado?", a: "Esse modelo é indicado para quem deseja incluir informações de garantia em embalagens menores ou quando um certificado tradicional ocuparia muito espaço." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão é produzido com brilho total na frente, mas também é possível solicitar acabamento fosco ou verniz localizado. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "O Certificado de Garantia Personalizado Dobrado é a escolha ideal para quem precisa incluir mais informações sem aumentar o tamanho da peça quando fechada. Seu formato oferece mais espaço para condições de garantia, instruções de conservação, recomendações de uso e outras informações importantes para seus clientes.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, regras de garantia, informações da empresa, QR Code, orientações de conservação e outros elementos personalizados.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. No formato fechado, mede 8,8x4,8 cm. Aberto, oferece uma área de 8,8x9,6 cm para distribuir melhor o conteúdo. Também pode ser produzido em papel 300g, com acabamento fosco ou verniz localizado, mediante consulta."
    ],
    faqs: [
      { q: "Quando vale a pena escolher o certificado dobrado?", a: "Esse modelo é indicado para quem precisa incluir mais informações do que cabem em um certificado tradicional, como regras de garantia, instruções de conservação, orientações de uso e outras informações importantes para o cliente." },
      { q: "Quais informações posso colocar no certificado?", a: "O conteúdo é totalmente personalizado. Você pode incluir:\n\n Logo da empresa.\n\n Condições e prazo de garantia.\n\n Instruções de conservação.\n\n Informações de contato.\n\n Redes sociais.\n\n QR Code.\n\n Outras informações importantes para seus clientes." },
      { q: "Posso personalizar frente e verso?", a: "Sim. Todo o certificado pode ser personalizado, aproveitando as quatro faces do modelo dobrado para distribuir melhor o conteúdo." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão é produzido com brilho total na frente, mas também é possível solicitar acabamento fosco ou verniz localizado. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "O Cartão de Agradecimento Personalizado 8,8x9,94 cm é uma forma simples de fortalecer o relacionamento com seus clientes e tornar cada entrega ainda mais especial. Além de transmitir cuidado e profissionalismo, ele pode ser utilizado para agradecer pela compra, incentivar uma nova compra ou divulgar suas redes sociais.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir sua logo, mensagem, QR Code, informações de contato e outros elementos personalizados.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também oferecemos opções de papel couchê 300g e furo para pendurar, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta."
    ],
    faqs: [
      { q: "Posso escrever qualquer mensagem no cartão?", a: "Sim. O conteúdo é totalmente personalizado e pode conter mensagens de agradecimento, instruções de uso, redes sociais, QR Code, cupons de desconto ou outras informações da sua marca." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço do cartão." },
      { q: "Posso adicionar um furo para pendurar?", a: "Sim. Caso deseje utilizar o cartão pendurado em produtos ou embalagens, é possível solicitar a opção com furo. Consulte nossa equipe para verificar disponibilidade e valores." },
      { q: "Quais acabamentos estão disponíveis?", a: "O modelo padrão é produzido em papel couchê 250g. Também oferecemos a opção em papel couchê 300g, mediante consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta." }
    ],
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
      "O Mini Cartão de Agradecimento Personalizado 4,8x4,25 cm é uma excelente opção para quem deseja incluir uma mensagem especial na entrega sem ocupar muito espaço na embalagem. Seu formato compacto combina perfeitamente com caixas, sacolas e embalagens menores.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir sua logo, mensagem, QR Code, informações de contato e outros elementos personalizados.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também oferecemos opções em papel couchê 300g e com furo para pendurar, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta."
    ],
    faqs: [
      { q: "O que posso colocar no meu mini cartão de agradecimento?", a: "Você pode personalizar o cartão com diferentes informações, como: mensagem de agradecimento, logo da sua marca, QR Code, redes sociais, WhatsApp ou outras formas de contato, cupom de desconto, instruções de conservação das peças, informações sobre garantia e convite para uma nova compra." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível." },
      { q: "Posso adicionar um furo para pendurar?", a: "Sim. Caso deseje utilizar o cartão pendurado em produtos ou embalagens, é possível solicitar a opção com furo. Consulte nossa equipe para verificar disponibilidade e valores." },
      { q: "Quais acabamentos estão disponíveis?", a: "O modelo padrão é produzido em papel couchê 250g. Também oferecemos a opção em papel couchê 300g, mediante consulta." },
      { q: "Esse modelo substitui o cartão de agradecimento maior?", a: "Depende da sua necessidade. O mini cartão é ideal para embalagens menores ou quando você deseja transmitir uma mensagem mais objetiva. Se precisar de mais espaço para textos ou informações, recomendamos o cartão de agradecimento 8,8x9,94 cm." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta." }
    ],
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
      "O Cartão de Visitas Personalizado 8,8x4,8 cm continua sendo uma das formas mais práticas de divulgar sua marca e facilitar o contato com clientes. Ele pode ser entregue junto aos pedidos, distribuído em eventos, utilizado na loja ou sempre que você quiser apresentar seu negócio de forma profissional.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, nome, telefone, redes sociais, QR Code, endereço e outras informações importantes para o seu negócio.",
      "Produzido em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também oferecemos a opção em papel couchê 300g, mediante consulta.",
      "O acabamento padrão é brilho total na frente. Também é possível solicitar acabamento fosco, mediante consulta."
    ],
    faqs: [
      { q: "Quais informações posso colocar no cartão?", a: "Você pode personalizar o cartão com as informações que desejar, como:\n\n• Logo da empresa.\n• Nome.\n• Telefone e WhatsApp.\n• Instagram e outras redes sociais.\n• Endereço.\n• Site.\n• QR Code.\n• Horário de atendimento.\n• Outras informações da sua marca." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço do cartão." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la no formato solicitado pela nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Quais acabamentos estão disponíveis?", a: "O modelo padrão é produzido em papel couchê 250g. Também oferecemos a opção em papel couchê 300g, mediante consulta." },
      { q: "O cartão serve apenas para lojas de semijoias?", a: "Não. O cartão pode ser utilizado por empresas e profissionais de diversos segmentos." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
      { q: "Quais acabamentos estão disponíveis?", a: "O acabamento padrão é brilho total na frente. Também oferecemos acabamento fosco, mediante consulta." }
    ],
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
      "O Cartão de Visitas Personalizado com Verniz Localizado 8,8x5,1 cm é indicado para quem deseja transmitir uma imagem mais sofisticada da marca. O verniz localizado cria um efeito de brilho em áreas específicas da arte, destacando elementos como a logo, o nome da empresa ou outros detalhes importantes.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, nome, telefone, redes sociais, QR Code, endereço e outras informações importantes para o seu negócio.",
      "Produzido em papel couchê 250g com acabamento fosco e verniz localizado, conta com impressão colorida frente e verso. Também oferecemos a opção em papel couchê 300g, mediante consulta.",
    ],
    faqs: [
      { q: "O que é o verniz localizado?", a: "O verniz localizado é um acabamento aplicado apenas em partes da arte, criando um efeito de brilho que destaca elementos específicos, como a logo, textos ou outros detalhes do cartão." },
      { q: "Posso escolher onde será aplicado o verniz?", a: "Sim. O verniz localizado é aplicado conforme o layout aprovado da sua arte, valorizando os elementos que você deseja destacar. O verniz localizado pode ser aplicado tanto na frente quanto no verso" },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível no cartão." },
      { q: "Quais informações posso colocar no cartão?", a: "Você pode incluir logo, nome, telefone, WhatsApp, redes sociais, QR Code, endereço, site e outras informações importantes para o seu negócio." },
      { q: "Quais acabamentos estão disponíveis?", a: "O modelo padrão é produzido em papel couchê 250g com acabamento fosco e verniz localizado. Também oferecemos a opção em papel couchê 300g, mediante consulta." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Adesivo Personalizado para Anel 7x1,7 cm é uma forma prática de identificar anéis sem a necessidade de utilizar uma tag tradicional. Seu formato envolve a peça, permitindo destacar a identidade visual da sua marca de forma elegante e organizada.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code e outros elementos personalizados.",
      "Produzido em papel couchê adesivo 90g, conta com impressão colorida na frente e acabamento sem brilho.",
    ],
    faqs: [
      { q: "Como esse adesivo é utilizado?", a: "O adesivo é aplicado envolvendo o aro do anel, identificando a peça e valorizando sua apresentação no momento da venda." },
      { q: "Posso personalizar toda a arte?", a: "Sim. O adesivo é totalmente personalizado com a identidade visual da sua marca, incluindo logo, cores, textos, QR Code e outros elementos gráficos." },
      { q: "Qual o material do adesivo?", a: "Este modelo é produzido em papel couchê adesivo 90g, com impressão colorida na frente e acabamento sem brilho." },
      { q: "O adesivo é resistente à água?", a: "Não. Este modelo é produzido em papel couchê adesivo e não é resistente à água. Para manter a qualidade da impressão, recomendamos utilizá-lo em superfícies secas e evitar contato com umidade." },
      { q: "Esse adesivo substitui a tag de anel?", a: "Depende da forma como você apresenta seus produtos. O adesivo é uma alternativa prática para identificar anéis diretamente na peça, enquanto a tag oferece mais espaço para informações e pode agregar ainda mais valor à apresentação." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Adesivo Redondo Personalizado 3x3 cm é uma excelente opção para quem busca uma identificação discreta e elegante para embalagens e produtos. Seu tamanho compacto é ideal para aplicações em caixas, sacolas, papel de seda, envelopes e outros materiais, valorizando a apresentação da sua marca.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code e outros elementos personalizados.",
      "Produzido em papel couchê adesivo 80g, conta com impressão colorida na frente e acabamento sem brilho.",
    ],
    faqs: [
      { q: "Onde posso utilizar esse adesivo?", a: "Ele pode ser aplicado em caixas, sacolas, envelopes, papel de seda, embalagens, cartões e diversos outros materiais." },
      { q: "O que muda em relação ao adesivo redondo 4,8x4,8 cm?", a: "O modelo 3x3 cm ocupa menos espaço e é ideal para embalagens menores ou quando você deseja uma identificação mais discreta da marca. Já o modelo 4,8x4,8 cm oferece uma área maior para destacar a logo e incluir mais informações." },
      { q: "Posso personalizar toda a arte?", a: "Sim. O adesivo é totalmente personalizado com a identidade visual da sua marca, incluindo logo, cores, textos, QR Code e outros elementos gráficos." },
      { q: "O adesivo é resistente à água?", a: "Não. Este modelo é produzido em papel couchê adesivo e não é resistente à água. Para manter a qualidade da impressão, recomendamos utilizá-lo em superfícies secas e evitar contato com umidade." },
      { q: "Posso fazer esse adesivo em outro tamanho ou formato?", a: "Sim. Caso você precise de outro tamanho ou formato, consulte nossa equipe. Temos outras opções de adesivos personalizados que podem atender melhor ao seu projeto." },
      { q: "Qual o prazo de produção?", a: PRODUCTION_DEADLINE_ANSWER },
      { q: "Como funciona o pagamento?", a: FAQ_PAGAMENTO.a },
    ],
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
      "O Adesivo Redondo Personalizado 4,8x4,8 cm é uma ótima opção para destacar a identidade da sua marca em embalagens, sacolas, caixas, envelopes e diversos outros materiais. Seu tamanho oferece espaço suficiente para incluir a logo e outras informações importantes, criando um acabamento mais profissional na entrega dos seus produtos.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code, informações de contato e outros elementos personalizados.",
      "Produzido em papel couchê adesivo 80g, conta com impressão colorida na frente e acabamento sem brilho."
    ],
    faqs: [
      { q: "Onde posso utilizar esse adesivo?", a: "Ele pode ser aplicado em caixas, sacolas, envelopes, embalagens, papel de seda, cartões e diversos outros materiais." },
      { q: "Posso personalizar toda a arte?", a: "Sim. O adesivo é totalmente personalizado com a identidade visual da sua marca, incluindo logo, cores, textos, QR Code e outros elementos gráficos." },
      { q: "Qual o material do adesivo?", a: "Este modelo é produzido em papel couchê adesivo 80g, com impressão colorida e acabamento sem brilho." },
      { q: "O adesivo é resistente à água?", a: "Não. Este modelo é produzido em papel couchê adesivo e não é resistente à água. Para manter a qualidade da impressão, recomendamos utilizá-lo em superfícies secas e evitar contato com umidade." },
      { q: "Posso fazer esse adesivo em outro tamanho ou formato?", a: "Sim. Caso você precise de outro tamanho ou formato, consulte nossa equipe. Temos outras opções de adesivos personalizados que podem atender melhor ao seu projeto." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
    youtubeVideoId: "Ektei2vCGss",
  },
  {
    slug: "adesivo-fecha-sacola-personalizado-couche-10x4-cm",
    productIds: ["adesivo-fecha-sacola-couche"],
    displayName: "Adesivo Fecha Sacola Personalizado Couchê 10x4 cm",
    categorySlug: "adesivos-personalizados-para-semijoias",
    categoryLabel: "Adesivos",
    seoTitle: "Adesivo Fecha Sacola Personalizado Couchê 10x4 cm | GS Cartões",
    seoDescription: "Adesivo fecha sacola personalizado em papel couchê 10x4 cm. Lacre elegante para sacolas de papel com a sua marca.",
    longDescription: [
      "O Adesivo Fecha Sacola Personalizado Couchê 10x4 cm foi desenvolvido para lacrar sacolas de papel de forma prática e elegante, agregando identidade visual à sua marca no momento da entrega.",
      "Seu formato permite que cada extremidade fique fixada em um lado da sacola, proporcionando um fechamento seguro e um acabamento diferenciado. A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code e outros elementos personalizados.",
      "Produzido em papel couchê adesivo 80g, conta com impressão colorida na frente e acabamento sem brilho."
    ],
    faqs: [
      { q: "Como funciona o adesivo fecha sacola?", a: "Esse modelo foi desenvolvido para unir as duas abas da sacola, funcionando como um lacre. Além de fechar a embalagem, ele valoriza a apresentação da marca e proporciona um acabamento mais profissional." },
      { q: "Posso personalizar toda a arte?", a: "Sim. O adesivo é totalmente personalizado com a identidade visual da sua marca, incluindo logo, cores, textos, QR Code e outros elementos gráficos." },
      { q: "Qual o material do adesivo?", a: "Este modelo é produzido em papel couchê adesivo 80g, com impressão colorida na frente e acabamento sem brilho." },
      { q: "O adesivo é resistente à água?", a: "Não. Este modelo é produzido em papel couchê adesivo e não é resistente à água. Para manter a qualidade da impressão, recomendamos utilizá-lo em superfícies secas e evitar contato com umidade." },
      { q: "Posso fazer esse adesivo em outro tamanho?", a: "Sim. Caso você precise de outro tamanho ou formato, consulte nossa equipe. Podemos avaliar a melhor opção para o seu projeto." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "O Adesivo Fecha Sacola Personalizado Sulfite 10x5 cm é uma solução prática para fechar sacolas e embalagens, agregando identidade visual à sua marca e proporcionando uma apresentação mais organizada na entrega dos produtos.",
      "Sua área permite incluir logo, redes sociais, QR Code, informações de contato e outros elementos personalizados, tornando cada embalagem uma oportunidade de fortalecer sua marca.",
      "Produzido em papel sulfite adesivo 80g, conta com impressão colorida na frente e acabamento sem brilho."
    ],
    faqs: [
      { q: "Onde posso utilizar esse adesivo?", a: "Ele é ideal para fechar sacolas de papel, embalagens, envelopes, papel de seda e diversos outros tipos de embalagem." },
      { q: "Posso personalizar toda a arte?", a: "Sim. O adesivo é totalmente personalizado com a identidade visual da sua marca, incluindo logo, cores, textos, QR Code e outros elementos gráficos." },
      { q: "Qual o material do adesivo?", a: "Este modelo é produzido em papel sulfite adesivo 80g, com impressão colorida na frente e acabamento sem brilho." },
      { q: "O adesivo é resistente à água?", a: "Não. Este modelo é produzido em papel sulfite adesivo e não é resistente à água. Para manter a qualidade da impressão, recomendamos utilizá-lo em superfícies secas e evitar contato com umidade." },
      { q: "Posso fazer esse adesivo em outro tamanho?", a: "Sim. Caso você precise de outro tamanho, consulte nossa equipe. Podemos avaliar a melhor opção para o seu projeto." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "A Etiqueta Personalizada para Roupas 8,8x4,8 cm é ideal para valorizar camisetas, vestidos, calças, moda infantil, moda fitness e diversos outros produtos do vestuário. Além de identificar sua marca, ela pode trazer informações como tamanho, composição, preço, redes sociais e orientações ao cliente.",
      "A arte é totalmente personalizada conforme a identidade visual da sua marca, permitindo criar uma apresentação profissional e agregar valor às suas peças.",
      "Produzida em papel couchê 250g, possui impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Para quais produtos essa etiqueta é indicada?", a: "Ela é indicada para camisetas, vestidos, calças, bermudas, moda infantil, moda fitness, moda íntima e diversos outros produtos do vestuário." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo incluir logo, tabela de tamanhos, composição, preço, QR Code, redes sociais, informações da marca e outros dados." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão possui brilho total na frente, mas também pode ser produzido com acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você procura uma etiqueta mais rígida e com maior percepção de qualidade, o papel couchê 300g é uma excelente opção. Ele oferece mais resistência e um acabamento ainda mais premium." },
      { q: "Posso alterar os furos e cortes da etiqueta?", a: "Sim. Os furos e cortes podem ser personalizados conforme a necessidade do seu produto. Consulte nossa equipe para verificar as opções disponíveis." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Caso já tenha a arte pronta, basta enviá-la seguindo nossas orientações. Se preferir, nossa equipe também pode desenvolver uma arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Mini Etiqueta Personalizada para Roupas 4,8x4,25 cm é ideal para peças menores ou marcas que preferem uma apresentação mais discreta. Ela pode ser utilizada em roupas infantis, moda íntima, acessórios, camisetas, bonés e diversos outros produtos do vestuário.",
      "Mesmo em um formato compacto, é possível incluir informações importantes como logo, tamanho, preço, QR Code, redes sociais e outros dados da sua marca.",
      "Produzida em papel couchê 250g, possui impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Para quais produtos essa etiqueta é indicada?", a: "Ela é indicada para roupas infantis, moda íntima, camisetas, acessórios, bonés e outras peças que pedem uma etiqueta menor e mais discreta." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo incluir logo, tabela de tamanhos, composição, preço, QR Code, redes sociais e outras informações da sua marca." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão possui brilho total na frente, mas também pode ser produzido com acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você procura uma etiqueta mais rígida e com maior percepção de qualidade, o papel couchê 300g é uma excelente opção. Ele oferece mais resistência e um acabamento ainda mais premium." },
      { q: "Posso alterar os furos e cortes da etiqueta?", a: "Sim. Os furos e cortes podem ser personalizados conforme a necessidade do seu produto. Consulte nossa equipe para verificar as opções disponíveis." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Caso já tenha a arte pronta, basta enviá-la seguindo nossas orientações. Se preferir, nossa equipe também pode desenvolver uma arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Etiqueta Personalizada para Roupas em Formato Especial é ideal para marcas que desejam criar uma apresentação diferenciada para suas peças. O corte personalizado permite desenvolver etiquetas em formatos exclusivos, tornando a identidade da sua marca ainda mais marcante.",
      "É uma excelente opção para camisetas, vestidos, moda infantil, moda fitness, moda íntima e diversos outros produtos do vestuário, agregando valor à apresentação da peça.",
      "Produzida em papel couchê 250g, possui impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "O que é uma etiqueta em formato especial?", a: "É uma etiqueta produzida com corte personalizado. Em vez do formato retangular tradicional, ela pode seguir um desenho exclusivo, deixando a apresentação da sua marca muito mais diferenciada." },
      { q: "Posso criar qualquer formato?", a: "Sim. Desenvolvemos etiquetas com cortes personalizados em diversos formatos. O tamanho padrão deste produto é de até 8,8 x 4,8 cm, mas, se você precisar de uma etiqueta maior ou em um formato diferenciado, também podemos produzir. Nesse caso, basta entrar em contato com nossa equipe para solicitar um orçamento personalizado." },
      { q: "Para quais produtos essa etiqueta é indicada?", a: "Ela é indicada para camisetas, vestidos, calças, moda infantil, moda fitness, moda íntima e diversos outros produtos do vestuário." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo incluir logo, tabela de tamanhos, composição, preço, QR Code, redes sociais, informações da marca e outros dados." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão possui brilho total na frente, mas também pode ser produzido com acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você procura uma etiqueta mais rígida e com maior percepção de qualidade, o papel couchê 300g é uma excelente opção. Ele oferece mais resistência e um acabamento ainda mais premium." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Caso já tenha a arte pronta, basta enviá-la seguindo nossas orientações. Se preferir, nossa equipe também pode desenvolver uma arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "A Tag Personalizada para Laços e Tiaras 9x6,5 cm foi desenvolvida para valorizar a apresentação de laços, tiaras e outros acessórios de cabelo. Além de organizar a exposição das peças, ela fortalece a identidade visual da sua marca e proporciona uma apresentação mais profissional.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code, informações de contato, instruções de conservação e outros elementos personalizados.",
      "Produzida em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, com acabamento fosco e outros acabamentos opcionais, mediante consulta."
    ],
    faqs: [
      { q: "Quais acessórios posso utilizar nessa tag?", a: "Ela é indicada para laços, tiaras e diversos outros acessórios de cabelo que possam ser fixados nos cortes da tag." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível para a identidade visual da sua marca." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você trabalha com laços, tiaras ou acessórios maiores e mais pesados, recomendamos a produção em papel couchê 300g. Por ser mais rígido, ele oferece maior resistência e ajuda a evitar que a tag dobre ou rasgue durante o manuseio." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão é produzido com brilho total na frente, mas também é possível solicitar acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Os furos e cortes podem ser adaptados conforme o tipo de acessório que será utilizado. Consulte nossa equipe para verificar as possibilidades para o seu projeto." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." }
    ],
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
      "A Tag Personalizada para Laços e Tiaras 7,5x9,5 cm é ideal para valorizar a apresentação de laços, tiaras e outros acessórios de cabelo. Seu formato especial chama a atenção no expositor e ajuda a destacar ainda mais seus produtos, proporcionando uma apresentação diferenciada.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code, informações de contato, instruções de conservação e outros elementos personalizados.",
      "Produzida em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, com acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Quais acessórios posso utilizar nessa tag?", a: "Ela é indicada para laços, tiaras e diversos outros acessórios de cabelo que possam ser fixados nos cortes da tag." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível para a identidade visual da sua marca." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você trabalha com laços, tiaras ou acessórios maiores e mais pesados, recomendamos a produção em papel couchê 300g. Por ser mais rígido, ele oferece maior resistência e ajuda a evitar que a tag dobre ou rasgue durante o manuseio." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão é produzido com brilho total na frente, mas também é possível solicitar acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Os furos e cortes podem ser adaptados conforme o tipo de acessório que será utilizado. Consulte nossa equipe para verificar as possibilidades para o seu projeto." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Tag Personalizada para Laços e Tiaras 15x4,82 cm foi desenvolvida especialmente para a apresentação de tiaras, faixas e acessórios alongados. Seu formato permite acomodar a peça de forma organizada, destacando tanto o produto quanto a identidade visual da sua marca.",
      "A arte é desenvolvida conforme a identidade visual da sua marca, permitindo incluir logo, redes sociais, QR Code, informações de contato e outros elementos personalizados.",
      "Produzida em papel couchê 250g, conta com impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, com acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Para quais produtos essa tag é indicada?", a: "Ela é ideal para tiaras, faixas e outros acessórios de cabelo alongados que utilizam o corte central da tag para fixação." },
      { q: "Qual a função do corte central?", a: "O corte central foi desenvolvido para facilitar o encaixe da tiara ou da faixa, mantendo a peça bem posicionada durante a exposição e a venda." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar todo o espaço disponível para a identidade visual da sua marca." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você trabalha com tiaras, faixas ou acessórios maiores e mais pesados, recomendamos a produção em papel couchê 300g. Por ser mais rígido, ele oferece maior resistência e ajuda a evitar que a tag dobre ou rasgue durante o manuseio." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão é produzido com brilho total na frente, mas também é possível solicitar acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis e os valores." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Os furos e cortes podem ser adaptados conforme o tipo de acessório que será utilizado. Consulte nossa equipe para verificar as possibilidades para o seu projeto." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Se você já possui a arte pronta, basta enviá-la conforme as orientações da nossa equipe. Caso não tenha, desenvolvemos a arte conforme a identidade visual da sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Tag Personalizada para Laços e Tiaras 15x8,8 cm é uma excelente opção para quem trabalha com laços maiores, tiaras e acessórios que precisam de uma apresentação mais completa. Além de acomodar a peça com segurança, o formato oferece mais espaço para destacar a identidade da sua marca e incluir informações importantes.",
      "A arte é totalmente personalizada, permitindo adicionar logo, redes sociais, QR Code, cuidados com o produto e outros elementos conforme a identidade visual da sua marca.",
      "Produzida em papel couchê 250g, possui impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Para quais produtos essa tag é indicada?", a: "Ela é indicada para laços maiores, tiaras, faixas e acessórios de cabelo que precisam de uma base maior para apresentação e exposição." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo aproveitar toda a área da tag para identidade visual, informações da marca, redes sociais, QR Code e instruções de uso." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você trabalha com peças maiores ou mais pesadas, recomendamos a produção em papel couchê 300g. A gramatura maior oferece mais rigidez e ajuda a evitar que a tag dobre ou rasgue durante o manuseio." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão possui brilho total na frente, mas também pode ser produzido com acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Os furos e cortes podem ser adaptados conforme o tipo de acessório que será utilizado. Consulte nossa equipe para verificar as possibilidades." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Caso já tenha a arte pronta, basta enviá-la seguindo nossas orientações. Se preferir, nossa equipe também pode desenvolver a arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "A Tag Personalizada para Laços e Tiaras 12,5x8,8 cm é ideal para quem deseja expor dois laços na mesma tag, criando uma apresentação mais organizada e atrativa para a cliente. Também pode ser utilizada com tiaras e outros acessórios de cabelo, oferecendo praticidade e valorizando suas peças no display.",
      "A arte é totalmente personalizada com a identidade visual da sua marca, podendo incluir logo, redes sociais, QR Code, informações de contato e outros elementos.",
      "Produzida em papel couchê 250g, possui impressão colorida frente e verso e brilho total na frente. Também pode ser produzida em papel 300g, acabamento fosco e verniz localizado, mediante consulta.",
    ],
    faqs: [
      { q: "Para quais produtos essa tag é indicada?", a: "Ela é indicada para laços, tiaras, faixas e outros acessórios de cabelo. Seu formato também é excelente para apresentar dois laços pequenos ou médios na mesma tag." },
      { q: "Posso personalizar frente e verso?", a: "Sim. A impressão é colorida na frente e no verso, permitindo incluir logo, redes sociais, QR Code, informações da marca, cuidados com o produto e outros elementos da sua identidade visual." },
      { q: "Quando vale a pena escolher o papel 300g?", a: "Se você trabalha com peças maiores ou mais pesadas, recomendamos produzir a tag em papel couchê 300g. A gramatura maior oferece mais rigidez e ajuda a evitar que a tag dobre ou rasgue durante o manuseio." },
      { q: "Posso escolher entre acabamento com brilho ou fosco?", a: "Sim. O modelo padrão possui brilho total na frente, mas também pode ser produzido com acabamento fosco. Consulte nossa equipe para conhecer as opções disponíveis." },
      { q: "Posso alterar os furos e cortes da tag?", a: "Sim. Os furos e cortes podem ser adaptados conforme o tipo de acessório que será utilizado. Consulte nossa equipe para verificar as possibilidades." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Caso já tenha a arte pronta, basta enviá-la seguindo nossas orientações. Se preferir, nossa equipe também pode desenvolver uma arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Kit Básico de Tags 1 é a opção ideal para quem está iniciando sua marca e quer adquirir os principais modelos de tags em um único pedido, com excelente custo-benefício.",
      "O kit reúne os formatos mais utilizados para brincos, anéis e acessórios, mantendo uma identidade visual padronizada em toda a linha de produtos.",
      "Todas as artes são desenvolvidas de forma personalizada para a sua marca, garantindo um resultado exclusivo e profissional em todos os modelos do kit.",
      "As tags são produzidas em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente.",
      "Informações Técnicas:\n\n• Papel couchê 250g\n• Impressão colorida frente e verso\n• Brilho total na frente\n• Arte 100% personalizada para a sua marca\n• A mesma identidade visual é aplicada em todos os modelos do kit\n• Não trabalhamos com fidelização de cores\n• Não é possível alterar cortes, furos ou substituir modelos das tags\n• Composição do kit:\n  - 100 Tags 4,25 × 4,8 cm (2 furos)\n  - 100 Tags 8,8 × 4,8 cm (2 furos)\n  - 100 Mini Tags 3,9 × 1,7 cm\n  - 200 Tags 8,8 × 4,8 cm (6 furos)\n  - 100 Tags 4,25 × 4,8 cm\n• Total: 600 tags\n• Prazo de produção: 5 a 6 dias úteis após a aprovação da arte",
    ],
    faqs: [
      { q: "As tags são personalizadas com a minha marca?", a: "Sim. Todas as tags do kit são produzidas com uma arte exclusiva desenvolvida para a identidade visual da sua marca." },
      { q: "Posso trocar um dos modelos do kit?", a: "Não. Os modelos que compõem o kit são fixos e não podem ser substituídos." },
      { q: "Posso alterar os furos ou cortes das tags?", a: "Não. Os cortes e furos seguem o padrão de cada modelo e não podem ser modificados." },
      { q: "Cada modelo pode ter uma arte diferente?", a: "Não. Todo o kit utiliza a mesma identidade visual para manter a padronização da sua marca em todos os formatos." },
      { q: "Posso produzir esse kit em papel 300g ou acabamento fosco?", a: "Não. Este kit é produzido exclusivamente em papel couchê 250g com brilho total na frente." },
      { q: "Qual o prazo de produção?", a: "O prazo é de 5 a 6 dias úteis após a aprovação da arte." },
    ],
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
      "O Kit Completo de Tags 1 reúne os principais modelos de tags e certificados para quem deseja manter um estoque completo de materiais gráficos com excelente custo-benefício.",
      "Todos os materiais são produzidos com artes 100% personalizadas, permitindo que cada modelo tenha uma arte diferente, de acordo com a necessidade da sua marca. O kit mantém apenas os formatos, medidas, cortes e furos pré-definidos.",
      "Produzido em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente, é uma solução prática para quem busca padronização, economia e agilidade na reposição dos materiais.",
      "Informações Técnicas:\n\n• Papel couchê 250g\n• Impressão colorida frente e verso\n• Brilho total na frente\n• Arte 100% personalizada em todos os materiais\n• Cada modelo pode receber uma arte diferente, sem custo adicional\n• Não trabalhamos com fidelização de cores\n• Não é possível alterar os formatos, medidas, cortes ou furos dos modelos que compõem o kit\n• Composição do kit:\n  - 100 Tags 4,25 × 4,8 cm (2 furos)\n  - 200 Certificados 4,25 × 4,8 cm\n  - 200 Tags 8,8 × 4,8 cm (2 furos)\n  - 100 Mini Tags 3,9 × 1,7 cm\n  - 100 Tags 8,8 × 4,8 cm (6 furos)\n  - 100 Tags 4,25 × 4,8 cm\n• Prazo de produção: 5 a 6 dias úteis após a aprovação da arte",
    ],
    faqs: [
      { q: "As artes são personalizadas?", a: "Sim. Todos os materiais do kit são produzidos com artes 100% personalizadas." },
      { q: "Cada modelo pode ter uma arte diferente?", a: "Sim. Você pode utilizar uma arte diferente para cada modelo do kit, sem custo adicional." },
      { q: "Posso alterar os tamanhos das tags?", a: "Não. Os tamanhos são fixos e fazem parte da composição do kit." },
      { q: "Posso alterar os cortes ou furos das tags?", a: "Não. Os cortes e furos seguem o padrão de cada modelo e não podem ser modificados." },
    ],
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
      "O Kit Básico de Tags 2 foi desenvolvido para quem utiliza diferentes modelos de tags no dia a dia e quer comprar tudo de uma só vez, com melhor custo-benefício.",
      "Em vez de adquirir cada modelo separadamente, você recebe um kit com os formatos mais utilizados para brincos, anéis e acessórios, mantendo a identidade visual da sua marca em todas as peças.",
      "As tags são produzidas em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente. Todas as tags do kit podem ser personalizadas com sua arte e informações.",
      "Informações Técnicas:\n\n• Papel couchê 250g\n• Impressão colorida frente e verso\n• Brilho total na frente\n• Uma única arte aplicada em todas as tags do kit\n• Não trabalhamos com fidelização de cores\n• Não é possível alterar cortes, furos ou substituir modelos das tags\n• Composição do kit:\n  - 1.000 Tags 4,25 × 4,8 cm\n  - 1.000 Tags 8,8 × 4,8 cm\n  - 1.000 Mini Tags 3,9 × 1,7 cm\n  - 1.000 Tags 8,8 × 4,8 cm (6 furos)\n  - 1.000 Tags 4,25 × 4,8 cm (2 furos)\n• Prazo de produção: 5 a 6 dias úteis após a aprovação da arte",
    ],
    faqs: [
      { q: "Quais modelos acompanham o kit?", a: "O Kit Básico de Tags 2 contém cinco modelos diferentes, com 1.000 unidades de cada, totalizando 5.000 tags." },
      { q: "Posso trocar um dos modelos do kit?", a: "Não. Os modelos que compõem o kit são fixos e não podem ser substituídos." },
      { q: "Posso alterar os furos ou cortes das tags?", a: "Não. Os cortes e furos já acompanham o padrão de cada modelo e não podem ser modificados." },
      { q: "Cada modelo pode ter uma arte diferente?", a: "Sim, todas as artes podem ser personalizadas conforme seu gosto." },
      { q: "Posso produzir esse kit em papel 300g ou acabamento fosco?", a: "Não. Este kit é produzido exclusivamente em papel couchê 250g com brilho total na frente." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Você pode enviar sua arte pronta ou solicitar que nossa equipe desenvolva uma para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Kit Completo de Tags 2 foi desenvolvido para marcas que desejam manter um estoque completo de materiais gráficos, reunindo os principais modelos de tags e certificados em um único pedido, com excelente custo-benefício.",
      "Todas as peças são produzidas com arte 100% personalizada para a identidade visual da sua marca, garantindo uma apresentação profissional e padronizada em todos os formatos.",
      "Produzido em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente, o kit oferece praticidade para quem vende com frequência e quer manter seus materiais sempre disponíveis.",
      "Informações Técnicas",
      "Papel couchê 250g. Impressão colorida frente e verso. Brilho total na frente.",
      "Arte 100% personalizada para a sua marca. A mesma identidade visual é aplicada em todos os modelos do kit. Não trabalhamos com fidelização de cores.",
      "Não é possível alterar os modelos, cortes ou furos das tags que compõem o kit.",
      "Composição do kit: 1.000 Tags 4,25 × 4,8 cm (2 furos), 1.000 Certificados 4,25 × 4,8 cm, 1.000 Tags 8,8 × 4,8 cm (2 furos), 1.000 Mini Tags 3,9 × 1,7 cm, 1.000 Tags 8,8 × 4,8 cm (6 furos), 1.000 Tags 4,25 × 4,8 cm. Total: 6.000 materiais gráficos.",
      "Prazo de produção: 5 a 6 dias úteis após a aprovação da arte.",
    ],
    faqs: [
      { q: "Os materiais são personalizados com a minha marca?", a: "Sim. Todos os materiais do kit são produzidos com uma arte exclusiva desenvolvida para a identidade visual da sua marca." },
      { q: "Posso trocar um dos modelos do kit?", a: "Não. A composição do kit é fixa e os modelos não podem ser substituídos." },
      { q: "Posso alterar os furos ou cortes das tags?", a: "Não. Os cortes e furos seguem o padrão de cada modelo e não podem ser modificados." },
      { q: "Cada modelo pode ter uma arte diferente?", a: "Sim, a arte de cada material é feita conforme seu desejo." },
      { q: "Posso produzir esse kit em papel 300g ou acabamento fosco?", a: "Não. Este kit é produzido exclusivamente em papel couchê 250g com brilho total na frente." },
      { q: "Posso enviar minha própria arte?", a: "Sim. Você pode enviar sua arte pronta ou solicitar que nossa equipe desenvolva uma arte personalizada para sua marca." },
      { q: "Qual o prazo de produção?", a: "O prazo é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Como funciona o pagamento?", a: "Você pode pagar em até 6x sem juros no cartão ou aproveitar 10% de desconto no pagamento via PIX." },
    ],
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
      "O Kit Essencial 1 reúne os três formatos de tags mais utilizados por marcas de semijoias, oferecendo praticidade e economia para quem está começando ou deseja manter um estoque dos modelos indispensáveis.",
      "Todos os materiais são produzidos com artes 100% personalizadas, permitindo que cada modelo tenha uma arte diferente, de acordo com a identidade da sua marca. O kit mantém apenas os formatos, medidas, cortes e furos pré-definidos.",
      "Produzido em papel couchê 250g, com impressão colorida frente e verso e brilho total na frente, é uma solução prática para quem busca qualidade profissional e excelente custo-benefício.",
      "Informações Técnicas:\n\n• Papel couchê 250g\n• Impressão colorida frente e verso\n• Brilho total na frente\n• Arte 100% personalizada em todos os materiais\n• Cada modelo pode receber uma arte diferente, sem custo adicional\n• Não trabalhamos com fidelização de cores\n• Não é possível alterar os formatos, medidas, cortes ou furos dos modelos que compõem o kit\n• Kit inclui:\n  - 100 Tags 4,25 × 4,8 cm\n  - 100 Tags 8,8 × 4,8 cm (2 furos)\n  - 100 Tags 8,8 × 4,8 cm (6 furos)\n• Prazo de produção: 5 a 6 dias úteis após a aprovação da arte",
    ],
    faqs: [
      { q: "As artes são personalizadas?", a: "Sim. Todos os materiais do kit são produzidos com artes 100% personalizadas." },
      { q: "Cada modelo pode ter uma arte diferente?", a: "Sim. Você pode utilizar uma arte diferente para cada modelo do kit, sem custo adicional." },
      { q: "Posso alterar os tamanhos das tags?", a: "Não. Os tamanhos são fixos e fazem parte da composição do kit." },
      { q: "Posso alterar os cortes ou furos das tags?", a: "Não. Os cortes e furos seguem o padrão de cada modelo e não podem ser modificados." },
      { q: "Posso usar minha própria logo?", a: "Sim. Você pode enviar sua logo e demais informações da marca para que os materiais sejam personalizados." },
      { q: "O prazo de produção é de quanto?", a: "O prazo de produção é de 5 a 6 dias úteis após a aprovação da arte." },
      { q: "Qual o prazo de entrega?", a: "O prazo de entrega varia conforme o CEP e a modalidade de frete escolhida no carrinho." },
      { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos PIX com 10% de desconto e cartão de crédito em até 6x sem juros." },
      { q: "Vocês enviam para todo o Brasil?", a: "Sim. Enviamos para qualquer região do Brasil." },
    ],
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
