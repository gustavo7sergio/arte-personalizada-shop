import { ShoppingCart, MessageCircle, Palette, Truck, CheckCircle, Package } from "lucide-react";

const HowToBuy = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha os produtos",
      description: "Navegue pelo nosso catálogo e escolha os produtos na quantidade que deseja. Tags, cartões, sacolinhas e muito mais!",
    },
    {
      icon: MessageCircle,
      title: "2. Envie pelo WhatsApp",
      description: "Envie seu pedido pelo WhatsApp. Nosso time está pronto para ajudar com dúvidas e personalização.",
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
      icon: Palette,
      title: "5. Criação e aprovação",
      description: "Criamos as artes do seu pedido e enviamos para sua aprovação antes de iniciar a produção.",
    },
    {
      icon: Package,
      title: "6. Produção e entrega",
      description: "Produzimos seu pedido em 5 a 6 dias úteis e realizamos a entrega dentro do prazo combinado.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Como funciona a compra
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body text-lg">
            Nosso processo é simples e transparente. Desde a escolha dos produtos até a entrega, acompanhamos cada etapa para garantir sua satisfação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Pronto para começar?
          </h3>
          <p className="text-muted-foreground font-body mb-6">
            Entre em contato conosco pelo WhatsApp e vamos ajudar você a criar os materiais gráficos perfeitos para sua marca!
          </p>
          <a href="https://api.whatsapp.com/send?phone=553584181096&text=Oi,%20Gostaria%20de%20fazer%20um%20or%c3%a7amento!" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold transition-colors">
              Fale conosco no WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
