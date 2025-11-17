import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CreatorAgentSection from "@/components/CreatorAgentSection";
import DashboardMockup from "@/components/DashboardMockup";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      
      {/* HERO */}
      <section className="w-full max-w-7xl px-6 pt-24">
        <Hero />
      </section>

      {/* MOCKUP HERO */}
      <section className="w-full max-w-6xl px-6 mt-12">
        <DashboardMockup />
      </section>

      {/* FEATURES */}
      <section className="w-full max-w-7xl px-6 mt-32">
        <Features />
      </section>

      {/* SECTION: DENTRO DO CREATORAGENT */}
      <section className="w-full max-w-6xl px-6 mt-32">
        <CreatorAgentSection />
      </section>

      {/* MOCKUP INTERIOR */}
      <section className="w-full max-w-6xl px-6 mt-12">
        <DashboardMockup />
      </section>

      {/* PRICING */}
      <section className="w-full max-w-4xl px-6 mt-32">
        <Pricing />
      </section>

      {/* FAQ */}
      <section className="w-full max-w-5xl px-6 mt-32">
        <FAQ />
      </section>

      {/* FOOTER */}
      <section className="w-full max-w-7xl px-6 mt-20 mb-16">
        <Footer />
      </section>

    </main>
  );
}
