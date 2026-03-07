import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais materiais a GS Cartões faz?",
    answer: `Trabalhamos com materiais gráficos personalizados para marcas de semijoias, bijuterias e prata.\n\nEntre os principais materiais estão:\n• Tags para acessórios (brincos, colares, anéis, conjuntos etc.)\n• Cartões de visita\n• Cartões de agradecimento\n• Certificados de garantia\n• Adesivos personalizados\n• Sacolinhas personalizadas\n• Caixinhas personalizadas\n• Etiquetas e outros materiais de apoio à venda\n\nTodos os materiais são personalizados com a identidade da sua marca.`,
  },
  {
    question: "Os materiais são personalizados com minha marca?",
    answer: `Sim. Todos os materiais são personalizados com a identidade da sua marca.\n\nVocê pode incluir:\n• Sua logo\n• Cores da marca\n• Redes sociais\n• Frases ou informações importantes\n\nNosso objetivo é que os materiais representem a essência da sua marca.`,
  },
  {
    question: "Preciso enviar a arte pronta?",
    answer: `Não.\n\nVocê só precisa enviar:\n• Sua logo\n• As informações que deseja colocar no material\n\nNós criamos a arte para você.`,
  },
  {
    question: "Vocês criam logo também?",
    answer: `Sim.\n\nCaso você ainda não tenha logo, podemos desenvolver uma para sua marca.\n\nA criação de logo é um serviço separado, contratado à parte da produção dos materiais gráficos.`,
  },
  {
    question: "Posso pedir alterações na arte?",
    answer: `Sim.\n\nVocê pode solicitar alterações até que a arte fique exatamente como você imaginou.\n\nA produção dos materiais só começa depois da aprovação da arte.`,
  },
  {
    question: "Vocês criam materiais no formato que eu quiser?",
    answer: `Sim, principalmente quando falamos de tags e cartões.\n\nEsses materiais permitem maior liberdade de personalização, então muitas vezes conseguimos adaptar formato, tamanho, furos e cortes para atender melhor ao tipo de acessório que você vende.\n\nSe você tiver um formato específico em mente, pode nos mostrar a ideia e verificamos se é possível produzir.`,
  },
  {
    question: "Vocês entregam na minha cidade?",
    answer: `Sim.\n\nAtendemos todo o Brasil.\n\nO envio é feito por transportadora ou Correios, e o prazo de entrega depende do CEP da sua cidade.`,
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: `O processo normalmente funciona assim:\n\n• Criação da arte: até 1 dia útil\n• Produção dos materiais: 5 a 6 dias úteis\n\nDepois disso, o pedido é enviado para entrega.`,
  },
  {
    question: "Qual papel vocês usam nos materiais?",
    answer: `Na maioria dos materiais utilizamos papel couchê 250g.\n\nTambém oferecemos a opção de papel couchê 300g, que é mais grosso e possui custo adicional.`,
  },
  {
    question: "Quais acabamentos vocês oferecem?",
    answer: `A maioria dos materiais possui verniz total na frente.\n\nTambém oferecemos acabamentos especiais, como:\n• Fosco\n• Fosco com verniz localizado\n• Holográfico\n• Hot stamping (dourado, prata, azul, rosa e outras opções)\n\nA disponibilidade pode variar conforme o material escolhido.`,
  },
  {
    question: "As cores ficam exatamente iguais à minha logo?",
    answer: `Os materiais são produzidos com base nas cores da sua identidade visual, porém não garantimos fidelização exata de cores.\n\nIsso acontece porque:\n• Diferentes tipos de papel podem reagir de formas diferentes à tinta\n• Cada material pode ter pequenas variações de impressão\n• Acabamentos também podem influenciar na percepção da cor\n\nPor isso, podem ocorrer pequenas variações de tonalidade entre materiais ou lotes diferentes.`,
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: `Trabalhamos com:\n\n• Pix — 10% de desconto\n• Cartão de crédito — até 6x sem juros`,
  },
  {
    question: "Como faço para comprar pelo site?",
    answer: `Para comprar pelo site, basta:\n\n1. Escolher os produtos que deseja\n2. Adicionar ao carrinho nas quantidades que precisar\n3. Clicar no botão "Fechar pedido"\n\nAo clicar nesse botão, você será direcionado para o WhatsApp da GS Cartões.`,
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Tira dúvidas
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg">
            Confira as respostas para as perguntas mais frequentes dos nossos clientes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-primary/20 rounded-2xl px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="font-display font-bold text-foreground text-left hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
