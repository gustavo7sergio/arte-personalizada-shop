import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CriacaoLogo from "./pages/CriacaoLogo";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <CartProvider>
      <Sonner />
      <CartDrawer />
      <FloatingCartButton />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categoria/:categorySlug" element={<CategoryPage />} />
          <Route path="/produto/:productSlug" element={<ProductPage />} />
          {/* 301-equivalent redirects from old slugs to new SEO-optimized slugs */}
          <Route path="/categoria/tags-de-acessorios" element={<Navigate to="/categoria/tags-personalizadas-para-semijoias" replace />} />
          <Route path="/categoria/sacolinhas" element={<Navigate to="/categoria/sacolinhas-personalizadas-para-semijoias" replace />} />
          <Route path="/categoria/cartoes" element={<Navigate to="/categoria/cartoes-personalizados-para-semijoias" replace />} />
          <Route path="/categoria/adesivos" element={<Navigate to="/categoria/adesivos-personalizados-para-semijoias" replace />} />
          <Route path="/categoria/tags-de-lacos-e-tiaras" element={<Navigate to="/categoria/tags-personalizadas-para-lacos-e-tiaras" replace />} />
          <Route path="/categoria/etiquetas-de-roupas" element={<Navigate to="/categoria/etiquetas-personalizadas-para-roupas" replace />} />
          <Route path="/categoria/kits" element={<Navigate to="/categoria/kits-de-tags-para-semijoias" replace />} />
          <Route path="/categoria/outros" element={<Navigate to="/categoria/papelaria-personalizada" replace />} />
          <Route path="/produto/tag-de-anel-padronizada-3-9x1-7-cm" element={<Navigate to="/produto/tag-de-anel-personalizada-4x4-cm" replace />} />
          <Route path="/produto/adesivo-redondo-personalizado" element={<Navigate to="/produto/adesivo-redondo-personalizado-4-8x4-8-cm" replace />} />
          <Route path="/produto/sacolinha-personalizada-para-semijoias-couche-16-5x12x4-5-cm" element={<Navigate to="/produto/sacolinha-personalizada-para-semijoias-16-5x12x4-5-cm" replace />} />
          <Route path="/produto/sacolinha-personalizada-para-semijoias-papel-cartao" element={<Navigate to="/produto/sacolinha-personalizada-para-semijoias" replace />} />
          <Route path="/produto/kit-de-600-tags-personalizadas" element={<Navigate to="/produto/kit-basico-de-tags-1" replace />} />
          <Route path="/produto/kit-de-800-materiais-graficos-personalizados" element={<Navigate to="/produto/kit-completo-de-tags-1" replace />} />
          <Route path="/produto/kit-completo-1" element={<Navigate to="/produto/kit-completo-de-tags-1" replace />} />
          <Route path="/produto/kit-de-5-mil-tags-personalizadas" element={<Navigate to="/produto/kit-basico-de-tags-2" replace />} />
          <Route path="/produto/kit-de-6-mil-materiais-graficos-personalizados" element={<Navigate to="/produto/kit-completo-de-tags-2" replace />} />
          <Route path="/produto/kit-completo-2" element={<Navigate to="/produto/kit-completo-de-tags-2" replace />} />
          <Route path="/criacao-de-logo" element={<CriacaoLogo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </TooltipProvider>
);

export default App;
