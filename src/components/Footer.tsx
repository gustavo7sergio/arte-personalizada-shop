import { Instagram, Mail, Phone, MessageCircle, ShoppingBag } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logoWhite} alt="GS Cartões" className="h-20 mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-6">
              Materiais gráficos personalizados que elevam o valor percebido da sua marca de semijoias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/553584181096?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos." target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full font-body font-semibold px-6" style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fale conosco
                </Button>
              </a>
              <a href="#produtos">
                <Button variant="outline" className="rounded-full font-body font-semibold px-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Ver produtos
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-body font-semibold text-primary-foreground tracking-wider uppercase mb-4">
              Produtos
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {["Cartões", "Tags", "Sacolinhas", "Adesivos", "Banners"].map((item) => (
                <li key={item}>
                  <a href="#produtos" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-body font-semibold text-primary-foreground tracking-wider uppercase mb-4">
              Contato
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Instagram className="h-4 w-4" />
                @gscartoes
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Mail className="h-4 w-4" />
                contato@gscartoes.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Phone className="h-4 w-4" />
                WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm font-body">
            © 2026 GS Cartões. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
