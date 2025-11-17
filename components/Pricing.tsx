const STRIPE_LINK = "https://buy.stripe.com/8x214ndFx2t13smdKkbEA00";

export default function Pricing() {
  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Acesso antecipado para quem quer levar isto a sério.
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        Oferta limitada para os primeiros adotantes — acesso vitalício à versão PRO do CreatorAgent,
        com atualizações incluídas.
      </p>

      <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl 
        shadow-[0_0_80px_-20px_rgba(80,120,255,0.4)] px-8 py-10 text-left mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-200 text-xs font-medium mb-3">
              Acesso Vitalício · Lote limitado
            </div>
            <h3 className="text-3xl font-semibold text-white">CreatorAgent — Lifetime Access</h3>
            <p className="text-gray-400 text-sm mt-2">
              Pagas uma vez, ficas com o assistente de conteúdo para sempre.
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400 mb-1">Oferta atual</p>
            <p className="text-4xl font-bold text-white">39€</p>
            <p className="text-xs text-gray-500 mt-1">Sem mensalidades. Sem renovações.</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-200 mb-8">
          <li>✅ Geração ilimitada de ideias, posts e guiões</li>
          <li>✅ Calendário editorial automático</li>
          <li>✅ Atualizações futuras incluídas</li>
          <li>✅ Acesso à versão de criadores antecipados</li>
          <li>✅ Suporte por email nas primeiras configurações</li>
          <li>✅ Sem subscrição, pagamento único</li>
        </ul>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-3 rounded-xl 
              bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg 
              shadow-[0_0_25px_rgba(80,120,255,0.5)] transition"
          >
            Comprar agora
          </a>

          <p className="text-xs text-gray-400">
            Pagamento processado via Stripe. Acesso enviado por email após confirmação.
          </p>
        </div>
      </div>
    </div>
  );
}
