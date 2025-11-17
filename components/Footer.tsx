export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 pt-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <span>CreatorAgent © {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <span className="text-gray-400">
          Suporte: <a href="mailto:suporte@creatoragent.app" className="underline underline-offset-2">suporte@creatoragent.app</a>
        </span>
      </div>
    </footer>
  );
}
