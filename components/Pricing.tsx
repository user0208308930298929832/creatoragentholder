export default function Pricing() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Acesso Antecipado CreatorAgent.</h2>
        <p className="text-gray-400 mb-10">
          Vagas ultra limitadas para quem quer ser dos primeiros a ter um assistente
          de conteúdo que trabalha todos os dias por ti.
        </p>

        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl shadow-blue-500/10">
          <div className="text-gray-400 mb-2">OFERTA DE LANÇAMENTO</div>
          <div className="text-6xl font-bold mb-3">39€</div>
          <p className="text-gray-400 mb-6">Pagamento único · Acesso vitalício · 10 vagas</p>

          <a
            href="https://buy.stripe.com/8x214ndFx2t13smdKkbEA00"
            className="block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-medium"
          >
            Comprar Agora
          </a>

          <p className="mt-4 text-gray-500 text-sm">
            Sem mensalidades. Acesso a atualizações futuras.
          </p>
        </div>
      </div>
    </section>
  );
}
