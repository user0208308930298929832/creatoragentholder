const features = [
  {
    title: "Geração de ideias virais",
    desc: "Transforma um tema simples em dezenas de ideias para Reels, TikToks, carrosséis e newsletters."
  },
  {
    title: "Posts completos prontos a publicar",
    desc: "Textos otimizados com hooks fortes, corpo claro e CTA direto."
  },
  {
    title: "Guiões de vídeo em segundos",
    desc: "Estruturas completas com falas, cortes e sugestões de B-roll."
  },
  {
    title: "Calendário automático",
    desc: "Planeamento completo para um mês, organizado dia a dia."
  },
  {
    title: "Hashtags e ângulos de venda",
    desc: "Sugestões inteligentes e adaptadas ao teu negócio."
  },
  {
    title: "Estilo adaptado à tua marca",
    desc: "Escreve como tu, nos teus melhores dias."
  }
];

export default function Features() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4">
          Tudo o que precisas para nunca mais ficar sem conteúdo.
        </h2>
        <p className="text-center text-gray-400 mb-16">
          O CreatorAgent junta ideias, copy, guiões e planeamento numa única ferramenta simples.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
