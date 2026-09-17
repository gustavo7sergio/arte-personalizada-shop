import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroDesktopAsset from "@/assets/hero/hero-ge-desktop.jpg.asset.json";
import heroMobileAsset from "@/assets/hero/hero-ge-mobile.jpg.asset.json";

const HERO_DESKTOP = heroDesktopAsset.url;
const HERO_MOBILE = heroMobileAsset.url;
const WHATSAPP_URL = "https://wa.me/553584181096?text=Oi%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!";
const HERO_ALT = "Gê, mascote da GS Cartões, com tags, cartões e embalagens personalizadas para semijoias";

const Hero = () => {
  return (
    <section className="relative aspect-[1/2] w-full overflow-hidden md:aspect-[2/1]">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(min-width: 768px)" srcSet={HERO_DESKTOP} />
          <img
            src={HERO_MOBILE}
            alt={HERO_ALT}
            width={960}
            height={1920}
            className="h-full w-full object-contain"
            fetchPriority="high"
            decoding="async"
            loading="eager"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="absolute left-4 top-[17%] flex w-[52%] max-w-[230px] flex-col items-start text-left sm:left-8 sm:max-w-[270px] md:left-[6%] md:top-1/2 md:w-[41%] md:max-w-[660px] md:-translate-y-1/2 lg:left-[8%]">
        <h1 className="text-[1.45rem] leading-[1.08] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary">
          Tags, cartões, sacolinhas{" "}
          <span className="italic text-rose-deep">e muito mais</span>{" "}
          com a sua marca
        </h1>

        <p className="mt-2 text-xs font-body font-medium text-foreground/80 sm:text-sm md:mt-4 md:text-base lg:text-xl">
          Tudo 100% personalizado do seu jeito!
        </p>

        <div className="mt-3 flex flex-col items-start gap-2 sm:mt-4 md:mt-7 md:flex-row md:items-center md:gap-3">
          <a href="#produtos">
            <Button
              size="lg"
              className="h-9 rounded-full px-4 text-xs shadow-soft font-body font-semibold hover:scale-105 transition-transform duration-300 sm:h-10 sm:px-5 sm:text-sm md:h-auto md:px-8 md:py-5 md:text-base"
              style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(var(--rose-foreground))" }}
            >
              Ver produtos
              <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="h-9 rounded-full border-primary bg-background/90 px-4 text-xs font-body font-semibold text-primary hover:bg-background hover:text-primary sm:h-10 sm:px-5 sm:text-sm md:h-auto md:px-8 md:py-5 md:text-base"
            >
              Fale conosco
              <MessageCircle className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
