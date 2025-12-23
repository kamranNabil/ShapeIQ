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
      colors: {
        // --- CORE BRAND COLORS ---
        brand: {
          DEFAULT: "#8D42C6", // Royal/Electric Purple
          light: "#F3E6FA", // Light tint for backgrounds
          dark: "#5B2A82", // Darker shade for hover states
        },

        // --- SEMANTIC UI COLORS ---
        border: "#8D42C6", // Royal Purple borders (as requested)
        input: "#8D42C6", // Royal Purple input outlines
        ring: "#8D42C6", // Royal Purple focus rings

        background: "#FFFFFF", // Pure White
        foreground: "#000000", // Pure Black (High Contrast)

        primary: {
          DEFAULT: "#8D42C6", // Royal Purple
          foreground: "#FFFFFF", // White text on purple buttons
        },
        secondary: {
          DEFAULT: "#F3E6FA", // A light lavender tint matching your new purple
          foreground: "#000000", // Black text on light purple
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F3E6FA", // Light lavender background for muted areas
          foreground: "#8D42C6", // Purple text for labels/subtitles
        },
        accent: {
          DEFAULT: "#F3E6FA", // Light lavender hover effect
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#FFFFFF", // White popups
          foreground: "#000000", // Black text
        },
        card: {
          DEFAULT: "#FFFFFF", // White cards
          foreground: "#000000", // Black text
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
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }, // Moves up 20px
        },
        // shimmer: {
        //   "0%": { transform: "translateX(-150%) skewX(-15deg)" },
        //   "100%": { transform: "translateX(150%) skewX(-15deg)" },
        // },
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
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        // shimmer: "shimmer 2.5s infinite",
        "materialize": "materialize 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
