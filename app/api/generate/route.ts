import { NextResponse } from "next/server";
import Stripe from "stripe";
const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET!);
export async function POST(req: Request) {
  try {
    const { text, mood, memory, hd, sessionId } = await req.json();
    const input = text || memory || "";
    if (!input) {
      return NextResponse.json({ error: "No input provided" }, { status: 400 });
    }
    const isHD = !!hd;
    let story: string;
    let videoUrl = "/placeholder-video.mp4";
    if (isHD) {
      if (!sessionId) {
        return NextResponse.json({ error: "HD requires Stripe payment" }, { status: 402 });
      }
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      if (session.payment_status !== "paid") {
        return NextResponse.json({ error: "Payment not verified" }, { status: 402 });
      }
      story = `HD Cinematic (OpenAI) (${mood || "Nostalgic"}): ${input}`;
      videoUrl = "/hd-video.mp4";
      // Add ElevenLabs call here inside paid block
    } else {
      story = `Cinematic version (${mood || "Nostalgic"}): ${input}`;
    }
    return NextResponse.json({ story, videoUrl, hd: isHD });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Generate failed" }, { status: 500 });
  }
}
