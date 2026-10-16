"use client";
export default function DownloadReplay(){
  const download = () => {
    const el = document.getElementById("replay-card");
    if(!el) return alert("No replay to download");
    window.print();
  };
  return <button onClick={download} className="mt-4 w-full py-3 bg-white text-purple-600 rounded-full font-bold">Download Replay</button>
}
