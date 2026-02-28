import { BadgeCheck, Zap, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Arquivo aprovado, pedido confirmado",
    description: "Envie seu arquivo pronto ou solicite ajustes — assim que aprovar, entramos em produção sem enrolação.",
  },
  {
    icon: Zap,
    title: "Preço tabelado, sem surpresa",
    description: "Tabela de preços aberta por quantidade. Você já sabe quanto vai pagar antes de falar com a gente.",
  },
  {
    icon: RefreshCw,
    title: "Reposição fácil",
    description: "Guardamos o histórico do seu pedido. Repor é simples: basta confirmar quantidade e seguir para produção.",
  },
  {
    icon: Headphones,
    title: "Atendimento direto no WhatsApp",
    description: "Sem formulário, sem fila. Tire dúvidas, ajuste detalhes e acompanhe o pedido com atendimento humano.",
  },
];

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-accent/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Simples, rápido e sem complicação
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Processo direto do pedido à entrega — você escolhe o produto, a quantidade e a gente cuida do resto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feat.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
