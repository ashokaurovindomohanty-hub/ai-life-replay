"use client";
import { useState } from "react";
export default function AIReflection({ memory="" }){
  const [reflection,setReflection]=useState("");
  const generate = () => {
    setReflection(`Reflecting on: "${memory.slice(0,120)}..." — What did this moment teach you about resilience and joy?`);
  };
  return (
    <div className="mt-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
      <h3 className="text-white font-bold">AI Reflection</h3>
      <button onClick={generate} className="mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold">Generate Reflection</button>
      {reflection && <p className="mt-3 text-white/80 text-sm">{reflection}</p>}
    </div>
  )
}
