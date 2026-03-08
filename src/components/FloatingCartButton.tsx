import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FloatingCartButton = () => {
  const { items, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
      style={{ backgroundColor: "hsl(var(--rose))", color: "hsl(var(--rose-foreground))" }}
      aria-label="Abrir carrinho"
    >
      <ShoppingCart className="h-6 w-6" />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
