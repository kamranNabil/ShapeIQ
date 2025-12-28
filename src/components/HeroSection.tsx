import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, Recycle, Droplets, Smartphone, Layers } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 bg-secondary/70">

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[1000px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 2. ENGINEERING GRID */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8D42C60a_1px,transparent_1px),linear-gradient(to_bottom,#8D42C60a_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute inset-0 bg-white/60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 pb-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Tagline Badge */}
            <div className="animate-slide-up">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/20 bg-brand-light text-brand text-xs font-bold uppercase tracking-widest shadow-sm">
                  <Recycle className="w-3 h-3" />
                  From Waste to Wellness
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-up text-zinc-900">
                Reshaping <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-600 to-indigo-600">
                  Orthopedics.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up animation-delay-200">
                Meet <span className="font-bold text-brand">EcoCast</span>. The world's first breathable, waterproof, and sensor-enabled cast made from recycled PETG.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <Button className="h-12 px-8 rounded-xl border border-brand bg-brand text-white hover:bg-white hover:text-brand-dark font-semibold text-base shadow-[0_4px_14px_0_rgba(141,66,198,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(141,66,198,0.23)] hover:-translate-y-1">
                For Hospitals
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button className="h-12 px-8 rounded-xl border-2 border-brand bg-white text-brand hover:bg-brand hover:text-white font-medium text-base">
                View Tech Specs
              </Button>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up animation-delay-600">
              {[
                { label: "Plastic Bottles Repurposed", value: "30+", icon: Recycle },
                { label: "Lighter than Plaster", value: "40%", icon: Layers },
                { label: "Real-time Monitoring", value: "24/7", icon: Smartphone },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-primary/5 backdrop-blur-sm border border-purple-300 shadow-sm hover:bg-primary/20 hover:shadow-md hover:border-purple-400 transition-all group">
                  <div className="p-2 bg-white w-fit rounded-2xl mb-3 group-hover:bg-brand group-hover:text-white transition-colors text-brand">
                    <stat.icon className="w-4 h-4 hover rounded" />
                  </div>
                  <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-zinc-500 font-medium leading-tight mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
              {/* {[
                { label: "Plastic Bottles Repurposed", value: "30+", icon: Recycle },
                { label: "Lighter than Plaster", value: "40%", icon: Layers },
                { label: "Real-time Monitoring", value: "24/7", icon: Smartphone },
              ].map((stat, i) => (
                <div
                  key={i}
                  // 1. CONTAINER: Transparent by default, Materializes on Hover
                  className=" group relative flex flex-col justify-center items-start p-4 rounded-2xl h-auto min-h-[140px] bg-transparent border border-transparent hover:bg-white/90 hover:backdrop-blur-xl hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-default"> */}

                  {/* 2. ICON: Always Visible */}
                  {/* <div className="p-3 rounded-2xl mb-2bg-purple-50/80 text-brand backdrop-blur-smgroup-hover:bg-brand group-hover:text-whitetransition-colors duration-500">
                    <stat.icon className="w-5 h-5" />
                  </div> */}

                  {/* 3. TEXT CONTENT: Hidden by default (opacity-0), Visible on Hover */}
                  {/* <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-zinc-500 font-medium leading-tight mt-1">
                      {stat.label}
                    </p> 
                  </div> 
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT CONTENT: The "Digital Twin" Visualization */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in animation-delay-400 pt-8">
            <div className="relative w-full max-w-[350px] h-[350px] lg:w-[450px] lg:h-[400px]">
              {/* Cast Container - Glassmorphism Card */}
              <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-b from-purple-300 to-zinc-500 shadow-2xl border border-purple-500 flex items-center justify-center overflow-hidden z-20 pt-12">
                <div className="animate-float-slow relative z-10">
                  <img
                    src="/assets/CastImg.png"
                    alt="ShapeIQ Cast Mockup"
                    className="relative z-10 w-64 h-80 animate-float-medium animation-delay-100 fade-in zoom-in slide-in-from-bottom-10 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* 2. SVG WIREFRAME OVERLAY (Tech Layer) */}
                <svg
                  className="absolute z-20 w-72 h-96 text-brand opacity-40 mix-blend-multiply"
                  viewBox="0 0 100 140"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="castGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9c64cdff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9315faff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Lattice Structure Paths */}
                  <path d="M30 10 L50 0 L70 10 L70 30 L50 40 L30 30 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />
                  <path d="M30 50 L50 40 L70 50 L70 70 L50 80 L30 70 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />
                  <path d="M30 90 L50 80 L70 90 L70 110 L50 120 L30 110 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />
                  <path d="M10 30 L30 20 L50 30 L50 50 L30 60 L10 50 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />
                  <path d="M50 30 L70 20 L90 30 L90 50 L70 60 L50 50 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />
                  <path d="M50 70 L70 60 L90 70 L90 90 L70 100 L50 90 Z" stroke="url(#castGradient)" strokeWidth="1" fill="none" />

                  {/* The "Smart Sensor" Dot - Pulsing Effect */}
                  <circle cx="50" cy="70" r="4" fill="#8D42C6" className="animate-pulse">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* <circle cx="50" cy="70" r="15" stroke="#8D42C6" strokeWidth="0.5" opacity="0.8" className="animate-ping animation-delay-900" /> */}
                </svg>

                {/* 3. FLOATING FEATURE CARDS (UI Layer) */}
                <div className="absolute top-24 left-8 animate-float animation-delay-500 z-30">
                  <div className="bg-white/80 backdrop-blur-md border border-purple-200 pl-2.5 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                    <div className="bg-purple-50 p-1.5 rounded-full text-brand">
                      <Droplets className="w-3.5 h-3.5" />
                    </div>
                    {/* <span className="text-xs font-bold text-zinc-700">Waterproof</span> */}
                  </div>
                </div>

                <div className="absolute bottom-32 right-6 animate-float animation-delay-200 z-30">
                  <div className="bg-white/80 backdrop-blur-md border border-purple-200 pr-2.5 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                    <div className="bg-purple-50 p-1.5 rounded-full text-brand">
                      <Bluetooth className="w-3.5 h-3.5" />
                    </div>
                    {/* <span className="text-xs font-bold text-zinc-700">Smart Sync</span> */}
                  </div>
                </div>
              </div>

              {/* Decorative Blur behind everything */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-400/20 rounded-full blur-3xl -z-10" />

            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;