import { Cpu, Smartphone, Recycle } from "lucide-react";
import { Printer3d } from "@/components/ui/icons";

const features = [
  {
    icon: Printer3d,
    title: "3D-Printed Custom Fit",
    description: "Precision-scanned and printed to perfectly match your anatomy for maximum comfort and healing.",
    color: "primary",
  },
  {
    icon: Recycle,
    title: "Recycled PETG Plastic",
    description: "Made from recycled plastic waste, fully recyclable after use—closing the loop on medical waste.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Flexible Sensors",
    description: "Embedded sensors monitor temperature, pressure, and movement for real-time healing insights.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Bluetooth Mobile App",
    description: "Track your recovery, receive alerts, and share data with your doctor—all from your phone.",
    color: "primary",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-secondary/70 rounded-full blur-3xl opacity-10" />
              
              {/* Central circle */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-16 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-hero shadow-glow flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">EC</span>
                </div>
              </div>

              {/* Orbiting features */}
              {features.map((feature, index) => {
                const angle = (index * 90) - 45;
                const radius = 45;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div
                    key={index}
                    className="absolute w-16 h-16 rounded-xl bg-card shadow-card border border-border/50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Introducing
                <span className="text-gradient"> ShapeIQ</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A revolutionary 3D-printed orthopedic cast that combines sustainable materials, 
                smart sensors, and connected healthcare for the modern age.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <div className={`w-10 h-10 rounded-lg ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-3`}>
                    <feature.icon className={`w-5 h-5 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
