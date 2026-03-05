import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  selectedQuantity: number;
}

const CART_KEY = 'arte-personalizada-cart';

export function useLocalCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: items }));
      } catch (error) {
        console.error('Failed to save cart:', error);
      }
    }
  }, [items, isLoaded]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, selectedQuantity: i.selectedQuantity + item.selectedQuantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + (item.price * item.selectedQuantity), 0);
  };

  return {
    items,
    addItem,
    removeItem,
    clearCart,
    getTotalPrice,
    isLoaded,
  };
}
