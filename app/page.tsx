export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 flex flex-col items-center">
      {/* HERO */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">CreatorAgent</h1>
        <p className="text-lg text-gray-300 mb-8">
          O assistente de IA que cria ideias, posts, guiões e calendários automaticamente.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#pricing">
            <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition">
              Comprar Acesso Antecipado
            </button>
          </a>
          <a href="#demo">
            <button className="px-6 py-3 rounded-lg bg-card text-gray-200 border border-gray-700 hover:border-primary transition">
              Ver Demo
            </button>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24 max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-12">✨ Ferramentas Superpoderosas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-card rounded-xl border border-gray-800 hover:border-primary transition">
            <h3 className="text-xl font-bold mb-2">💡 Ideias automáticas</h3>
            <p className="text-gray-400 text-sm">Gera 20-50 ideias virais rapidamente.</p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-gray-800 hover:border-primary transition">
            <h3 className="text-xl font-bold mb-2">📝 Posts completos</h3>
            <p className="text-gray-400 text-sm">Cria carrosséis e textos longos otimizados.</p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-gray-800 hover:border-primary transition">
            <h3 className="text-xl font-bold mb-2">🎥 Guiões de vídeo</h3>
            <p className="text-gray-400 text-sm">Estruturas virais para TikToks e Reels.</p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-gray-800 hover:border-primary transition">
            <h3 className="text-xl font-bold mb-2">📅 Calendário Editorial</h3>
            <p className="text-gray-400 text-sm">Planeamento de 30 dias em segundos.</p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="mt-32 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">🎬 Demo</h2>
        <p className="text-gray-400 mb-4">Vídeo rápido a mostrar como funciona o CreatorAgent.</p>

        <div className="w-full h-64 bg-card border border-gray-800 rounded-xl flex justify-center items-center text-gray-600">
          (Aqui colocas o vídeo)
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-32 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-4">💸 Acesso Antecipado</h2>
        <p className="text-gray-400 mb-8">
          Oferta limitada antes do lançamento oficial.
        </p>

        <div className="bg-card border border-gray-800 p-10 rounded-2xl">
          <h3 className="text-4xl font-bold mb-4">39€</h3>
          <p className="text-gray-300 mb-6">Acesso vitalício (apenas 10 vagas)</p>

          <a href="#">
            <button className="px-8 py-4 text-lg rounded-lg bg-primary hover:opacity-90 transition">
              Comprar Agora
            </button>
          </a>

          <p className="text-gray-500 text-sm mt-4">
            Sem mensalidades. Atualizações incluídas.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 mb-10 text-center text-gray-500 text-sm">
        CreatorAgent © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
