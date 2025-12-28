"use client";

import { Building2, Laptop, Stethoscope, ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const markets = [
  {
    icon: Building2,
    title: "Government Hospitals",
    description: "Large-scale adoption opportunities with cost-effective, sustainable solutions for public healthcare systems.",
    stats: "500+ potential facilities",
    trend: "High Volume",
  },
  {
    icon: Laptop,
    title: "Telemedicine Networks",
    description: "Seamless integration with remote healthcare platforms for distributed monitoring and diagnostics.",
    stats: "Growing 25% annually",
    trend: "Rapid Growth",
  },
  {
    icon: Stethoscope,
    title: "Private Clinics",
    description: "Premium orthopedic care providers looking to differentiate with cutting-edge, eco-friendly technology.",
    stats: "High-value segment",
    trend: "Premium",
  },
];

const stats = [
  { label: "Reduced Infection Risk", value: "60%", trend: "down" },
  { label: "Cost Savings", value: "35%", trend: "down" },
  { label: "Patient Satisfaction", value: "92%", trend: "up" },
  { label: "Carbon Footprint", value: "70%", trend: "down" },
];

const MarketSection = () => {
  return (
    <section id="market" className="py-8 relative overflow-hidden bg-secondary/70">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8D42C605_1px,transparent_1px),linear-gradient(to_bottom,#8D42C605_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            Market Fit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Built for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark"> Modern Healthcare</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            EcoCast serves the full spectrum of healthcare providers, from large government networks 
            to specialized clinics seeking innovation.
          </p>
        </div>

        {/* MARKET CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {markets.map((market, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-[2rem] overflow-hidden transition-all duration-500",
                "bg-white/60 backdrop-blur-xl border border-purple-300 shadow-glass", // Glass effect
                "hover:-translate-y-2 hover:bg-white hover:border-brand/20 hover:shadow-xl"
              )}
            >
              {/* Background Watermark Icon (Visual Depth) */}
              <market.icon className="absolute -bottom-8 -right-8 w-40 h-40 text-brand/5 rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-brand-light border border-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <market.icon className="w-7 h-7 text-brand" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                  {market.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                  {market.description}
                </p>
                
                {/* Bottom Stats Line */}
                <div className="mt-auto pt-6 border-t border-brand/10 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">
                    {market.stats}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/5 px-2 py-1 rounded-md">
                    {market.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VALUE PROPS STRIP (Dashboard Style) */}
        <div className="rounded-[2.5rem] bg-white border border-purple-100 shadow-2xl shadow-purple-900/5 p-8 md:p-12">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-brand tracking-tighter">
                    {item.value}
                  </span>
                  {item.trend === "down" ? (
                    <ArrowDown className="w-5 h-5 text-emerald-500" />
                  ) : (
                     <ArrowUp className="w-5 h-5 text-brand" />
                  )}
                </div>
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default MarketSection;