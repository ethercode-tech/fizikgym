import { NextResponse } from "next/server";
import { getLeadCount } from "@/lib/lead-store";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      dependencies: {
        leadStore: "up"
      },
      stats: {
        leadsInMemory: getLeadCount()
      }
    },
    { status: 200 }
  );
}
