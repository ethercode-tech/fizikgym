"use client";

import { useMemo } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";

type StickyWhatsappCTAProps = {
  whatsappNumber: string;
};

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 11.6a8 8 0 0 1-11.5 7.2L4 20l1.2-4.2A8 8 0 1 1 20 11.6Z" />
      <path d="M9.4 10.1c.5 1.2 2.1 2.8 3.3 3.3.6.2 1 .2 1.4-.2l.8-.8c.2-.2.5-.2.7-.1.3.2 1 .6 1.2.8.2.1.2.4.1.6l-.4 1c-.2.6-.9 1-1.5 1.1-1.4.2-3.7-.7-5.5-2.5-1.8-1.8-2.7-4.1-2.5-5.5.1-.7.5-1.3 1.1-1.5l1-.4c.2-.1.4 0 .6.1.2.2.6.9.8 1.2.1.2.1.5-.1.7l-.8.8c-.4.4-.4.8-.2 1.4Z" />
    </svg>
  );
}

export function StickyWhatsappCTA({ whatsappNumber }: StickyWhatsappCTAProps) {
  const link = useMemo(() => {
    const message = process.env.NEXT_PUBLIC_WHATSAPP_TEXT ?? "Hola! Quiero info de Fizik Gym.";
    return buildWhatsappLink(whatsappNumber, message);
  }, [whatsappNumber]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="sticky-wa"
      aria-label="Hablanos por WhatsApp"
      data-track-event="whatsapp_click"
    >
      <WhatsappIcon />
      <span>Hablanos</span>
    </a>
  );
}

