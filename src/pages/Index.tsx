import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import MobileBanners from "@/components/MobileBanners";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://www.gscartoes.com/" />
        <meta property="og:url" content="https://www.gscartoes.com/" />
        <meta property="og:title" content="GS Cartões — Papelaria Personalizada para Semijoias" />
        <meta property="og:description" content="GS Cartões: tags, cartões, sacolinhas e adesivos personalizados para empreendedoras de semijoias, prata e bijuterias. Envio para todo o Brasil." />
      </Helmet>
      <Navbar />
      <Hero />
      <Categories />
      <MobileBanners />
      <HowItWorks />
      <Testimonials />
      <div id="sobre">
        <About />
      </div>
      <div id="contato">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
