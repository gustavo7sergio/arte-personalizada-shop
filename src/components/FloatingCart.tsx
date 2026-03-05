import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { CartItem } from '@/hooks/useLocalCart';

export function FloatingCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load initial cart from localStorage
    try {
      const saved = localStorage.getItem('arte-personalizada-cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    }

    // Listen for cart updates
    const handleCartUpdate = (event: CustomEvent) => {
      setItems(event.detail);
    };

    window.addEventListener('cartUpdated', handleCartUpdate as EventListener);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate as EventListener);
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/carrinho')}
      className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 flex items-center gap-2 font-bold"
      style={{
        boxShadow: '0 10px 30px rgba(22, 163, 74, 0.4)',
      }}
    >
      <ShoppingCart size={28} />
      <span className="bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
        {items.length}
      </span>
    </button>
  );
}
