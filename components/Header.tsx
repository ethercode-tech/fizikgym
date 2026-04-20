import Link from "next/link";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function Header() {
  const message = process.env.NEXT_PUBLIC_WHATSAPP_TEXT ?? "Hola! Quiero reservar una clase de prueba.";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "543884121964";

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Fizik Gym inicio">
          FIZIK GYM
        </Link>
        <nav aria-label="Principal">
          <ul className="nav-links">
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#ubicacion">Ubicacion</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <a
          href={buildWhatsappLink(`+${whatsappNumber}`, message)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary header-cta"
          data-track-event="whatsapp_click"
        >
          Clase gratis
        </a>
      </div>
    </header>
  );
}
