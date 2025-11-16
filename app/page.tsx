export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 flex flex-col items-center">

      {/* HERO */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          CreatorAgent
        </h1>

        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          O assistente de IA que cria ideias, posts, guiões e calendários automaticamente.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#pricing">
            <button className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
              Comprar Acesso Antecipado
            </button>
          </a>

          <a href="#demo">
            <button className="px-8 py-3 rounded-lg border border-gray-600 text-gray-200 hover:border-blue-500 transition">
              Ver Demo
            </button>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-32 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-14">✨ Ferramentas Superpoderosas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="💡 Ideias automáticas"
            desc="Gera 20-50 ideias virais rapidamente."
          />
          <FeatureCard
            title="📝 Posts completos"
            desc="Cria carrosséis e textos longos otimizados."
          />
          <FeatureCard
            title="🎥 Guiões de vídeo"
            desc="Estruturas virais para TikToks e Reels."
          />
          <FeatureCard
            title="📅 Calendário Editorial"
            desc="Planeamento de 30 dias em segundos."
          />
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="mt-32 w-full max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-6">🎬 Demo</h2>
        <p className="text-gray-400 mb-6">
          Vídeo rápido a mostrar como funciona o CreatorAgent.
        </p>

        <div className="w-full h-64 bg-[#15171c] border border-gray-700 rounded-xl flex justify-center items-center text-gray-600">
          (Aqui colocas o vídeo)
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-32 w-full max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-4">💸 Acesso Antecipado</h2>
        <p className="text-gray-400 mb-8">
          Oferta limitada antes do lançamento oficial.
        </p>

        <div className="bg-[#15171c] border border-gray-700 p-10 rounded-2xl">
          <h3 className="text-5xl font-bold mb-4">39€</h3>
          <p className="text-gray-300 mb-6">Acesso vitalício (apenas 10 vagas)</p>

          <a href="#">
            <button className="px-10 py-4 text-lg rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold">
              Comprar Agora
            </button>
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Sem mensalidades • Atualizações incluídas • Acesso vitalício
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 mb-10 text-center text-gray-500 text-sm">
        CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-[#15171c] rounded-xl border border-gray-700 hover:border-blue-500 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
