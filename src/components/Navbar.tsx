import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://acumen-1045798860135.us-central1.run.app/assets/ShapeIQ.jpg"
            alt="ShapeIQ Logo"
            className="h-10 w-auto rounded-xl object-contain rounded-2xl"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">Market</a>
        </div>

        <Button variant="hero-outline" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
