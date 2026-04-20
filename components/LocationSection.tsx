import { LandingPayload } from "@/lib/types";

type LocationSectionProps = {
  gym: LandingPayload["gym"];
};

export function LocationSection({ gym }: LocationSectionProps) {
  const query = encodeURIComponent(`${gym.address.line1}, ${gym.address.city}, ${gym.address.province}`);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section id="ubicacion" className="location" aria-labelledby="location-title">
      <div className="container location-grid">
        <div>
          <h2 id="location-title">Ubicacion</h2>
          <p>{gym.address.line1}</p>
          <p>
            {gym.address.neighborhood}, {gym.address.city}, {gym.address.province}
          </p>
          <p>Telefono: {gym.phone}</p>
          <a className="btn btn-primary" href={gym.mapsUrl} target="_blank" rel="noreferrer" data-track-event="view_map">
            Como llegar
          </a>
        </div>
        <div className="map-wrap">
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
