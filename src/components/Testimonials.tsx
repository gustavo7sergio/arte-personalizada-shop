import { useState, useEffect, useRef } from "react";
import testimonial1Webp from "@/assets/testimonial-1.jpg?format=webp&w=500&quality=72&imagetools";
import testimonial1Jpg from "@/assets/testimonial-1.jpg?w=500&quality=75&imagetools";
import testimonial2Webp from "@/assets/testimonial-2.jpg?format=webp&w=500&quality=72&imagetools";
import testimonial2Jpg from "@/assets/testimonial-2.jpg?w=500&quality=75&imagetools";
import testimonial3Webp from "@/assets/testimonial-3.jpg?format=webp&w=500&quality=72&imagetools";
import testimonial3Jpg from "@/assets/testimonial-3.jpg?w=500&quality=75&imagetools";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { webp: testimonial1Webp, jpg: testimonial1Jpg },
  { webp: testimonial2Webp, jpg: testimonial2Jpg },
  { webp: testimonial3Webp, jpg: testimonial3Jpg },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}</span>;
}
const Testimonials = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 md:py-16 bg-accent/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-lg">
            Experiências reais de quem já fez seu pedido com a GS Cartões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="flex justify-center">
              <picture>
                <source type="image/webp" srcSet={t.webp} />
                <img
                  src={t.jpg}
                  alt={`Depoimento de cliente ${index + 1}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Mini banner prova social */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 md:p-10 text-center shadow-sm">
          <h2 className="inline-block font-display font-bold text-3xl md:text-5xl text-[hsl(var(--institutional-heading))]">
            Especialistas em materiais para semijoias desde 2020
          </h2>
          <div className="text-muted-foreground font-body mt-6 text-sm md:text-base leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
            <p>
              A GS Cartões cria tags para semijoias, cartões personalizados, sacolinhas, embalagens e outros materiais gráficos para marcas de semijoias, prata 925 e bijuterias desde 2020.
            </p>
            <p>
              São diferentes modelos, medidas, formatos e possibilidades de personalização para você escolher de acordo com as peças que vende e com o que precisa no momento.
            </p>
            <p>
              E se surgir dúvida sobre tamanho, papel, acabamento, furos, cortes ou quantidade, a gente te ajuda a entender as opções antes de fazer o pedido.
            </p>
            <p>
              Tudo com atendimento humano, criação personalizada e acompanhamento desde a escolha até a produção dos materiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
