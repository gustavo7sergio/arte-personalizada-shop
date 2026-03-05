import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
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

