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
    <section className="relative mt-[162px] w-full overflow-hidden md:mt-[158px] md:aspect-[2/1]">
      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-start bg-background px-6 py-8 text-left sm:px-8 sm:py-10 md:absolute md:left-[6%] md:top-1/2 md:w-[41%] md:max-w-[660px] md:-translate-y-1/2 md:bg-transparent md:px-0 md:py-0 lg:left-[8%]">
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-4xl md:leading-[1.08] lg:text-5xl xl:text-6xl font-display font-bold text-primary">
          Tags, cartões, sacolinhas{" "}
          <span className="italic text-rose-deep">e muito mais</span>{" "}
          com a sua marca
        </h1>

        <p className="mt-3 text-base font-body font-medium text-foreground/80 md:mt-4 md:text-base lg:text-xl">
          Tudo 100% personalizado do seu jeito!
        </p>

        <div className="mt-6 flex w-full flex-col items-stretch gap-3 md:mt-7 md:w-auto md:flex-row md:items-center md:gap-3">
          <a href="#produtos" className="w-full md:w-auto">
            <Button
              size="lg"
              className="h-12 w-full rounded-full px-6 text-sm shadow-soft font-body font-semibold hover:scale-105 transition-transform duration-300 md:h-auto md:w-auto md:px-8 md:py-5 md:text-base"
              style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(var(--rose-foreground))" }}
            >
              Ver produtos
              <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-primary bg-background/90 px-6 text-sm font-body font-semibold text-primary hover:bg-background hover:text-primary md:h-auto md:w-auto md:px-8 md:py-5 md:text-base"
            >
              Fale conosco
              <MessageCircle className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Banner image */}
      <picture className="block w-full md:absolute md:inset-0 md:h-full">
        <source media="(min-width: 768px)" srcSet={HERO_DESKTOP} />
        <img
          src={HERO_MOBILE}
          alt={HERO_ALT}
          width={960}
          height={1920}
          className="block h-auto w-full md:h-full md:object-contain"
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
      </picture>
    </section>
  );
};

export default Hero;
