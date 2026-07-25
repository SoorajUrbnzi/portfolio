import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import VisionSection from "@/components/VisionSection";
import AboutUrbanziSection from "@/components/AboutUrbanziSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import BeyondSection from "@/components/BeyondSection";
import FinalStatement from "@/components/FinalStatement";
import ContactSection from "@/components/ContactSection";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <VisionSection />
      <AboutUrbanziSection />
      <PrinciplesSection />
      <BeyondSection />
      <FinalStatement />
      <ContactSection />
      <FloatingContactButton />
      <main className="pt-[86px]">
        {/* Your main content goes here */}
      </main>
    </div>
  );
}