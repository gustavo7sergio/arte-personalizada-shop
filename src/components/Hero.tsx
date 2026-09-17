import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroDesktopAsset from "@/assets/hero/hero-ge-desktop.jpg.asset.json";
import heroMobileAsset from "@/assets/hero/hero-ge-mobile.jpg.asset.json";

const HERO_DESKTOP = heroDesktopAsset.url;
const HERO_MOBILE = heroMobileAsset.url;
const WHATSAPP_URL = "https://wa.me/553584181096?text=Oi%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!";
const HERO_ALT = "Gê, mascote da GS Cartões, com tags, cartões e embalagens personalizadas para semijoias";

interface HeroButtonsProps {
  mobileOverlay?: boolean;
}

const HeroButtons = ({ mobileOverlay = false }: HeroButtonsProps) => (
  <div
    className={
      mobileOverlay
        ? "absolute left-5 top-6 z-10 flex w-[184px] flex-col gap-2.5 md:hidden"
        : "mt-7 hidden items-center gap-3 md:flex"
    }
  >
    <a href="#produtos" className={mobileOverlay ? "w-full" : undefined}>
      <Button
        size="lg"
        className={
          mobileOverlay
            ? "h-11 w-full rounded-full px-5 text-sm shadow-soft font-body font-semibold hover:scale-105 transition-transform duration-300"
            : "h-auto rounded-full px-8 py-5 text-base shadow-soft font-body font-semibold hover:scale-105 transition-transform duration-300"
        }
        style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(var(--rose-foreground))" }}
      >
        Ver produtos
        <ArrowRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </a>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={mobileOverlay ? "w-full" : undefined}
    >
      <Button
        size="lg"
        variant="outline"
        className={
          mobileOverlay
            ? "h-11 w-full rounded-full border-primary bg-background/90 px-5 text-sm font-body font-semibold text-primary hover:bg-background hover:text-primary"
            : "h-auto rounded-full border-primary bg-background/90 px-8 py-5 text-base font-body font-semibold text-primary hover:bg-background hover:text-primary"
        }
      >
        Fale conosco
        <MessageCircle className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </a>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-[162px] md:mt-[158px] md:aspect-[2/1] md:pt-0">
      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-start bg-background px-6 py-7 text-left sm:px-8 sm:py-8 md:absolute md:left-[6%] md:top-1/2 md:w-[41%] md:max-w-[660px] md:-translate-y-1/2 md:bg-transparent md:px-0 md:py-0 lg:left-[8%]">
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-4xl md:leading-[1.08] lg:text-5xl xl:text-6xl font-display font-bold text-primary">
          Tags, cartões, sacolinhas{" "}
          <span className="italic text-rose-deep">e muito mais</span>{" "}
          com a sua marca
        </h1>

        <p className="mt-3 text-base font-body font-medium text-foreground/80 md:mt-4 md:text-base lg:text-xl">
          Tudo 100% personalizado do seu jeito!
        </p>

        <HeroButtons />
      </div>

      {/* Banner image */}
      <div className="relative aspect-[960/1710] w-full overflow-hidden md:absolute md:inset-0 md:h-full md:aspect-auto">
        <picture className="block w-full md:h-full">
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
        <HeroButtons mobileOverlay />
      </div>
    </section>
  );
};

export default Hero;
