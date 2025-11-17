export default function CreatorAgentSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Dentro do <span className="text-blue-400">CreatorAgent</span>.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Um painel pensado para te dar clareza sobre ideias, textos e calendário —
          sem menus confusos ou opções a mais.
        </p>

        <img
          src="/inside.png"
          alt="creatoragent ui"
          className="rounded-3xl shadow-2xl shadow-purple-500/10 border border-white/5 mx-auto"
        />
      </div>
    </section>
  );
}
