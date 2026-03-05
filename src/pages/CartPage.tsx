import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2 } from "lucide-react";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const totalCash = items.reduce((sum, item) => sum + item.cashPrice, 0);
  const totalInstallment = items.reduce((sum, item) => sum + item.installmentPrice, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Build message for WhatsApp
    let message = "Olá! Gostaria de fazer um pedido:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.productName}\n`;
      message += `   Variante: ${item.variantLabel}\n`;
      message += `   Quantidade: ${item.qty} unidades\n`;
      message += `   PIX/À vista: ${formatCurrency(item.cashPrice)}\n`;
      message += `   6x sem juros: ${formatCurrency(item.installmentPrice)}\n\n`;
    });

    message += `\nTOTAL PIX/À VISTA: ${formatCurrency(totalCash)}\n`;
    message += `TOTAL 6x SEM JUROS: ${formatCurrency(totalInstallment)}\n\n`;
    message += "Aguardo retorno!";

    const whatsappUrl = `https://wa.me/5535984181096?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Meu Carrinho</h1>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">Seu carrinho está vazio</p>
            <Button onClick={() => navigate("/")}>Continuar comprando</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 flex gap-4 bg-card"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-24 h-24 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.productName}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      <p className="text-sm mt-2">
                        <strong>Variante:</strong> {item.variantLabel}
                      </p>
                      <p className="text-sm">
                        <strong>Quantidade:</strong> {item.qty} unidades
                      </p>
                      <div className="mt-3 flex gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">PIX/À vista</p>
                          <p className="font-bold text-green-600">
                            {formatCurrency(item.cashPrice)}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">6x sem juros</p>
                          <p className="font-bold">
                            {formatCurrency(item.installmentPrice)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remover item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 bg-card sticky top-4">
                <h2 className="text-2xl font-bold mb-6">Resumo</h2>
                
                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span>Produtos ({items.length})</span>
                    <span>{formatCurrency(totalCash)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>PIX/À vista (10% OFF)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total PIX/À vista:</span>
                    <span className="text-green-600">{formatCurrency(totalCash)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total 6x s/ juros:</span>
                    <span>{formatCurrency(totalInstallment)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    Finalizar Pedido no WhatsApp
                  </Button>
                  <Button
                    onClick={() => clearCart()}
                    variant="outline"
                    className="w-full"
                  >
                    Limpar Carrinho
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Você será redirecionado para o WhatsApp para confirmar seu pedido
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
