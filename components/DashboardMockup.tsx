export default function DashboardMockup() {
  return (
    <section className="w-full flex justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="frame">
        <div className="dashboard">
          {/* Card 1: Ideias Geradas */}
          <div className="card card-ideas">
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
              <span className="dot" />
              <span>Atualizado há 12 segundos · Sessão em tempo real</span>
            </div>
          </div>

          {/* Card 2: Texto Otimizado */}
          <div className="card card-texto">
            <div className="card-header">
              <span className="card-title">Output da IA</span>
              <span className="card-pill">Texto Otimizado</span>
            </div>

            <div className="optimized-box">
              <div className="optimized-label">Pré-visualização</div>
              <p className="optimized-text">
                &quot;Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que gera
                guardados, partilhas e novos seguidores todos os dias. Mantém o vídeo até ao fim:
                o último passo é o que quase ninguém faz — e é aí que está a diferença.&quot;
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

          {/* Card 3: Calendário Automático */}
          <div className="card card-calendario">
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
              <span className="pill-soft">Sincronizado com Instagram &amp; TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
