import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
            src="https://acumen-1045798860135.us-central1.run.app/assets/ShapeIQ.jpg"
            alt="ShapeIQ Logo"
            className="h-10 w-auto rounded-xl object-contain rounded-2xl"
          />
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 ShapeIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
