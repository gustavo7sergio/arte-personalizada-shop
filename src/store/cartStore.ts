import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  selectedQuantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.id === item.id);
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.id === item.id
                ? { ...i, selectedQuantity: i.selectedQuantity + 1 }
                : i
            ),
          };
        }
        return { items: [...state.items, item], isOpen: true };
      }),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id),
      })),
      
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(i =>
          i.id === id ? { ...i, selectedQuantity: quantity } : i
        ),
      })),
      
      clearCart: () => set({ items: [] }),
      
      setIsOpen: (open) => set({ isOpen: open }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
