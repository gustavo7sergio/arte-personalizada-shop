import heroImage from "@/assets/hero-image.jpg";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Materiais gráficos personalizados GS Cartões"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-2xl space-y-6">
          <img src={logoWhite} alt="GS Cartões" className="h-16 mb-4 animate-fade-in" />
          <span className="inline-block text-primary-foreground/80 font-body text-sm tracking-[0.2em] uppercase animate-fade-in">
            100% Personalizados · 10% OFF no PIX · 6x sem juros
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Tags, cartões, sacolinhas{" "}
            <span className="italic" style={{ color: "hsl(4, 42%, 70%)" }}>e muito mais</span>{" "}
            com a sua marca
          </h1>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="/categorias">
              <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-soft font-body font-semibold" style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}>
                Ver tabela de preços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/553584181096" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/15 text-base px-8 py-6 rounded-full font-body font-semibold"
              >
                Solicitar orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
