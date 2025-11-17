const faqs = [
  {
    q: "O que é exatamente o CreatorAgent?",
    a: "É um assistente de conteúdo com IA que gera ideias, textos, guiões e calendários completos."
  },
  {
    q: "Preciso de saber escrever bem para usar?",
    a: "Não. A IA escreve tudo com base no teu estilo e nos teus objetivos."
  },
  {
    q: "Isto substitui um copywriter ou social media manager?",
    a: "Não. É uma ferramenta que te ajuda a produzir mais e melhor — em segundos."
  },
  {
    q: "Posso pedir reembolso?",
    a: "Sim, tens 7 dias caso o produto não faça sentido para ti."
  },
  {
    q: "O acesso é para sempre?",
    a: "Sim — acesso vitalício, sem mensalidades."
  },
  {
    q: "Vai receber updates?",
    a: "Sim. Todas as melhorias futuras ficam incluídas."
  }
];

export default function FAQ() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Perguntas frequentes.
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer"
            >
              <summary className="text-lg font-medium">{f.q}</summary>
              <p className="text-gray-400 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
