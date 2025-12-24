import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ... (keep existing colors, border radius etc)
      colors: {
        brand: {
          DEFAULT: "#8D42C6",
          light: "#F3E6FA",
          dark: "#5B2A82",
        },
        border: "#8D42C6",
        input: "#8D42C6",
        ring: "#8D42C6",
        background: "#FFFFFF",
        foreground: "#000000",
        primary: {
          DEFAULT: "#8D42C6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F3E6FA",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F3E6FA",
          foreground: "#8D42C6",
        },
        accent: {
          DEFAULT: "#F3E6FA",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        
        // EXISTING (Keep this for the Hero Image)
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }, 
        },

        // NEW: Subtle float for Icons (Only 5px movement)
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }, 
        },

        materialize: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9) translateY(20px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
            filter: "blur(0)",
          },
        },
        "pop-in-top": {
          "0%": { opacity: "0", transform: "translateY(-100px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "pop-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(100px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "pop-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "pop-in-right": {
          "0%": { opacity: "0", transform: "translateX(100px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        
        // NEW UTILITY
        "float-subtle": "float-subtle 3s ease-in-out infinite",

        "materialize": "materialize 1s ease-out forwards",
        "pop-in-top": "pop-in-top 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pop-in-left": "pop-in-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pop-in-right": "pop-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pop-in-bottom": "pop-in-bottom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;