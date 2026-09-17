import { ShoppingCart, MessageCircle, Palette, Truck, PenTool, Package } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Escolha os produtos",
    description: "Navegue pelo catálogo, escolha o modelo e a quantidade e adicione os produtos ao carrinho. Em cada página você encontra as principais informações daquela opção.",
  },
  {
    icon: MessageCircle,
    title: "2. Envie pelo WhatsApp",
    description: "Envie seu carrinho pelo WhatsApp para confirmarmos os itens, tirar dúvidas e seguir com o pedido.",
  },
  {
    icon: Palette,
    title: "3. Acabamentos e detalhes",
    description: "Se o produto tiver opções de papel, acabamento, furos, cortes ou outras alterações, a gente apresenta as possibilidades disponíveis para aquele modelo.",
  },
  {
    icon: Truck,
    title: "4. Frete e pagamento",
    description: "Calculamos o frete para o seu CEP e confirmamos o valor total e as formas de pagamento antes de fechar o pedido.",
  },
  {
    icon: PenTool,
    title: "5. Criação e aprovação",
    description: "Aplicamos sua logo, cores, textos e informações no material escolhido. Você recebe a arte para conferir e aprovar antes da produção. A arte é personalizada de acordo com a identidade e as preferências da sua marca.",
  },
  {
    icon: Package,
    title: "6. Produção e envio",
    description: "Depois da aprovação, seu pedido entra em produção. O prazo de produção é, em média, de 5 a 6 dias úteis. Após o envio, o prazo de transporte varia conforme o CEP.",
  },
];

const HowItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Como funciona a compra
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg">
            Escolha seus materiais pelo site e envie o pedido para a gente pelo WhatsApp. A partir daí, conferimos os detalhes com você antes da criação e da produção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border-2 border-primary/20 rounded-2xl p-8 text-center bg-card hover:border-primary/40 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
