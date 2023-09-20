import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function LandingSection() {
  return (
    <section className="min-h-[100dvh] grid grid-rows-[0.01fr_1fr]">
      <Navbar />
      <HeroSection />
    </section>
  );
}
