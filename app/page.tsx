// app/page.tsx

const STRIPE_LINK = "https://buy.stripe.com/8x214ndFx2t13smdKkbEA00";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-slate-100">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <InsideDashboardSection />
      <ExamplesSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}

/* ================= HERO ================= */

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#05070b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.20),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.25),_transparent_60%)] opacity-80" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 md:flex-row md:items-center md:pb-24 md:pt-28 lg:gap-20">
        {/* LEFT */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Super assistente de conteúdo com IA
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.1rem] lg:leading-tight">
            Cria conteúdo profissional
            <br />
            <span className="text-[#648cff]">como uma equipa inteira</span>
            <br />
            em segundos.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
            O <span className="font-semibold">CreatorAgent</span> gera ideias, textos, guiões
            e calendários completos para as tuas redes — como se tivesses uma agência
            de conteúdo a trabalhar 24/7 só para ti.
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
              IA afinada para social media
            </span>
          </div>
        </div>

        {/* RIGHT – DASHBOARD MOCKUP COMPACTO */}
        <div className="relative flex flex-1 justify-center md:justify-end">
          <div className="pointer-events-none absolute -inset-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.14),_transparent_60%)] opacity-40" />
          <div className="relative w-full max-w-xl">
            <DashboardMockup variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============== DASHBOARD MOCKUP (REACT + TAILWIND) =============== */

type DashboardVariant = "compact" | "full";

function DashboardMockup({ variant }: { variant: DashboardVariant }) {
  const gridCols =
    variant === "full"
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-3";

  const padding = variant === "full" ? "p-6 md:p-7" : "p-4";

  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.45),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.40),_transparent_55%)] opacity-80" />
      <div
        className={`relative grid ${gridCols} gap-4 rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%),linear-gradient(145deg,rgba(15,23,42,0.95),rgba(15,23,42,0.9))] shadow-[0_28px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl ${padding}`}
      >
        {/* Card 1 – Ideias Geradas */}
        <div className="relative rounded-[22px] border border-cyan-400/40 bg-gradient-to-br from-sky-500/15 via-slate-900/80 to-slate-950/95 p-4 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[0.7rem] font-medium tracking-[0.16em] text-slate-400 uppercase">
              Visão Geral
            </span>
            <span className="rounded-full border border-slate-400/50 bg-white/5 px-3 py-1 text-[0.65rem] text-slate-300">
              AI Content Engine
            </span>
          </div>
          <div className="text-[0.95rem] font-medium tracking-wide text-slate-50">
            Ideias Geradas
          </div>
          <p className="mt-2 text-[0.75rem] leading-relaxed text-slate-300">
            Geração assistida por IA para acelerar o teu pipeline de conteúdo em segundos.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <TagPill label="7 ideias virais" />
            <TagPill label="3 posts carrossel" />
            <TagPill label="1 guião de vídeo" />
          </div>

          <div className="mt-4 flex items-center gap-2 text-[0.7rem] text-slate-400">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_8px_rgba(248,250,252,0.9)]" />
            <span>Atualizado há 12 segundos · Sessão em tempo real</span>
          </div>
        </div>

        {/* Card 2 – Texto Otimizado */}
        <div className="relative rounded-[22px] border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-slate-900/85 to-slate-950 p-4 shadow-[0_0_40px_rgba(34,197,94,0.28)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[0.7rem] font-medium tracking-[0.16em] text-slate-400 uppercase">
              Output da IA
            </span>
            <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-[0.65rem] text-emerald-200">
              Texto Otimizado
            </span>
          </div>

          <div className="rounded-[18px] border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 to-slate-900/90 p-3">
            <div className="mb-1 text-[0.65rem] font-semibold tracking-[0.14em] text-emerald-300 uppercase">
              Pré-visualização
            </div>
            <p className="text-[0.78rem] leading-relaxed text-emerald-50">
              &quot;Neste vídeo mostro-te como transformar uma ideia solta num conteúdo que
              gera guardados, partilhas e novos seguidores todos os dias. Mantém o vídeo
              até ao fim: o último passo é o que quase ninguém faz — e é aí que está a
              diferença.&quot;
            </p>
          </div>

          <div className="mt-3 flex gap-2">
            <MetricCard
              label="Engagement"
              value="9.3/10"
              sub="Hook, retenção e CTAs otimizados"
            />
            <MetricCard
              label="Conversão"
              value="8.7/10"
              sub="Clareza da oferta e urgência ajustada"
            />
          </div>
        </div>

        {/* Card 3 – Calendário Automático */}
        <div className="relative rounded-[22px] border border-purple-400/40 bg-gradient-to-br from-purple-500/15 via-slate-900/85 to-slate-950 p-4 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[0.7rem] font-medium tracking-[0.16em] text-slate-400 uppercase">
              Scheduler
            </span>
            <span className="rounded-full border border-purple-300/40 bg-purple-500/10 px-3 py-1 text-[0.65rem] text-purple-100">
              Calendário Automático
            </span>
          </div>

          <div className="text-[0.95rem] font-medium tracking-wide text-slate-50">
            Semana atual
          </div>
          <p className="mt-2 text-[0.75rem] leading-relaxed text-slate-300">
            A tua grelha é adaptada com base no histórico de performance e horários de pico.
          </p>

          <div className="mt-3 grid grid-cols-5 gap-2 text-[0.7rem]">
            <DayCell day="Seg" type="Reel" />
            <DayCell day="Ter" type="Carrossel" />
            <DayCell day="Qua" type="Story" />
            <DayCell day="Qui" type="Reel" />
            <DayCell day="Sex" type="Post longo" />
          </div>

          <div className="mt-3 flex items-center justify-between gap-2 text-[0.7rem] text-slate-300">
            <span>Próxima sugestão automática em 02:14</span>
            <span className="rounded-full border border-slate-400/40 bg-slate-900/70 px-3 py-1 text-[0.65rem] text-slate-100">
              Sincronizado com Instagram &amp; TikTok
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-300/80 bg-gradient-to-r from-slate-900/90 via-sky-500/30 to-slate-900/90 px-3 py-1 text-[0.7rem] text-sky-50 shadow-[0_0_12px_rgba(56,189,248,0.7)] backdrop-blur-xl">
      {label}
    </span>
  );
}

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-[16px] border border-emerald-400/45 bg-gradient-to-br from-emerald-600/20 via-slate-900/95 to-slate-950 p-3">
      <span className="text-[0.7rem] text-emerald-100/90">{label}</span>
      <span className="text-[1rem] font-semibold text-emerald-100">{value}</span>
      <span className="text-[0.67rem] text-emerald-200/80">{sub}</span>
    </div>
  );
}

function DayCell({ day, type }: { day: string; type: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1 rounded-[14px] border border-purple-400/45 bg-gradient-to-br from-purple-500/18 via-slate-900/95 to-slate-950 px-2 py-2">
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-violet-200">
        {day}
      </span>
      <span className="truncate text-[0.75rem] text-violet-50">{type}</span>
    </div>
  );
}

/* ================= FEATURES ================= */

function FeaturesSection() {
  const features = [
    {
      title: "Ideias virais em 1 clique",
      description:
        "Transforma qualquer tema em dezenas de ideias otimizadas para Reels, TikToks, carrosséis e newsletters.",
    },
    {
      title: "Posts completos e prontos a publicar",
      description:
        "Textos pensados para engajar e converter, com hooks fortes, corpo claro e CTAs bem definidas.",
    },
    {
      title: "Guiões de vídeo profissionais",
      description:
        "Estruturas de vídeo com falas, cortes e sugestões de B-roll para criadores que levam a sério o que fazem.",
    },
    {
      title: "Calendário automático de 30 dias",
      description:
        "Um mês inteiro de conteúdo organizado por dia, formato e objetivo — sem começares do zero.",
    },
    {
      title: "Hashtags & ângulos de venda inteligentes",
      description:
        "Sugestões alinhadas com o teu nicho, público e oferta. Mais alcance com intenção, não ao acaso.",
    },
    {
      title: "Escreve no teu tom de voz",
      description:
        "O CreatorAgent aprende o teu estilo e replica-o como se fosses tu nos teus melhores dias.",
    },
  ];

  return (
    <section className="border-b border-white/5 bg-[#05070b] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Tudo o que precisas para nunca mais ficar sem conteúdo.
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            O CreatorAgent junta ideias, copy, guiões e planeamento numa única ferramenta
            simples.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="h-full rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.8)]"
            >
              <h3 className="text-sm font-semibold text-slate-50">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= DEMO ================= */

function DemoSection() {
  return (
    <section id="demo" className="border-b border-white/5 bg-[#050811] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Vê o CreatorAgent a trabalhar.
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Em poucos segundos, o CreatorAgent transforma um objetivo simples — como
              &quot;vender mais consultas online&quot; — num mês inteiro de conteúdos
              estruturados e prontos a usar.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Defines o teu objetivo e o tipo de cliente.</li>
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
  );
}

/* ============= INSIDE DASHBOARD SECTION (FULL MOCKUP) ============= */

function InsideDashboardSection() {
  return (
    <section className="border-b border-white/5 bg-[#05070b] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Dentro do CreatorAgent.
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Um painel pensado para te dar clareza sobre ideias, textos e calendário — sem
            menus confusos ou opções a mais.
          </p>
        </div>

        <div className="mt-10">
          <DashboardMockup variant="full" />
        </div>
      </div>
    </section>
  );
}

/* ================= EXEMPLOS ================= */

function ExamplesSection() {
  return (
    <section className="border-b border-white/5 bg-[#05070b] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Exemplo de conteúdos que ele cria por ti.
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Nada de textos genéricos. Recebes mensagens prontas a usar, adaptadas ao teu
            negócio e ao teu estilo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <ExampleCard
            label="Post para Instagram"
            body={
              <>
                “Se estás a tentar publicar todos os dias mas ficas bloqueado a olhar
                para o ecrã, o problema não é falta de motivação — é falta de sistema.
                Aqui está como montar um calendário que se escreve praticamente
                sozinho…”
              </>
            }
          />
          <ExampleCard
            label="Guião para Reel"
            body={
              <>
                <strong>Hook:</strong> “Queres vender mais sem parecer desesperado?” <br />
                <strong>Parte 1:</strong> Mostra o erro comum. <br />
                <strong>Parte 2:</strong> Explica o que fazer em vez disso. <br />
                <strong>Parte 3:</strong> CTA para o teu produto ou serviço.
              </>
            }
          />
          <ExampleCard
            label="Email curto de venda"
            body={
              <>
                <strong>Assunto:</strong> “O teu próximo cliente está a 1 post de
                distância.” <br />
                <strong>Corpo:</strong> 3 parágrafos curtos, diretos e orientados a
                benefícios. <br />
                <strong>CTA:</strong> leva para a tua oferta com um convite claro e
                concreto.
              </>
            }
          />
        </div>
      </div>
    </section>
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

/* ================= ANTES VS DEPOIS ================= */

function ComparisonSection() {
  return (
    <section className="border-b border-white/5 bg-[#050811] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Antes vs Depois do CreatorAgent.
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            A diferença entre postar porque “tens de postar” e comunicar com intenção,
            consistência e estratégia.
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
  );
}

/* ================= PRICING ================= */

function PricingSection() {
  return (
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
            Vagas ultra limitadas para quem quer ser dos primeiros a ter um assistente de
            conteúdo que trabalha todos os dias por ti.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.9)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Oferta de lançamento
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-slate-50">39€</span>
            <span className="text-xs text-slate-400">
              Pagamento único · Acesso vitalício
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            Inclui ideias ilimitadas, posts completos, guiões de vídeo, calendário mensal
            e acesso a todas as atualizações futuras.
          </p>

          <div className="mt-6">
            <a
              href={STRIPE_LINK}
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
            Se não fizer sentido para ti nos primeiros 7 dias, podes pedir reembolso.
            Simples.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function FAQSection() {
  const faqs = [
    {
      q: "O que é exatamente o CreatorAgent?",
      a: "É um assistente de conteúdo com IA que gera ideias, textos, guiões e calendários completos para as tuas redes sociais, adaptado ao teu negócio e ao teu estilo de comunicação.",
    },
    {
      q: "Preciso de saber escrever bem para usar?",
      a: "Não. O objetivo do CreatorAgent é precisamente facilitar a escrita. Só precisas de explicar o teu objetivo e o tipo de cliente — a ferramenta trata do resto.",
    },
    {
      q: "Isto substitui um copywriter ou social media manager?",
      a: "Não substitui estratégia humana, mas reduz drasticamente o tempo gasto em rascunhos, ideias e primeira versão de textos. É como ter um assistente júnior super rápido ao teu lado.",
    },
    {
      q: "Posso usar para vários projetos ou marcas?",
      a: "Sim. Podes usar o CreatorAgent para diferentes negócios, clientes ou marcas pessoais, desde que sejas tu a gerir as contas.",
    },
    {
      q: "Tenho de pagar novamente no futuro?",
      a: "Não. Esta oferta é de pagamento único. Garante acesso vitalício à versão em evolução do CreatorAgent, incluindo melhorias futuras.",
    },
    {
      q: "O que acontece depois de pagar?",
      a: "Depois do pagamento via Stripe, recebes um e-mail com os próximos passos para aceder à área do CreatorAgent e começar a gerar conteúdo.",
    },
  ];

  return (
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
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-100">
                <span>{f.q}</span>
                <span className="ml-4 text-xs text-slate-400 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function FooterSection() {
  return (
    <footer className="bg-[#05070b] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 md:flex-row md:px-6 lg:px-8">
        <span>
          CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados.
        </span>
        <span>Suporte: em breve · Versão beta de acesso antecipado.</span>
      </div>
    </footer>
  );
}
