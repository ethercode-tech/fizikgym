import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad | Fizik Gym",
  description: "Politica de privacidad para consultas comerciales de Fizik Gym."
};

export default function PrivacidadPage() {
  return (
    <main className="simple-page container">
      <h1>Politica de privacidad</h1>
      <p>
        Si usas el formulario de consulta, tus datos se utilizan solo para responder sobre planes, horarios y servicios de Fizik Gym.
      </p>
      <p>
        No compartimos informacion personal con terceros salvo requerimiento legal o integraciones expresamente habilitadas por el gimnasio.
      </p>
      <p>
        Para solicitar modificacion o eliminacion de datos, escribenos por WhatsApp al numero oficial publicado en esta web.
      </p>
    </main>
  );
}
