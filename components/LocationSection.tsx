import { buildWhatsappLink } from "@/lib/whatsapp";
import { LandingPayload } from "@/lib/types";

type LocationSectionProps = {
  gym: LandingPayload["gym"];
};

export function LocationSection({ gym }: LocationSectionProps) {
  const query = encodeURIComponent(`${gym.address.line1}, ${gym.address.city}, ${gym.address.province}`);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const ctaMessage = "Hola! Quiero consultar por planes y ubicacion de Fizik Gym.";

  return (
    <section id="ubicacion" className="location-section" aria-labelledby="location-title">
      <div className="container location-grid">
        <div className="location-copy">
          <span className="section-tag">Ubicacion</span>
          <h2 id="location-title">Entrena cerca, sin complicarte</h2>
          <p>
            Estamos en {gym.address.line1}, {gym.address.neighborhood}. Un punto comodo para llegar rapido y sostener tu rutina.
          </p>

          <div className="location-chips" aria-label="Caracteristicas de ubicacion">
            <span>Zona Chijra</span>
            <span>Facil acceso</span>
            <span>Estacionamiento cerca</span>
          </div>

          <div className="location-card">
            <strong>{gym.address.line1}</strong>
            <p>{gym.address.city}, {gym.address.province}</p>
            <p>{gym.phone}</p>
          </div>

          <div className="location-actions">
            <a className="btn btn-primary" href={gym.mapsUrl} target="_blank" rel="noreferrer" data-track-event="view_map">
              Como llegar
            </a>
            <a
              className="btn btn-secondary"
              href={buildWhatsappLink(gym.whatsappNumber, ctaMessage)}
              target="_blank"
              rel="noreferrer"
              data-track-event="whatsapp_click"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="map-shell">
          <div className="map-glow" aria-hidden="true" />
          <iframe
            title="Mapa Fizik Gym"
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

