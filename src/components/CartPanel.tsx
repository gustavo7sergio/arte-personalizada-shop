import { useCartStore } from '@/store/cartStore';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function CartPanel() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, clearCart } = useCartStore();

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.selectedQuantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantidade: ${item.selectedQuantity} unidades\n`;
      message += `   Valor unitário: ${formatCurrency(item.price)}\n`;
      message += `   Subtotal: ${formatCurrency(item.price * item.selectedQuantity)}\n\n`;
    });

    message += `\nTOTAL: ${formatCurrency(total)}\n\n`;
    message += 'Aguardo retorno!';

    const whatsappUrl = `https://wa.me/5535984181096?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-xl font-bold">Meu Carrinho</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="w-12 h-12 mb-4 opacity-50" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {formatCurrency(item.price)} por unidade
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.selectedQuantity - 1))}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center">{item.selectedQuantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedQuantity + 1)}
                      className="px-2 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold mt-2">
                    {formatCurrency(item.price * item.selectedQuantity)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Finalizar Pedido no WhatsApp
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="w-full"
            >
              Continuar Comprando
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
