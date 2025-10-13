import Benefits from "@/components/organism/Benefits";
import HeroSection from "@/components/organism/HeroSection";
import HowItWorks from "@/components/organism/HowItWorks";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <Benefits />
    </div>
  );
}
