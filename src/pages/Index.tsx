import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const About = lazy(() => import("@/components/About"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GS Cartões — Papelaria Personalizada para Semijoias</title>
        <meta name="description" content="GS Cartões: tags, cartões, sacolinhas e adesivos personalizados para empreendedoras de semijoias, prata e bijuterias. Envio para todo o Brasil." />
        <link rel="canonical" href="https://www.gscartoes.com/" />
        <meta property="og:url" content="https://www.gscartoes.com/" />
        <meta property="og:title" content="GS Cartões — Papelaria Personalizada para Semijoias" />
        <meta property="og:description" content="GS Cartões: tags, cartões, sacolinhas e adesivos personalizados para empreendedoras de semijoias, prata e bijuterias. Envio para todo o Brasil." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Suspense fallback={null}>
          <HowItWorks />
          <Testimonials />
          <div id="sobre">
            <About />
          </div>
          <div id="contato">
            <FAQ />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
