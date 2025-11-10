import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SpecializationSection from "@/components/SpecializationSection";
import FlagshipSection from "@/components/FlagshipSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <SpecializationSection />
        <FlagshipSection />
        <TrustSection />
        <CTASection />
      </main>
      
      <footer className="bg-surface-dark/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Infinite Wave AI. Elite Cyber Automation Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
