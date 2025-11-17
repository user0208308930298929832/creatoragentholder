export default function FAQ() {
  const faqs = [
    {
      q: "O que é exatamente o CreatorAgent?",
      a: "É um assistente de IA focado em conteúdo que gera ideias, posts, guiões e calendários editoriais para criadores, marcas e negócios."
    },
    {
      q: "Preciso de saber usar IA para tirar proveito?",
      a: "Não. Dás o contexto do teu nicho, da tua oferta e do teu estilo — o CreatorAgent devolve sugestões prontas a usar ou a ajustar ligeiramente."
    },
    {
      q: "O acesso é mesmo vitalício?",
      a: "Sim. Pagas uma vez e ficas com acesso ao CreatorAgent e às atualizações da versão para criadores antecipados, sem mensalidades."
    },
    {
      q: "Para quem é que isto faz mais sentido?",
      a: "Criadores, freelancers, empreendedores e pequenos negócios que precisam de publicar com consistência sem perder horas a pensar em conteúdo."
    },
    {
      q: "Posso usar isto em mais do que um projeto?",
      a: "Podes. Podes usar o CreatorAgent para várias marcas, clientes ou contas, desde que sejas tu a gerir."
    },
    {
      q: "O que acontece depois de comprar?",
      a: "Recebes um email com as instruções de acesso e onboarding para começares a gerar conteúdo em poucos minutos."
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        Dúvidas frequentes.
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Algumas das perguntas que mais nos fazem antes de avançar.
      </p>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
          >
            <p className="text-sm font-semibold text-white mb-1">
              {item.q}
            </p>
            <p className="text-sm text-gray-300">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
