import Link from "next/link";

export default function NotFound() {
  return (
    <main className="simple-page container" id="contenido">
      <article className="card simple-card">
        <h1>Pagina no encontrada</h1>
        <p>La ruta que buscaste no existe.</p>
        <Link className="btn btn-secondary" href="/">Ir al inicio</Link>
      </article>
    </main>
  );
}
