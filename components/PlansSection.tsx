import { PlanItem } from "@/lib/types";
import { buildWhatsappLink } from "@/lib/whatsapp";

type PlansSectionProps = {
  plans: PlanItem[];
  whatsappNumber: string;
};

function getPlanBenefits(planId: string): string[] {
  if (planId === "plan-inicio") {
    return ["Acceso completo", "Horarios flexibles", "Seguimiento inicial"];
  }

  if (planId === "plan-estudiante") {
    return ["Acceso completo", "Franja estudiante", "Promociones activas"];
  }

  return ["Acceso completo", "Turnos manana y tarde", "Asistencia del equipo"];
}

export function PlansSection({ plans, whatsappNumber }: PlansSectionProps) {
  return (
    <section id="planes" className="plans" aria-labelledby="plans-title">
      <div className="container">
        <h2 id="plans-title">Planes</h2>
        <div className="plans-grid">
          {plans.map((plan) => {
            const isFeatured = plan.id === "plan-inicio";
            const benefits = getPlanBenefits(plan.id);

            return (
              <article key={plan.id} className={`card plan-card${isFeatured ? " is-featured" : ""}`}>
                {isFeatured && <span className="plan-highlight">Mas elegido</span>}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <ul className="plan-benefits">
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="plan-price-wrap">
                  <span>Desde</span>
                  <strong>{plan.priceLabel ?? "Consultar valor"}</strong>
                </div>
                <a
                  className="btn btn-primary"
                  href={buildWhatsappLink(whatsappNumber, `${plan.ctaLabel} en Fizik Gym`)}
                  target="_blank"
                  rel="noreferrer"
                  data-track-event="whatsapp_click"
                >
                  {plan.ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

