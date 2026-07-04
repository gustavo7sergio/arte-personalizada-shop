import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "@/assets/banners/banner-mobile-1.jpg.asset.json";
import banner2 from "@/assets/banners/banner-mobile-2.jpg.asset.json";
import banner3 from "@/assets/banners/banner-mobile-3.jpg.asset.json";

type Banner = {
  src: string;
  alt: string;
  href?: string;
  onClick?: () => void;
};

const banners: Banner[] = [
  { src: banner1.url, alt: "Marcas reais, resultados reais - GS Cartões", href: undefined },
  { src: banner2.url, alt: "Qualidade que valoriza sua marca", href: undefined },
  { src: banner3.url, alt: "Frete grátis na sua primeira compra", href: undefined },
];

// Aspect ratio of the banners (1080x1350 => 4:5). Used to reserve space and avoid CLS.
const BANNER_ASPECT = "4 / 5";

const BannerCard = ({ banner, className = "" }: { banner: Banner; className?: string }) => {
  const content = (
    <img
      src={banner.src}
      alt={banner.alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full"
      style={{ objectFit: "contain", borderRadius: "18px", background: "transparent" }}
    />
  );

  const wrapperStyle: React.CSSProperties = {
    aspectRatio: BANNER_ASPECT,
    borderRadius: "18px",
    boxShadow: "0 4px 14px -6px hsl(var(--foreground) / 0.12)",
  };

  const wrapperClass = `block w-full overflow-hidden transition-transform duration-[250ms] ease-out hover:scale-[1.02] cursor-pointer ${className}`;

  if (banner.href) {
    return (
      <a href={banner.href} className={wrapperClass} style={wrapperStyle} aria-label={banner.alt}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={banner.onClick}
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={banner.alt}
    >
      {content}
    </button>
  );
};

const PromoBanners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false, duration: 30 },
    [Autoplay({ delay: 10000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <section
      aria-label="Banners promocionais"
      className="bg-background"
      style={{ paddingTop: "48px", paddingBottom: "56px" }}
    >
      <div className="container mx-auto px-6">
        {/* Desktop & tablet: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {banners.map((b, i) => (
            <BannerCard key={i} banner={b} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {banners.map((b, i) => (
                <div key={i} className="flex-[0_0_92%] min-w-0 mx-[2%]">
                  <BannerCard banner={b} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Selecionar banner">
            {banners.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selectedIndex === i}
                aria-label={`Ir para banner ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i ? "w-6 bg-primary" : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
