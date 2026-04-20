"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/types";

type FaqAccordionProps = {
  faq: FaqItem[];
};

export function FaqAccordion({ faq }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">Preguntas frecuentes</h2>
        <div className="faq-list">
          {faq.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article key={item.id} className="faq-item">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-indicator" aria-hidden="true">{isOpen ? "-" : "+"}</span>
                  </button>
                </h3>
                <div id={`panel-${item.id}`} hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
