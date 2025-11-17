export default function DashboardMockup() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="relative max-w-6xl w-full">

        {/* GLOW BACKLIGHT */}
        <div className="absolute inset-0 mx-auto w-[95%] h-[420px] bg-gradient-to-br 
          from-blue-500/20 via-purple-500/20 to-transparent 
          blur-[90px] opacity-40 pointer-events-none rounded-full" 
        />

        {/* FLOAT WRAPPER */}
        <div className="relative rounded-[32px] border border-white/10 bg-white/5 
          backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(80,120,255,0.25)] 
          px-8 md:px-10 py-10 md:py-12 flex flex-col gap-10">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] 
              shadow-[0_0_40px_-10px_rgba(80,180,255,0.3)] p-6">
              <div className="text-gray-400 text-sm font-medium mb-3 flex justify-between items-center">
                <span>Visão Geral</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                  AI Content Engine
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">Ideias Geradas</h3>
              <p className="text-gray-400 text-sm mt-2">
                Pipeline de ideias automáticas em segundos.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  7 ideias virais
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  3 posts carrossel
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  1 guião vídeo
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] 
              shadow-[0_0_40px_-10px_rgba(80,255,120,0.2)] p-6">
              
              <div className="text-gray-400 text-sm font-medium mb-3 flex justify-between items-center">
                <span>Output da IA</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                  Texto otimizado
                </span>
              </div>

              <div className="mt-1 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-green-200 text-xs uppercase tracking-wide mb-1">
                  Pré-visualização
                </p>
                <p className="text-gray-100 text-sm leading-relaxed">
                  "Neste vídeo mostro-te como transformar uma ideia solta
                  num conteúdo que gera guardados e partilhas..."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-xl p-3 border border-green-500/20 bg-green-500/5">
                  <p className="text-xs text-green-200">Engagement</p>
                  <p className="text-lg font-semibold text-green-100">9.3/10</p>
                </div>
                <div className="rounded-xl p-3 border border-green-500/20 bg-green-500/5">
                  <p className="text-xs text-green-200">Conversão</p>
                  <p className="text-lg font-semibold text-green-100">8.7/10</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] 
              shadow-[0_0_40px_-10px_rgba(180,90,255,0.25)] p-6">

              <div className="text-gray-400 text-sm font-medium mb-3 flex justify-between items-center">
                <span>Scheduler</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                  Calendário automático
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">Semana atual</h3>

              <div className="grid grid-cols-5 gap-2 mt-4">
                {[
                  ["Seg", "Reel"],
                  ["Ter", "Carrossel"],
                  ["Qua", "Story"],
                  ["Qui", "Reel"],
                  ["Sex", "Post longo"],
                ].map(([dia, tipo], i) => (
                  <div
                    key={i}
                    className="rounded-xl p-2 bg-white/5 border border-white/10 text-center"
                  >
                    <p className="text-[10px] uppercase text-gray-300">{dia}</p>
                    <p className="text-xs text-gray-100">{tipo}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[11px] text-gray-400 mt-4">
                <span>Próxima sugestão em 02:14</span>
                <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
                  Sincronizado com Instagram & TikTok
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
