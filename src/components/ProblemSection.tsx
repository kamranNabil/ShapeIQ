"use client";

import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Trash2, ShieldAlert, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fracture Epidemic",
    stat: "6M+",
    statLabel: "Annually",
    description:
      "Millions of fractures occur every year worldwide, yet orthopedic treatment methods remain largely unchanged, relying on outdated materials and processes.lots of toxic, non-biodegradable medical waste that cannot be recycled and contributes significantly to environmental pollution.",
    severity: 85,
  },
  {
    icon: Trash2,
    title: "Medical Waste",
    stat: "Toxic",
    statLabel: "Non-Biodegradable",
    description:
      "Conventional plaster casts generate enormous amounts of toxic, non-biodegradable medical waste that cannot be recycled and contributes significantly to environmental pollution.",
    severity: 92,
  },
  {
    icon: ShieldAlert,
    title: "Patient Distress",
    stat: "High",
    statLabel: "Discomfort",
    description:
      "Traditional casts are heavy, itchy, and non-waterproof, often causing skin irritation, infections, poor hygiene, and long-term discomfort for patients during recovery.",
    severity: 78,
  },
  {
    icon: Activity,
    title: "Zero Data",
    stat: "0%",
    statLabel: "Monitoring",
    description:
      "Doctors currently lack real-time visibility into fracture healing, forcing them to rely on delayed checkups and X-rays, which increases the risk of complications and improper recovery.",
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
    <section id="problem" className="py-8 relative overflow-hidden bg-secondary/70">

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

// --- Sub-Component: 3D Vertical Flip Card ---
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
        if (entry.isIntersecting) {
          setIsVisible(true);
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
        "group relative h-[280px] w-full [perspective:1000px]",
        "opacity-0",
        isVisible && getAnimationClass(index)
      )}
      style={{ animationDelay: `${index * 300}ms`, animationFillMode: 'both' }}
    >
      {/* 2. INNER WRAPPER: Handles the Vertical Rotation (The Turbine) */}
      <div className={cn(
        "relative h-full w-full transition-all duration-700 [transform-style:preserve-3d]",
        // Vertical Rotation on Hover
        "group-hover:[transform:rotateX(180deg)] shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(141,66,198,0.3)] rounded-[1.5rem]"
      )}>

        {/* ================= FRONT FACE (Truncated Info) ================= */}
        <div className="absolute inset-0 h-full w-full rounded-[1.5rem] bg-white border border-brand/10 p-6 flex flex-col justify-between [backface-visibility:hidden]">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand">
              <problem.icon className="w-6 h-6" />
            </div>
            {/* Stat (Compact) */}
            <div className="text-right">
              <span className="block text-2xl font-bold text-brand leading-none">
                {problem.stat}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                {problem.statLabel}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {problem.title}
            </h3>

            {/* Truncated Description: Shows "half" (approx 2 lines) */}
            <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">
              {problem.description}
            </p>
          </div>

          {/* Visual cue to hover */}
          <div className="text-center mt-2">
            <div className="w-8 h-1 bg-zinc-100 rounded-full mx-auto group-hover:bg-brand/20 transition-colors" />
          </div>
        </div>

        {/* ================= BACK FACE (Full Details) ================= */}
        <div className={cn(
          "absolute inset-0 h-full w-full rounded-[1.5rem] bg-brand p-6 flex flex-col justify-between [backface-visibility:hidden]",
          "[transform:rotateX(180deg)]" // Pre-rotated vertically so it's upright when flipped
        )}>

          {/* Decoration */}
          <svg
            className="absolute -bottom-10 -right-10 w-32 h-32 text-white/10 rotate-12"
            viewBox="0 0 100 100" fill="currentColor"
          >
            <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
          </svg>

          {/* Content */}
          <div className="relative z-10 text-white h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-white/90">
              <problem.icon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Full Diagnosis</span>
            </div>
            {/* <div className="text-right">
              <span className="block text-2xl font-bold text-white leading-none">
                {problem.stat}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-00">
                {problem.statLabel}
              </span>
            </div> */}
            {/* Full Description */}
            <p className="text-white/90 text-xs leading-relaxed mb-4">
              {problem.description}
            </p>

            {/* Severity Meter (Moved to back for detail view) */}
            <div className="mt-auto">
              <div className="flex justify-between text-[9px] uppercase font-bold tracking-widest mb-1 text-purple-200">
                <span>Criticality</span>
                <span>{problem.severity}%</span>
              </div>
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000 ease-out delay-300"
                  style={{ width: `${problem.severity}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemSection;