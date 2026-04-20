const benefits = [
  {
    title: "Entrenamiento guiado",
    text: "Profes que te acompanan para entrenar con tecnica y progresion."
  },
  {
    title: "Ambiente motivador",
    text: "Un espacio pensado para sostener constancia y energia en cada sesion."
  },
  {
    title: "Resultados medibles",
    text: "Planificacion simple para mejorar fuerza, resistencia y composicion corporal."
  }
];

export function BenefitCards() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title">Por que entrenar en Fizik</h2>
        <div className="benefit-grid">
          {benefits.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
