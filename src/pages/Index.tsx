import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero, { heroWebp, heroWebpSm } from "@/components/Hero";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={heroWebp}
          imageSrcSet={`${heroWebpSm} 800w, ${heroWebp} 1536w`}
          imageSizes="100vw"
          type="image/webp"
          fetchPriority="high"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Categories />
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
