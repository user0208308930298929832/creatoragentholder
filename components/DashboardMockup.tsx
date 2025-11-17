// components/DashboardMockup.tsx
export default function DashboardMockup() {
  return (
    <section
      aria-label="Pré-visualização do painel do CreatorAgent"
      className="w-full flex justify-center"
    >
      <div className="frame">
        <div className="dashboard-panel">
          <div className="dashboard">
            {/* CARD 1 — Ideias Geradas */}
            <div className="card card-ideas">
              <div>
                <div className="card-header">
                  <span className="card-title">Visão geral</span>
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
                <span className="dot" />
                <span>Sessão em tempo real · atualizado há 12 segundos</span>
              </div>
            </div>

            {/* CARD 2 — Texto Otimizado */}
            <div className="card card-texto">
              <div>
                <div className="card-header">
                  <span className="card-title">Output da IA</span>
                  <span className="card-pill">Texto otimizado</span>
                </div>

                <div className="card-main-title">Pré-visualização do copy</div>
                <div className="optimized-box">
                  <div className="optimized-label">Hook do vídeo</div>
                  <p className="optimized-text">
                    “Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que gera
                    guardados, partilhas e novos seguidores todos os dias…”
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
                  A tua grelha é ajustada com base no histórico de performance e nos horários
                  de pico da tua audiência.
                </p>

                <div className="planner-grid">
                  <div className="day-cell">
                    <span className="day-label">Seg</span>
                    <span className="day-content">Reel</span>
                  </div>
                  <div className="day-cell">
                    <span className="day-label">Ter</span>
                    <span className="day-content">Carrossel</span>
                  </div>
                  <div className="day-cell">
                    <span className="day-label">Qua</span>
                    <span className="day-content">Story</span>
                  </div>
                  <div className="day-cell">
                    <span className="day-label">Qui</span>
                    <span className="day-content">Reel</span>
                  </div>
                  <div className="day-cell">
                    <span className="day-label">Sex</span>
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
    </section>
  );
}
