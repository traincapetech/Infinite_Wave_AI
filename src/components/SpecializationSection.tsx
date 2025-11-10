import { Card } from "@/components/ui/card";
import aiAnalystBg from "@/assets/ai-analyst-bg.jpg";

const SpecializationSection = () => {
  return (
    <section className="relative py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiAnalystBg} 
          alt="AI Analyst Visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
          Beyond Automation. We Automate Cognition.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <Card className="bg-muted/50 backdrop-blur-sm border border-border p-8 hover:border-destructive/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-foreground">
                Traditional SOAR
              </h3>
            </div>
            <p className="text-lg font-semibold text-muted-foreground mb-4">
              Automating Clicks
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most automation just connects tools and takes simple actions (e.g., "Block IP"). 
              This is a good first step, but it's not enough.
            </p>
          </Card>

          {/* Our Way */}
          <Card className="bg-gradient-primary backdrop-blur-sm border border-primary/50 p-8 shadow-glow-purple hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-glow-blue rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-foreground">
                Infinite Wave AI
              </h3>
            </div>
            <p className="text-lg font-semibold text-foreground mb-4">
              Automating Cognition
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our AI-Analyst Co-Pilot automates the <strong>thinking</strong>. We use AI to summarize incidents, 
              prioritize complex threats, and draft management-ready reports. We don't just respond; we <strong>understand</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
