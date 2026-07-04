import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import banner1 from "@/assets/banners/banner-mobile-1.jpg.asset.json";
import banner2 from "@/assets/banners/banner-mobile-2.jpg.asset.json";
import banner3 from "@/assets/banners/banner-mobile-3.jpg.asset.json";

const banners = [
  { src: banner1.url, alt: "Marcas reais, resultados reais - GS Cartões" },
  { src: banner2.url, alt: "Qualidade que valoriza sua marca" },
  { src: banner3.url, alt: "Frete grátis na sua primeira compra" },
];

const MobileBanners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      className="md:hidden bg-background"
      style={{ paddingTop: "24px", paddingBottom: "32px" }}
      aria-label="Banners promocionais"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((b, i) => (
            <div
              key={i}
              className="flex-[0_0_92%] min-w-0 mx-[2%]"
            >
              <img
                src={b.src}
                alt={b.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
                style={{ objectFit: "contain", borderRadius: "18px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para banner ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === i ? "w-6 bg-primary" : "w-2 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileBanners;
