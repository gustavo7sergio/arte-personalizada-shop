import { ShoppingCart, MessageCircle, Palette, Truck, PenTool, Package } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Escolha os produtos",
    description: "Navegue pelo nosso catálogo e adicione os produtos na quantidade que deseja ao carrinho. Todos os materiais são personalizados com sua marca.",
  },
  {
    icon: MessageCircle,
    title: "2. Envie pelo WhatsApp",
    description: "Envie seu pedido pelo WhatsApp para terminarmos de concluir o seu pedido. Nosso time está pronto para ajudar com dúvidas e personalização.",
  },
  {
    icon: Palette,
    title: "3. Acabamentos e detalhes",
    description: "Discuta opções de acabamento como couchê 300g, papel fosco, verniz localizado e outros detalhes especiais.",
  },
  {
    icon: Truck,
    title: "4. Cálculo de frete",
    description: "Calculamos o frete para sua localização e fechamos o pedido com o valor total e forma de pagamento.",
  },
  {
    icon: PenTool,
    title: "5. Criação e aprovação",
    description: "Criamos as artes do seu pedido 100% personalizados e enviamos para sua aprovação antes de iniciar a produção. Colocamos sua logo, cores e informações que desejar.",
  },
  {
    icon: Package,
    title: "6. Produção e entrega",
    description: "Produzimos seu pedido em 5 a 6 dias úteis e realizamos a entrega dentro do prazo combinado.",
  },
];

const HowItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Como funciona a compra
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg">
            Nosso processo é simples e transparente. Desde a escolha dos produtos até a entrega, acompanhamos cada etapa para garantir sua satisfação.
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
