import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
      
      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Orthopedic Care?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Join the circular healthcare revolution. Partner with EcoCast to deliver sustainable, 
            smart, and patient-centered fracture treatment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Action: White Button with Purple Text */}
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 shadow-lg font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>

            {/* Secondary Action: Transparent Button with White Border/Text */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            Trusted by leading healthcare institutions worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;