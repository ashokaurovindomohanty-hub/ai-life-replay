import { NextRequest, NextResponse } from "next/server";
import { isPaid } from "@/lib/db";
export async function GET(req: NextRequest) {
  const memoryId = req.nextUrl.searchParams.get("memoryId") || "";
  if (!memoryId) return NextResponse.json({ paid: false });
  const paid = await isPaid(memoryId);
  return NextResponse.json({ paid });
}
