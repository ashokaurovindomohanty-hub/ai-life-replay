"use client";
import ShareCard from "@/src/components/ShareCard";
import VoiceReplay from "@/src/components/VoiceReplay";
import CinemaTimeline from "@/src/components/CinemaTimeline";
import SoulStats from "@/src/components/SoulStats";import { createStripFromMemory } from "@/lib/stripGenerator";
import { useEffect, useState } from "react";
import TimelineCanvas from "../../src/components/TimelineCanvas";
import { initialPhases } from "../../lib/phases";
export default function Replay(){ 
  const [memory,setMemory]=useState(""); 
  const [paid,setPaid]=useState(false); 
  const [memoryId,setMemoryId]=useState("");
  useEffect(()=>{ 
    setMemory(localStorage.getItem('memory')||"");
    setMemoryId(localStorage.getItem('memoryId')||"");
  },[]); 
  useEffect(()=>{ 
    if(!memoryId) return; 
    fetch(`/api/replay/status?memoryId=${memoryId}`).then(r=>r.json()).then(d=>setPaid(d.paid)); 
  },[memoryId]); 
  return (
  <main className="min-h-screen bg-black text-white p-6">
<h1 className="text-xl sm:text-3xl md:text-5xl font-black text-center whitespace-nowrap tracking-[0.2em] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] animate-pulse">
✨ AI-LIFE-REPLAY ✨
</h1>
<style>{`@keyframes wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}} h1{animation:wave 2s ease-in-out infinite; display:block}`}</style>
<div className="relative text-center">
 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></span>
</div>
<style>{`@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}} @keyframes twinkle{0%,100%{opacity:1}50%{opacity:0.3}} h1{position:relative} h1::after{content:'✦ ✧ ✦'; position:absolute; top:-8px; right:20%; font-size:10px; animation:twinkle 1s infinite}`}</style>
   <p className="text-center text-blue-200 mt-2">{memory}</p>
   <TimelineCanvas phases={initialPhases} />
<SoulStats />
<CinemaTimeline />
<VoiceReplay text={memory} />
<ShareCard image={firstImage} title="My Life Replay" />
  </main>
 )
}
