import Link from "next/link";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { LandingPayload } from "@/lib/types";

type FooterProps = {
  gym: LandingPayload["gym"];
};

export function Footer({ gym }: FooterProps) {
  const waMessage = "Hola! Quiero arrancar en Fizik Gym.";

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h2>Listo para empezar?</h2>
        <a
          className="btn btn-primary"
          href={buildWhatsappLink(gym.whatsappNumber, waMessage)}
          target="_blank"
          rel="noreferrer"
          data-track-event="whatsapp_click"
        >
          Hablar por WhatsApp
        </a>
      </div>

      <div className="container footer-grid">
        <div>
          <p className="brand">FIZIK GYM</p>
          <p>Entrenamiento, constancia y resultados.</p>
          <div className="footer-chips">
            <span>Zona Chijra</span>
            <span>Clase gratis</span>
          </div>
        </div>
        <div>
          <p className="footer-title">Ubicacion</p>
          <p>{gym.address.line1}, {gym.address.neighborhood}</p>
          <p>{gym.address.city}, {gym.address.province}</p>
        </div>
        <div>
          <p className="footer-title">Horarios</p>
          <p>Lunes a viernes</p>
          <p>07:00 a 12:00 / 14:00 a 22:30</p>
        </div>
        <div>
          <p className="footer-title">Redes</p>
          <ul>
            <li><a href={gym.social.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={gym.social.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            <li><Link href="/privacidad">Privacidad</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fizik Gym. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

