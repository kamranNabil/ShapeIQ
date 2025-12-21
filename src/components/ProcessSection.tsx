import { Scan, Cog, Package, Activity } from "lucide-react";

const steps = [
  {
    icon: Scan,
    step: "01",
    title: "3D Scanning",
    description: "Quick, painless scan captures your exact limb geometry for a perfect custom fit.",
  },
  {
    icon: Cog,
    step: "02",
    title: "AI Design & Print",
    description: "Our AI optimizes the cast structure, then 3D prints it from recycled PETG in hours.",
  },
  {
    icon: Package,
    step: "03",
    title: "Sensor Integration",
    description: "Flexible sensors are seamlessly embedded during production for smart monitoring.",
  },
  {
    icon: Activity,
    step: "04",
    title: "Remote Monitoring",
    description: "Connect via Bluetooth, track healing progress, and share data with your healthcare team.",
  },
];

const ProcessSection = () => {
  return (
    <section id="features" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            From Scan to
            <span className="text-gradient"> Smart Recovery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined Fab-as-a-Service model transforms plastic waste into custom medical devices 
            with integrated diagnostics.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative group">
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                  <span className="text-primary-foreground font-bold">{item.step}</span>
                </div>

                {/* Card */}
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
