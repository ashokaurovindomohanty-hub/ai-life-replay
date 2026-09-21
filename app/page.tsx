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
  return(
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">AI Life Replay</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="My 10th birthday party..." className="w-full h-32 border p-3 rounded mt-4" />
      <button onClick={generate} className="bg-black text-white px-6 py-3 rounded mt-4 w-full">Generate Memory Movie</button>
      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="font-bold">Your Movie:</h2>
          <p className="mt-2">{result.story}</p>
          <video controls className="w-full mt-4 rounded" poster="https://via.placeholder.com/640x360?text=Your+Memory">
            <source src={result.videoUrl || ""} type="video/mp4" />
          </video>
          <button onClick={share} className="bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full">Share Memory</button>
          <p className="text-sm text-green-600 mt-2">{result.message}</p>
        </div>
      )}
    </main>
  );
}
