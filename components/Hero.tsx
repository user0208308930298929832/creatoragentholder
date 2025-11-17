export default function Hero() {
  return (
    <div className="relative w-full py-32">

      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-gradient-to-br from-blue-600/30 via-purple-500/20 to-transparent blur-[120px] opacity-30 rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center px-6">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-green-300 text-sm font-medium mb-6 backdrop-blur-md">
          <span>Super assistente de conteúdo com IA</span>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.15] text-white tracking-tight">
          Cria conteúdo profissional{" "}
          <span className="text-blue-400">como</span>{" "}
          <span className="text-blue-300">uma equipa inteira</span>{" "}
          em segundos.
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          O CreatorAgent gera ideias, textos, guiões e calendários completos como se tivesses uma agência de conteúdo a trabalhar 24/7 só para ti.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-10">
          <a
            href="#pricing"
            className="px-6 py-3 text-lg rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(80,120,255,0.3)] transition"
          >
            Comprar Acesso Antecipado
          </a>

          <a
            href="#demo"
            className="px-6 py-3 text-lg rounded-xl border border-white/20 text-white hover:bg-white/5 transition"
          >
            Ver Demo
          </a>
        </div>

        {/* TRUST METRICS */}
        <div className="flex justify-center gap-6 text-gray-400 text-sm mt-8">
          <span>⚡ +2.000 ideias geradas em testes internos</span>
          <span>🤖 IA afinada para social media</span>
        </div>
      </div>
    </div>
  );
}
