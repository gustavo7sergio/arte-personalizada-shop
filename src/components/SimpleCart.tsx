import { ShoppingCart, Trash2, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const SimpleCart = () => {
  const { items, removeItem, clearCart, totalCash, totalInstallment } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppCheckout = () => {
    const lines = items.map((item, i) => {
      const name = item.subtitle
        ? `${item.productName} – ${item.subtitle}`
        : item.productName;
      return `${i + 1}. ${name}\n   Tamanho: ${item.variantLabel}\n   Quantidade: ${item.qty} uni\n   Valor (PIX): ${formatCurrency(item.cashPrice)}`;
    });

    const msg = `Olá! Gostaria de fazer o seguinte pedido:\n\n${lines.join("\n\n")}\n\n📦 Total (PIX): ${formatCurrency(totalCash)}\n💳 Total (6x): ${formatCurrency(totalInstallment)}\n\nPoderia confirmar a disponibilidade?`;

    window.open(`https://wa.me/553584181096?text=${encodeURIComponent(msg)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Cart Button */}
      {items.length > 0 && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg z-40 flex items-center gap-2 transition-all hover:scale-110"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="font-body font-semibold">{items.length}</span>
        </button>
      )}

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-background border-l border-border shadow-lg z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-foreground">
                Meu Carrinho ({items.length})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-accent rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground/30" />
                <p className="text-muted-foreground font-body text-sm">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="p-4 space-y-3">
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
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-body text-muted-foreground">Total (PIX)</span>
                  <span className="text-lg font-display font-bold text-primary">
                    {formatCurrency(totalCash)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-body text-muted-foreground">Total (6x sem juros)</span>
                  <span className="text-sm font-body font-semibold text-foreground">
                    {formatCurrency(totalInstallment)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-body gap-2 py-3 px-4 flex items-center justify-center transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Finalizar pelo WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full text-xs font-body text-muted-foreground hover:text-destructive transition-colors py-1"
              >
                Limpar carrinho
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
