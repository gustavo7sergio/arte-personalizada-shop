import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useEffect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import { SimpleCartProvider } from "@/contexts/SimpleCartContext";
import SimpleCartModal from "@/components/SimpleCartModal";
import SimpleCartButton from "@/components/SimpleCartButton";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SimpleCartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SimpleCartModal />
          <SimpleCartButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SimpleCartProvider>
  </QueryClientProvider>
);

export default App;
