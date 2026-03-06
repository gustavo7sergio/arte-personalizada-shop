import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [testimonial1, testimonial2, testimonial3];

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
      </div>
    </section>
  );
};

export default Testimonials;
