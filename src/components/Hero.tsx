import heroImage from "@/assets/hero-image-new.jpg";
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/65" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <img src={logoWhite} alt="GS Cartões" className="h-32 md:h-44 mb-6 animate-fade-in" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight animate-fade-in-up max-w-3xl">
          Tags, cartões, sacolinhas{" "}
          <span className="italic" style={{ color: "hsl(4, 42%, 70%)" }}>e muito mais</span>{" "}
          com a sua marca
        </h1>

        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a href="#produtos">
            <Button size="lg" className="text-base px-10 py-6 rounded-full shadow-soft font-body font-semibold" style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}>
              Ver produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="mt-4 text-sm font-body text-primary-foreground/80">
            📦 Receba de qualquer lugar do Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
