import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "#8E42C6",        // Purple borders
        input: "#8E42C6",         // Purple input fields
        ring: "#8E42C6",          // Purple focus rings
        background: "#FFFFFF",    // White background
        foreground: "#8E42C6",    // Purple main text
        
        primary: {
          DEFAULT: "#8E42C6",     // Purple primary buttons
          foreground: "#FFFFFF",  // White text on buttons
        },
        secondary: {
          DEFAULT: "#F4EBF9",     // Light purple for secondary actions
          foreground: "#8E42C6",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Keep standard error red
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F4EBF9",     // Light purple background for muted areas
          foreground: "#8E42C6",
        },
        accent: {
          DEFAULT: "#F4EBF9",     // Light purple hover effect
          foreground: "#8E42C6",
        },
        popover: {
          DEFAULT: "#FFFFFF",     // White popups
          foreground: "#8E42C6",
        },
        card: {
          DEFAULT: "#FFFFFF",     // White cards
          foreground: "#8E42C6",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config