import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorAgent",
  description: "Cria conteúdo profissional como uma equipa inteira em segundos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className="bg-[#0b0d0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
