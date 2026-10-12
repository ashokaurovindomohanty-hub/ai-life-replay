import { Phase } from "@/lib/phases"
export default function TimelineCanvas({phases}:{phases:Phase[]}){
 return (
  <div className="space-y-8 p-6">
   {phases.map(p=>(
    <div key={p.id}>
     <h2 className="font-bold mb-3" style={{color:p.color}}>{p.title}</h2>
     <div className="flex gap-4 overflow-x-auto pb-2">
      {p.days.map((d,i)=>(
       <div key={i} className="min-w-[180px] h-[200px] bg-white/10 rounded-xl p-4 backdrop-blur border border-white/10">
        <p className="text-xs opacity-60">{d.date}</p>
        <h3 className="font-semibold mt-1">{d.title}</h3>
        <p className="text-sm mt-2 opacity-80 line-clamp-3">{d.memory}</p>
       </div>
      ))}
     </div>
    </div>
   ))}
  </div>
 )
}
