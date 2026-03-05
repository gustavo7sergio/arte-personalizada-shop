import { ShoppingCart, X, MessageCircle, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function Cart() {
  const { items, isOpen, setIsOpen, removeItem, clearCart } = useCart();

  if (!isOpen) {
    return null;
  }

  const totalCash = items.reduce((sum, item) => sum + item.cashPrice * item.qty, 0);
  const totalInstallment = items.reduce((sum, item) => sum + item.installmentPrice * item.qty, 0);

  const handleWhatsAppCheckout = () => {
    const lines = items.map((item, i) => {
      const name = item.subtitle
        ? `${item.productName} – ${item.subtitle}`
        : item.productName;
      return `${i + 1}. ${name}\n   Tamanho: ${item.variantLabel}\n   Quantidade: ${item.qty} uni\n   Valor (PIX): ${formatCurrency(item.cashPrice * item.qty)}`;
    });

    const msg = `Olá! Gostaria de fazer o seguinte pedido:\n\n${lines.join("\n\n")}\n\n📦 Total (PIX): ${formatCurrency(totalCash)}\n💳 Total (6x): ${formatCurrency(totalInstallment)}\n\nPoderia confirmar a disponibilidade?`;

    window.open(`https://wa.me/553584181096?text=${encodeURIComponent(msg)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white border-l border-gray-200 shadow-lg z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-[hsl(142,70%,40%)]" />
            <h2 className="font-semibold text-gray-900">
              Meu Carrinho ({items.length})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-300" />
              <p className="text-gray-500 text-sm">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200"
                >
                  {item.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 leading-tight truncate">
                      {item.productName}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs text-[hsl(142,70%,40%)] truncate">{item.subtitle}</p>
                    )}
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {item.variantLabel} · {item.qty} uni
                    </p>
                    <p className="text-sm font-bold text-[hsl(142,70%,40%)] mt-1">
                      {formatCurrency(item.cashPrice * item.qty)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    className="shrink-0 self-start p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 transition-colors"
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
          <div className="border-t border-gray-200 p-4 space-y-3 bg-gray-50">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total (PIX)</span>
                <span className="text-lg font-bold text-[hsl(142,70%,40%)]">
                  {formatCurrency(totalCash)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Total (6x sem juros)</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(totalInstallment)}
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold gap-2 py-3 px-4 flex items-center justify-center transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Finalizar pelo WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-xs text-gray-500 hover:text-red-600 transition-colors py-1"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
