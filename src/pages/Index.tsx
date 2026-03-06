import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <HowItWorks />
      <div id="sobre">
        <About />
      </div>
      <div id="contato">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

