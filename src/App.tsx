import ApiSetupSection from "./components/landing/apiSetupSection";
import AppScreens from "./components/landing/appScreens";
import CTASection from "./components/landing/ctaSection";
import FAQSection from "./components/landing/faqSection";
import FeaturesSection from "./components/landing/featuresSection";
import Footer from "./components/landing/footer";
import HeroSection from "./components/landing/heroSection";
import HowItWorksSection from "./components/landing/howItWorksSection";
import Navbar from "./components/landing/navbar";
import OpenSourceSection from "./components/landing/openSourceSection";
import PrivacySection from "./components/landing/privacySection";

export default function Landing() {
  return (
    <div className="min-h-screen font-inter bg-background text-foreground antialiased">
      <Navbar />
      <HeroSection />
      <AppScreens />
      <FeaturesSection />
      <HowItWorksSection />
      <ApiSetupSection />
      <PrivacySection />
      <OpenSourceSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
