import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, MessageCircle, Package, Tag, CreditCard } from "lucide-react";
import { useState } from "react";
import { products, type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function PriceSelector({ product }: { product: Product }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [selectedQtyIndex, setSelectedQtyIndex] = useState(0);
  const variant = product.variants[activeVariant];
  const selected = variant.prices[selectedQtyIndex];

  const handleVariantChange = (i: number) => {
    setActiveVariant(i);
    setSelectedQtyIndex(0);
  };

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse em: ${product.name}${product.subtitle ? " – " + product.subtitle : ""}, ${variant.label}, ${selected.qty} unidades. Pode me passar mais informações?`
  );
  const whatsappUrl = `https://wa.me/553584181096?text=${whatsappMsg}`;

  return (
    <div className="flex flex-col gap-4">
      {product.variants.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v, i) => (
            <button
              key={i}
              onClick={() => handleVariantChange(i)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all border",
                activeVariant === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {variant.dimensions && (
        <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
          <Package className="h-3 w-3" />
          {variant.dimensions}
        </p>
      )}

      {variant.prices[0]?.cash !== 0 && (
        <div>
          <p className="text-xs font-body font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
            Selecione a quantidade
          </p>
          <div className="flex flex-wrap gap-2">
            {variant.prices.map((row, i) => (
              <button
                key={i}
                onClick={() => setSelectedQtyIndex(i)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-body font-medium transition-all border",
                  selectedQtyIndex === i
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-foreground border-border hover:border-primary/60 hover:bg-accent/30"
                )}
              >
                {row.qty.toLocaleString("pt-BR")} uni
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price box */}
      {selected.cash === 0 ? (
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-accent/10 p-5 text-center space-y-2">
          <Tag className="h-6 w-6 text-primary mx-auto" />
          <p className="font-display font-semibold text-foreground">Preço sob consulta</p>
          <p className="text-xs font-body text-muted-foreground">
            Entre em contato para receber seu orçamento personalizado com base no tamanho escolhido.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-accent/10 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 rounded-full p-1.5">
                <Tag className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-xs font-body text-muted-foreground font-medium">PIX / À vista</span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-primary">
                {formatCurrency(selected.cash)}
              </p>
              {selected.unitPrice && (
                <p className="text-xs text-muted-foreground font-body">
                  {formatCurrency(selected.unitPrice)} / uni
                </p>
              )}
            </div>
          </div>

          <div className="h-px bg-border/60" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-accent rounded-full p-1.5">
                <CreditCard className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <span className="text-xs font-body text-muted-foreground font-medium">6x sem juros</span>
            </div>
            <p className="text-base font-body font-semibold text-foreground">
              {formatCurrency(selected.installment)}
            </p>
          </div>

          <div className="bg-primary/5 rounded-xl px-3 py-2 text-center">
            <span className="text-[11px] font-body text-primary font-semibold">
              🎉 10% OFF pagando no PIX
            </span>
          </div>
        </div>
      )}

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2">
          <MessageCircle className="h-4 w-4" />
          Solicitar orçamento
        </Button>
      </a>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const image = productImages[product.id];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300">
      {image && (
        <div className="aspect-[4/3] overflow-hidden bg-muted/20">
          <img
            src={image}
            alt={product.name + (product.subtitle ? " – " + product.subtitle : "")}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
              {product.name}
            </h3>
            {product.subtitle && (
              <span className="text-sm font-body text-primary font-medium">
                {product.subtitle}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 shrink-0">
            <span className="bg-primary/10 text-primary text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              10% PIX
            </span>
            <span className="bg-accent text-accent-foreground text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              6x s/ juros
            </span>
          </div>
        </div>
        <p className="text-xs font-body text-muted-foreground">{product.material}</p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-2 flex items-center justify-between text-xs font-body text-muted-foreground hover:text-foreground bg-muted/30 border-y border-border/50 transition-colors"
      >
        <span>Ver especificações</span>
        {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
      </button>

      {expanded && (
        <div className="px-6 py-4 bg-accent/20 border-b border-border/50 space-y-3">
          <div>
            <p className="text-xs font-body font-semibold text-foreground mb-1">Informações:</p>
            <ul className="space-y-0.5">
              {product.specs.map((s, i) => (
                <li key={i} className="text-xs font-body text-muted-foreground flex gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {product.additionals && product.additionals.length > 0 && (
            <div>
              <p className="text-xs font-body font-semibold text-foreground mb-1">Adicionais:</p>
              <ul className="space-y-0.5">
                {product.additionals.map((a, i) => (
                  <li key={i} className="text-xs font-body text-muted-foreground flex gap-1.5">
                    <span className="text-primary mt-0.5">+</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <PriceSelector product={product} />
      </div>
    </div>
  );
}

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const slugToCategory: Record<string, string> = {
    tags: "Tags",
    cartoes: "Cartões",
    sacolinhas: "Sacolinhas",
    caixinhas: "Caixinhas",
    adesivos: "Adesivos",
    outros: "Outros",
  };

  const categoryName = slugToCategory[categorySlug ?? ""] ?? categorySlug;
  const categoryProducts = products.filter((p) => p.category === categoryName);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            to="/#produtos"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar às categorias
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
              Tabela de Preços
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              {categoryName}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg font-body">
              Todos os modelos disponíveis com preços à vista e parcelado. 10% de desconto no PIX e até 6x sem juros.
            </p>
          </div>

          {/* Products */}
          {categoryProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>Produtos dessa categoria em breve!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <p className="text-center text-xs font-body text-muted-foreground mt-10">
            Produtos 100% personalizados · Não trabalhamos com fidelização de cores · Mais modelos em breve
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
