import Image from "next/image";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { LandingPayload } from "@/lib/types";

type HeroSectionProps = {
  data: LandingPayload;
};

export function HeroSection({ data }: HeroSectionProps) {
  const message = process.env.NEXT_PUBLIC_WHATSAPP_TEXT ?? "Hola! Quiero info sobre planes y horarios.";
  const ctaLink = buildWhatsappLink(data.gym.whatsappNumber, message);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Gimnasio en {data.gym.address.neighborhood}</p>
          <h1 id="hero-title">{data.gym.tagline}</h1>
          <p className="hero-copy">{data.gym.description}</p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href={ctaLink} target="_blank" rel="noreferrer" data-track-event="whatsapp_click">
              Escribir por WhatsApp
            </a>
            <a className="btn btn-secondary" href="#horarios" data-track-event="view_schedule">
              Ver horarios
            </a>
          </div>
          <ul className="hero-benefits" aria-label="Beneficios clave">
            <li>Equipamiento moderno</li>
            <li>Rutinas personalizadas</li>
            <li>Seguimiento real</li>
          </ul>
        </div>
        <div className="hero-image-wrap">
          <Image
            src={data.images[0].url}
            alt={data.images[0].alt}
            width={data.images[0].width}
            height={data.images[0].height}
            priority
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
