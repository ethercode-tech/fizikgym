import { NextResponse } from "next/server";
import { getLandingContent } from "@/lib/content";

export async function GET() {
  const data = getLandingContent();

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=900"
    }
  });
}
