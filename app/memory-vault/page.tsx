"use client";
import { useEffect, useState } from "react";
export default function MemoryVault(){
  const [memories,setMemories]=useState<any[]>([]);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('memories')||"[]");
    setMemories(data);
  },[]);
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-black text-center bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">MEMORY VAULT</h1>
      <p className="text-center text-white/60 mt-2">Your archived lives</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {memories.length===0 ? <p className="col-span-3 text-center text-white/40">No memories yet — generate a life first</p> :
        memories.map((m,i)=>(
          <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
            <p className="text-sm text-white/80 line-clamp-3">{m.text || m.memory || "Life "+(i+1)}</p>
            <p className="text-xs text-white/40 mt-2">{m.date || ""}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
