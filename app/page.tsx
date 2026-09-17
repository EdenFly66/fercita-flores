import BaalGallery from "@/components/BaalGallery";
import FinalSection from "@/components/FinalSection";
import FlowerBackground from "@/components/FlowerBackground";
import Hero from "@/components/Hero";
import LoveMessage from "@/components/LoveMessage";
import RelationshipCounter from "@/components/RelationshipCounter";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FlowerBackground />

      <div className="relative z-10">
        <Hero />

        <RelationshipCounter />

        <div className="section-divider" aria-hidden="true">
          <span className="text-sm text-[var(--yellow)]">✦</span>
        </div>

        <BaalGallery />

        <LoveMessage />

        <FinalSection />
      </div>
    </main>
  );
}