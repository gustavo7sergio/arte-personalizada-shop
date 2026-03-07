import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Trash2, MessageCircle, X } from "lucide-react";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const CartDrawer = () => {
  const { items, removeItem, clearCart, isOpen, setIsOpen, totalCash, totalInstallment } = useCart();

  const handleWhatsAppCheckout = () => {
    const lines = items.map((item, i) => {
      const name = item.subtitle
        ? `${item.productName} – ${item.subtitle}`
        : item.productName;
      return `${i + 1}. ${name}\n   Tamanho: ${item.variantLabel}\n   Quantidade: ${item.qty} uni\n   Valor (PIX): ${formatCurrency(item.cashPrice)}`;
    });

    const msg = `Olá! Gostaria de fazer o seguinte pedido:\n\n${lines.join("\n\n")}\n\n📦 Total (PIX): ${formatCurrency(totalCash)}\n💳 Total (6x): ${formatCurrency(totalInstallment)}\n\nPoderia confirmar a disponibilidade?`;

    window.open(`https://wa.me/553584181096?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background border-border">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display flex items-center gap-2 text-foreground">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Meu Carrinho ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground font-body text-sm">Seu carrinho está vazio</p>
            <p className="text-muted-foreground/60 font-body text-xs">Adicione produtos para montar seu pedido</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-3 -mx-2 px-2">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl bg-card border border-border"
                >
                  {item.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/20 shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-sm text-foreground leading-tight truncate">
                      {item.productName}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs font-body text-primary truncate">{item.subtitle}</p>
                    )}
                    <p className="text-[11px] font-body text-muted-foreground mt-0.5">
                      {item.variantLabel} · {item.qty} uni
                    </p>
                    <p className="text-sm font-body font-bold text-primary mt-1">
                      {formatCurrency(item.cashPrice)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    className="shrink-0 self-start p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-body text-muted-foreground">Total (PIX)</span>
                  <span className="text-lg font-display font-bold text-primary">{formatCurrency(totalCash)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-body text-muted-foreground">Total (6x sem juros)</span>
                  <span className="text-sm font-body font-semibold text-foreground">{formatCurrency(totalInstallment)}</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppCheckout}
                className="w-full rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-body gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Finalizar pelo WhatsApp
              </Button>

              <button
                onClick={clearCart}
                className="w-full text-xs font-body text-muted-foreground hover:text-destructive transition-colors py-1"
              >
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
