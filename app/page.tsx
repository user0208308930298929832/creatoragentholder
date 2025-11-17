/* app/page.tsx */

const STRIPE_LINK = "https://buy.stripe.com/8x214ndFx2t13smdKkbEA00";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060a] text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-10 py-12 md:py-20">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <ResultsSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
}

/* HERO */

function HeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-10 md:gap-14">
      <div className="flex-1 text-center lg:text-left">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-3 py-1 text-xs md:text-sm text-slate-300 mb-4">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Super assistente de conteúdo com IA
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          Cria conteúdo como uma equipa
          <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            inteira, em segundos.
          </span>
        </h1>

        <p className="text-sm md:text-base text-slate-300/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          O <strong>CreatorAgent</strong> gera ideias, posts, guiões e calendários
          completos para as tuas redes — como se tivesses uma agência de conteúdo
          a trabalhar 24/7 só para ti.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-7 py-3 text-sm md:text-base font-semibold text-white transition shadow-lg shadow-blue-500/25"
          >
            Comprar Acesso Antecipado
          </a>

          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600/70 bg-slate-900/40 px-7 py-3 text-sm md:text-base font-medium text-slate-100 hover:border-blue-500/70 hover:text-blue-100 transition"
          >
            Ver Demo
          </a>
        </div>

        <p className="text-xs md:text-sm text-slate-400">
          Sem mensalidades • Acesso vitalício • Vagas ultra limitadas
        </p>
      </div>

      {/* Hero mockup / illustration */}
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-5 md:p-6 shadow-xl shadow-black/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-cyan-400/10 pointer-events-none" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-200">
                  CreatorAgent • Dashboard
                </span>
              </div>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                Conteúdo pronto
              </span>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3 flex flex-col gap-2">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Ideias geradas
              </p>
              <div className="flex gap-2 text-xs md:text-[13px]">
                <IdeaPill label="7 Reels para esta semana" />
                <IdeaPill label="3 posts carrossel educativos" />
                <IdeaPill label="Guião de vídeo para oferta" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/80 p-3 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Post otimizado
                </p>
                <p className="text-xs md:text-[13px] text-slate-100">
                  “3 erros que te impedem de vender online (e como o resolver
                  hoje). O 2º é o que ninguém te diz…”
                </p>
                <div className="flex items-center justify-between mt-1">
                  <ScorePill label="Engajamento" value="9.2/10" />
                  <ScorePill label="Conversão" value="8.7/10" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/80 p-3 flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Calendário automático
                </p>
                <div className="grid grid-cols-3 gap-1.5 text-[10px] text-slate-200">
                  <CalendarCell day="Seg" type="Reel" />
                  <CalendarCell day="Ter" type="Carrossel" />
                  <CalendarCell day="Qua" type="Story" />
                  <CalendarCell day="Qui" type="Reel" />
                  <CalendarCell day="Sex" type="Post longo" />
                  <CalendarCell day="Sáb" type="Live" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-1">
              O CreatorAgent gera ideias, textos e planeamento em segundos — tu
              só precisas de publicar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IdeaPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800/90 px-2.5 py-1 text-[11px] text-slate-100 border border-slate-700/80">
      {label}
    </span>
  );
}

function ScorePill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-800/90 px-2.5 py-1 border border-slate-700/80">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span className="text-[10px] text-slate-300">{label}</span>
      <span className="text-[10px] font-semibold text-slate-50">{value}</span>
    </div>
  );
}

function CalendarCell({ day, type }: { day: string; type: string }) {
  return (
    <div className="rounded-lg bg-slate-800/80 border border-slate-700/80 px-2 py-1 flex flex-col gap-0.5">
      <span className="text-[10px] text-slate-400">{day}</span>
      <span className="text-[10px] font-medium text-slate-100 truncate">
        {type}
      </span>
    </div>
  );
}

/* FEATURES */

function FeaturesSection() {
  const features = [
    {
      title: "Geração de ideias virais",
      desc: "Transforma um tema simples em dezenas de ideias para Reels, TikToks, carrosséis e newsletters.",
    },
    {
      title: "Posts completos prontos a publicar",
      desc: "Textos otimizados para engajamento e conversão, com hooks fortes, corpo claro e CTA direto.",
    },
    {
      title: "Guiões para vídeo em segundos",
      desc: "Estruturas para vídeos curtos, com falas, cortes e sugestões de B-roll.",
    },
    {
      title: "Calendário de 30 dias automático",
      desc: "Planeamento completo de conteúdo para um mês, organizado dia a dia.",
    },
    {
      title: "Hashtags e ângulos de venda",
      desc: "Sugestões de hashtags relevantes e ângulos diferentes para dizer a mesma mensagem.",
    },
    {
      title: "Estilo adaptado à tua marca",
      desc: "Memoriza o tom da tua marca e escreve como tu escreverias nos teus melhores dias.",
    },
  ];

  return (
    <section className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Tudo o que precisas para nunca mais ficar sem conteúdo.
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
          O CreatorAgent junta ideias, copy, guiões e planeamento numa única
          ferramenta simples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 md:p-5 shadow-md shadow-black/30 hover:border-blue-500/80 transition"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2 text-slate-50">
              {f.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* DEMO */

function DemoSection() {
  return (
    <section id="demo" className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Como funciona na prática</h2>
        <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
          Escolhes o objetivo, o CreatorAgent gera ideias, textos e calendário. Só
          tens de aprovar e publicar.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8">
        <div className="flex-1 space-y-3 text-sm text-slate-300">
          <DemoStep number="1" title="Escreves o teu objetivo">
            “Quero vender mais consultas online”, “Quero lançar um curso”, “Quero
            crescer no TikTok”…
          </DemoStep>
          <DemoStep number="2" title="O CreatorAgent gera as ideias">
            Recebes dezenas de sugestões de conteúdos alinhados com o que vendes e
            com o tipo de cliente certo.
          </DemoStep>
          <DemoStep number="3" title="Tens posts prontos a publicar">
            Cada ideia vem com texto, CTA, ângulo de venda e sugestão de formato
            (Reel, carrossel, post longo, etc.).
          </DemoStep>
          <DemoStep number="4" title="Calendário automático">
            O plano é distribuído ao longo dos dias, para não precisas de pensar
            “o que publico hoje?”.
          </DemoStep>
        </div>

        <div className="flex-1">
          <div className="w-full h-64 md:h-72 rounded-xl border border-slate-700/80 bg-slate-950/80 flex items-center justify-center text-slate-500 text-xs md:text-sm">
            (Aqui colocas a tua demo em vídeo ou gravação de ecrã do CreatorAgent)
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[11px] font-semibold">
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100 mb-0.5">{title}</p>
        <p className="text-xs md:text-sm text-slate-400">{children}</p>
      </div>
    </div>
  );
}

/* RESULTADOS */

function ResultsSection() {
  const samples = [
    {
      label: "Post para Instagram",
      content:
        "“Se estás a tentar postar todos os dias mas ficas bloqueado a olhar para o ecrã, o problema não é falta de motivação — é falta de sistema. Aqui está como montar um calendário que se escreve praticamente sozinho…”",
    },
    {
      label: "Guião para Reel",
      content:
        "Hook: “Queres vender mais sem parecer desesperado?” • Parte 1: Mostra o erro comum • Parte 2: Explica o que fazer em vez disso • Parte 3: CTA para o teu produto/serviço.",
    },
    {
      label: "Email curto de venda",
      content:
        "Assunto: “Tens conteúdo, mas não tens vendas?” • Corpo: 3 parágrafos curtos com benefícios claros • CTA: liga a oferta a uma transformação concreta.",
    },
  ];

  return (
    <section className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Exemplo de conteúdos que ele cria por ti.
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
          Nada de textos genéricos. Recebes mensagens prontas a usar, adaptadas ao
          teu negócio e ao teu estilo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {samples.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 flex flex-col gap-2"
          >
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
              {s.label}
            </p>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {s.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* COMPARAÇÃO */

function ComparisonSection() {
  return (
    <section className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Antes vs Depois do CreatorAgent.
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
          Mostra a diferença entre postar porque “tens de postar” e comunicar com
          intenção, consistência e estratégia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 md:p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">
            Antes
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Ficas 30–60 minutos a tentar escrever um post.</li>
            <li>• Publicas algo “mais ou menos” só para não falhar.</li>
            <li>• Conteúdo pouco alinhado com o que vendes.</li>
            <li>• Sentes que estás sempre a começar do zero.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-500/80 bg-blue-500/5 p-4 md:p-5">
          <p className="text-xs font-semibold text-blue-300 uppercase mb-2">
            Depois
          </p>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>• Ideias, textos e guiões gerados em segundos.</li>
            <li>• Publicas com confiança porque a mensagem está clara.</li>
            <li>• Conteúdo alinhado com o teu produto e o teu cliente.</li>
            <li>• Calendário pronto e sensação de “já está tratado”.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* PRICING */

function PricingSection() {
  return (
    <section id="pricing" className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Acesso Antecipado CreatorAgent.
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
          Vagas ultra limitadas para quem quer ser dos primeiros a ter um assistente
          de conteúdo que trabalha todos os dias por ti.
        </p>
      </div>

      <div className="max-w-md mx-auto rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8 text-center shadow-xl shadow-black/40">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-2">
          Oferta de lançamento
        </p>
        <p className="text-4xl md:text-5xl font-extrabold mb-1">
          39<span className="text-2xl align-top">€</span>
        </p>
        <p className="text-xs md:text-sm text-slate-400 mb-5">
          Pagamento único • Acesso vitalício • 10 vagas
        </p>

        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 px-9 py-3.5 text-sm md:text-base font-semibold text-white transition shadow-lg shadow-blue-500/30 w-full"
        >
          Comprar Agora
        </a>

        <p className="text-[11px] md:text-xs text-slate-400 mt-4">
          Sem mensalidades. Acesso a atualizações futuras. Se não fizer sentido
          para ti nos primeiros 7 dias, podes pedir reembolso.
        </p>
      </div>
    </section>
  );
}

/* FAQ */

function FAQSection() {
  const faqs = [
    {
      q: "O que é exatamente o CreatorAgent?",
      a: "É um assistente de IA focado em criar ideias, textos, guiões e calendários para redes sociais e conteúdos digitais, adaptado ao teu negócio.",
    },
    {
      q: "Preciso de saber escrever bem para usar?",
      a: "Não. O CreatorAgent faz o trabalho pesado. Tu só precisas de rever, ajustar pequenos detalhes se quiseres e publicar.",
    },
    {
      q: "Isto substitui um copywriter ou social media manager?",
      a: "Não substitui completamente, mas reduz drasticamente o tempo e energia que precisas para ter conteúdo bom, consistente e alinhado com vendas.",
    },
    {
      q: "É mesmo um pagamento único?",
      a: "Sim. Nesta fase de acesso antecipado pagas apenas uma vez e ficas com acesso vitalício ao CreatorAgent, com atualizações incluídas.",
    },
    {
      q: "Como recebo acesso depois da compra?",
      a: "Depois do pagamento vais receber instruções simples por email para criar a tua conta e entrar diretamente no CreatorAgent.",
    },
    {
      q: "E se eu não gostar ou não usar?",
      a: "Tens 7 dias para testar. Se não fizer sentido para ti, podes pedir reembolso e tratamos disso sem dramas.",
    },
  ];

  return (
    <section className="w-full mt-24">
      <div className="flex flex-col gap-3 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Perguntas frequentes.</h2>
        <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
          Se ainda estás com dúvidas, é provável que a resposta esteja aqui.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 md:px-5 md:py-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm md:text-base text-slate-100">
              <span>{f.q}</span>
              <span className="text-slate-500 group-open:hidden text-lg">+</span>
              <span className="text-slate-500 hidden group-open:block text-lg">
                –
              </span>
            </summary>
            <p className="mt-2 text-xs md:text-sm text-slate-400 leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* FOOTER */

function FooterSection() {
  return (
    <section className="w-full mt-24 mb-10 border-t border-slate-800/80 pt-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-slate-500">
        <p>CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados.</p>
        <p>
          Suporte:{" "}
          <span className="text-slate-300">contacto@creatoragent.com</span>
        </p>
      </div>
    </section>
  );
}
