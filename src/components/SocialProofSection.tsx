import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { socialProof, type SocialProofItem } from "@/data/socialProof";

const SocialProofSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: false,
  });
  const [zoomed, setZoomed] = useState<SocialProofItem | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  if (!socialProof.length) return null;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="text-center px-6 mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          O que nossas clientes dizem
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-sm md:text-base max-w-2xl mx-auto">
          Há mais de 5 anos ajudando empreendedores a fortalecer suas marcas.
        </p>
        <p className="mt-1 text-muted-foreground font-body text-sm md:text-base">
          ⭐ Mais de 2.000 clientes atendidos em todo o Brasil.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden px-4 md:px-10" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {socialProof.map((item, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <button
                  type="button"
                  onClick={() => setZoomed(item)}
                  aria-label="Ampliar depoimento"
                  className="relative block w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                  {item.redactions?.map((r, ri) => (
                    <span
                      key={ri}
                      aria-hidden
                      className="absolute rounded-sm bg-foreground/90 backdrop-blur-sm"
                      style={{
                        top: `${r.top}%`,
                        left: `${r.left}%`,
                        width: `${r.width}%`,
                        height: `${r.height}%`,
                      }}
                    />
                  ))}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Setas discretas — desktop */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Depoimento anterior"
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Próximo depoimento"
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setZoomed(null)}
            className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-card text-foreground shadow-md"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[90vh] max-w-[92vw] overflow-auto rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={zoomed.src} alt={zoomed.alt} className="max-h-[88vh] w-auto object-contain rounded-2xl" />
            {zoomed.redactions?.map((r, ri) => (
              <span
                key={ri}
                aria-hidden
                className="absolute rounded-sm bg-foreground/90"
                style={{
                  top: `${r.top}%`,
                  left: `${r.left}%`,
                  width: `${r.width}%`,
                  height: `${r.height}%`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialProofSection;
