import { initialPhases } from "@/lib/phases";
export default function CinemaTimeline(){
  return (
    <div className="relative mt-8 border-l-2 border-purple-500/30 ml-4 space-y-8">
      {initialPhases.map((p,i)=>(
        <div key={i} className="ml-6 relative">
          <div className="absolute -left-[33px] top-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 flex items-center justify-center text-white/60">
              AI Image: {p.label}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white">{p.label}</h3>
              <p className="text-sm text-white/60 mt-1">Age {p.ageRange || `${20+i*10}s`} — cinematic memory of this phase</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
