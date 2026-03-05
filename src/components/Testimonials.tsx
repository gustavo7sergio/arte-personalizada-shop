import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "Tamara GS",
    text: "Eu amo as minhas tags! Vcs são muito caprichosos! Elas agregam valor às minhas semijoias, dão vida à apresentação das peças. Sou apaixonada e não fico sem de jeito nenhum!",
  },
  {
    image: testimonial2,
    name: "Anieli GS",
    text: "Chegaram as tags, são de ótima qualidade, ameeeeei, muito obrigada. Meus clientes amaram. Bom dia, tudo joia? Excelente atendimento, entrega sempre dentro do prazo, preço justo!",
  },
  {
    image: testimonial3,
    name: "Patricia GS",
    text: "Amei minhas encomendas. Veio super rápido e super bem feito. Gratidão! Exatamente as medidas e cores que escolhi.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Quem já comprou
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body text-lg">
            Veja os depoimentos de clientes que já transformaram seus negócios com nossos produtos personalizados. Cada tag, cartão e sacola é feita com cuidado e qualidade para elevar o valor percebido da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={testimonial.image}
                alt={`Depoimento de ${testimonial.name}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover mb-4"
              />
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
