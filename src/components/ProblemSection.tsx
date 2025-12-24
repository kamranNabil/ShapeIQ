"use client"; // Required for hooks (useEffect, useRef)

import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Trash2, ShieldAlert, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    // id: "01",
    icon: AlertTriangle,
    title: "Fracture Epidemic",
    stat: "6M+",
    statLabel: "Annually",
    description: "Millions of fractures occur every year, yet the treatment method hasn't evolved in decades.",
    severity: 85,
  },
  {
    // id: "02",
    icon: Trash2,
    title: "Medical Waste",
    stat: "Toxic",
    statLabel: "Non-Biodegradable",
    description: "Traditional plaster creates massive amounts of non-recyclable waste that clogs landfills.",
    severity: 92,
  },
  {
    // id: "03",
    icon: ShieldAlert,
    title: "Patient Distress",
    stat: "High",
    statLabel: "Discomfort",
    description: "Heavy, itchy, and non-waterproof casts cause skin infections and misery for patients.",
    severity: 78,
  },
  {
    // id: "04",
    icon: Activity,
    title: "Zero Data",
    stat: "0%",
    statLabel: "Monitoring",
    description: "Doctors fly blind with no real-time data on healing, leading to complications.",
    severity: 95,
  },
];

const ProblemSection = () => {
  // Helper to map index to your requested direction
  const getAnimationClass = (index: number) => {
    switch (index) {
      case 0: return "animate-pop-in-top";    // 1st: From Top
      case 1: return "animate-pop-in-right";  // 2nd: From Right
      case 2: return "animate-pop-in-left";   // 3rd: From Left
      case 3: return "animate-pop-in-bottom"; // 4th: From Bottom
      default: return "animate-materialize";
    }
  };

  return (
    <section id="problem" className="py-12 relative overflow-hidden bg-secondary/70">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8D42C60a_1px,transparent_1px),linear-gradient(to_bottom,#8D42C60a_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute inset-0 bg-white/40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 animate-materialize">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest">
            The Current Landscape
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Healthcare is Advancing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              Why aren't Casts?
            </span>
          </h2>
          
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            While surgery becomes robotic, fracture care remains stuck in the stone age. 
            We identified four critical failures in the system.
          </p>
        </div>

        {/* THE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <AnimatedCard key={index} problem={problem} index={index} getAnimationClass={getAnimationClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component to handle individual Scroll Detection ---
const AnimatedCard = ({ 
  problem, 
  index, 
  getAnimationClass 
}: { 
  problem: typeof problems[0], 
  index: number, 
  getAnimationClass: (i: number) => string 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 10% of the card is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after triggering so it only animates once
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white rounded-[2rem] border border-brand/10 p-8 shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(141,66,198,0.3)] hover:-translate-y-2 hover:bg-brand/70 overflow-hidden",
        // 1. Initial State: Opacity 0
        "opacity-0",
        // 2. Trigger State: If visible, add the specific animation class defined in tailwind.config
        isVisible && getAnimationClass(index)
      )}
      // Staggered delay: Each card waits slightly longer
      style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'both' }} 
    >
      
      {/* HOVER X-RAY DECORATION */}
      <svg 
        className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12" 
        viewBox="0 0 100 100" fill="currentColor"
      >
        <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
      </svg>

      {/* CARD CONTENT */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header: Icon & ID */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
            <problem.icon className="w-7 h-7 animate-float-subtle" />
          </div>
          {/* <span className="font-mono text-xs text-brand/40 group-hover:text-white/40 transition-colors">
            0{index + 1}
          </span> */}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
          {problem.title}
        </h3>

        {/* Stat Block */}
        <div className="flex items-baseline gap-2 mb-4">
           <span className="text-3xl font-bold text-brand group-hover:text-white transition-colors duration-300">
             {problem.stat}
           </span>
           <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-purple-200 transition-colors duration-300">
             {problem.statLabel}
           </span>
        </div>

        {/* Description */}
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-purple-100 transition-colors duration-300">
          {problem.description}
        </p>

        {/* Severity Meter */}
        <div className="mt-auto">
          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-2 text-zinc-400 group-hover:text-purple-200">
            <span>Criticality</span>
            <span>{problem.severity}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden group-hover:bg-white/20 transition-colors">
            <div 
              className="h-full bg-brand group-hover:bg-white transition-all duration-1000 ease-out" 
              style={{ width: `${problem.severity}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemSection;