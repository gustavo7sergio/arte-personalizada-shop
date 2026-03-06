const testimonials = [
  {
    image: "/testimonial-1.jpg",
  },
  {
    image: "/testimonial-2.jpg",
  },
  {
    image: "/testimonial-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Quem já comprou
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Veja como nossos produtos transformam o negócio dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={testimonial.image}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
