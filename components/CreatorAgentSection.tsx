export default function CreatorAgentSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[900px] h-[900px] bg-blue-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        <h2 className="text-center text-4xl font-semibold text-white mb-6">
          Dentro do CreatorAgent.
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Um painel pensado para te dar clareza sobre ideias, textos e calendário — sem menus
          confusos ou opções a mais.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="glass-card p-8 rounded-[28px] bg-white/5 border border-white/10">
            <div className="text-gray-300 uppercase tracking-widest text-xs mb-2">Visão Geral</div>
            <div className="tag-blue inline-block mb-4">AI Content Engine</div>

            <h3 className="text-xl font-semibold mb-2">Ideias Geradas</h3>
            <p className="text-gray-400 text-sm mb-4">
              Geração assistida por IA para acelerar o teu pipeline de conteúdo em segundos.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-200">
                7 ideias virais
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-200">
                3 posts carrossel
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-200">
                1 guião de vídeo
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              Atualizado há 12 segundos · Sessão em tempo real
            </div>
          </div>

          {/* CARD 2 */}
          <div className="glass-card p-8 rounded-[28px] bg-white/5 border border-white/10">
            <div className="text-gray-300 uppercase tracking-widest text-xs mb-2">Output da IA</div>
            <div className="tag-blue inline-block mb-4">Texto Otimizado</div>

            <div className="rounded-xl p-4 bg-green-500/10 border border-green-400/30 mb-4">
              <p className="text-green-200 text-xs uppercase tracking-wider mb-1">
                Pré-visualização
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                "Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que gera
                guardados, partilhas e novos seguidores todos os dias..."
              </p>
            </div>

            <div className="flex gap-3">
              <div className="metric-box flex-1">
                <div className="metric-label">Engagement</div>
                <div className="metric-value">9.3/10</div>
                <div className="metric-sub">Hook, retenção e CTAs otimizados</div>
              </div>

              <div className="metric-box flex-1">
                <div className="metric-label">Conversão</div>
                <div className="metric-value">8.7/10</div>
                <div className="metric-sub">Clareza da oferta e urgência ajustada</div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="glass-card p-8 rounded-[28px] bg-white/5 border border-white/10">
            <div className="text-gray-300 uppercase tracking-widest text-xs mb-2">Scheduler</div>
            <div className="tag-blue inline-block mb-4">Calendário Automático</div>

            <h3 className="text-xl font-semibold mb-1">Semana atual</h3>
            <p className="text-gray-400 text-sm mb-4">
              A tua grelha é adaptada com base no histórico de performance e horários de pico.
            </p>

            <div className="grid grid-cols-5 gap-2">
              {["Seg", "Ter", "Qua", "Qui", "Sex"].map((day, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 bg-purple-500/10 border border-purple-400/30 text-center text-xs text-purple-100"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400 mt-6">
              <span>Próxima sugestão automática em 02:14</span>
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
                Sincronizado com Instagram & TikTok
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
