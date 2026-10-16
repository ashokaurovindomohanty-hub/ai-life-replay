"use client";
export default function ShareCard({ image, title }:{ image:string, title:string }){
  const share = async () => {
    if(navigator.share) await navigator.share({ title, text: `My AI Life Replay - ${title}`, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert("Link copied!"); }
  };
  return (
    <div className="mt-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />}
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-white font-bold">{title}</h3>
        <button onClick={share} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold">Share</button>
      </div>
    </div>
  )
}
