"use client";

import { useState, useEffect, useRef } from "react"; // Import hooks
import { Cpu, Smartphone, Recycle } from "lucide-react";
import { Printer3d } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Printer3d,
    title: "3D-Printed Custom Fit",
    description: "Precision-scanned and printed to perfectly match your anatomy for maximum comfort and healing.",
    color: "primary",
    radius: 42,
  },
  {
    icon: Recycle,
    title: "Recycled PETG Plastic",
    description: "Made from recycled plastic waste, fully recyclable after use—closing the loop on medical waste.",
    color: "primary",
    radius: 42,
  },
  {
    icon: Cpu,
    title: "Flexible Sensors",
    description: "Embedded sensors monitor temperature, pressure, and movement for real-time healing insights.",
    color: "primary",
    radius: 42,
  },
  {
    icon: Smartphone,
    title: "Bluetooth Mobile App",
    description: "Track your recovery, receive alerts, and share data with your doctor—all from your phone.",
    color: "primary",
    radius: 42,
  },
];

const SolutionSection = () => {
  // --- Animation Logic ---
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper to stagger animations
  const getDelay = (index: number) => `${index * 150}ms`;

  return (
    <section id="solution" ref={sectionRef} className="py-8 bg-secondary/70">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Visual (Orbit) - Fade in on load */}
          <div className={cn(
            "relative order-2 lg:order-1 flex items-center justify-center min-h-[450px] transition-opacity duration-1000",
             isVisible ? "opacity-100" : "opacity-0"
          )}>
             {/* ... (Your existing Orbit Code - unchanged) ... */}
            <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">

              {/* 1. Ambient Background Glow (Depth) */}
              <div className="absolute inset-0 bg-brand/20 rounded-full blur-[80px] opacity-40 animate-pulse" />
              <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                <svg className="w-full h-full text-brand/30" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="48"
                    fill="none" stroke="currentColor" strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Inner Ring (Radius 35) - Rotates Faster Reverse */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite_reverse]">
                <svg className="w-full h-full text-brand/50" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="35"
                    fill="none" stroke="currentColor" strokeWidth="0.8"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              {/* 3. CENTER HUB */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-brand/30 rounded-full animate-ping opacity-20" />
                <div className="w-32 h-32 rounded-sm bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_0_30px_-5px_rgba(141,66,198,0.3)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent opacity-50" />
                  <img src="/assets/ShapeIQ.png" alt="" />
                </div>
              </div>

              {/* 4. ORBITING NODES */}
              {features.map((feature, index) => {
                const angle = (index * 90) - 45;
                const radius = feature.radius;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animation: `float-subtle 4s ease-in-out infinite ${index * 1}s`
                    }}
                  >
                    <div className={cn(
                      "relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                      "bg-white/60 backdrop-blur-md border border-white/50 shadow-sm",
                      "hover:scale-110 hover:bg-white hover:shadow-[0_0_20px_-5px_rgba(141,66,198,0.4)] cursor-pointer"
                    )}>
                      <feature.icon
                        className={`w-7 h-7 transition-colors duration-300 ${feature.color === 'primary' ? 'text-brand' : 'text-brand-dark'}`}
                      />
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
                      </span>
                    </div>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      <div className="px-3 py-1.5 rounded-full bg-brand-dark text-white text-xs font-medium shadow-xl">
                        {feature.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className={cn(
                "transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Introducing
                <span className="text-gradient"> EcoCast</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A revolutionary 3D-printed orthopedic cast that combines sustainable materials,
                smart sensors, and connected healthcare for the modern age.
              </p>
            </div>

            {/* 3D FLIP CARD GRID with Entrance Animation */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "group h-[180px] w-full [perspective:1000px] cursor-pointer transition-all duration-700 ease-out fill-mode-backwards",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  )}
                  style={{ transitionDelay: getDelay(index) }} // Staggered delay
                >
                  <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <div className="h-full p-6 rounded-xl bg-muted/50 border border-border/50 flex flex-col items-start justify-center shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-xl ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-3`}>
                          <feature.icon className={`w-6 h-6 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="h-full p-6 rounded-xl bg-primary/90 text-primary-foreground shadow-xl flex flex-col items-center justify-center text-center border border-primary/20">
                        <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-white/90">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                  </div>
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