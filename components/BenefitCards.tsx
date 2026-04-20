import { ReactElement, SVGProps } from "react";

type BenefitItem = {
  number: string;
  title: string;
  text: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

function DumbbellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 9v6" />
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M21 9v6" />
      <path d="M6 12h12" />
    </svg>
  );
}

function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3c2.4 2.4 3.9 4.9 3.9 7.5a3.9 3.9 0 1 1-7.8 0C8.1 8 9.5 5.4 12 3Z" />
      <path d="M12 13.2c1.6 1.4 2.4 2.8 2.4 4.2a2.4 2.4 0 1 1-4.8 0c0-1.3.8-2.7 2.4-4.2Z" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.6v5l3.2 2.2" />
    </svg>
  );
}

const benefits: BenefitItem[] = [
  {
    number: "01",
    Icon: DumbbellIcon,
    title: "Equipamiento completo",
    text: "Maquinas, barras, discos y espacio para entrenar fuerza y cardio."
  },
  {
    number: "02",
    Icon: FlameIcon,
    title: "Ambiente motivador",
    text: "Entrena rodeado de personas que empujan tu progreso en cada sesion."
  },
  {
    number: "03",
    Icon: ClockIcon,
    title: "Horarios amplios",
    text: "Mas opciones para sostener constancia durante toda la semana."
  }
];

export function BenefitCards() {
  return (
    <section id="beneficios" className="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title">Por que entrenar en Fizik</h2>
        <div className="benefit-grid">
          {benefits.map((item, index) => (
            <article key={item.title} className={`card benefit-card benefit-card-${index + 1}`}>
              <span className="benefit-number">{item.number}</span>
              <div className="benefit-icon">
                <item.Icon aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

