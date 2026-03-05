import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const { items } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) return null;

  return (
    <button
      onClick={() => navigate("/carrinho")}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40 flex items-center gap-2"
    >
      <ShoppingCart size={24} />
      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
        {items.length}
      </span>
    </button>
  );
}
