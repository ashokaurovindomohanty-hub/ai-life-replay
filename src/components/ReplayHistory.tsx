"use client";
import { useEffect, useState } from "react";
export default function ReplayHistory(){
  const [list,setList]=useState<string[]>([]);
  useEffect(()=>{ const s=localStorage.getItem("replayHistory"); if(s) setList(JSON.parse(s)); },[]);
  if(!list.length) return <p className="mt-6 text-white/60 text-sm text-center">No history yet</p>;
  return (
    <div className="mt-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
      <h3 className="text-white font-bold">Replay History</h3>
      <ul className="mt-2 space-y-1">
        {list.map((m,i)=><li key={i} className="text-white/80 text-sm truncate">{m.slice(0,60)}...</li>)}
      </ul>
    </div>
  )
}
