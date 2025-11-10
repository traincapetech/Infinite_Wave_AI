import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Zap, Database, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";
import aiAnalystBg from "@/assets/ai-analyst-bg.jpg";
import phishingBg from "@/assets/phishing-triage-bg.jpg";

const queryClient = new QueryClient();

// Navigation Component
const Navigation = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-purple">
            <span className="text-xl font-bold text-foreground">∞</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
            Infinite Wave AI
          </span>
        </div>

        <Button 
          variant="premium" 
          size="sm"
          onClick={scrollToForm}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

// Hero Section Component
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

// Specialization Section Component
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

// Flagship Section Component
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

// Trust Section Component
const technologies = [
  "Rapid7 InsightConnect",
  "Splunk SOAR",
  "Palo Alto Cortex XSOAR",
  "Python",
  "VirusTotal",
  "OpenAI",
];

const TrustSection = () => {
  return (
    <section className="py-24 px-4 bg-surface-dark/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Elite Expertise.{" "}
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
              Proven Technology.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team brings real-world experience from the front lines of Managed Detection and 
            Response (MDR) and Incident Response (IR). We are masters of the security ecosystem.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center text-center"
            >
              <span className="text-sm font-semibold text-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to your backend
    toast({
      title: "Request Submitted!",
      description: "We'll be in touch within 24 hours to schedule your efficiency audit.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      role: "",
    });
  };

  return (
    <section id="contact-form" className="relative py-24 px-4 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stop Chasing Alerts.{" "}
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
              Start Automating Intelligence.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how much time and money Infinite Wave AI can save your team.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border border-border p-8 shadow-premium">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">
                  Company *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-input border-border text-foreground"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Work Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground">
                  Role
                </Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="CISO, SOC Manager, etc."
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-input border-border text-foreground"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="premium" 
              size="lg" 
              className="w-full md:w-auto md:min-w-[300px] mx-auto block"
            >
              Book Your Efficiency Audit
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

// Main Index Page
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

// Not Found Page
const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Button 
          variant="premium" 
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
