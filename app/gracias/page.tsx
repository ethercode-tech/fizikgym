import Link from "next/link";

export default function GraciasPage() {
  return (
    <main className="simple-page container" id="contenido">
      <article className="card simple-card">
        <h1>Gracias por tu consulta</h1>
        <p>Te respondemos por el canal que elegiste lo antes posible.</p>
        <Link className="btn btn-primary" href="/">Volver al inicio</Link>
      </article>
    </main>
  );
}
