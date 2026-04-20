import { PlanItem } from "@/lib/types";
import { buildWhatsappLink } from "@/lib/whatsapp";

type PlansSectionProps = {
  plans: PlanItem[];
  whatsappNumber: string;
};

export function PlansSection({ plans, whatsappNumber }: PlansSectionProps) {
  return (
    <section className="plans" aria-labelledby="plans-title">
      <div className="container">
        <h2 id="plans-title">Planes</h2>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className="card plan-card">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <p className="price-label">{plan.priceLabel}</p>
              <a
                className="btn btn-secondary"
                href={buildWhatsappLink(whatsappNumber, `${plan.ctaLabel} en Fizik Gym`) }
                target="_blank"
                rel="noreferrer"
                data-track-event="whatsapp_click"
              >
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
