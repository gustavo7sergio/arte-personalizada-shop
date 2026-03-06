import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          Pronto para começar?
        </h2>
        <p className="text-primary-foreground/80 font-body mt-6 max-w-lg mx-auto text-lg">
          Escolha seus produtos e adicione-os ao carrinho para fazermos seu pedido. É rápido e fácil!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://wa.me/553584181096" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="hover:opacity-90 text-base px-10 py-6 rounded-full shadow-soft font-body font-semibold"
              style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer meu pedido agora
            </Button>
          </a>
          <a href="#catalogo">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/15 text-base px-10 py-6 rounded-full font-body font-semibold"
            >
              Consultar tabela de preços
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
