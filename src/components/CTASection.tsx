"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/70 relative overflow-hidden">
      
      {/* 1. FLOATING CONTAINER */}
      {/* Matches the heavy rounding (rounded-[2.5rem]) seen in your other screenshots */}
      <div className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden bg-white border border-brand/10 shadow-[0_20px_80px_-20px_rgba(141,66,198,0.3)]">
        
        {/* --- BACKGROUND EFFECTS --- */}
        
        {/* A. Animated Aurora Gradients (Using your brand color #8D42C6) */}
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] opacity-60 animate-pulse" />
        {/* Bottom Right Contrast Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[80px]" />
        
        {/* B. Noise Texture Overlay (Adds that premium "paper" feel) */}
        <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* --- CONTENT --- */}
        <div className="relative z-10 py-20 px-6 md:px-20 text-center">
          
          {/* Floating Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-white shadow-xl shadow-brand/10 rotate-6 border border-brand/5">
             <Sparkles className="w-8 h-8 text-brand fill-brand/20" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Reshape the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              Future of Recovery.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            The world's first smart, breathable, and recyclable cast is ready for your facility. 
            Join the circular healthcare revolution today.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Primary: Uses your custom 'hero' variant */}
            <Button 
              size="lg"
              variant="hero" 
              className="h-14 px-10 text-base shadow-brand/25"
            >
              <Mail className="w-4 h-4 mr-2" />
              Partner with ShapeIQ
            </Button>

            {/* Secondary: Uses your 'outline' variant but customized for this section */}
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-10 border-slate-200 text-slate-600 hover:text-brand hover:border-brand/30 hover:bg-brand/5"
            >
              Request Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Trust Badge / Footer Text */}
          <p className="mt-12 text-sm font-medium text-slate-400 uppercase tracking-widest">
            Trusted by leading healthcare institutions worldwide
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTASection;