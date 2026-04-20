# Fizik Gym MVP

MVP landing page + BFF built with Next.js App Router and TypeScript.

## Features

- Static-first landing with reusable sections.
- Public images optimized with `next/image`.
- SEO baseline: metadata, canonical, robots, sitemap, JSON-LD LocalBusiness.
- BFF endpoints under `/api/v1` with validation, rate-limit, logs, health checks.
- Optional contact form controlled by `CONTACT_FORM_ENABLED`.
- WhatsApp CTA with tracking hooks for GA4.

## Routes

- `/`
- `/gracias`
- `/privacidad`
- `/api/v1/public/landing`
- `/api/v1/public/health/live`
- `/api/v1/public/health/ready`
- `/api/v1/contact-requests`
- `/api/v1/internal/webhooks/crm`
- `/api/v1/internal/webhooks/payments`

## Run

1. Copy `.env.example` to `.env.local` and adjust values.
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Build production:

```bash
npm run build
npm run start
```

## Notes

- Internal webhooks require bearer token (`INTERNAL_API_TOKEN`) or HMAC signature (`INTERNAL_WEBHOOK_HMAC_SECRET`).
- Contact submissions are kept in memory for MVP mode; swap `lib/lead-store.ts` with DB implementation when needed.
