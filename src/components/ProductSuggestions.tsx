import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductImage from "@/components/ProductImage";
import type { SuggestionItem } from "@/lib/productSuggestions";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

interface ProductSuggestionsProps {
  title: string;
  subtitle?: string;
  items: SuggestionItem[];
}

const ProductSuggestions = ({ title, subtitle, items }: ProductSuggestionsProps) => {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: "trimSnaps" },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Recalcula quando os itens carregam tardiamente (imagens etc).
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, items.length]);

  if (!items || items.length === 0) return null;

  return (
    <section aria-label={title} className="mt-16">
      <div className="flex items-end justify-between mb-5 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-sm font-body text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Anterior"
            className="h-9 w-9 rounded-full border border-border bg-card hover:border-primary/60 hover:bg-accent/40 transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Próximo"
            className="h-9 w-9 rounded-full border border-border bg-card hover:border-primary/60 hover:bg-accent/40 transition-colors flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden -mx-6 px-6 md:mx-0 md:px-0" ref={emblaRef}>
        <ul className="flex gap-3 md:gap-4 touch-pan-y">
          {items.map((item) => (
            <li
              key={item.slug}
              className="
                shrink-0 grow-0
                basis-[55%] xs:basis-[45%] sm:basis-[38%]
                md:basis-1/3 lg:basis-1/4 xl:basis-1/5
              "
            >
              <Link
                to={`/produto/${item.slug}`}
                className="group block rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-sm transition-all overflow-hidden h-full"
              >
                <div className="aspect-square bg-muted/20 overflow-hidden">
                  {item.image ? (
                    <ProductImage
                      src={item.image}
                      alt={item.displayName}
                      className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/30" />
                  )}
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-[10px] font-body text-primary tracking-wider uppercase truncate">
                    {item.categoryLabel}
                  </p>
                  <h3 className="text-xs sm:text-sm font-body font-medium text-foreground leading-snug line-clamp-2 min-h-[2.4em]">
                    {item.displayName}
                  </h3>
                  {item.minPrice > 0 && (
                    <p className="text-xs font-body text-muted-foreground pt-0.5">
                      A partir de{" "}
                      <strong className="text-primary font-semibold">
                        {formatCurrency(item.minPrice)}
                      </strong>
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSuggestions;
