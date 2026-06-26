import heroAvif from "@/assets/hero-image-new.jpg?format=avif&w=1536&quality=55&imagetools";
import heroAvifSm from "@/assets/hero-image-new.jpg?format=avif&w=800&quality=50&imagetools";
import heroWebp from "@/assets/hero-image-new.jpg?format=webp&w=1536&quality=72&imagetools";
import heroWebpSm from "@/assets/hero-image-new.jpg?format=webp&w=800&quality=68&imagetools";
import heroJpg from "@/assets/hero-image-new.jpg?w=1536&quality=78&imagetools";
import heroJpgSm from "@/assets/hero-image-new.jpg?w=800&quality=72&imagetools";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet={`${heroAvifSm} 800w, ${heroAvif} 1536w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${heroWebpSm} 800w, ${heroWebp} 1536w`}
            sizes="100vw"
          />
          <source
            type="image/jpeg"
            srcSet={`${heroJpgSm} 800w, ${heroJpg} 1536w`}
            sizes="100vw"
          />
          <img
            src={heroJpg}
            alt="Materiais gráficos personalizados GS Cartões"
            width={1536}
            height={1024}
            className="w-full h-full object-cover animate-ken-burns"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/65" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <img
          src={logoWhite}
          alt="GS Cartões"
          width={320}
          height={320}
          className="h-32 md:h-44 w-auto mb-0 mt-16 md:mt-8 animate-zoom-in [animation-fill-mode:forwards]"
          style={{ animationDelay: "0.2s", opacity: 0.5 }}
        />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-3xl"
        >
          Tags, cartões, sacolinhas{" "}
          <span className="italic" style={{ color: "hsl(4, 42%, 70%)" }}>e muito mais</span>{" "}
          com a sua marca
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/80 font-body mt-4 opacity-0 animate-blur-in"
          style={{ animationDelay: "0.7s" }}
        >
          Tudo 100% personalizado do seu jeito!
        </p>

        <div
          className="mt-8 opacity-0 animate-slide-up-fade"
          style={{ animationDelay: "0.9s" }}
        >
          <a href="#produtos">
            <Button
              size="lg"
              className="text-base px-10 py-6 rounded-full shadow-soft font-body font-semibold hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}
            >
              Ver produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p
            className="mt-4 text-sm font-body text-primary-foreground/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "1.3s" }}
          >
            📦 Receba de qualquer lugar do Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export { heroWebp, heroWebpSm, heroAvif, heroAvifSm };
export default Hero;
