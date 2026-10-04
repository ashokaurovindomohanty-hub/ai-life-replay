import { NextResponse } from "next/server"
export async function GET() {
  // await db.delete(generations).where(lt(generations.createdAt, Date.now()-24*3600*1000))
  return NextResponse.json({ cleaned: true })
}
