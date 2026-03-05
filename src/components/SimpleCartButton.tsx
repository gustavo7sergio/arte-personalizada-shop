import { useSimpleCart } from '@/contexts/SimpleCartContext';
import { ShoppingCart } from 'lucide-react';

export default function SimpleCartButton() {
  const { items, setIsOpen } = useSimpleCart();

  if (items.length === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-40 flex items-center gap-2 font-bold"
      style={{
        boxShadow: "0 10px 30px rgba(22, 163, 74, 0.4)",
      }}
    >
      <ShoppingCart size={28} />
      <span className="bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
        {items.length}
      </span>
    </button>
  );
}
