import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity Command Center" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-blue/20 rounded-full blur-3xl animate-glow-pulse animation-delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-glow-purple to-glow-blue bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
          Automate the Cognitive Burden
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Elite SOAR Playbooks & AI Co-Pilots. We Eliminate Analyst Burnout.
        </p>

        <Button 
          variant="hero" 
          size="xl" 
          onClick={scrollToForm}
          className="mb-16"
        >
          Request a 15-Minute Efficiency Audit
        </Button>

        {/* Metrics Banner */}
        <div className="max-w-5xl mx-auto bg-card/50 backdrop-blur-md border border-border rounded-lg p-6 shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-glow-purple">
                &gt;90%
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                MTTR Reduction
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-glow-blue">
                150+ Hours
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Analyst Hours Saved/Month
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                AI-Driven
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Threat Hunting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
