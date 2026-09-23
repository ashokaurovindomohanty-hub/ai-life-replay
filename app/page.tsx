"use client";
import { useState } from "react";
export default function Home(){
  const [text,setText]=useState("");
  const [result,setResult]=useState<any>(null);
  const generate=async()=>{
    const res=await fetch("/api/generate",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({memory:text})
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
  <main className="p-6 max-w-xl mx-auto">
    <h1 className="text-2xl font-bold">AI Life Replay</h1>
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
      className="w-full border p-2 mt-4 rounded"
      placeholder="Share Memory"
    />
    <button onClick={generate} className="bg-black text-white mt-4 px-4 py-2 rounded">
      Generate Memory Movie
    </button>
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
        <p className="text-sm text-green-600 mt-2">Memory movie created (free mode)</p>
      </div>
    )}
  </main>
);
}
