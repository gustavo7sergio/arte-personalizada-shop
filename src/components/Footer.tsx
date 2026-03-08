import { Instagram, Mail, Phone, ShoppingBag } from "lucide-react";
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
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
