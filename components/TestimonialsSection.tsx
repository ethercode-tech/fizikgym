import { TestimonialItem } from "@/lib/types";

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((token) => token[0]?.toUpperCase())
    .join("");
}

function getTrainingTime(index: number): string {
  const options = ["Entrena hace 1 anio", "Entrena hace 2 anios", "Entrena hace 8 meses"];
  return options[index % options.length];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const featuredIndex = testimonials.length > 1 ? 1 : 0;

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Resultados</span>
          <h2 id="testimonials-title">Historias de progreso real</h2>
          <p>Resenas de alumnos que sostienen constancia y evolucion en Fizik.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const isFeatured = index === featuredIndex;

            return (
              <article className={`card testimonial-card${isFeatured ? " featured" : ""}`} key={testimonial.author}>
                <div className="testimonial-header">
                  <div className="avatar">{getInitials(testimonial.author)}</div>
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{getTrainingTime(index)}</span>
                  </div>
                </div>
                <div className="stars" aria-label="Calificacion 5 estrellas">?????</div>
                <p>"{testimonial.quote}"</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

