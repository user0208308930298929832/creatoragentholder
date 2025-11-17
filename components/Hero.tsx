export default function Hero() {
  return (
    <section className="w-full pt-24 pb-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0b0d0f] to-[#0f1115]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text */}
        <div className="flex-1">
          <span className="text-green-400/80 text-sm border border-green-400/30 px-3 py-1 rounded-full">
            Super assistente de conteúdo com IA
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Cria conteúdo profissional{" "}
            <span className="text-blue-400">como uma equipa inteira</span>{" "}
            em segundos.
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
            O CreatorAgent gera ideias, textos, guiões e calendários completos
            como se tivesses uma agência de conteúdo a trabalhar 24/7 só para ti.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://buy.stripe.com/8x214ndFx2t13smdKkbEA00"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-medium"
            >
              Comprar Acesso Antecipado
            </a>

            <button className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-white/5 transition-all">
              Ver Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
            <span>⚡ +2.000 ideias geradas em testes internos</span>
            <span>🤖 IA afinada para social media</span>
          </div>
        </div>
      </div>
    </section>
  );
}
