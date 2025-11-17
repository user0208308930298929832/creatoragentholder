import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorAgent — Cria Conteúdo Profissional em Segundos",
  description: "Gera ideias, textos, guiões e calendários de conteúdo com IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-[#0b0d0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
