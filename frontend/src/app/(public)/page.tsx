import Benefits from "@/components/organism/Benefits";
import CallToAction from "@/components/organism/CallToAction";
import HeroSection from "@/components/organism/HeroSection";
import HowItWorks from "@/components/organism/HowItWorks";
import Testimonials from "@/components/organism/Testimonials";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
