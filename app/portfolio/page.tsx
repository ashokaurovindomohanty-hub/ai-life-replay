export default function Portfolio() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <a href="https://omega-security..." className="p-6 bg-white/5 rounded-xl">Omega Security</a>
        <a href="/replay" className="p-6 bg-white/5 rounded-xl">AI Life Replay</a>
      </div>
    </main>
  )
}
