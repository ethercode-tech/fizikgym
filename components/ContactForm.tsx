"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ContactFormProps = {
  enabled: boolean;
};

export function ContactForm({ enabled }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

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
    <section className="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Consulta rapida</h2>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" required minLength={2} maxLength={100} />

          <label htmlFor="phone">Telefono</label>
          <input id="phone" name="phone" maxLength={30} placeholder="+54..." />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" maxLength={120} />

          <label htmlFor="preferredChannel">Canal preferido</label>
          <select id="preferredChannel" name="preferredChannel" defaultValue="whatsapp">
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Telefono</option>
            <option value="email">Email</option>
          </select>

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" maxLength={800} rows={4} />

          <input type="hidden" name="utm_source" value="landing" />
          <input type="hidden" name="utm_medium" value="web" />
          <input type="hidden" name="utm_campaign" value="fizik-mvp" />

          <label className="consent-row">
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
