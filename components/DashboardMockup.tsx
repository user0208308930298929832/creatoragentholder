export default function DashboardMockup() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative frame max-w-6xl w-full">

        {/* GLOW GLOBAL POR TRÁS DO BLOCO */}
        <div className="pointer-events-none absolute -inset-x-20 -top-12 h-64 bg-gradient-to-b from-blue-500/25 via-purple-500/20 to-transparent blur-3xl opacity-80" />

        {/* DASHBOARD GRID */}
        <div className="dashboard grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* CARD 1 — Motor de Ideias */}
          <div className="card glass card-ideas">
            <div>
              <div className="card-header">
                <span className="card-title">Visão geral</span>
                <span className="card-pill">AI Content Engine</span>
              </div>

              <div className="card-main-title">Motor de Ideias</div>
              <p className="card-subtext">
                Pipeline automático de ideias para Reels, TikToks, carrosséis, newsletters e vídeos longos.
              </p>

              <div className="tags-row">
                <span className="tag">Reels virais</span>
                <span className="tag">Carrossel educativo</span>
                <span className="tag">Newsletter semanal</span>
              </div>
            </div>

            <div className="ideas-counter">
              <span className="dot" />
              <span>Sessão em tempo real · 23 ideias geradas hoje</span>
            </div>
          </div>

          {/* CARD 2 — Copy pronto a publicar */}
          <div className="card glass card-texto">
            <div>
              <div className="card-header">
                <span className="card-title">Output da IA</span>
                <span className="card-pill">Texto otimizado</span>
              </div>

              <div className="card-main-title">Copy pronto a publicar</div>
              <p className="card-subtext">
                Hooks, corpo e CTA afinados para prender atenção e transformar visualizações em cliques e vendas.
              </p>

              <div className="optimized-box mt-4">
                <div className="optimized-label">Hook do vídeo</div>
                <p className="optimized-text">
                  “Neste vídeo mostro-te como transformar uma única ideia em 30 conteúdos que trazem seguidores e clientes — sem precisares de publicar todos os dias.”
                </p>
              </div>
            </div>

            <div className="metrics-row">
              <div className="metric-card">
                <span className="metric-label">Engagement previsto</span>
                <span className="metric-value">9.3/10</span>
                <span className="metric-sub">Hook, retenção e CTAs otimizados</span>
              </div>

              <div className="metric-card">
                <span className="metric-label">Cliques por post</span>
                <span className="metric-value">+42%</span>
                <span className="metric-sub">Comparado com o conteúdo atual</span>
              </div>
            </div>
          </div>

          {/* CARD 3 — Calendário inteligente */}
          <div className="card glass card-calendario">
            <div>
              <div className="card-header">
                <span className="card-title">Scheduler</span>
                <span className="card-pill">Calendário automático</span>
              </div>

              <div className="card-main-title">Semana atual</div>
              <p className="card-subtext">
                A tua grelha é ajustada com base no histórico de performance e nos horários de pico da tua audiência.
              </p>

              <div className="planner-grid">
                <div className="day-cell">
                  <span className="day-label">Seg</span>
                  <span className="day-content">Reel · História da marca</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">Ter</span>
                  <span className="day-content">Carrossel educativo</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">Qua</span>
                  <span className="day-content">Story · Bastidores</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">Qui</span>
                  <span className="day-content">Reel de prova social</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">Sex</span>
                  <span className="day-content">Post longo · Oferta</span>
                </div>
              </div>
            </div>

            <div className="planner-footer">
              <span>Aprende com os melhores horários dos últimos 90 dias.</span>
              <span className="pill-soft">Sincronizado com Instagram, TikTok & Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
