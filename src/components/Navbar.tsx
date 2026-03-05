import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-green.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="GS Cartões" className="h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Produtos
          </a>
          <a href="#catalogo" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Catálogo
          </a>
          <a href="#sobre" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
          <a href="https://api.whatsapp.com/send?phone=553584181096&text=Oi,%20Gostaria%20de%20fazer%20um%20or%c3%a7amento!" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body px-6">
              Orçamento
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 space-y-4 animate-fade-in">
          <a href="#produtos" className="block text-sm font-body text-muted-foreground hover:text-foreground">
            Produtos
          </a>
          <a href="#sobre" className="block text-sm font-body text-muted-foreground hover:text-foreground">
            Sobre
          </a>
          <a href="#contato" className="block text-sm font-body text-muted-foreground hover:text-foreground">
            Contato
          </a>
          <a href="https://api.whatsapp.com/send?phone=553584181096&text=Oi,%20Gostaria%20de%20fazer%20um%20or%c3%a7amento!" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body">
              Orçamento
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
