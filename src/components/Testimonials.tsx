import { useState, useEffect, useRef } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [testimonial1, testimonial2, testimonial3];

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
  return (
    <section className="py-20 md:py-28 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-lg">
            Feedbacks reais de quem confia na GS Cartões para elevar a apresentação da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Depoimento de cliente ${index + 1}`}
                className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mini banner prova social */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 md:p-10 text-center shadow-sm">
          <span className="inline-block font-display font-bold text-4xl md:text-5xl" style={{ color: "hsl(var(--rose))" }}>
            +<CountUp target={5} duration={1500} /> anos
          </span>
          <div className="text-muted-foreground font-body mt-6 text-sm md:text-base leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
            <p>
              Há mais de 5 anos atuando no mercado, a <strong className="text-foreground">GS Cartões</strong> é especializada na criação de <strong className="text-foreground">materiais gráficos personalizados</strong> para marcas de <strong className="text-foreground">semijoias, bijuterias e prata</strong>.
            </p>
            <p>
              Ao longo desse tempo, já ajudamos <strong className="text-foreground">milhares de empreendedoras</strong> a profissionalizar a apresentação da marca e <strong className="text-foreground">valorizar seus produtos</strong> através de tags, cartões e embalagens personalizados.
            </p>
            <p>
              Sempre com um <strong className="text-foreground">processo simples</strong>, <strong className="text-foreground">atendimento humano</strong> e <strong className="text-foreground">agilidade</strong> na criação das artes e produção dos materiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
