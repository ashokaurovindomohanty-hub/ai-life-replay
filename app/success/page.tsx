"use client";
import { useEffect, useState } from "react";
export default function Success() {
  const [video, setVideo] = useState("");
  useEffect(() => {
    const story = localStorage.getItem("lastStory") || "Your HD memory";
    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: story, mood: "Epic", hd: true })
    }).then(r=>r.json()).then(d=> setVideo(d.video));
  }, []);
  return (
    <main className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-green-600">✓ Payment Successful!</h1>
      <p className="mt-4">Your HD Movie is unlocked.</p>
      {video && <video controls src={video} className="w-full mt-4 rounded"/>}
      <a href="/" className="bg-black text-white mt-6 inline-block px-4 py-2 rounded">Back to Home</a>
    </main>
  );
}
