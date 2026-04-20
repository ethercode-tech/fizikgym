import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Fizik Gym inicio">
          FIZIK GYM
        </Link>
        <nav aria-label="Principal">
          <ul className="nav-links">
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#ubicacion">Ubicacion</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
