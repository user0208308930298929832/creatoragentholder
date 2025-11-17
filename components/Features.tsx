const FEATURES = [
  {
    title: "Geração de ideias virais",
    desc: "Começa com um tema simples e o CreatorAgent devolve dezenas de ideias para Reels, TikToks, carrosséis, newsletters e vídeos longos.",
    icon: "⚡",
  },
  {
    title: "Posts completos prontos a publicar",
    desc: "Texto com hook forte, corpo claro e CTA direto. Copia e cola para o Instagram, TikTok, YouTube ou email.",
    icon: "📝",
  },
  {
    title: "Guiões de vídeo em segundos",
    desc: "Estruturas completas com falas, cortes, B-roll sugerido e ângulos diferentes para o mesmo tema.",
    icon: "🎬",
  },
  {
    title: "Calendário automático",
    desc: "Planeamento inteligente para semanas inteiras, organizado por formato, objetivo e dias com mais performance.",
    icon: "📆",
  },
  {
    title: "Ângulos de venda e hooks",
    desc: "Sugestões pensadas para o teu nicho, público-alvo e oferta, para nunca mais dizeres “não sei o que publicar hoje”.",
    icon: "🎯",
  },
  {
    title: "Tom de voz ajustado à tua marca",
    desc: "Escreve como tu, nos teus melhores dias — e mantém consistência em todos os canais, mesmo quando estás sem tempo.",
    icon: "✨",
  },
];

export default function Features() {
  return (
    <section className="w-full py-28 px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* glow de fundo */}
        <div className="pointer-events-none absolute -inset-x-32 -top-10 h-64 bg-gradient-to-b from-sky-500/20 via-purple-500/15 to-transparent blur-3xl opacity-80" />

        <div className="relative z-10 text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Tudo o que precisas para nunca mais ficar sem conteúdo.
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            O CreatorAgent junta ideias, copy, guiões e planeamento numa única ferramenta simples —
            para publicares com consistência, sem perder horas a pensar no que fazer.
          </p>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/60 px-5 py-6 flex flex-col gap-3 shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
            >
              {/* glow do card */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-500/12 via-transparent to-purple-500/16" />
              
              <div className="relative flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-lg">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-lg font-medium">
                  {feature.title}
                </h3>
              </div>

              <p className="relative text-sm text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
