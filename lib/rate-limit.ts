import { getClientIp } from "@/lib/security";
import { NextRequest } from "next/server";

type Bucket = {
  count: number;
  expiresAt: number;
};

const buckets = new Map<string, Bucket>();

export function checkRateLimit(request: NextRequest, routeKey: string, limit = 8, windowMs = 60_000) {
  const ip = getClientIp(request);
  const key = `${routeKey}:${ip}`;
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.expiresAt < now) {
    buckets.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  buckets.set(key, current);

  return { allowed: true, remaining: Math.max(0, limit - current.count) };
}
