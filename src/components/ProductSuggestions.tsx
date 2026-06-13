import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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
  if (!items || items.length === 0) return null;

  return (
    <section aria-label={title} className="mt-16">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-sm font-body text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Carrossel horizontal no mobile, grade no desktop. Snap suave, sem libs extras. */}
      <ul
        className="
          flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6
          md:mx-0 md:px-0 md:overflow-visible md:grid md:gap-4
          md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
          [scrollbar-width:thin]
        "
      >
        {items.map((item) => (
          <li
            key={item.slug}
            className="snap-start shrink-0 w-[160px] sm:w-[180px] md:w-auto"
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
                <span className="inline-flex items-center gap-0.5 text-[11px] font-body text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                  Ver produto <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductSuggestions;
