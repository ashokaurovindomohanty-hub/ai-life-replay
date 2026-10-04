import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  const { email } = await req.json()
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  // save hashed otp to DB with 5min expiry
  // await db.insert(otps).values({ email, otpHash: await hash(otp), expiresAt })
  await resend.emails.send({
    from: 'noreply@ai-life-replay.com',
    to: email,
    subject: 'Your OTP',
    html: `<p>Your code is <b>${otp}</b> - expires in 5 minutes</p>`
  })
  return Response.json({ success: true })
}

