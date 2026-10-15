export default function SoulStats({ happiness=70, wealth=60, karma=85, longevity=78 }){
  const stats = [
    {label:"Happiness", value:happiness, color:"from-pink-500 to-rose-500"},
    {label:"Wealth", value:wealth, color:"from-green-500 to-emerald-500"},
    {label:"Karma", value:karma, color:"from-purple-500 to-indigo-500"},
    {label:"Longevity", value:longevity, color:"from-blue-500 to-cyan-500"},
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map(s=>(
        <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
          <p className="text-xs text-white/60">{s.label}</p>
          <p className="text-2xl font-black text-white mt-1">{s.value}%</p>
          <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${s.color}`} style={{width:`${s.value}%`}} />
          </div>
        </div>
      ))}
    </div>
  )
}
