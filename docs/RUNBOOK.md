# Runbook MVP

## Health checks

- Live: `/api/v1/public/health/live`
- Ready: `/api/v1/public/health/ready`

## Frequent incidents

### WhatsApp CTA broken

- Signal: drop in `whatsapp_click` events.
- Immediate action: confirm `NEXT_PUBLIC_WHATSAPP_NUMBER` and message URL.
- Resolution: patch env var and redeploy.

### Contact form error spike

- Signal: many 4xx/5xx on `/api/v1/contact-requests`.
- Immediate action: disable with `CONTACT_FORM_ENABLED=false` and keep WhatsApp CTA active.
- Resolution: inspect validation/rate-limit logs, fix and re-enable.

### Map embed not loading

- Signal: iframe blank or blocked.
- Immediate action: keep `Como llegar` button visible.
- Resolution: validate embed source and CSP `frame-src`.

## Deployment checks

- Confirm `.env.local` values.
- Run `npm run typecheck`.
- Run `npm run build`.
- Smoke test routes and API endpoints.

## Data privacy baseline

- Collect only fields required for contact.
- Keep consent mandatory when form is enabled.
- Support deletion request via official WhatsApp channel.
