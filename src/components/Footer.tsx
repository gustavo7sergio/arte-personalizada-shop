import { Instagram, Mail, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const categories = [
    { name: "Tags", slug: "tags" },
    { name: "Cartões", slug: "cartoes" },
    { name: "Sacolinhas", slug: "sacolinhas" },
    { name: "Caixinhas", slug: "caixinhas" },
    { name: "Adesivos", slug: "adesivos" },
    { name: "Outros", slug: "outros" },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logoWhite} alt="GS Cartões" className="h-16 mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Materiais gráficos personalizados que elevam o valor percebido da sua marca de semijoias.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-body font-semibold text-primary-foreground tracking-wider uppercase mb-4">
              Produtos
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a href={`/categoria/${category.slug}`} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {category.name}
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
                <a href="https://api.whatsapp.com/send?phone=553584181096&text=Oi,%20Gostaria%20de%20fazer%20um%20or%c3%a7amento!" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
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
