import Image from "next/image";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { LandingPayload } from "@/lib/types";

type HeroSectionProps = {
  data: LandingPayload;
};

function getFirstOpenRange(data: LandingPayload): string {
  const firstOpenDay = data.schedules.find((item) => !item.isClosed && item.ranges[0]);
  return firstOpenDay?.ranges[0] ?? "07:00 - 22:30";
}

export function HeroSection({ data }: HeroSectionProps) {
  const message = process.env.NEXT_PUBLIC_WHATSAPP_TEXT ?? "Hola! Quiero info sobre planes y horarios.";
  const ctaLink = buildWhatsappLink(data.gym.whatsappNumber, message);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src={data.images[0].url}
          alt={data.images[0].alt}
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-inner">
          <p className="eyebrow">Gimnasio en {data.gym.address.neighborhood}</p>
          <h1 id="hero-title">{data.gym.tagline}</h1>
          <p className="hero-copy">{data.gym.description}</p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href={ctaLink} target="_blank" rel="noreferrer" data-track-event="whatsapp_click">
              Clase gratis
            </a>
            <a className="btn btn-secondary" href="#planes" data-track-event="view_plans">
              Ver planes
            </a>
            <a className="btn btn-dark" href="#contacto" data-track-event="open_contact_form">
              Contactar
            </a>
          </div>
          <ul className="hero-badges" aria-label="Datos clave">
            <li>{data.gym.address.neighborhood}</li>
            <li>{getFirstOpenRange(data)}</li>
            <li>Clase de prueba</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
