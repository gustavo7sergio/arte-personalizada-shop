import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo-green.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, setIsOpen: setCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="GS Cartões" className="h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#produtos" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Produtos
          </a>
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
          <a href="https://wa.me/553584181096?text=Oi%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body px-6">
              Orçamento
            </Button>
          </a>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 space-y-4 animate-fade-in">
          <a href="/#produtos" className="block text-sm font-body text-muted-foreground hover:text-foreground">
            Produtos
          </a>
          <a href="/#catalogo" className="block text-sm font-body text-muted-foreground hover:text-foreground">
            Catálogo
          </a>
          <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body">
            Orçamento
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
