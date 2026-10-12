import { createContext } from "react";

export interface CartItem {
  productId: string;
  productName: string;
  subtitle?: string;
  variantLabel: string;
  qty: number;
  cashPrice: number;
  installmentPrice: number;
  unitPrice?: number;
  image?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalCash: number;
  totalInstallment: number;
}

// Keep context identity outside the component module's Fast Refresh lifecycle.
export const CartContext = createContext<CartContextType | undefined>(undefined);