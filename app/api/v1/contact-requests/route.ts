import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { logEvent } from "@/lib/logger";
import { hashValue, getClientIp, buildCorsHeaders } from "@/lib/security";
import { contactRequestSchema } from "@/lib/validation";
import { saveLead } from "@/lib/lead-store";

const FEATURE_ENABLED = (process.env.CONTACT_FORM_ENABLED ?? "true") === "true";

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(request.headers.get("origin"))
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);

  if (!FEATURE_ENABLED) {
    return NextResponse.json(
      {
        error: {
          code: "FEATURE_DISABLED",
          message: "Contact request is disabled",
          traceId: crypto.randomUUID()
        }
      },
      { status: 403, headers: corsHeaders }
    );
  }

  const rate = checkRateLimit(request, "contact-requests", 8, 60_000);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: {
          code: "RATE_LIMITED",
          message: "Too many requests",
          traceId: crypto.randomUUID()
        }
      },
      { status: 429, headers: corsHeaders }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: {
          code: "INVALID_JSON",
          message: "Malformed JSON",
          traceId: crypto.randomUUID()
        }
      },
      { status: 400, headers: corsHeaders }
    );
  }

  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid request payload",
          traceId: crypto.randomUUID(),
          details: parsed.error.flatten()
        }
      },
      { status: 400, headers: corsHeaders }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ id: `crq_${crypto.randomUUID()}`, status: "accepted", nextAction: "whatsapp" }, { status: 201, headers: corsHeaders });
  }

  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const lead = saveLead(parsed.data, {
    sourcePage: request.headers.get("referer") ?? "unknown",
    ipHash: hashValue(ip),
    userAgentHash: hashValue(userAgent)
  });

  logEvent("info", "contact_request_accepted", {
    requestId: crypto.randomUUID(),
    route: "/api/v1/contact-requests",
    statusCode: 201,
    ipHash: lead.ipHash,
    userAgentHash: lead.userAgentHash,
    preferredChannel: lead.preferredChannel
  });

  return NextResponse.json({ id: lead.id, status: lead.status, nextAction: "whatsapp" }, { status: 201, headers: corsHeaders });
}
