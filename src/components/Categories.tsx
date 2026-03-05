import { Link } from "react-router-dom";
import catSacolinhas from "@/assets/cat-sacolinhas-real.jpg";
import catCartoes from "@/assets/cat-cartoes.jpg";
import catTags from "@/assets/cat-tags-real.jpg";
import catAdesivos from "@/assets/cat-adesivos.jpg";
import catCaixinhas from "@/assets/cat-caixinhas.jpg";
import catOutros from "@/assets/cat-banners.jpg";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { name: "Tags", description: "Tags de brincos, mini tags e etiquetas personalizadas", image: catTags, slug: "tags" },
  { name: "Cartões", description: "Cartões de visita, garantia, agradecimento e mais", image: catCartoes, slug: "cartoes" },
  { name: "Sacolinhas", description: "Sacolinhas de papel e plástico para embalagem", image: catSacolinhas, slug: "sacolinhas" },
  { name: "Caixinhas", description: "Caixinhas para acessórios em diversos tamanhos", image: catCaixinhas, slug: "caixinhas" },
  { name: "Adesivos", description: "Adesivos personalizados para lacre e identificação", image: catAdesivos, slug: "adesivos" },
  { name: "Outros", description: "Banners, blocos de pedido e mais produtos gráficos", image: catOutros, slug: "outros" },
];

const Categories = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            O que você encontra aqui
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Escolha a categoria do seu produto
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-body">
            Clique na categoria e veja todos os modelos disponíveis com tabela de preços completa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to={`/categoria/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-base md:text-xl font-display font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {cat.name}
                    </h3>
                    <p className="text-primary-foreground/75 text-xs md:text-sm font-body mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                      {cat.description}
                    </p>
                  </div>
                  <div className="rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "hsl(4, 42%, 70%)" }}>
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              {/* Always visible label */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-card/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full">
                <span className="text-xs md:text-sm font-body font-medium text-foreground">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

