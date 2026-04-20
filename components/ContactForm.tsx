"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";

type ContactFormProps = {
  enabled: boolean;
};

export function ContactForm({ enabled }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const whatsappLink = useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "543884121964";
    const message = "Hola! Quiero consultar planes, horarios y clase de prueba.";
    return buildWhatsappLink(`+${number}`, message);
  }, []);

  if (!enabled) return null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      preferredChannel: String(formData.get("preferredChannel") ?? "whatsapp"),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      utm: {
        source: String(formData.get("utm_source") ?? ""),
        medium: String(formData.get("utm_medium") ?? ""),
        campaign: String(formData.get("utm_campaign") ?? "")
      }
    };

    try {
      const response = await fetch("/api/v1/contact-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body?.error?.message ?? "No se pudo enviar la consulta");
      }

      trackEvent("generate_lead", { source: "landing_form" });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMsg(error instanceof Error ? error.message : "Error inesperado");
    }
  }

  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="section-tag">Empeza hoy</span>
          <h2 id="contact-title">Habla con Fizik y empeza tu cambio</h2>
          <p>Consultanos por horarios, planes y clase de prueba. Te respondemos rapido.</p>
          <div className="contact-points">
            <div>Clase gratis</div>
            <div>Horarios amplios</div>
            <div>Atencion rapida</div>
          </div>
          <a className="contact-quick-card" href={whatsappLink} target="_blank" rel="noreferrer" data-track-event="whatsapp_click">
            <strong>WhatsApp directo</strong>
            <p>Respuesta rapida para consultas y planes.</p>
          </a>
        </div>

        <form className="contact-form card" onSubmit={onSubmit} noValidate>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" required minLength={2} maxLength={100} />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefono</label>
              <input id="phone" name="phone" maxLength={30} placeholder="+54..." />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" maxLength={120} />
            </div>
            <div className="field">
              <label htmlFor="preferredChannel">Canal preferido</label>
              <select id="preferredChannel" name="preferredChannel" defaultValue="whatsapp">
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Telefono</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" maxLength={800} rows={4} />
            </div>
          </div>

          <input type="hidden" name="utm_source" value="landing" />
          <input type="hidden" name="utm_medium" value="web" />
          <input type="hidden" name="utm_campaign" value="fizik-mvp" />

          <label className="consent-row field-full">
            <input type="checkbox" name="consent" required />
            Acepto el uso de mis datos para contacto comercial.
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar consulta"}
          </button>

          {status === "success" && <p className="ok-msg">Listo, recibimos tu consulta.</p>}
          {status === "error" && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}

