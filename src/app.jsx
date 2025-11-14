/* App.jsx
   Full site with global animations + image fallbacks + font applied.
   Replace your current App file with this.
*/

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Zap,
  Database,
  FileText,
  ChevronLeft,
  ChevronRight,
  Brain,
  Workflow,
  Cpu,
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

/* Assets — keep these imports as in your project structure */
import heroBg from "@/assets/hero-bg.jpg";
import aiAnalystBg from "@/assets/section2.jpeg";
import sec2Bg from "@/assets/sec2bg.png";
import phishingBg from "@/assets/secc.jpg";
import logoImg from "@/assets/logo.jpeg";
import cortexImg from "@/assets/crousel/cortex.png";
import openaiImg from "@/assets/crousel/openai.png";
import pythonImg from "@/assets/crousel/python.jpg";
import rapidImg from "@/assets/crousel/raipd.jpg";
import splunkImg from "@/assets/crousel/splunk.png";
import virustotalImg from "@/assets/crousel/virustotal.jpg";
import { MessageSquare, Target } from "lucide-react";

/* Query client */
const queryClient = new QueryClient();

/* ----------------------------
   Animation variants (global)
   ---------------------------- */
const fadeFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const fadeFromTop = {
  hidden: { opacity: 0, y: -80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

/* ----------------------------
   Small utility components
   ---------------------------- */

// Animated Counter — triggers when visible
const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;
            const endValue = typeof end === "number" ? end : parseFloat(end) || 0;

            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (endValue - startValue) * easeOutQuart;

              setCount(Math.floor(currentValue));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [end, duration, hasAnimated]);

  const displayValue =
    typeof end === "string" && end.includes("%")
      ? `${prefix}${count}${suffix || "%"}`
      : typeof end === "string" && end.includes("+")
      ? `${count}${suffix || "+"}`
      : typeof end === "string"
      ? end
      : `${prefix}${count}${suffix}`;

  return (
    <span ref={counterRef} className={className}>
      {displayValue}
    </span>
  );
};

/* ----------------------------
   Data & small arrays
   ---------------------------- */

const cognitionHighlights = [
  {
    icon: Workflow,
    title: "Adaptive Playbooks",
    description: "Dynamic workflows evolve with each alert, learning from analyst feedback automatically.",
  },
  {
    icon: Cpu,
    title: "Decision Acceleration",
    description: "Context-aware triage accelerates MTTR with explainable scoring and executive-ready outputs.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chatbot Triage",
    description: "Allows analysts to query and interact with incidents using natural language for instant data retrieval.",
  },
  {
    icon: Zap,
    title: "Autonomous Remediation",
    description: "Enables hands-free response to low-fidelity threats while escalating complex cases with full context.",
  },
  {
    icon: Target,
    title: "Proactive Threat Hunting",
    description: "Suggests hunt hypotheses based on analyzed incidents and automatically deploys search queries.",
  },
];

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

const technologies = [
  { name: "Rapid7 InsightConnect", image: rapidImg, fallback: "https://via.placeholder.com/200x120?text=Rapid7" },
  { name: "Splunk SOAR", image: splunkImg, fallback: "https://via.placeholder.com/200x120?text=Splunk" },
  { name: "Palo Alto Cortex XSOAR", image: cortexImg, fallback: "https://via.placeholder.com/200x120?text=Cortex" },
  { name: "Python", image: pythonImg, fallback: "https://via.placeholder.com/200x120?text=Python" },
  { name: "VirusTotal", image: virustotalImg, fallback: "https://via.placeholder.com/200x120?text=VirusTotal" },
  { name: "OpenAI", image: openaiImg, fallback: "https://via.placeholder.com/200x120?text=OpenAI" },
];

/* ----------------------------
   Components: Navigation, Sections
   ---------------------------- */

const Navigation = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-purple overflow-hidden">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">
            Infinite Wave AI
          </span>
        </div>

        <Button variant="premium" size="sm" onClick={scrollToForm}>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background visual" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-blue/20 rounded-full blur-3xl animate-glow-pulse animation-delay-1000" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.h1
          variants={fadeFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-glow-purple to-glow-blue bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
        >
          Automate the Cognitive Burden
        </motion.h1>

        <motion.p
          variants={fadeFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          Elite SOAR Playbooks & AI Co-Pilots. We Eliminate Analyst Burnout.
        </motion.p>

        <motion.div variants={fadeFromBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <Button variant="hero" size="xl" onClick={scrollToForm} className="mb-16">
            Request a 15-Minute Efficiency Audit
          </Button>
        </motion.div>

        <motion.div variants={fadeFromBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-5xl mx-auto bg-card/50 backdrop-blur-md border border-border rounded-lg p-6 shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-glow-purple">
                <AnimatedCounter end={90} prefix=">" suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">MTTR Reduction</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-glow-blue">
                <AnimatedCounter end={150} suffix="+ Hours" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Analyst Hours Saved/Month</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">AI-Driven</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Threat Hunting</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SpecializationSection = () => {
  const [highlightEmblaRef, highlightEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!highlightEmblaApi) return;
    const autoplay = setInterval(() => {
      highlightEmblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(autoplay);
  }, [highlightEmblaApi]);

  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Title from TOP */}
        <motion.h2 variants={fadeFromTop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent font-mono">
          Beyond Automation. We Automate Cognition.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left text content - from LEFT */}
          <div className="flex flex-col justify-between h-full space-y-8 min-h-[420px]">
            <motion.div variants={fadeFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
              <Card className="bg-muted/50 backdrop-blur-sm border border-border p-8 hover:border-destructive/50 transition-all duration-300 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground font-mono">Traditional SOAR: Automating Clicks</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Most automation just connects tools and takes simple actions (e.g., "Block IP"). This is a good first step, but it's not enough.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.15 }}>
              <Card className="bg-gradient-primary backdrop-blur-sm border border-primary/50 p-8 shadow-glow-purple hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02] flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-glow-blue rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground font-mono">Infinite Wave AI: Automating Cognition</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Our AI-Analyst Co-Pilot automates the <strong>thinking</strong>. We use AI to summarize incidents, prioritize complex threats, and draft management-ready reports. We don't just respond; we <strong>understand</strong>.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Right image — from RIGHT */}
          <motion.div variants={fadeFromRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl image-glow">
              <img
                src={aiAnalystBg}
                alt="AI Analyst Co-Pilot Visualization"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = sec2Bg || "https://via.placeholder.com/800x420?text=image";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom carousel — from BOTTOM */}
        <motion.div variants={fadeFromBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <div className="relative bg-card/60 backdrop-blur-md border border-border/60 rounded-xl p-6 shadow-glow-purple overflow-hidden">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center font-mono">Core Cognition Capabilities</h3>
            <div className="absolute inset-0 bg-gradient-to-r from-glow-purple/10 via-transparent to-glow-blue/10 opacity-60 pointer-events-none" />
            <div ref={highlightEmblaRef} className="overflow-hidden relative z-10">
              <div className="flex gap-6">
                {cognitionHighlights.map((highlight, index) => (
                  <div key={index} className="flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] xl:flex-[0_0_30%]">
                    <div className="h-full bg-muted/70 rounded-lg border border-border/60 p-5 shadow-inner transition-all duration-300 hover:border-glow-purple/60 hover:shadow-glow-blue/40 flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-glow-purple/30 to-glow-blue/30 flex items-center justify-center shadow-inner">
                        <highlight.icon className="w-6 h-6 text-glow-purple" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground font-mono">{highlight.title}</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FlagshipSection = () => {
  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">

      {/* FIXED: Local radial glow (does NOT leak across page) */}
      <div
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full blur-[120px] opacity-40
        bg-[radial-gradient(circle,rgba(121,40,202,0.35),transparent_70%)]
        pointer-events-none"
      ></div>

      <div className="relative z-10 container mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Flagship:{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Phishing Triage Playbook
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We turn a 20-minute manual phishing triage into a fully automated 2-minute workflow.
          </p>
        </motion.div>

        {/* Image + Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            {/* LOCAL glow behind image only */}
            <div
              className="absolute -inset-6 rounded-2xl blur-2xl opacity-60
              bg-gradient-to-r from-purple-600/40 to-blue-600/40"
            ></div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={phishingBg}
                alt="Phishing Triage Visualization"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) =>
                  (e.currentTarget.src =
                    sec2Bg ||
                    "https://via.placeholder.com/900x500?text=image")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
              >
                <Card
                  className="bg-black/30 backdrop-blur-md border border-white/10
                  p-6 rounded-2xl hover:border-purple-500/40
                  hover:shadow-[0_0_20px_rgba(155,70,255,0.35)]
                  hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const TrustSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: false,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 3000);

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 px-4 bg-surface-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-glow-purple/5 via-transparent to-glow-purple/5 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div variants={fadeFromTop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Elite Expertise.{" "}
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">Proven Technology.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team brings real-world experience from the front lines of Managed Detection and Response (MDR) and Incident Response (IR).
          </p>
        </motion.div>

        <div className="relative px-8 sm:px-10 lg:px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 lg:gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_55%] md:flex-[0_0_40%] lg:flex-[0_0_30%] xl:flex-[0_0_26%] min-w-0">
                  <motion.div variants={fadeFromBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }}>
                    <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-glow-purple/50 transition-all duration-300 mx-2 overflow-hidden h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/0 via-glow-purple/0 to-glow-purple/0 group-hover:from-glow-purple/10 group-hover:via-glow-purple/5 group-hover:to-glow-purple/10 transition-all duration-500 rounded-xl" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-glow-purple/0 to-glow-blue/0 group-hover:from-glow-purple/20 group-hover:to-glow-blue/20 blur-xl transition-all duration-500 rounded-xl opacity-0 group-hover:opacity-100" />
                      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="relative w-full h-32 flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden group-hover:bg-muted/50 transition-all duration-300">
                          <img src={tech.image} alt={tech.name} className="max-w-full max-h-full object-contain p-2" onError={(e) => (e.currentTarget.src = tech.fallback)} />
                          <div className="absolute inset-0 bg-glow-purple/0 group-hover:bg-glow-purple/10 transition-all duration-300" />
                        </div>

                        <h3 className="text-sm font-semibold text-foreground group-hover:text-glow-purple transition-colors duration-300">{tech.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-glow-purple hover:bg-glow-purple/10 transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-glow-purple" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-glow-purple hover:bg-glow-purple/10 transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-glow-purple" />
          </button>
        </div>
      </div>
    </section>
  );
};

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

    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request Submitted!",
      description: "We'll be in touch within 24 hours to schedule your efficiency audit.",
    });

    setFormData({ name: "", company: "", email: "", role: "" });
  };

  return (
    <section id="contact-form" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div variants={fadeFromTop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stop Chasing Alerts.{" "}
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue bg-clip-text text-transparent">Start Automating Intelligence.</span>
          </h2>
          <p className="text-xl text-muted-foreground">See how much time and money Infinite Wave AI can save your team.</p>
        </motion.div>

        <Card className="bg-card/50 backdrop-blur-sm border border-border p-8 shadow-premium">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-input border-border text-foreground" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company *</Label>
                <Input id="company" type="text" placeholder="Acme Corp" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-input border-border text-foreground" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Work Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-input border-border text-foreground" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground">Role</Label>
                <Input id="role" type="text" placeholder="CISO, SOC Manager, etc." value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="bg-input border-border text-foreground" />
              </div>
            </div>

            <Button type="submit" variant="premium" size="lg" className="w-full md:w-auto md:min-w-[300px] mx-auto block">
              Book Your Efficiency Audit
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

/* Main Index + App wrapper */
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
          <p className="text-muted-foreground text-sm">© 2025 Infinite Wave AI. Elite Cyber Automation Engineering.</p>
        </div>
      </footer>
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Button variant="premium" onClick={() => (window.location.href = "/")}>Go Home</Button>
    </div>
  </div>
);

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
