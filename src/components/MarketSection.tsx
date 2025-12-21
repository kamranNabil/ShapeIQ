import { Building2, Laptop, Stethoscope } from "lucide-react";

const markets = [
  {
    icon: Building2,
    title: "Government Hospitals",
    description: "Large-scale adoption opportunities with cost-effective, sustainable solutions for public healthcare systems.",
    stats: "500+ potential facilities",
  },
  {
    icon: Laptop,
    title: "Telemedicine Networks",
    description: "Seamless integration with remote healthcare platforms for distributed monitoring and diagnostics.",
    stats: "Growing 25% annually",
  },
  {
    icon: Stethoscope,
    title: "Private Clinics",
    description: "Premium orthopedic care providers looking to differentiate with cutting-edge, eco-friendly technology.",
    stats: "High-value segment",
  },
];

const MarketSection = () => {
  return (
    <section id="market" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Market Fit</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Built for
            <span className="text-gradient"> Modern Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            EcoCast serves the full spectrum of healthcare providers, from large government networks 
            to specialized clinics seeking innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 shadow-soft">
                  <market.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{market.title}</h3>
                <p className="text-muted-foreground mb-4">{market.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary">{market.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value props */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Reduced Infection Risk", value: "↓ 60%" },
            { label: "Cost Savings", value: "↓ 35%" },
            { label: "Patient Satisfaction", value: "↑ 92%" },
            { label: "Carbon Footprint", value: "↓ 70%" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-muted/50 border border-border/50">
              <p className="text-3xl font-bold text-gradient mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
