"use client";

import { Scan, Cog, Package, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="features" className="py-8 bg-secondary/70 relative overflow-hidden">
      
      {/* Background Decoration (Optional: Adds subtle tech feel) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            From Scan to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark"> Smart Recovery</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Our streamlined Fab-as-a-Service model transforms plastic waste into custom medical devices 
            with integrated diagnostics in four simple steps.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="relative">
          
          {/* 1. Connection Line (Desktop Only) */}
          {/* Placed specifically to align with the top of the cards where the 'step' bubble sits */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
             <div className="absolute top-[2rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent dashed-line" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center"
              >
                
                {/* 2. Step Indicator (The "Node" on the line) */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 group-hover:scale-110">
                   <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-secondary shadow-lg group-hover:border-brand/30 transition-colors">
                      <span className="text-xl font-bold text-brand">{item.step}</span>
                      
                      {/* Glow effect behind number */}
                      <div className="absolute inset-0 rounded-full bg-brand/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>

                {/* 3. The Card */}
                <div className={cn(
                  "relative w-full mt-8 mb-4 pt-12 pb-8 px-6 rounded-3xl text-center transition-all duration-500",
                  "bg-white/40 backdrop-blur-md border border-purple-300 shadow-sm", // Glassmorphism
                  "hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(141,66,198,0.15)] hover:border-brand/20" // Hover State
                )}>
                  
                  {/* Icon */}
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-brand-light shadow-inner text-brand group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Watermark Number (Visual Depth) */}
                  <span className="absolute bottom-2 right-4 text-[4rem] font-bold text-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none pointer-events-none">
                    {item.step}
                  </span>
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