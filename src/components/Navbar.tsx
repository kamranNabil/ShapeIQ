"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = ["Problem", "Solution", "Features", "Market"];

  return (
    // 1. Fixed Container using 'inset-x-4' to prevent horizontal overflow
    <div className="fixed top-4 inset-x-4 z-50 flex justify-center">
      
      {/* 2. The Floating Island */}
      <nav 
        className={`
          w-full max-w-5xl 
          bg-white/10 backdrop-blur-xl 
          border border-purple-400 
          rounded-2xl 
          shadow-lg shadow-purple-300
          transition-all duration-300
          overflow-hidden
          ${isMobileMenuOpen ? "bg-white ring-1 ring-purple-100" : ""} 
        `}
      >
        {/* Main Bar Content */}
        <div className="px-4 md:px-6 h-[4.5rem] flex items-center justify-between">
          
          {/* LEFT: Logo Section */}
          <div className="flex flex-col items-start select-none cursor-pointer group">
            <div className="flex items-center gap-2">
              <img
                src="/assets/ShapeIQ.png"
                alt="ShapeIQ Logo"
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-lg font-bold text-black tracking-tight group-hover:text-brand transition-colors">
                ShapeIQ
              </span>
            </div>
            {/* Tagline: Visible on all screens, but scales down on mobile */}
            <span className="text-[0.7rem] md:text-[0.65rem] font-bold tracking-[0.2em] text-zinc-500 uppercase mt-0.5 pl-1 group-hover:text-black transition-colors">
              Intelligent Design
            </span>
          </div>

          {/* CENTER: Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  px-4 py-2 text-sm font-medium text-zinc-600 
                  hover:text-brand hover:bg-purple-100 
                  rounded-xl transition-all duration-200
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop CTA */}
            <Button 
              className="
                hidden md:inline-flex
                bg-brand text-white hover:bg-white 
                hover:text-brand-dark rounded-2xl font-bold 
                shadow-[0_4px_14px_0_rgba(141,66,198,0.39)]
                transition-all hover:shadow-[0_6px_20px_rgba(141,66,198,0.23)]
                hover:-translate-y-0.5
              "
              size="sm"
            >
              Get Started
            </Button>
            
            {/* Mobile/Tablet Menu Toggle Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-zinc-700 hover:text-brand hover:bg-purple-50 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-brand" /> 
              ) : (
                <Menu className="h-6 w-6" /> 
              )}
            </button>
          </div>
        </div>

        {/* 3. Mobile Dropdown Menu */}
        <div 
          className={`
            md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-[80vh] border-t border-purple-100" : "max-h-0"}
          `}
        >
          <div className="p-4 space-y-4 bg-white">
            {/* Links Stack */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    block px-4 py-3 text-sm font-medium text-zinc-600 
                    hover:text-brand hover:bg-purple-50 
                    rounded-lg transition-colors
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile CTA (Full Width) */}
            <Button 
              className="
                w-full
                bg-brand hover:bg-brand-dark 
                text-white rounded-2xl font-semibold 
                shadow-lg shadow-purple-500/20
              "
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;