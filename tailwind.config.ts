import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Lead Generation Academy - Cyan/Turquoise + Dark theme
        primary: "#00D9FF", // Bright cyan
        "primary-light": "#33E5FF", // Lighter cyan
        "primary-dark": "#00A8CC", // Darker cyan
        cyan: "#00D9FF",
        "cyan-light": "#33E5FF",
        "cyan-dark": "#00A8CC",
        background: "#0A0A0A", // Near-black background
        foreground: "#FFFFFF", // White text
        "foreground-secondary": "#E8E8E8", // Light gray text
        "foreground-muted": "#999999", // Muted gray
        "foreground-on-cyan": "#000000", // Dark text on cyan
        card: "#1A1A1A", // Dark card background
        "card-secondary": "#252525", // Slightly lighter card
        border: "#333333", // Dark border
        input: "#252525", // Dark input background
        ring: "#00D9FF", // Cyan focus ring
        destructive: "#FF3333", // Red
        "destructive-foreground": "#FFFFFF",
        // Legacy color mappings for existing components
        ink: "#FFFFFF", // White
        "ink-2": "#E8E8E8", // Light gray
        accent: "#00D9FF", // Cyan
        "accent-2": "#33E5FF", // Light cyan
        slate: "#252525", // Dark slate
        paper: "#FFFFFF", // White (for light elements)
        onyx: "#0A0A0A", // Near-black
        stone: "#999999", // Gray
        bone: "#E8E8E8", // Light color
        fog: "#333333", // Dark gray
        stroke: "#333333", // Borders
        ivory: "#E8E8E8", // Light color
        cream: "#F5F5F5", // Off-white
        taupe: "#999999", // Gray
        terracotta: "#00D9FF", // Cyan (not terracotta)
        "ivory-hover": "#444444", // Hover state
        "ivory-soft": "#252525", // Soft background
        cocoa: "#1A1A1A", // Dark
        "cocoa-hover": "#252525", // Hover
        espresso: "#0A0A0A", // Very dark
        highlight: "hsl(40, 100%, 50%)" // #FFAA00
      },
      fontFamily: {
        sans: [
          "var(--font-montserrat)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        display: [
          "var(--font-montserrat)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 16px 38px hsl(220, 15%, 15%, 0.14)",
        lift: "0 24px 54px hsl(220, 15%, 15%, 0.2)"
      },
      borderRadius: {
        xl: "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
