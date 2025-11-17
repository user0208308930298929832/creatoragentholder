"use client";

import CreatorAgentSection from "@/components/CreatorAgentSection";

export default function Page() {
  return (
    <main className="min-h-screen text-gray-100 bg-[#0b0d0f] overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-24 relative">
        {/* BACKGROUND GRADIENTS */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full" />
          <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Badge */}
          <span className="px-4 py-1 text-sm rounded-full border border-white/10 text-gray-300 bg-white/5 backdrop-blur-md">
            Super assistente de conteúdo com IA
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mt-6">
            Cria conteúdo profissional <br />
            como uma equipa <span className="text-blue-400">inteira</span> em segundos.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-2xl mt-6">
            O CreatorAgent gera ideias, textos, guiões e calendários completos para as tuas redes —
            como se tivesses uma agência de conteúdo a trabalhar 24/7 só para ti.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://buy.stripe.com/8x214ndFx2t13smdKkbEA00"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-medium text-white shadow-lg shadow-blue-600/20">
              Comprar Acesso Antecipado
            </a>

            <a
              href="#demo"
              className="px-6 py-3 border border-white/10 hover:bg-white/5 transition rounded-xl font-medium text-gray-200">
              Ver Demo
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap gap-6 items-center mt-10 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              ⚡ <span>+2.000 ideias geradas em testes internos</span>
            </div>
            <div className="flex items-center gap-2">
              🤖 <span>IA afinada para social media</span>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="flex justify-center px-6 -mt-6 mb-24 relative z-[5]">
        <img
          src="/dashboard-mockup.png" 
          alt="Dashboard CreatorAgent"
          className="rounded-3xl w-full max-w-5xl border border-white/10 shadow-2xl shadow-black/60"
        />
      </section>

      {/* DENTRO DO CREATORAGENT */}
      <CreatorAgentSection />

      {/* FOOTER */}
      <footer className="py-12 mt-28 text-center text-gray-500 border-t border-white/5">
        <p>CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}
