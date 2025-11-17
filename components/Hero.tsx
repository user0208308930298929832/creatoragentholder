export default function Hero() {
  return (
    <div className="w-full rounded-3xl p-12 backdrop-blur-xl bg-transparent">
      
      <span className="text-green-300 text-sm px-4 py-1 rounded-full border border-green-400/40 bg-green-500/10">
        Super assistente de conteúdo com IA
      </span>

      <h1 className="text-5xl font-bold leading-tight mt-6">
        Cria conteúdo profissional <span className="text-blue-400">como</span><br />
        <span className="text-blue-400">uma equipa inteira</span> em segundos.
      </h1>

      <p className="text-gray-300 text-lg mt-4 max-w-2xl">
        O CreatorAgent gera ideias, textos, guiões e calendários completos
        como se tivesses uma agência de conteúdo a trabalhar 24/7 só para ti.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
          Comprar Acesso Antecipado
        </button>
        <button className="px-6 py-3 border border-white/20 rounded-lg font-medium">
          Ver Demo
        </button>
      </div>

    </div>
  );
}
