import { Button } from "@/components/ui/button";

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

export default Navigation;
