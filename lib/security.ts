import { createHash, createHmac, timingSafeEqual } from "crypto";
import { NextRequest } from "next/server";

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return "unknown";
}

export function hashValue(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function parseAllowedOrigins() {
  const raw = process.env.ALLOWED_ORIGINS ?? "http://localhost:3000";
  return raw.split(",").map((origin) => origin.trim()).filter(Boolean);
}

export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return parseAllowedOrigins().includes(origin);
}

export function verifyInternalAuth(request: NextRequest, bodyRaw: string): boolean {
  const bearer = request.headers.get("authorization");
  const token = process.env.INTERNAL_API_TOKEN;

  if (token && bearer === `Bearer ${token}`) {
    return true;
  }

  const signature = request.headers.get("x-signature");
  const secret = process.env.INTERNAL_WEBHOOK_HMAC_SECRET;

  if (!signature || !secret) {
    return false;
  }

  const expected = createHmac("sha256", secret).update(bodyRaw).digest("hex");

  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function buildCorsHeaders(origin: string | null) {
  const allowed = isAllowedOrigin(origin);

  return {
    "Access-Control-Allow-Origin": allowed && origin ? origin : "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Signature"
  };
}
