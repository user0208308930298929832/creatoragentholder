export default function CreatorAgentSection() {
  return (
    <section className="w-full py-32">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-4 text-white">
          Dentro do <span className="text-blue-400">CreatorAgent</span>.
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Um painel pensado para te dar clareza sobre ideias, textos e calendário — 
          sem dashboards confusos, sem menus escondidos, sem complicações.
        </p>

        <img
          src="/inside.png"
          alt="CreatorAgent UI"
          className="rounded-3xl mx-auto opacity-95 border border-white/10 
            shadow-[0_0_120px_-30px_rgba(80,80,255,0.5)] bg-transparent"
        />
      </div>
    </section>
  );
}
