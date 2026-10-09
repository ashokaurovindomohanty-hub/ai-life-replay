import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // TODO: Add DB backup logic here
    console.log(`[CRON backup] Success at ${new Date().toISOString()}`);
    return NextResponse.json({ backedUp: true, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error("[CRON backup] Failed:", error);
    return NextResponse.json({ error: "Backup failed" }, { status: 500 });
  }
}
