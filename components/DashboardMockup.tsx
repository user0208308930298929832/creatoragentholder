export default function DashboardMockup() {
  return (
    <div className="w-full flex justify-center">
      <div className="
        relative w-full max-w-6xl mx-auto
        rounded-[40px] 
        p-10
        bg-[rgba(255,255,255,0.03)]
        border border-white/10 
        backdrop-blur-3xl
        shadow-[0_0_80px_-10px_rgba(80,120,255,0.25)]
      ">

        {/* LIGHT GRADIENT OVERLAY */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none
          bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%)]
          opacity-70
        " />

        {/* GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 z-10">

          {/* CARD 1 */}
          <div className="
            rounded-3xl p-6 
            bg-[rgba(20,25,35,0.45)]
            border border-white/10
            backdrop-blur-2xl
            shadow-[0_0_35px_rgba(56,189,248,0.15)]
          ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-xs uppercase tracking-widest">Visão Geral</span>
              <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-300">
                AI Content Engine
              </span>
            </div>

            <div className="text-xl font-semibold mb-2">Ideias Geradas</div>
            <p className="text-gray-400 text-sm mb-4">
              Pipeline automático de ideias para Reels, TikToks e newsletters.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-400/40 text-blue-200">
                7 ideias virais
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-400/40 text-blue-200">
                3 posts carrossel
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-400/40 text-blue-200">
                1 guião vídeo
              </span>
            </div>

            <p className="text-gray-500 text-xs">
              • Atualizado há 12s — Sessão em tempo real
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
            rounded-3xl p-6 
            bg-[rgba(20,25,35,0.45)]
            border border-white/10
            backdrop-blur-2xl
            shadow-[0_0_35px_rgba(34,197,94,0.15)]
          ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-xs uppercase tracking-widest">Output da IA</span>
              <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-300">
                Texto otimizado
              </span>
            </div>

            <div className="text-sm text-green-300 mb-2 uppercase tracking-widest">
              Pré-visualização
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              “Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que gera guardados,
              partilhas e novos seguidores todos os dias…”
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-4">
                <div className="text-xs text-green-300 mb-1">Engagement</div>
                <div className="text-lg font-semibold text-green-100">9.3/10</div>
              </div>

              <div className="rounded-xl border border-green-400/20 bg-green-400/5 p-4">
                <div className="text-xs text-green-300 mb-1">Conversão</div>
                <div className="text-lg font-semibold text-green-100">8.7/10</div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="
            rounded-3xl p-6 
            bg-[rgba(20,25,35,0.45)]
            border border-white/10
            backdrop-blur-2xl
            shadow-[0_0_35px_rgba(168,85,247,0.15)]
          ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-xs uppercase tracking-widest">Scheduler</span>
              <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-300">
                Calendário
              </span>
            </div>

            <div className="text-xl font-semibold mb-2">Semana atual</div>
            <p className="text-gray-400 text-sm mb-6">
              A tua grelha adapta-se baseada em performance e horários de pico.
            </p>

            <div className="grid grid-cols-5 gap-3 text-center">
              {["Seg","Ter","Qua","Qui","Sex"].map((d) => (
                <div key={d} className="
                  rounded-xl border border-purple-400/20 bg-purple-400/5 p-3 text-xs text-purple-200
                ">
                  <div className="opacity-80">{d}</div>
                  <div className="font-semibold">Reel</div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-4">
              Próxima sugestão em 02:14
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
