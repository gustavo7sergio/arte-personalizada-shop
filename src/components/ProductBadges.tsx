import { memo } from "react";
import { cn } from "@/lib/utils";
import { getProductBadges, getBadgesForProductIds, type ProductBadgeKey } from "@/data/productBadges";

const BADGE_CONFIG: Record<ProductBadgeKey, { icon: string; label: string; className: string }> = {
  "best-seller": {
    icon: "🏆",
    label: "Mais vendido",
    className: "bg-bestseller text-bestseller-foreground",
  },
  "best-value": {
    icon: "💰",
    label: "Melhor custo-benefício",
    className: "bg-bestvalue text-bestvalue-foreground",
  },
};

interface ProductBadgesProps {
  /** ID único do produto. */
  productId?: string;
  /** Ou vários IDs (páginas que agrupam variações). */
  productIds?: string[];
  /** Posiciona as badges sobre a imagem, no canto superior esquerdo. */
  overlay?: boolean;
  /** Versão reduzida para cards menores (Outros modelos / Combine com). */
  size?: "default" | "sm";
  className?: string;
}

const ProductBadges = ({
  productId,
  productIds,
  overlay = false,
  size = "default",
  className,
}: ProductBadgesProps) => {
  const badges = productIds ? getBadgesForProductIds(productIds) : getProductBadges(productId);
  if (badges.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col items-start gap-1.5 max-w-[calc(100%-1rem)]",
        overlay && "absolute top-2 left-2 z-10 pointer-events-none",
        className
      )}
    >
      {badges.map((key) => {
        const badge = BADGE_CONFIG[key];
        return (
          <span
            key={key}
            className={cn(
              "inline-flex items-center gap-1 rounded-full",
              size === "sm" ? "px-2 py-0.5 text-[9px]" : "px-2.5 py-1 text-[11px]",
              "leading-none font-body font-semibold tracking-tight",
              "shadow-[0_1px_2px_hsl(158_41%_12%/0.12)] select-none whitespace-nowrap",
              badge.className
            )}
          >
            <span aria-hidden="true">{badge.icon}</span>
            {badge.label}
          </span>
        );
      })}
    </div>
  );
};

export default memo(ProductBadges);
