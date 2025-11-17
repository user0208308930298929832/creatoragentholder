export default function CreatorAgentSection() {
  return (
    <div className="w-full py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Dentro do <span className="text-blue-400">CreatorAgent</span>.
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Um painel pensado para te dar clareza sobre ideias, textos e calendário — sem
          dashboards confusos, sem menus escondidos, sem complicações.
        </p>

        {/* WRAPPER DO VÍDEO / PLACEHOLDER */}
        <div className="relative max-w-4xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/90 shadow-[0_40px_120px_rgba(15,23,42,0.95)] overflow-hidden">
          {/* glow suave por trás */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-purple-500/10 opacity-80" />

          {/* CONTAINER DO VÍDEO */}
          <div className="relative aspect-video">
            {/* 
              👉 Quando tiveres o vídeo, mete o ficheiro em /public (ex: /public/demo.mp4)
              e troca o src aqui em baixo.
            */}
            <video
              src="/demo.mp4"
              className="h-full w-full object-cover rounded-[28px]"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Fallback se ainda não houver vídeo */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
              <div className="px-6 py-3 rounded-full border border-white/20 bg-black/30 text-sm text-gray-200">
                Vídeo de demo em breve — grava o teu e substitui o ficheiro <code>demo.mp4</code>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
