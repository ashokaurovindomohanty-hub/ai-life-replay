"use client";
import { useState } from "react";
export default function Home(){
  const [text,setText]=useState("");
  const [mood, setMood] = useState('nostalgic')
  const [result,setResult]=useState<any>(null);
  const generate=async()=>{
    const res=await fetch("/api/generate",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({memory:text, mood})
    });
    const data=await res.json();
    setResult(data);
  };
  const share=()=>{
    if(navigator.share) navigator.share({title:"My Memory",text:result.story});
    else navigator.clipboard.writeText(result.story);
  };
  const handleStripePay = async () => {
  const res = await fetch("/api/checkout/stripe", { method: "POST" });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert(data.error || "Stripe error");
  };
  return (
<div className="min-h-screen bg-gradient-to-b from-slate-950 to-black text-white flex flex-col items-center p-8">
  <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Life Replay ✨</h1>
  <p className="mt-3 opacity-70">Turn memories into cinematic movies</p>
    <textarea placeholder="Describe your memory..." className="w-full p-4 rounded-xl text-black" />
    <div className="flex gap-3 mt-4">
      <button className="px-4 py-2 rounded-full bg-white/20">Nostalgic</button>
      <button className="px-4 py-2 rounded-full bg-blue-600">Joyful</button>
      <button className="px-4 py-2 rounded-full bg-white/20">Epic</button>
    </div>
    <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-full font-bold">Generate Memory Movie 🎬</button>
    <button onClick={handleStripePay} className="bg-blue-600 text-white mt-2 px-4 py-2 rounded w-full">
      Pay with Stripe to Unlock HD Movie
    </button>
    {result && (
      <div className="mt-6 p-4 border rounded bg-white">
        <h2 className="font-bold">Your Movie:</h2>
        <p className="mt-2">{result.story}</p>
        {result.videoUrl ? (
          <video controls className="w-full mt-4 rounded">
            <source src={result.videoUrl} type="video/mp4" />
          </video>
        ) : null}
        <button onClick={share} className="bg-black text-white mt-4 px-4 py-2 rounded">
          Share Memory
        </button>
        <button onClick={()=> window.open(result.videoUrl || '#')} className="bg-gray-800 text-white mt-2 px-4 py-2 rounded w-full">Download Movie</button>
        <p className="text-sm text-green-600 mt-2">Memory movie created (free mode)</p>
      </div>
<footer className="mt-12 text-sm text-slate-400">
  © 2026 BipDeep — <a href="https://github.com/yourname/ai-life-replay/blob/main/LICENSE" className="underline">MIT Licensed</a>
</footer>
    )}
  </div>
);
}
