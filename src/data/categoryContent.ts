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
      "As tags de acessórios personalizadas da GS Cartões são desenvolvidas especialmente para empreendedoras de semijoias, prata 925 e bijuterias finas que querem entregar uma experiência sofisticada em cada peça vendida. Cada tag é impressa em papel de alta gramatura, com cortes especiais para brincos, anéis, colares e pulseiras, valorizando o produto desde a vitrine física até o pós-venda no Instagram.",
      "Use as tags como porta-acessório no momento da venda, como identificação de coleção, etiqueta de preço discreta ou simplesmente como peça de marca dentro da embalagem. Lojistas que vendem em feiras, sacoleiras, revendedoras e marcas que enviam pelo correio aproveitam o formato para padronizar o visual e transmitir profissionalismo mesmo com pequenas tiragens.",
      "Você pode personalizar a frente e o verso da tag com a sua logo, paleta de cores, slogan, instruções de cuidado com a semijoia, link do Instagram e até QR Code direcionando para o seu catálogo no WhatsApp. Trabalhamos com modelos para brincos individuais, trios de brincos, conjuntos de brincos + colar, anéis, pulseiras e linhas mistas, permitindo montar um kit visual coerente para toda a sua loja.",
      "Para quem revende semijoias, uma tag bem feita aumenta o valor percebido da peça, reduz devoluções por confusão de modelo e ajuda a fidelizar a cliente: ela guarda a tag, lembra da marca e volta a comprar. Em prata 925, a tag ainda funciona como selo de garantia e procedência, reforçando que o produto é antialérgico e de qualidade.",
      "Todos os modelos podem ser produzidos em quantidades a partir de 100 unidades, com opções de furo para fita, ilhós e laminação fosca ou brilho. O prazo médio de produção é de 7 a 10 dias úteis após a aprovação da arte, e o envio é feito para todo o Brasil via Correios ou transportadora.",
    ],
    faqs: [
      {
        q: "Qual o pedido mínimo de tags personalizadas?",
        a: "A maioria dos modelos parte de 100 unidades. Quanto maior a quantidade, menor o valor por unidade — consulte a tabela de preços acima.",
      },
      {
        q: "Posso ter tags diferentes para brincos, anéis e colares no mesmo pedido?",
        a: "Sim. Você pode combinar modelos diferentes (brincos, trio de brincos, anel, pulseira, colar) dentro do mesmo pedido, respeitando a quantidade mínima de cada modelo.",
      },
      {
        q: "As tags servem para prata 925 e bijuterias?",
        a: "Sim. Os formatos foram pensados para semijoias, prata 925 e bijuterias finas. Você pode incluir selo de garantia, instruções de uso e identificação do material.",
      },
      {
        q: "Vocês criam a arte ou preciso enviar pronta?",
        a: "Você pode enviar sua logo e nós montamos a arte da tag, ou enviar o arquivo finalizado. Se ainda não tem logo, oferecemos o serviço de criação na página Criação de Logo.",
      },
    ],
  },

  sacolinhas: {
    seoTitle: "Sacolinhas Personalizadas para Semijoias e Bijuterias — GS Cartões",
    seoDescription:
      "Sacolinhas de papel, plástico e caixinhas personalizadas com sua logo para entregar semijoias, prata e bijuterias com a cara da sua marca. Envio nacional.",
    intro: [
      "As sacolinhas personalizadas da GS Cartões transformam o momento da entrega em uma extensão da sua marca. Pensadas especificamente para empreendedoras de semijoias, prata 925 e bijuterias finas, são produzidas em papel kraft, papel offset branco, plástico personalizado e também em formato de caixinha rígida, atendendo desde a venda no Instagram até a loja física.",
      "Cada sacolinha pode ser personalizada com a sua logo, cores da marca, frase de assinatura, dados de contato e ícones das redes sociais. Você escolhe o tamanho ideal para o tipo de peça que mais vende: sacolinhas pequenas para um par de brincos, médias para colares e conjuntos, e tamanhos maiores para kits e presentes mais robustos.",
      "Para quem vende semijoias por encomenda, a sacolinha personalizada substitui a embalagem genérica de plástico transparente e cria a sensação de presente. A cliente recebe, fotografa, posta nos stories e marca a sua loja — virando vitrine espontânea. Em lojas físicas, ela padroniza o atendimento e ajuda a fechar a venda com mais valor percebido.",
      "Os modelos de caixinha rígida são indicados para peças de maior ticket, lançamentos e ações de fim de ano. Já as sacolas de plástico personalizadas funcionam muito bem para revenda em pronta entrega, com bom custo por unidade. Todas as opções podem ser combinadas com tags, cartões de agradecimento e adesivos de lacre para compor um kit de embalagem completo.",
      "A produção é feita sob demanda, com tiragens a partir de 100 unidades dependendo do modelo. O prazo médio é de 10 a 15 dias úteis após a aprovação da arte, e o envio é realizado para todo o Brasil. Você ainda pode reaproveitar a arte aprovada em pedidos futuros, mantendo a identidade da marca consistente.",
    ],
    faqs: [
      {
        q: "Qual a diferença entre sacola de papel, plástico e caixinha?",
        a: "Papel transmite sofisticação e é ideal para semijoias e prata. Plástico tem ótimo custo-benefício para grandes volumes e revenda. Caixinhas rígidas são indicadas para peças de maior valor e ações especiais.",
      },
      {
        q: "Posso pedir tamanhos diferentes no mesmo pedido?",
        a: "Sim. Você pode misturar tamanhos (P, M, G) dentro do mesmo modelo, respeitando a quantidade mínima de cada um.",
      },
      {
        q: "Vocês entregam em todo o Brasil?",
        a: "Sim. Enviamos para todo o território nacional via Correios ou transportadora, com frete calculado pelo CEP no momento do orçamento.",
      },
      {
        q: "É possível incluir alça de cetim ou cordão?",
        a: "Sim. Vários modelos permitem alça de cetim, cordão trançado ou alça de fita personalizada — consulte as opções na descrição de cada produto.",
      },
    ],
  },

  cartoes: {
    seoTitle: "Cartões Personalizados para Semijoias — Visita, Garantia e Agradecimento",
    seoDescription:
      "Cartões personalizados de visita, garantia, agradecimento e fidelidade para marcas de semijoias, prata 925 e bijuterias. Arte exclusiva e envio para todo o Brasil.",
    intro: [
      "Os cartões personalizados da GS Cartões são desenhados para empreendedoras de semijoias, prata 925 e bijuterias que querem profissionalizar cada ponto de contato com a cliente. Trabalhamos com cartões de visita, cartões de garantia, cartões de agradecimento, cartões fidelidade e cartões de instruções de cuidado, todos impressos em papel de alta gramatura com acabamento de luxo.",
      "O cartão de visita é a porta de entrada da sua marca: usado em feiras, eventos e parcerias com outras lojistas, ele carrega logo, contato, Instagram e WhatsApp. O cartão de garantia funciona como selo de procedência para peças de prata 925 e semijoias com banho, transmitindo segurança e reduzindo dúvidas no pós-venda.",
      "Os cartões de agradecimento entram dentro da embalagem junto com a peça, criando aquele momento de encantamento que vira foto nos stories. Você pode personalizar o verso com uma mensagem manuscrita, instruções de cuidado com a semijoia ou cupom de desconto para a próxima compra — virando ferramenta de recompra.",
      "Já o cartão fidelidade ajuda a aumentar o lifetime value da cliente: a cada pedido, um carimbo. Ao completar, ela ganha um brinde, frete grátis ou desconto. É um recurso simples e muito eficaz para marcas de bijuterias e semijoias que vendem com recorrência.",
      "Você escolhe formato (padrão, quadrado, mini), gramatura, acabamento (laminação fosca, brilho, verniz localizado, hot stamping) e quantidade. A arte pode ser criada pela nossa equipe a partir da sua logo ou enviada pronta. O prazo é de 5 a 10 dias úteis após aprovação e o envio é feito para todo o Brasil.",
    ],
    faqs: [
      {
        q: "Qual é o melhor tipo de cartão para começar?",
        a: "Para quem está começando, recomendamos o cartão de visita padrão com laminação fosca: ele resolve apresentação da marca e funciona em qualquer contexto. Depois, vale somar agradecimento e garantia.",
      },
      {
        q: "Posso ter frente e verso com informações diferentes?",
        a: "Sim. Você pode usar frente para logo e identidade e verso para contatos, redes sociais, instruções de cuidado ou mensagem de agradecimento.",
      },
      {
        q: "Vocês oferecem acabamento especial como verniz e hot stamping?",
        a: "Sim. Trabalhamos com laminação fosca, brilho, verniz localizado e hot stamping em dourado, prata e rosé — ideais para reforçar o posicionamento premium da sua marca.",
      },
      {
        q: "Quanto tempo demora para produzir os cartões?",
        a: "O prazo médio é de 5 a 10 dias úteis após a aprovação da arte, dependendo da quantidade e do acabamento escolhido.",
      },
    ],
  },

  adesivos: {
    seoTitle: "Adesivos Personalizados para Semijoias e Embalagens — GS Cartões",
    seoDescription:
      "Adesivos personalizados de lacre, identificação e branding para marcas de semijoias, prata e bijuterias. Vinil resistente, cortes especiais e envio nacional.",
    intro: [
      "Os adesivos personalizados da GS Cartões são feitos para empreendedoras de semijoias, prata 925 e bijuterias que querem padronizar embalagens, lacres e brindes com a identidade da própria marca. Trabalhamos com adesivos em papel couché, vinil branco, vinil transparente e vinil holográfico, com cortes especiais redondos, retangulares e personalizados.",
      "O adesivo de lacre é o uso mais comum: aplicado na sacolinha, caixinha ou envelope, garante que a embalagem chegue intacta à cliente e ainda funciona como assinatura visual da marca. Quando a cliente posta o unboxing, é o adesivo que aparece em destaque — virando mídia espontânea para o seu Instagram.",
      "Você também pode usar adesivos como etiqueta de identificação de peças no estoque, selo de garantia para prata 925, brinde junto ao pedido (cliente cola no celular, no notebook ou no caderno) ou rótulo para potinhos e organizadores. Marcas de bijuterias usam ainda para identificar coleções e edições limitadas.",
      "A personalização inclui logo, cores da marca, frases curtas, ícones, números de coleção e até QR Code direcionando para o WhatsApp ou catálogo. O vinil holográfico, em especial, agrega muito valor percebido por um custo baixo — perfeito para semijoias com banho de ouro e prata 925.",
      "A produção é feita a partir de 100 unidades, com prazo médio de 7 a 12 dias úteis após a aprovação da arte. O envio é realizado para todo o Brasil e você pode combinar diferentes formatos e tamanhos no mesmo pedido para compor um kit de embalagem completo, junto com tags, sacolinhas e cartões.",
    ],
    faqs: [
      {
        q: "Qual o melhor tipo de adesivo para lacre de embalagem?",
        a: "Para sacolas de papel, o couché funciona muito bem. Para plástico e caixinhas, o vinil branco ou transparente garante melhor aderência e durabilidade.",
      },
      {
        q: "Os adesivos resistem à umidade?",
        a: "Os adesivos em vinil são resistentes à umidade e indicados para embalagens que podem pegar chuva ou ficar em ambientes úmidos. O papel couché é indicado para uso interno.",
      },
      {
        q: "Posso pedir adesivos com formato personalizado?",
        a: "Sim. Trabalhamos com corte redondo, retangular, quadrado e formatos personalizados conforme a sua logo ou ícone da marca.",
      },
      {
        q: "Tem opção de adesivo holográfico?",
        a: "Sim. O vinil holográfico é uma das opções mais procuradas por marcas de semijoias por agregar valor percebido com um custo acessível.",
      },
    ],
  },
};
