import { Instagram, Mail, Phone, MessageCircle, ShoppingBag } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        {/* Botões de ação no topo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="https://wa.me/553584181096?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos." target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full font-body font-semibold px-8 py-5 text-base" style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale conosco
            </Button>
          </a>
          <a href="#produtos">
            <Button className="rounded-full font-body font-semibold px-8 py-5 text-base bg-white text-primary hover:bg-white/90">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Ver produtos
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logoWhite} alt="GS Cartões" className="h-20 mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Materiais gráficos personalizados que elevam o valor percebido da sua marca de semijoias.
            </p>
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
                <a href="https://www.instagram.com/gs_cartaodevisitas" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  @gs_cartaodevisitas
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Mail className="h-4 w-4" />
                <a href="mailto:atendimento@gscartoes.com" className="hover:text-primary-foreground transition-colors">
                  atendimento@gscartoes.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/553584181096" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  (35) 98418-1096
                </a>
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
