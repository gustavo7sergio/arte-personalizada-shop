import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Package, FileText, PenTool, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/logo-page/hero.jpg";
import portfolio1 from "@/assets/logo-page/portfolio-1.jpg";
import portfolio2 from "@/assets/logo-page/portfolio-2.jpg";
import portfolio3 from "@/assets/logo-page/portfolio-3.jpg";
import portfolio4 from "@/assets/logo-page/portfolio-4.jpg";
import testimonial1 from "@/assets/logo-page/testimonial-1.jpg";
import testimonial2 from "@/assets/logo-page/testimonial-2.jpg";
import testimonial3 from "@/assets/logo-page/testimonial-3.jpg";
import testimonial4 from "@/assets/logo-page/testimonial-4.jpg";
import aboutCreator from "@/assets/logo-page/about-creator.jpg";
import pacoteEssencial from "@/assets/logo-page/pacote-essencial.png";
import pacoteCompleto from "@/assets/logo-page/pacote-completo.png";

const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4];
const testimonialImages = [testimonial1, testimonial2, testimonial3, testimonial4];

function ImageSlider({ images, autoPlay = 5000 }: { images: string[]; autoPlay?: number }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, autoPlay);
    return () => clearInterval(t);
  }, [autoPlay, next]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full flex-shrink-0 object-cover"
            style={{ aspectRatio: "16/7" }}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-primary-foreground/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    icon: Package,
    title: "Pacotes",
    description: "Escolha o pacote de logo que mais te agrada e a melhor forma de pagamento",
  },
  {
    icon: FileText,
    title: "Formulário",
    description: "Responda ao formulário para que possamos entender suas preferências, gostos e referências.",
  },
  {
    icon: PenTool,
    title: "Criação",
    description: "Iniciamos a criação com base no formulário e essa etapa leva em torno de 6 a 7 dias úteis.",
  },
  {
    icon: CheckCircle,
    title: "Aprovação",
    description: "Após receber a apresentação do resultado, você pode aprovar ou pedir alterações!",
  },
];

const CriacaoLogo = () => {
  const heroReveal = useScrollReveal();
  const portfolioReveal = useScrollReveal();
  const videoReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();
  const promoReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back button */}
      <div className="container mx-auto px-6 pt-24 pb-2">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div
          className="container mx-auto px-6"
          ref={heroReveal.ref}
        >
          <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-700 ${heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-full md:w-1/2">
              <img
                src={heroImg}
                alt="Criação de Logo profissional para semijoias"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Garanta já a sua <span className="text-primary">Logo profissional</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Somos especialistas em criação de logo para bijuteria, logo para semijoias e prata!
                {" "}São mais de 100 marcas criadas em todo Brasil!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confira nossos trabalhos + Portfolio Slider */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6" ref={portfolioReveal.ref}>
          <div className={`text-center mb-10 transition-all duration-700 ${portfolioReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Confira alguns dos nossos trabalhos!
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Nossas criações são originais e tem como objetivo deixar o seu negócio ainda mais profissional e único através da Logo.
            </p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${portfolioReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ImageSlider images={portfolioImages} />
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6" ref={videoReveal.ref}>
          <div className={`text-center mb-10 transition-all duration-700 ${videoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Veja o nosso processo de criação de Logo!
            </h2>
          </div>
          <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${videoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/B120D62nuNc"
                title="Como criar uma logo do zero para Semijoias e acessórios?!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6" ref={testimonialReveal.ref}>
          <div className={`text-center mb-10 transition-all duration-700 ${testimonialReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              O que os clientes que compraram acharam do resultado?
            </h2>
          </div>
          <div className={`transition-all duration-700 delay-200 ${testimonialReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ImageSlider images={testimonialImages} />
          </div>
        </div>
      </section>

      {/* Sobre o criador */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6" ref={aboutReveal.ref}>
          <div className={`flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 transition-all duration-700 ${aboutReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="w-full md:w-1/2">
              <img
                src={aboutCreator}
                alt="Gustavo - Criador da GS Cartões"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Sobre o criador
              </h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed whitespace-pre-line">
{`Por trás de cada marca desenvolvida, existe um nome: Gustavo.

Mineiro, 32 anos, designer gráfico com mais de 7 anos de experiência em construção de marcas memoráveis.
Foi ele quem idealizou a GS Cartões, empresa de materiais gráficos personalizados e de criação de identidades visuais únicas.

Gustavo não entrega apenas um logo. Ele desenvolve marcas com propósito, estética e estratégia.

Se você quer uma identidade que comunique, conecte e brilhe aos olhos do cliente, você acabou de encontrar o profissional certo.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps - É muito simples */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6" ref={stepsReveal.ref}>
          <div className={`text-center mb-14 transition-all duration-700 ${stepsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              É muito simples ter sua <span className="text-primary">Logo Profissional</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border-2 border-primary/20 rounded-2xl p-8 text-center bg-card hover:border-primary/40 transition-all duration-500 ${stepsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes / Preços */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6" ref={promoReveal.ref}>
          <div className={`text-center mb-14 transition-all duration-700 ${promoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Escolha o melhor <span className="text-primary">pacote</span> para você!
            </h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-200 ${promoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Pacote Essencial */}
            <div className="border-2 border-primary/20 rounded-2xl overflow-hidden bg-card hover:border-primary/40 transition-all">
              <img src={pacoteEssencial} alt="Pacote Essencial" className="w-full object-cover aspect-[4/5]" />
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Pacote Essencial</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic mb-4">
                  Inclui os seguintes arquivos:
                </p>
                <ul className="space-y-2 text-muted-foreground font-body text-sm mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Logo principal</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Marca d'água</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Paleta de cores</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Tipografias (Fontes)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Manual de uso dos arquivos</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?phone=5535984181096&text=Oi,%20tenho%20interesse%20no%20Pacote%20Essencial!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-full font-body font-semibold py-5 bg-primary text-primary-foreground hover:bg-primary/90">
                    Quero esse pacote
                  </Button>
                </a>
              </div>
            </div>

            {/* Pacote Completo */}
            <div className="border-2 border-primary/20 rounded-2xl overflow-hidden bg-card hover:border-primary/40 transition-all relative">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full z-10">
                Mais completo
              </div>
              <img src={pacoteCompleto} alt="Pacote Completo" className="w-full object-cover aspect-[4/5]" />
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Pacote Completo</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic mb-4">
                  Inclui os seguintes arquivos:
                </p>
                <ul className="space-y-2 text-muted-foreground font-body text-sm mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Logo principal</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Marca d'água</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Sub logo</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Paleta de cores</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Tipografias (Fontes)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> Manual de uso dos arquivos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> 2 artes p/ impressos (Cartão, tag, sacola etc.)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> 3 Capas para stories</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /> 1 template para stories</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?phone=5535984181096&text=Oi,%20tenho%20interesse%20no%20Pacote%20Completo!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-full font-body font-semibold py-5 bg-primary text-primary-foreground hover:bg-primary/90">
                    Quero esse pacote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-6 text-center" ref={ctaReveal.ref}>
          <div className={`transition-all duration-700 ${ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-primary-foreground/70 font-body text-lg mb-4">
              Gostou de algum pacote ou ainda tem dúvidas?
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-8">
              Clique no botão e fale com nosso time!
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=5535984181096&text=Oi,%20tenho%20interesse%20no%20pacote%20de%20cria%C3%A7%C3%A3o%20de%20logo!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-full font-body font-semibold px-10 py-6 text-lg"
                style={{ backgroundColor: "hsl(4, 42%, 70%)", color: "hsl(60, 20%, 97%)" }}
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Atendimento no Whatsapp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CriacaoLogo;
