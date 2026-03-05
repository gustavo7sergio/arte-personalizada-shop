const heroImage = "/assets/hero-image.jpg";
const logoWhite = "/assets/logo-white.png";
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
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 flex items-center justify-center">
        <div className="max-w-3xl space-y-6 text-center">
          <img src={logoWhite} alt="GS Cartões" className="h-32 mb-4 animate-fade-in mx-auto" loading="eager" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Tags, cartões, sacolinhas{" "}
            <span className="italic" style={{ color: "hsl(4, 42%, 70%)" }}>e muito mais</span>{" "}
            com a sua marca
          </h1>

          <div className="flex flex-wrap gap-4 animate-fade-in-up justify-center" style={{ animationDelay: "0.4s" }}>
            <a href="#produtos">
              <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-soft font-body font-semibold" style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}>
                Ver tabela de preços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
