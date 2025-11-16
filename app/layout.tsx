import "./globals.css";

export const metadata = {
  title: "CreatorAgent",
  description: "Landing Page do CreatorAgent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
