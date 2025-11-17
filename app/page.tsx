import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CreatorAgentSection from "@/components/CreatorAgentSection";
import DashboardMockup from "@/components/DashboardMockup";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">
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
