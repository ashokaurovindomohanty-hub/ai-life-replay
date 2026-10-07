"use client";
import { useState, useRef, useEffect } from "react";
export default function Home(){
const [streak, setStreak] = useState(0);
useEffect(()=>{
  const s = parseInt(localStorage.getItem("streak")||"0");
  setStreak(s);
},[]);
// call after generate success:
const updateStreak = () => {
  const n = streak+1;
  setStreak(n);
  localStorage.setItem("streak", String(n));
};
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
<div className="text-center text-sm font-semibold text-purple-600">🔥 {streak} Day Streak</div>
  <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Life Replay ✨</h1>
  <p className="mt-3 opacity-70">Turn memories into cinematic movies</p>
    <textarea placeholder="Describe your memory..." className="w-full p-4 rounded-xl text-white" />
    <div className="flex gap-3 mt-4">
      <button onClick={() => setMood('nostalgic')} className={`px-4 py-2 rounded-full ${mood==='nostalgic' ? 'bg-blue-600' : 'bg-white/20'}`}>Nostalgic</button>
      <button onClick={() => setMood('joyful')} className={`px-4 py-2 rounded-full ${mood==='joyful' ? 'bg-blue-600' : 'bg-white/20'}`}>Joyful</button>
      <button onClick={() => setMood('epic')} className={`px-4 py-2 rounded-full ${mood==='epic' ? 'bg-blue-600' : 'bg-white/20'}`}>Epic</button>
    </div>
<input ref={fileInputRef} type="file" accept="image/*" multiple onChange={(e)=>setFiles(prev=>[...prev, ...Array.from(e.target.files||[])])} className="w-full p-3 rounded-xl border-2 border-violet-400 shadow-lg bg-white text-slate-800" />
{files.length > 0 && (
  <div className="mt-3">
    <div className="flex flex-wrap gap-2">
      {files.map((f,i)=>(
        <div key={i} className="relative">
          <img src={URL.createObjectURL(f)} className="w-20 h-20 object-cover rounded-lg border" />
          <button onClick={()=>{ const n=files.filter((_,idx)=>idx!==i); setFiles(n); if(n.length===0 && fileInputRef.current) fileInputRef.current.value=""; }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">✕</button>
        </div>
      ))}
    </div>
    <button onClick={()=>{setFiles([]); if(fileInputRef.current) fileInputRef.current.value="";}} className="mt-2 text-sm text-red-500 underline">Cancel / Clear all</button>
  </div>
)}
<p className="text-xs text-slate-500">Add 3-5 photos - tap ✕ to remove, Clear all to cancel</p>
<button onClick={generate} className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50">
  Generate Memory Movie 🎬
</button>
{result && (
  <div className="mt-6 p-5 bg-white rounded-2xl shadow-md border border-slate-100 animate-in fade-in">
    <h3 className="font-bold text-slate-800">Your Replay ✨</h3>
    <p className="mt-2 text-sm text-slate-600 whitespace-pre-wrap">{result.story}</p>
    <button onClick={share} className="mt-4 w-full bg-slate-900 text-white py-2 rounded-full text-sm">Share Story ↗</button>
  </div>
)}
    <button onClick={handleStripePay} className="bg-blue-600 text-white mt-2 px-4 py-2 rounded w-full">
      Pay with Stripe to Unlock HD Movie
    </button>
{result && (
  <div>
    <p className="mt-2">{result.story}</p>
    {result.videoUrl && (
      <video controls className="w-full mt-4 rounded">
        <source src={result.videoUrl} type="video/mp4" />
      </video>
    )}
{result.videoUrl && (
  <button onClick={()=>{
    const a=document.createElement("a");
    a.href=result.videoUrl;
    a.download="memory-movie.mp4";
    a.click();
  }} className="bg-gray-800 text-white mt-2 px-4 py-2 rounded w-full">Download Movie</button>
)}
      <button onClick={()=>{
        const a=document.createElement("a");
        a.href=result.videoUrl;
        a.download="memory-movie.mp4";
        a.click();
      }} className="bg-gray-800 text-white mt-2 px-4 py-2 rounded w-full">Download Movie</button>
        <p className="text-sm text-green-600 mt-2">Memory movie created (free mode)</p>
      </div>
    )}
<footer className="mt-12 text-sm text-slate-400 text-center"> © 2026 BipDeep — <a href="https://github.com/ashokaurovindomohanty-hub/ai-life-replay/blob/main/LICENSE" className="underline">MIT Licensed</a> </footer>
  </div>
);
}

