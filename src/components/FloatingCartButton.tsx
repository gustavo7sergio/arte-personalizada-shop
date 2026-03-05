import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FloatingCartButton = () => {
  const { items, setIsOpen } = useCart();

  if (items.length === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
    >
      <ShoppingCart className="h-5 w-5" />
      <span className="font-body font-semibold text-sm">{items.length}</span>
    </button>
  );
};

export default FloatingCartButton;
