import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import FounderStorySection from "./components/FounderStorySection";
import TestimonialsSection from "./components/TestimonialsSection";
import VisionSection from "./components/VisionSection";
import ComingSoonSection from "./components/ComingSoonSection";
import FAQSection from "./components/FAQSection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2-3. Nigerian housing problems + bridge */}
      <ProblemSection />
      {/* 4. Why MyHome exists */}
      <HowItWorksSection />
      {/* 5-8. Feature showcase: 11+1 savings, trusted listings, payments, shortlets + landlord tools */}
      <AppShowcaseSection />
      <WhyChooseSection />
      {/* 9. Founder story */}
      <FounderStorySection />
      {/* 10. Early user scenarios */}
      <TestimonialsSection />
      {/* 11. Roadmap teaser */}
      <VisionSection />
      {/* Coming soon on iOS & Android */}
      <ComingSoonSection />
      {/* FAQ */}
      <FAQSection />
      {/* 12. Waitlist */}
      <WaitlistSection />
      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
