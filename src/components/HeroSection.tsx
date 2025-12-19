import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, Recycle, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium animate-slide-up">
              <Recycle className="w-4 h-4" />
              Sustainable Healthcare Innovation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up animation-delay-200">
              Smart Orthopedic
              <span className="text-gradient"> Solutions</span>
              <br />
              for a Greener Future
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg animate-slide-up animation-delay-400">
              EcoCast revolutionizes fracture care with 3D-printed, sensor-enabled casts made from recycled PETG. 
              Custom-fit comfort meets real-time health monitoring.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
              <Button variant="hero" size="lg">
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-slide-up animation-delay-800">
              <div>
                <p className="text-3xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">Less Medical Waste</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Real-time Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-muted-foreground">More Comfortable</p>
              </div>
            </div>
          </div>

          {/* Right - 3D Cast Illustration */}
          <div className="relative flex items-center justify-center animate-fade-in animation-delay-400">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Main cast visual */}
              <div className="relative w-full h-full rounded-3xl bg-card shadow-card border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                
                {/* Cast mesh pattern */}
                <svg className="w-48 h-64 text-primary animate-float" viewBox="0 0 100 140" fill="none">
                  <defs>
                    <linearGradient id="castGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  {/* Honeycomb pattern representing the 3D printed cast */}
                  <path d="M30 10 L50 0 L70 10 L70 30 L50 40 L30 30 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M30 50 L50 40 L70 50 L70 70 L50 80 L30 70 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M30 90 L50 80 L70 90 L70 110 L50 120 L30 110 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M10 30 L30 20 L50 30 L50 50 L30 60 L10 50 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M50 30 L70 20 L90 30 L90 50 L70 60 L50 50 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M10 70 L30 60 L50 70 L50 90 L30 100 L10 90 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <path d="M50 70 L70 60 L90 70 L90 90 L70 100 L50 90 Z" stroke="url(#castGradient)" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="70" r="4" fill="currentColor" opacity="0.6" />
                </svg>

                {/* Floating feature badges */}
                <div className="absolute top-6 right-6 p-3 rounded-xl bg-card shadow-soft border border-border/50 animate-float animation-delay-200">
                  <Bluetooth className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute bottom-6 left-6 p-3 rounded-xl bg-card shadow-soft border border-border/50 animate-float animation-delay-600">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <div className="absolute bottom-20 right-6 p-3 rounded-xl bg-card shadow-soft border border-border/50 animate-float animation-delay-400">
                  <Recycle className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
