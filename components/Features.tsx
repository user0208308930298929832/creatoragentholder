export default function Features() {
  const features = [
    {
      title: "Geração de ideias virais",
      desc: "Transforma um tema simples em dezenas de ideias para Reels, TikToks, posts e newsletters."
    },
    {
      title: "Posts completos prontos a publicar",
      desc: "Textos otimizados com hooks fortes, corpo claro e CTAs que convertem."
    },
    {
      title: "Guiões de vídeo em segundos",
      desc: "Estruturas completas com falas, cortes sugeridos e indicação de B-roll."
    },
    {
      title: "Calendário automático",
      desc: "Planeamento inteligente para semanas inteiras, organizado por formato e objetivo."
    },
    {
      title: "Ângulos de venda e hooks",
      desc: "Sugestões adaptadas ao teu nicho, público-alvo e oferta."
    },
    {
      title: "Tom de voz ajustado à tua marca",
      desc: "Escreve como tu, nos teus melhores dias — consistente em todos os canais."
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Tudo o que precisas para nunca mais ficar sem conteúdo.
      </h2>

      <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
        O CreatorAgent junta ideias, copy, guiões e planeamento numa única ferramenta simples.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 
              backdrop-blur-xl shadow-[0_0_30px_-12px_rgba(255,255,255,0.15)] 
              text-left"
          >
            <h3 className="text-white text-lg font-semibold">{f.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
