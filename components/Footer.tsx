import Link from "next/link";
import { LandingPayload } from "@/lib/types";

type FooterProps = {
  gym: LandingPayload["gym"];
};

export function Footer({ gym }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">FIZIK GYM</p>
          <p>{gym.address.line1}</p>
          <p>{gym.address.city}, {gym.address.province}</p>
        </div>
        <div>
          <p>Redes</p>
          <ul>
            <li><a href={gym.social.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={gym.social.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div>
          <p>Legal</p>
          <ul>
            <li><Link href="/privacidad">Privacidad</Link></li>
            <li><Link href="/gracias">Gracias</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
