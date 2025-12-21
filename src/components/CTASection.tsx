import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Transform Orthopedic Care?
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-8 max-w-xl mx-auto">
            Join the circular healthcare revolution. Partner with EcoCast to deliver sustainable, 
            smart, and patient-centered fracture treatment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Action: White Button with Purple Text */}
            <Button 
              size="lg"
              variant="hero-outline"
              className="bg-background text-primary hover:bg-background/90 shadow-lg font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>

            <Button 
              size="lg" 
              variant="hero-outline" 
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground bg-transparent"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-secondary/10-foreground/70">
            Trusted by leading healthcare institutions worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;