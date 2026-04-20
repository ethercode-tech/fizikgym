"use client";

import { useMemo } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";

type StickyWhatsappCTAProps = {
  whatsappNumber: string;
};

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
      aria-label="Abrir WhatsApp"
      data-track-event="whatsapp_click"
    >
      WhatsApp
    </a>
  );
}
