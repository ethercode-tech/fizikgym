import { PlanItem } from "@/lib/types";
import { buildWhatsappLink } from "@/lib/whatsapp";

type PlansSectionProps = {
  plans: PlanItem[];
  whatsappNumber: string;
};

export function PlansSection({ plans, whatsappNumber }: PlansSectionProps) {
  return (
    <section id="planes" className="plans" aria-labelledby="plans-title">
      <div className="container">
        <h2 id="plans-title">Planes</h2>
        <div className="plans-grid">
          {plans.map((plan) => {
            const isFeatured = plan.id === "plan-inicio";

            return (
              <article key={plan.id} className={`card plan-card${isFeatured ? " is-featured" : ""}`}>
                {isFeatured && <p className="plan-badge">Recomendado</p>}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <p className="price-label">{plan.priceLabel}</p>
                <a
                  className={isFeatured ? "btn btn-primary" : "btn btn-secondary"}
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
