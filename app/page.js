import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import ProblemSection from "./components/ProblemSection";
import VisionSection from "./components/VisionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ComingSoonSection from "./components/ComingSoonSection";
import FAQSection from "./components/FAQSection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AppShowcaseSection />
      <ProblemSection />
      <VisionSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <FAQSection />
      <ComingSoonSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
