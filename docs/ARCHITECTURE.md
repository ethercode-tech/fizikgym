# Architecture Overview

## Frontend

- Stack: Next.js App Router + TypeScript.
- Rendering: static-first pages with reusable section components.
- Public routes: `/`, `/gracias`, `/privacidad`, `404`.
- SEO: metadata, canonical, sitemap, robots, JSON-LD LocalBusiness.
- Accessibility baseline: semantic landmarks, keyboard-friendly FAQ, visible focus and skip link.

## BFF

- Endpoints:
  - `GET /api/v1/public/landing`
  - `GET /api/v1/public/health/live`
  - `GET /api/v1/public/health/ready`
  - `POST /api/v1/contact-requests`
  - `POST /api/v1/internal/webhooks/crm`
  - `POST /api/v1/internal/webhooks/payments`
- `contact-requests` includes:
  - zod validation
  - rate limiting in memory
  - honeypot field (`website`)
  - structured logs
  - CORS allowlist

## Data and Services

- Canonical content is centralized in `lib/content.ts`.
- Shared contracts live in `lib/types.ts`.
- Runtime services:
  - `lib/security.ts`
  - `lib/rate-limit.ts`
  - `lib/validation.ts`
  - `lib/lead-store.ts` (MVP in-memory persistence)

## Security baseline

- Global security headers from Next config.
- HTTPS/HSTS ready headers.
- Internal webhooks protected with bearer token and optional HMAC signature.
- PII minimization: hashes for IP and User-Agent in logs.

## Scalability path

1. Replace `lib/lead-store.ts` with managed DB repository.
2. Move content from `lib/content.ts` to CMS/config service.
3. Add queue + async processing for CRM/payments webhooks.
4. Add distributed rate-limit (Redis).
5. Add observability exporter (OpenTelemetry).
