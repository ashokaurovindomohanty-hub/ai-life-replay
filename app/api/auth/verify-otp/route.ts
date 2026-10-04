import { compare } from 'bcryptjs'
export async function POST(req: Request) {
  const { email, otp, ageConfirmed } = await req.json()
  if (!ageConfirmed) return Response.json({ error: 'Age 18+ required' }, { status: 400 })
  // const record = await db.query.otps.findFirst({ where: eq(otps.email, email) })
  // if (!record || record.expiresAt < new Date()) return error
  // const ok = await compare(otp, record.otpHash)
  // if (!ok) return error
  // await db.insert(users).values({ email, verified: true, ageConfirmed: true })
  // await db.delete(otps).where(eq(otps.email, email))
  return Response.json({ success: true })
}

