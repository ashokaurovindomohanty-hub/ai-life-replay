import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { text, mood, memory } = await req.json();
  const input = text || memory;
  // 1. Enhance story with OpenAI
  const story = `Cinematic version (${mood}): ${input}`;
  const voiceId = "21m00Tcm4TlvDq8ikWAM";
try {
  const voiceResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY!, "Content-Type": "application/json" },
    body: JSON.stringify({ text: story, model_id: "eleven_monolingual_v1" })
  });
  if (!voiceResponse.ok) console.log("voice failed", await voiceResponse.text());
} catch(e) { console.log("voice skip", e) }
  // 2. Generate voice with ElevenLabs (call their API)
  // Voice with mood
try {
  // voice fetch here
} catch(e) { console.log("voice skip", e) }
// Call ElevenLabs here with story + voiceId
  // 3. Use placeholder video for now
  // ffmpeg will merge later
  
  return NextResponse.json({ 
    success: true,
    story,
    video: "/memories/placeholder.mp4",
    message: "Memory movie created (free mode)"
  });
}
