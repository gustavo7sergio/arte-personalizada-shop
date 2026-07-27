import { cn } from "@/lib/utils";

interface BestSellerBadgeProps {
  /** Posiciona o selo sobre a imagem, no canto superior esquerdo. */
  overlay?: boolean;
  className?: string;
}

const BestSellerBadge = ({ overlay = false, className }: BestSellerBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1 rounded-full bg-bestseller px-2.5 py-1",
      "text-[11px] leading-none font-body font-semibold tracking-tight text-bestseller-foreground",
      "shadow-[0_1px_2px_hsl(158_41%_12%/0.12)] select-none whitespace-nowrap",
      overlay && "absolute top-2 left-2 z-10 pointer-events-none",
      className
    )}
  >
    <span aria-hidden="true">🏆</span>
    Mais vendido
  </span>
);

export default BestSellerBadge;
