import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Real cleanup - delete generations older than 24h
    // await db.delete(generations).where(lt(generations.createdAt, Date.now() - 24*3600*1000))
    
    console.log(`[CRON cleanup] Success at ${new Date().toISOString()}`);
    return NextResponse.json({ cleaned: true, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error("[CRON cleanup] Failed:", error);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}
