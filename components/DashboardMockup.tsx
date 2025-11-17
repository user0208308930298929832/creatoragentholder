export default function DashboardMockup() {
  return (
    <div className="w-full flex justify-center">
      <div className="frame relative max-w-6xl w-full">
        
        {/* GRID */}
        <div className="dashboard grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 — Ideias Geradas */}
          <div className="card glass card-ideas">
            <div className="card-header">
              <span className="card-title">Visão Geral</span>
              <span className="card-pill">AI Content Engine</span>
            </div>

            <div className="card-main-title">Ideias Geradas</div>
            <p className="card-subtext">
              Geração assistida por IA para acelerar o teu pipeline de conteúdo em segundos.
            </p>

            <div className="tags-row">
              <span className="tag">7 ideias virais</span>
              <span className="tag">3 posts carrossel</span>
              <span className="tag">1 guião de vídeo</span>
            </div>

            <div className="ideas-counter">
              <span className="dot"></span>
              <span>Atualizado há 12 segundos · Sessão em tempo real</span>
            </div>
          </div>

          {/* CARD 2 — Texto Otimizado */}
          <div className="card glass card-texto">
            <div className="card-header">
              <span className="card-title">Output da IA</span>
              <span className="card-pill">Texto Otimizado</span>
            </div>

            <div className="optimized-box">
              <div className="optimized-label">Pré-visualização</div>
              <p className="optimized-text">
                "Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que gera
                guardados, partilhas e novos seguidores todos os dias..."
              </p>
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
          <div className="card glass card-calendario">
            <div className="card-header">
              <span className="card-title">Scheduler</span>
              <span className="card-pill">Calendário Automático</span>
            </div>

            <div className="card-main-title">Semana atual</div>
            <p className="card-subtext">
              A tua grelha é adaptada com base no histórico de performance e horários de pico.
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

            <div className="planner-footer">
              <span>Próxima sugestão automática em 02:14</span>
              <span className="pill-soft">Sincronizado com Instagram & TikTok</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
