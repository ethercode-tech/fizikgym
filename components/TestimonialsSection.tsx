import { TestimonialItem } from "@/lib/types";

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title">Testimonios</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <blockquote className="card testimonial-card" key={testimonial.author}>
              <p>"{testimonial.quote}"</p>
              <footer className="testimonial-footer">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.source}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
