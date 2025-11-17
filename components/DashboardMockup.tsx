export default function DashboardMockup() {
  return (
    <div className="w-full flex justify-center">
      <div className="frame relative max-w-6xl w-full">
        {/* GRELHA */}
        <div className="dashboard">
          {/* CARD 1 — Ideias Geradas */}
          <div className="card card-ideas">
            <div>
              <div className="card-header">
                <span className="card-title">Visão Geral</span>
                <span className="card-pill">AI Content Engine</span>
              </div>

              <div className="card-main-title">Ideias Geradas</div>
              <p className="card-subtext">
                Pipeline automático de ideias para Reels, TikToks, carrosséis e newsletters —
                em poucos segundos.
              </p>

              <div className="tags-row">
                <span className="tag">7 ideias virais</span>
                <span className="tag">3 posts carrossel</span>
                <span className="tag">1 guião de vídeo</span>
              </div>
            </div>

            <div className="ideas-counter">
              <span className="dot"></span>
              <span>Atualizado há 12 segundos · Sessão em tempo real</span>
            </div>
          </div>

          {/* CARD 2 — Texto Otimizado */}
          <div className="card card-texto">
            <div>
              <div className="card-header">
                <span className="card-title">Output da IA</span>
                <span className="card-pill">Texto Otimizado</span>
              </div>

              <div className="optimized-box">
                <div className="optimized-label">Pré-visualização</div>
                <p className="optimized-text">
                  &quot;Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que
                  gera guardados, partilhas e novos seguidores todos os dias.&quot;
                </p>
              </div>
            </div>

            <div className="metrics-row">
              <div className="metric-card">
                <span className="metric-label">Engagement</span>
                <span className="metric-value">9.3/10</span>
                <span className="metric-sub">Hook, retenção e CTAs otimizados</span>
              </div>

              <div className="metric-card">
                <span className="metric-label">Conversão</span>
                <span className="metric-value">8.7/10</span>
                <span className="metric-sub">Clareza da oferta e urgência ajustada</span>
              </div>
            </div>
          </div>

          {/* CARD 3 — Calendário Automático */}
          <div className="card card-calendario">
            <div>
              <div className="card-header">
                <span className="card-title">Scheduler</span>
                <span className="card-pill">Calendário automático</span>
              </div>

              <div className="card-main-title">Semana atual</div>
              <p className="card-subtext">
                A tua grelha é adaptada com base no histórico de performance e horários de pico
                da tua audiência.
              </p>

              <div className="planner-grid">
                <div className="day-cell">
                  <span className="day-label">SEG</span>
                  <span className="day-content">Reel</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">TER</span>
                  <span className="day-content">Carrossel</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">QUA</span>
                  <span className="day-content">Story</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">QUI</span>
                  <span className="day-content">Reel</span>
                </div>
                <div className="day-cell">
                  <span className="day-label">SEX</span>
                  <span className="day-content">Post longo</span>
                </div>
              </div>
            </div>

            <div className="planner-footer">
              <span>Próxima sugestão automática em 02:14</span>
              <span className="pill-soft">Sincronizado com Instagram &amp; TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
