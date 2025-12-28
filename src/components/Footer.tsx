"use client";

import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/70 text-black pt-8 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand rounded-full blur-[128px]" />
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">

          {/* COL 1: Brand & Newsletter (Span 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-9 rounded-lg flex items-center justify-center">
                <img src="/assets/ShapeIQ.png" alt="Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-2xl text-black font-bold tracking-tight">ShapeIQ</span>
            </div>

            <p className="text-zinc-900 max-w-sm leading-relaxed">
              Reshaping orthopedics with 3D printing, smart sensors, and sustainable materials.
              Join the future of recovery.
            </p>

            {/* Newsletter Input */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mt-6">
              <input
                type="email"
                placeholder="enter your email"
                className="bg-white border border-purple-900 rounded-xl px-4 py-3 text-sm text-purple-900 placeholder:text-zinc-500 focus:outline-none focus:border-brand/50 transition-colors w-full"
              />
              <Button className="bg-brand text-white hover:bg-white hover:text-brand-dark border border-brand font-bold rounded-2xl">
                Subscribe
              </Button>
            </div>
          </div>

          {/* COL 2: Links (Span 2 cols) */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-700">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* COL 3: Links (Span 2 cols) */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-700">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COL 4: Socials (Span 3 cols) */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6">Social</h4>
            <div className="flex gap-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-purple-50 border border-white/10 flex items-center justify-center text-brand-dark hover:bg-white/90 hover:text-brand-dark hover:scale-110 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-brand flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-900 pb-32 md:pb-8">
          <p>© 2024 ShapeIQ. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* MASSIVE WATERMARK (Dribbble Trend) */}
        {/* This sits at the very bottom, partially cut off */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none flex justify-center opacity-[0.03]">
           <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter select-none whitespace-nowrap">
             SHAPEIQ
           </h1>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;