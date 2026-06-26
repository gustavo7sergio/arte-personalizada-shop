import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero, { heroWebp, heroWebpSm, heroAvif, heroAvifSm } from "@/components/Hero";
import Categories from "@/components/Categories";

const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const About = lazy(() => import("@/components/About"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div style={{ minHeight: "400px" }} aria-hidden="true" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={heroAvif}
          imageSrcSet={`${heroAvifSm} 800w, ${heroAvif} 1536w`}
          imageSizes="100vw"
          type="image/avif"
          fetchPriority="high"
        />
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
      <Suspense fallback={<SectionFallback />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <div id="sobre">
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </div>
      <div id="contato">
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
