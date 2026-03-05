import { useSimpleCart } from '@/contexts/SimpleCartContext';
import { X, ShoppingCart, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function SimpleCartModal() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, clearCart } = useSimpleCart();

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantidade: ${item.quantity} unidades\n`;
      message += `   Valor unitário: ${formatCurrency(item.price)}\n`;
      message += `   Subtotal: ${formatCurrency(item.price * item.quantity)}\n\n`;
    });

    message += `\nTOTAL: ${formatCurrency(total)}\n\n`;
    message += 'Aguardo retorno!';

    const whatsappUrl = `https://wa.me/5535984181096?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col z-50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-green-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800">Meu Carrinho</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-200 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-center">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {formatCurrency(item.price)} por unidade
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border rounded-lg bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-green-600">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 bg-gray-50 space-y-3">
            <div className="flex justify-between items-center text-lg font-bold text-gray-800">
              <span>Total:</span>
              <span className="text-green-600">{formatCurrency(total)}</span>
            </div>
            
            <Button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Finalizar Pedido no WhatsApp
            </Button>
            
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="w-full py-3"
            >
              Continuar Comprando
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
