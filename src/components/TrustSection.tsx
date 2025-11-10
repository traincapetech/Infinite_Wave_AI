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

export default TrustSection;
