import { AlertCircle, Trash2, Frown, WifiOff } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Millions of Fractures",
    description: "Over 6 million fractures occur annually, each requiring cast treatment with limited innovation.",
  },
  {
    icon: Trash2,
    title: "Non-Recyclable Waste",
    description: "Traditional plaster and fiberglass casts create tons of non-biodegradable medical waste yearly.",
  },
  {
    icon: Frown,
    title: "Uncomfortable & Bulky",
    description: "Conventional casts are heavy, itchy, non-breathable, and cannot get wet—affecting quality of life.",
  },
  {
    icon: WifiOff,
    title: "No Digital Monitoring",
    description: "Zero real-time insights into healing progress, leading to unnecessary clinic visits and complications.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Traditional Casts Are
            <span className="text-gradient"> Outdated</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The orthopedic industry has remained stagnant for decades, failing to address 
            sustainability, comfort, and modern healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
