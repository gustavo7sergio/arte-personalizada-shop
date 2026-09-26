import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DeferUntilVisible from "@/components/DeferUntilVisible";

const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
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
        <DeferUntilVisible
          minHeight={0}
          rootMargin="300px 0px"
          placeholderClassName="min-h-[2241px] md:min-h-[1282px] xl:min-h-[1001px]"
        >
          <HowItWorks />
        </DeferUntilVisible>
        <DeferUntilVisible
          minHeight={0}
          rootMargin="500px 0px"
          placeholderClassName="min-h-[3332px] md:min-h-[1271px] xl:min-h-[1472px]"
        >
          <Testimonials />
        </DeferUntilVisible>
        <div id="sobre" />
        <div id="contato">
          <DeferUntilVisible
            minHeight={0}
            rootMargin="500px 0px"
            placeholderClassName="min-h-[1024px] md:min-h-[948px]"
          >
            <FAQ />
          </DeferUntilVisible>
        </div>
      </main>
      <DeferUntilVisible
        minHeight={0}
        rootMargin="500px 0px"
        placeholderClassName="min-h-[979px] md:min-h-[480px] xl:min-h-[477px]"
      >
        <Footer />
      </DeferUntilVisible>
    </div>
  );
};

export default Index;
