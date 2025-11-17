import Hero from "@/components/Hero";
import DashboardMockup from "@/components/DashboardMockup";
import CreatorAgentSection from "@/components/CreatorAgentSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0b0d0f]">
      <Hero />
      <DashboardMockup />
      <CreatorAgentSection />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
