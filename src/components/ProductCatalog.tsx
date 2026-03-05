import { useState } from "react";
import { products, categories, type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { ChevronDown, ChevronUp, MessageCircle, Package, Tag, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      {/* Variant tabs */}
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

      {/* Dimensions */}
      {variant.dimensions && (
        <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
          <Package className="h-3 w-3" />
          {variant.dimensions}
        </p>
      )}

      {/* Quantity selector */}
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

      {/* Price box */}
      <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-accent/10 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 rounded-full p-1.5">
              <Tag className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xs font-body text-muted-foreground font-medium">PIX / À vista <strong>10% OFF</strong></span>
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


      </div>

      {/* CTA */}
      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2">
        <Package className="h-4 w-4" />
        Adicionar ao carrinho
      </Button>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const image = productImages[product.id];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300">
      {/* Product image */}
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
      {/* Header */}
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
          {/* Badges */}
          <div className="flex flex-col gap-1 shrink-0">
            <span className="bg-primary/10 text-primary text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              10% PIX
            </span>
            <span className="bg-accent text-accent-foreground text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              6x s/ juros
            </span>
          </div>
        </div>

        {/* Specs preview */}
        <p className="text-xs font-body text-muted-foreground">
          {product.material}
        </p>
      </div>

      {/* Expandable specs */}
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

      {/* Price table */}
      <div className="p-6">
        <PriceSelector product={product} />
      </div>
    </div>
  );
}

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-accent/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Tabela de Preços
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Catálogo Completo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Todos os produtos com preços à vista e parcelado. 10% de desconto no PIX e até 6x sem juros.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-body font-medium transition-all border",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-body">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>Produtos dessa categoria em breve!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Bottom note */}
        <p className="text-center text-xs font-body text-muted-foreground mt-10">
          Produtos 100% personalizados · Não trabalhamos com fidelização de cores · Mais modelos em breve
        </p>
      </div>
    </section>
  );
};

export default ProductCatalog;
