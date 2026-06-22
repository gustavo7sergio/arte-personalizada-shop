import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Search, ShoppingCart, Package, Tag, CreditCard, ChevronRight as ChevronRightIcon } from "lucide-react";
import { products, type Product } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productPageBySlug } from "@/data/productPages";
import { buildGallery } from "@/data/productGalleries";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductImage from "@/components/ProductImage";
import ImageZoom from "@/components/ImageZoom";
import ProductSuggestions from "@/components/ProductSuggestions";
import ProductVideo from "@/components/ProductVideo";
import { getRelatedProducts, getComplementaryProducts } from "@/lib/productSuggestions";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

interface FlatVariant {
  product: Product;
  variantIndex: number;
  label: string;
  dimensions?: string;
}

const ProductPage = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const config = productPageBySlug(productSlug ?? "");

  const sourceProducts = useMemo(
    () => (config ? config.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[] : []),
    [config]
  );

  const normalizeX = (s?: string) => (s ? s.replace(/×/g, "x") : s);

  const flatVariants: FlatVariant[] = useMemo(() => {
    const arr: FlatVariant[] = [];
    sourceProducts.forEach((p) => {
      p.variants.forEach((v, i) => {
        const subtitleLabel = p.subtitle && sourceProducts.length > 1 ? p.subtitle : v.label;
        arr.push({ product: p, variantIndex: i, label: normalizeX(subtitleLabel) || "", dimensions: normalizeX(v.dimensions) });
      });
    });
    return arr;
  }, [sourceProducts]);



  const [activeFlat, setActiveFlat] = useState(0);
  const [selectedQtyIndex, setSelectedQtyIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!config) return <Navigate to="/" replace />;
  if (sourceProducts.length === 0) return <Navigate to={`/categoria/${config.categorySlug}`} replace />;

  const current = flatVariants[activeFlat];
  const currentVariant = current.product.variants[current.variantIndex];
  const selected = currentVariant.prices[selectedQtyIndex] ?? currentVariant.prices[0];

  // Gallery: mockup(s) principal(is) + imagens extras (medidas, frente/verso, fotos, detalhes)
  const mockupSources: string[] = sourceProducts.flatMap((p) => {
    const raw = productImages[p.id];
    return Array.isArray(raw) ? raw : raw ? [raw] : [];
  });
  const gallery = buildGallery(config.slug, mockupSources, config.displayName);
  const heroImage = gallery[imageIndex]?.src ?? gallery[0]?.src;
  const heroAlt = gallery[imageIndex]?.alt ?? config.displayName;

  const minPrice = Math.min(
    ...sourceProducts.flatMap((p) => p.variants.flatMap((v) => v.prices.map((r) => r.cash))).filter((n) => n > 0)
  );

  const specs = sourceProducts[0].specs;
  const additionals = sourceProducts[0].additionals;
  const material = sourceProducts[0].material;

  const handleVariantSwitch = (i: number) => {
    setActiveFlat(i);
    setSelectedQtyIndex(0);
    const mapped = config.variantImageMap?.[i];
    if (typeof mapped === "number" && mapped >= 0 && mapped < gallery.length) {
      setImageIndex(mapped);
    }
  };

  const handleAddToCart = () => {
    addItem({
      productId: current.product.id,
      productName: current.product.name,
      subtitle: current.product.subtitle,
      variantLabel: currentVariant.label,
      qty: selected.qty,
      cashPrice: selected.cash,
      installmentPrice: selected.installment,
      unitPrice: selected.unitPrice,
      image: heroImage,
    });
    toast({
      title: "Adicionado ao carrinho! 🛒",
      description: `${current.product.name} · ${currentVariant.label} · ${selected.qty} uni`,
    });
  };

  const canonical = `/produto/${config.slug}`;
  const absoluteUrl = `https://www.gscartoes.com${canonical}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: config.displayName,
    description: config.seoDescription,
    brand: { "@type": "Brand", name: "GS Cartões" },
    category: config.categoryLabel,
    material,
    image: heroImage ? [`https://www.gscartoes.com${heroImage}`] : undefined,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: minPrice.toFixed(2),
      offerCount: flatVariants.reduce((acc, fv) => acc + fv.product.variants[fv.variantIndex].prices.length, 0),
      availability: "https://schema.org/InStock",
      url: absoluteUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://www.gscartoes.com/" },
      { "@type": "ListItem", position: 2, name: config.categoryLabel, item: `https://www.gscartoes.com/categoria/${config.categorySlug}` },
      { "@type": "ListItem", position: 3, name: config.displayName, item: absoluteUrl },
    ],
  };

  const faqJsonLd = config.faqs && config.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{config.seoTitle}</title>
        <meta name="description" content={config.seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content="GS Cartões" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={config.seoTitle} />
        <meta property="og:description" content={config.seoDescription} />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:type" content="product" />
        {heroImage && <meta property="og:image" content={`https://www.gscartoes.com${heroImage}`} />}
        {heroImage && <meta property="og:image:secure_url" content={`https://www.gscartoes.com${heroImage}`} />}
        {heroImage && <meta property="og:image:alt" content={config.displayName} />}
        {heroImage && <meta property="og:image:width" content="1200" />}
        {heroImage && <meta property="og:image:height" content="1200" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.seoTitle} />
        <meta name="twitter:description" content={config.seoDescription} />
        {heroImage && <meta name="twitter:image" content={`https://www.gscartoes.com${heroImage}`} />}
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>


      <Navbar />

      <div className="pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-body text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Início</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3.5 w-3.5" /></li>
              <li>
                <Link to={`/categoria/${config.categorySlug}`} className="hover:text-foreground transition-colors">
                  {config.categoryLabel}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3.5 w-3.5" /></li>
              <li className="text-foreground font-medium" aria-current="page">{config.displayName}</li>
            </ol>
          </nav>

          <Link
            to={`/categoria/${config.categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-body font-bold text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar à categoria
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Galeria */}
            <div className="space-y-3">
              {heroImage && (
                <>
                  <div
                    className="aspect-square bg-muted/20 rounded-2xl overflow-hidden border border-border cursor-zoom-in relative group"
                    onClick={() => setZoomOpen(true)}
                  >
                    <ProductImage
                      src={heroImage}
                      alt={heroAlt}
                      className="w-full h-full object-contain p-6"
                    />
                    <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search className="h-4 w-4 text-foreground" />
                    </div>
                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); setImageIndex((i) => (i - 1 + gallery.length) % gallery.length); }}
                          aria-label="Imagem anterior"
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setImageIndex((i) => (i + 1) % gallery.length); }}
                          aria-label="Próxima imagem"
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                  <ImageZoom src={heroImage} alt={heroAlt} open={zoomOpen} onOpenChange={setZoomOpen} />

                  {gallery.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setImageIndex(i)}
                          className={cn(
                            "aspect-square bg-muted/20 rounded-lg overflow-hidden border-2 transition-colors",
                            i === imageIndex ? "border-primary" : "border-border hover:border-primary/50"
                          )}
                          aria-label={`Ver imagem ${i + 1}`}
                        >
                          <ProductImage src={img.src} alt={img.alt} className="w-full h-full object-contain p-1.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Info + compra */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-body text-primary tracking-[0.18em] uppercase">
                  {config.categoryLabel}
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 leading-tight">
                  {config.displayName}
                </h1>
                <p className="text-sm font-body text-muted-foreground mt-2">
                  A partir de <strong className="text-primary">{formatCurrency(minPrice)}</strong> no PIX
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-body font-bold px-3 py-1 rounded-full">10% OFF no PIX</span>
                <span className="bg-accent text-accent-foreground text-xs font-body font-bold px-3 py-1 rounded-full">6x sem juros</span>
              </div>

              {/* Seletor de variantes (tamanhos) */}
              {flatVariants.length > 1 && (
                <div>
                  <p className="text-xs font-body font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Tamanho
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {flatVariants.map((fv, i) => (
                      <button
                        key={i}
                        onClick={() => handleVariantSwitch(i)}
                        className={cn(
                          "px-3 py-2 rounded-lg text-sm font-body font-medium transition-all border",
                          activeFlat === i
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-card text-foreground border-border hover:border-primary/60"
                        )}
                      >
                        {fv.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentVariant.dimensions && (
                <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                  <Package className="h-3.5 w-3.5" />
                  {currentVariant.dimensions}
                </p>
              )}

              {/* Quantidade */}
              <div>
                <p className="text-xs font-body font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  Quantidade
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentVariant.prices.map((row, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedQtyIndex(i)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-body font-medium transition-all border",
                        selectedQtyIndex === i
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-card text-foreground border-border hover:border-primary/60"
                      )}
                    >
                      {row.qty.toLocaleString("pt-BR")} uni
                    </button>
                  ))}
                </div>
              </div>

              {/* Box de preço */}
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-accent/10 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-1.5">
                      <Tag className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-xs font-body text-muted-foreground font-medium">PIX / À vista <strong>10% OFF</strong></span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-bold text-primary">{formatCurrency(selected.cash)}</p>
                    {selected.unitPrice && selected.unitPrice > 0 && (
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
                  <p className="text-base font-body font-semibold text-foreground">{formatCurrency(selected.installment)}</p>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Adicionar ao carrinho
              </Button>

              {/* Descrição longa */}
              {config.longDescription && (
                <div className="pt-4 space-y-3">
                  {config.longDescription.map((p, i) => (
                    <p key={i} className="text-sm font-body text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              )}

              {/* Especificações */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <p className="text-xs font-body font-semibold text-foreground mb-2 uppercase tracking-wider">Informações técnicas</p>
                  <ul className="space-y-1">
                    {specs.map((s, i) => (
                      <li key={i} className="text-xs font-body text-muted-foreground flex gap-1.5">
                        <span className="text-primary mt-0.5">•</span>{s.replace(/×/g, "x")}
                      </li>
                    ))}
                    <li className="text-xs font-body text-muted-foreground flex gap-1.5">
                      <span className="text-primary mt-0.5">•</span>Prazo de produção: 5 a 6 dias úteis após aprovação da arte
                    </li>
                  </ul>
                </div>
                {additionals && additionals.length > 0 && (
                  <div className="rounded-xl border border-border bg-card/50 p-4">
                    <p className="text-xs font-body font-semibold text-foreground mb-2 uppercase tracking-wider">Acabamentos adicionais</p>
                    <ul className="space-y-1">
                      {additionals.map((a, i) => (
                        <li key={i} className="text-xs font-body text-muted-foreground flex gap-1.5">
                          <span className="text-primary mt-0.5">+</span>{a.replace(/×/g, "x")}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] font-body text-muted-foreground mt-2 italic">Acabamentos sob consulta.</p>
                  </div>
                )}
              </div>

              {/* FAQ */}
              {config.faqs && config.faqs.length > 0 && (
                <div className="pt-6 space-y-3">
                  <h2 className="text-xl font-display font-semibold text-foreground">Dúvidas frequentes</h2>
                  {config.faqs.map((f, i) => (
                    <details key={i} className="group border-b border-border/60 pb-3">
                      <summary className="cursor-pointer text-sm font-body font-medium text-foreground flex items-start justify-between gap-3 list-none">
                        <span>{f.q}</span>
                        <ChevronRightIcon className="h-4 w-4 mt-0.5 shrink-0 transition-transform group-open:rotate-90 text-muted-foreground" />
                      </summary>
                      <p className="text-sm font-body text-muted-foreground mt-2 leading-relaxed whitespace-pre-line">{f.a}</p>
                    </details>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Vídeo do produto */}
          {config.youtubeVideoId && (
            <div className="mt-10 lg:mt-14">
              <ProductVideo videoId={config.youtubeVideoId} />
            </div>
          )}

          <ProductSuggestions
            title="Outros modelos"
            subtitle="Veja outros tamanhos e formatos da mesma categoria"
            items={getRelatedProducts(config.slug, 6)}
          />

          <ProductSuggestions
            title="Combine com"
            subtitle="Produtos que finalizam sua identidade visual"
            items={getComplementaryProducts(config.slug, 6)}
          />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ProductPage;
