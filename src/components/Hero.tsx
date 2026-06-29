import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HERO_AVIF = "/hero/hero-800.avif";
const HERO_AVIF_LG = "/hero/hero-1536.avif";
const HERO_WEBP = "/hero/hero-800.webp";
const HERO_WEBP_LG = "/hero/hero-1536.webp";
const HERO_JPG = "/hero/hero-800.jpg";
const HERO_JPG_LG = "/hero/hero-1536.jpg";
const LOGO_WHITE = "/logo/logo-white-320.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet={`${HERO_AVIF} 800w, ${HERO_AVIF_LG} 1536w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${HERO_WEBP} 800w, ${HERO_WEBP_LG} 1536w`}
            sizes="100vw"
          />
          <source
            type="image/jpeg"
            srcSet={`${HERO_JPG} 800w, ${HERO_JPG_LG} 1536w`}
            sizes="100vw"
          />
          <img
            src={HERO_JPG}
            alt="Materiais gráficos personalizados GS Cartões"
            width={1536}
            height={1024}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/65" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <img
          src={LOGO_WHITE}
          alt="GS Cartões"
          width={320}
          height={320}
          loading="eager"
          decoding="async"
          className="h-32 md:h-44 w-auto mb-0 mt-16 md:mt-8"
          style={{ opacity: 0.9 }}
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-3xl">
          Tags, cartões, sacolinhas{" "}
          <span className="italic" style={{ color: "hsl(4, 42%, 70%)" }}>e muito mais</span>{" "}
          com a sua marca
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mt-4">
          Tudo 100% personalizado do seu jeito!
        </p>

        <div className="mt-8">
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
          <p className="mt-4 text-sm font-body text-primary-foreground/80">
            📦 Receba de qualquer lugar do Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
