// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 md:flex-row md:items-center md:pb-28 md:pt-28 lg:gap-20">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Super assistente de conteúdo com IA
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.2rem] lg:leading-tight">
              Cria conteúdo profissional
              <br />
              <span className="text-[#648cff]">como uma equipa inteira</span>
              <br />
              em segundos.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
              O <span className="font-semibold">CreatorAgent</span> gera ideias,
              textos, guiões e calendários completos para as tuas redes — como se
              tivesses uma agência de conteúdo a trabalhar 24/7 só para ti.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#pricing">
                <button className="inline-flex w-full items-center justify-center rounded-xl bg-[#3b82f6] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.45)] transition hover:-translate-y-0.5 hover:bg-[#2563eb] sm:w-auto">
                  Comprar Acesso Antecipado
                </button>
              </a>

              <a href="#demo">
                <button className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700/80 bg-white/5 px-7 py-3 text-sm font-medium text-slate-200/90 backdrop-blur transition hover:border-slate-500 hover:bg-white/10 sm:w-auto">
                  Ver Demo
                </button>
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Sem mensalidades • Acesso vitalício • Vagas ultra limitadas
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1">
                <span className="mr-1.5 text-base">⚡</span>
                +2.000 ideias geradas em testes internos
              </span>
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1">
                <span className="mr-1.5 text-base">🤖</span>
                IA avançada otimizada para social media
              </span>
            </div>
          </div>

          {/* Right – fake dashboard */}
          <div className="relative flex flex-1 justify-center">
            <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%)] opacity-80" />

            <div className="w-full max-w-md rounded-3xl bg-[#050811]/90 p-4 shadow-[0_30px_120px_rgba(15,23,42,0.9)] ring-1 ring-slate-700/70 backdrop-blur">
              <header className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <p className="text-xs text-slate-400">Painel · CreatorAgent</p>
                  <p className="text-sm font-medium text-slate-100">
                    Conteúdo pronto para esta semana
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-300">
                  Automático
                </span>
              </header>

              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-3">
                <DashboardPill title="Ideias geradas" items={["7 Reels", "3 carrosséis", "2 newsletters"]} />
                <DashboardPill title="Post otimizado" items={["Engajamento 9.3/10", "Conversão 8.7/10"]} accent="emerald" />
                <DashboardPill
                  title="Calendário"
                  items={["Seg · Reel", "Qua · Story", "Sex · Live"]}
                  accent="violet"
                />
              </div>

              {/* Row 2 */}
              <div className="mt-4 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  Exemplo de copy gerada
                </p>
                <p className="text-xs leading-relaxed text-slate-100/90">
                  “3 erros que te impedem de vender online (e como os corrigir hoje). O 2.º é o que
                  quase ninguém te diz…”
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-400">
                  <span>Adaptado ao teu tom de voz</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                    Pronto a publicar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/5 bg-[#05070b] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Tudo o que precisas para nunca mais ficar sem conteúdo.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              O CreatorAgent junta ideias, copy, guiões e planeamento numa única ferramenta simples.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            <FeatureCard
              title="Ideias virais em 1 clique"
              description="Transforma qualquer tema em dezenas de ideias otimizadas para Reels, TikToks, carrosséis e newsletters."
            />
            <FeatureCard
              title="Posts completos e prontos a publicar"
              description="Textos pensados para engajar e converter, com hooks fortes, corpo claro e CTAs bem definidas."
            />
            <FeatureCard
              title="Guiões de vídeo profissionais"
              description="Estruturas de vídeo com falas, cortes e sugestões de B-roll para criadores que levam a sério o que fazem."
            />
            <FeatureCard
              title="Calendário automático de 30 dias"
              description="Um mês inteiro de conteúdo organizado por dia, formato e objetivo — sem começares do zero."
            />
            <FeatureCard
              title="Hashtags & ângulos de venda inteligentes"
              description="Sugestões alinhadas com o teu nicho, público e oferta. Mais alcance com intenção, não ao acaso."
            />
            <FeatureCard
              title="Escreve no teu tom de voz"
              description="O CreatorAgent aprende o teu estilo e replica-o como se fosses tu nos teus melhores dias."
            />
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="border-b border-white/5 bg-[#050811] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Vê o CreatorAgent a trabalhar.
              </h2>
              <p className="mt-3 text-sm text-slate-400 md:text-base">
                Em poucos segundos, o CreatorAgent transforma um objetivo simples — como “vender
                mais consultas online” — num mês inteiro de conteúdos estruturados e prontos a usar.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• Define o teu objetivo e o tipo de cliente.</li>
                <li>• Recebes ideias, textos e guiões alinhados com o que queres vender.</li>
                <li>• Aprovas, ajustas detalhes e publicas com confiança.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <p className="text-xs font-medium text-slate-300">
                  Demo · Geração de 30 dias de conteúdo
                </p>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[0.65rem] text-slate-400">
                  Vídeo em breve
                </span>
              </div>
              <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/60 text-xs text-slate-500">
                Aqui colocas a tua gravação de ecrã a mostrar o CreatorAgent a gerar conteúdo.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLOS GERADOS */}
      <section className="border-b border-white/5 bg-[#05070b] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Exemplo de conteúdos que ele cria por ti.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Nada de textos genéricos. Recebes mensagens prontas a usar, adaptadas ao teu negócio e
              ao teu estilo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ExampleCard
              label="Post para Instagram"
              body="“Se estás a tentar publicar todos os dias mas ficas bloqueado a olhar para o ecrã, o problema não é falta de motivação — é falta de sistema. Aqui está como montar um calendário que se escreve praticamente sozinho…”"
            />
            <ExampleCard
              label="Guião para Reel"
              body={
                <>
                  <strong>Hook:</strong> “Queres vender mais sem parecer desesperado?”
                  <br />
                  <strong>Parte 1:</strong> Mostra o erro comum.
                  <br />
                  <strong>Parte 2:</strong> Explica o que fazer em vez disso.
                  <br />
                  <strong>Parte 3:</strong> CTA para o teu produto ou serviço.
                </>
              }
            />
            <ExampleCard
              label="Email curto de venda"
              body={
                <>
                  <strong>Assunto:</strong> “O teu próximo cliente está a 1 post de distância.”
                  <br />
                  <strong>Corpo:</strong> 3 parágrafos curtos, diretos e orientados a benefícios.
                  <br />
                  <strong>CTA:</strong> leva para a tua oferta com um convite claro e concreto.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ANTES VS DEPOIS */}
      <section className="border-b border-white/5 bg-[#050811] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Antes vs Depois do CreatorAgent.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              A diferença entre postar porque “tens de postar” e comunicar com intenção, consistência
              e estratégia.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Antes
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• 30–60 minutos para escrever um post.</li>
                <li>• Publicas “mais ou menos” só para não falhar.</li>
                <li>• Conteúdo pouco alinhado com o que vendes.</li>
                <li>• Sensação constante de estar sempre a começar do zero.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-indigo-500/50 bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-sky-500/20 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                Depois
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li>• Ideias, textos e guiões gerados em segundos.</li>
                <li>• Publicas com confiança porque a mensagem está clara.</li>
                <li>• Conteúdo alinhado com o teu produto e com o teu cliente.</li>
                <li>• Calendário pronto e sensação de “já está tratado”.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-b border-white/5 bg-[#05070b] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Acesso Antecipado CreatorAgent.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Vagas ultra limitadas para quem quer ser dos primeiros a ter um assistente de conteúdo
              que trabalha todos os dias por ti.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
              Oferta de lançamento
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-slate-50">39€</span>
              <span className="text-xs text-slate-400">Pagamento único · Acesso vitalício</span>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              Inclui ideias ilimitadas, posts completos, guiões de vídeo, calendário mensal e acesso
              a todas as atualizações futuras.
            </p>

            <div className="mt-6">
              <a
                href="https://buy.stripe.com/8x214ndFx2t13smdKkbEA00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(59,130,246,0.5)] transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
              >
                Comprar Agora
              </a>
            </div>

            <ul className="mt-5 space-y-2 text-xs text-slate-300">
              <li>• Sem mensalidades.</li>
              <li>• Acesso vitalício ao CreatorAgent.</li>
              <li>• Atualizações futuras incluídas.</li>
              <li>• 10 vagas nesta fase inicial.</li>
            </ul>

            <p className="mt-6 text-[0.7rem] text-slate-400">
              Se não fizer sentido para ti nos primeiros 7 dias, podes pedir reembolso. Simples.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/5 bg-[#050811] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Perguntas frequentes.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Se ainda estás com dúvidas, é provável que a resposta esteja aqui.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <FaqItem
              question="O que é exatamente o CreatorAgent?"
              answer="É um assistente de conteúdo com IA que gera ideias, textos, guiões e calendários completos para as tuas redes sociais, adaptado ao teu negócio e ao teu estilo de comunicação."
            />
            <FaqItem
              question="Preciso de saber escrever bem para usar?"
              answer="Não. O objetivo do CreatorAgent é precisamente facilitar a escrita. Só precisas de explicar o teu objetivo e o tipo de cliente — a ferramenta trata do resto."
            />
            <FaqItem
              question="Isto substitui um copywriter ou social media manager?"
              answer="Não substitui estratégia humana, mas reduz drasticamente o tempo gasto em rascunhos, ideias e primeira versão de textos. É como ter um assistente júnior super rápido ao teu lado."
            />
            <FaqItem
              question="Posso usar para vários projetos ou marcas?"
              answer="Sim. Podes usar o CreatorAgent para diferentes negócios, clientes ou marcas pessoais, desde que sejas tu a gerir as contas."
            />
            <FaqItem
              question="Tenho de pagar novamente no futuro?"
              answer="Não. Esta oferta é de pagamento único. Garante acesso vitalício à versão em evolução do CreatorAgent, incluindo melhorias futuras."
            />
            <FaqItem
              question="O que acontece depois de pagar?"
              answer="Depois do pagamento via Stripe, recebes um e-mail com os próximos passos para aceder à área do CreatorAgent e começar a gerar conteúdo."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05070b] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 md:flex-row md:px-6 lg:px-8">
          <span>
            CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados.
          </span>
          <span>Suporte: em breve · Versão beta de acesso antecipado.</span>
        </div>
      </footer>
    </main>
  );
}

/* === SMALL PRESENTATIONAL COMPONENTS === */

type PillAccent = "blue" | "emerald" | "violet";

function DashboardPill({
  title,
  items,
  accent = "blue",
}: {
  title: string;
  items: string[];
  accent?: PillAccent;
}) {
  const accentClasses: Record<PillAccent, string> = {
    blue: "border-sky-500/40 bg-sky-500/5",
    emerald: "border-emerald-500/40 bg-emerald-500/5",
    violet: "border-violet-500/40 bg-violet-500/5",
  };

  return (
    <div
      className={`rounded-2xl border ${accentClasses[accent]} p-3 text-[0.7rem] text-slate-200`}
    >
      <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-400">
        {title}
      </p>
      <ul className="space-y-1 text-[0.7rem]">
        {items.map((item) => (
          <li key={item} className="truncate text-slate-100/90">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="h-full rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.8)]">
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}

function ExampleCard({
  label,
  body,
}: {
  label: string;
  body: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-slate-200">{body}</div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-100">
        <span>{question}</span>
        <span className="ml-4 text-xs text-slate-400 transition group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{answer}</p>
    </details>
  );
}
