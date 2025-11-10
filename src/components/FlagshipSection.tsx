import { Card } from "@/components/ui/card";
import { Shield, Zap, Database, FileText } from "lucide-react";
import phishingBg from "@/assets/phishing-triage-bg.jpg";

const features = [
  {
    icon: Database,
    title: "Automated Enrichment",
    description: "Instantly checks URLs, files, and IPs against VirusTotal and other threat feeds.",
  },
  {
    icon: Zap,
    title: "Intelligent Scoring",
    description: "Our AI logic provides a single, actionable malice score.",
  },
  {
    icon: Shield,
    title: "Enterprise Remediation",
    description: "Automatically deletes the threat from all inboxes.",
  },
  {
    icon: FileText,
    title: "AI-Generated Summary",
    description: "Creates the incident report for your team, instantly.",
  },
];

const FlagshipSection = () => {
  return (
    <section className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={phishingBg} 
          alt="Phishing Triage Visualization" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Flagship: The{" "}
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
              Phishing Triage Playbook
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our most in-demand service. We transform your phishing triage from a 20-minute manual 
            analyst task into a 2-minute automated workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 hover:border-primary/50 hover:shadow-glow-purple transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary p-3 rounded-lg shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipSection;
