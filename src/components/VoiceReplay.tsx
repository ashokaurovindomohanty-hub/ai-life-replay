"use client";
export default function VoiceReplay({ text="Your life replay narration" }){
  const speak = () => {
    if(typeof window === "undefined") return;
    const u = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(u);
  };
  return (
    <div className="mt-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center justify-between">
      <p className="text-white/80 text-sm">🎙️ Voice Replay</p>
      <button onClick={speak} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold">Play Narration</button>
    </div>
  )
}
