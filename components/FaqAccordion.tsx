import { FaqItem } from "@/lib/types";

type FaqAccordionProps = {
  faq: FaqItem[];
};

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FaqAccordion({ faq }: FaqAccordionProps) {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">FAQ</span>
          <h2 id="faq-title">Respuestas rapidas para empezar</h2>
        </div>
        <div className="faq-list">
          {faq.map((item, index) => (
            <details key={item.id} className="faq-item" open={index === 0}>
              <summary className="faq-trigger">
                <span>{item.question}</span>
                <span className="faq-icon">
                  <ChevronIcon />
                </span>
              </summary>
              <div className="faq-panel">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
