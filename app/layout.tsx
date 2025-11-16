import "./globals.css";

export const metadata = {
  title: "CreatorAgent",
  description: "Landing Page",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt">
      <head />
      <body>{children}</body>
    </html>
  );
}
