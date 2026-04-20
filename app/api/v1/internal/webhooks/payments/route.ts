import { NextRequest, NextResponse } from "next/server";
import { verifyInternalAuth } from "@/lib/security";
import { logEvent } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const bodyRaw = await request.text();

  if (!verifyInternalAuth(request, bodyRaw)) {
    return NextResponse.json(
      {
        error: {
          code: "UNAUTHORIZED",
          message: "Invalid service credentials",
          traceId: crypto.randomUUID()
        }
      },
      { status: 401 }
    );
  }

  logEvent("info", "payments_webhook_received", {
    route: "/api/v1/internal/webhooks/payments",
    statusCode: 202
  });

  return NextResponse.json({ status: "accepted" }, { status: 202 });
}
