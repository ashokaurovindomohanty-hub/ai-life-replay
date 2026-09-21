import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { memory } = await req.json();
  
  // 1. Enhance story with OpenAI
  const story = `Cinematic version of: ${memory}`;
  
  // 2. Generate voice with ElevenLabs (call their API)
  // 3. Use placeholder video for now
  // ffmpeg will merge later
  
  return NextResponse.json({ 
    success: true,
    story,
    video: "/memories/placeholder.mp4",
    message: "Memory movie created (free mode)"
  });
}
