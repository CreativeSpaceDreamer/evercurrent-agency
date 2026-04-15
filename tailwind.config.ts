import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Lead Generation Academy inspired - Cyan accent with clean light background
        primary: "#00D9FF", // Bright cyan
        "primary-light": "#33E5FF", // Lighter cyan
        "primary-dark": "#00A8CC", // Darker cyan
        cyan: "#00D9FF",
        "cyan-light": "#33E5FF",
        "cyan-dark": "#00A8CC",
        background: "#FFFFFF", // White background
        foreground: "#0A0A0A", // Near-black text
        "foreground-secondary": "#333333", // Dark gray text
        "foreground-muted": "#999999", // Muted gray
        "foreground-on-cyan": "#000000", // Dark text on cyan
        card: "#FFFFFF", // White card background
        "card-secondary": "#F5F5F5", // Light gray card
        border: "#CCCCCC", // Light border
        input: "#F5F5F5", // Light input background
        ring: "#00D9FF", // Cyan focus ring
        destructive: "#FF3333", // Red
        "destructive-foreground": "#FFFFFF",
        // Legacy color mappings for existing components
        ink: "#0A0A0A", // Near-black
        "ink-2": "#333333", // Dark gray
        accent: "#00D9FF", // Cyan
        "accent-2": "#33E5FF", // Light cyan
        slate: "#F5F5F5", // Light background
        paper: "#FFFFFF", // White
        onyx: "#0A0A0A", // Near-black
        stone: "#999999", // Gray
        bone: "#F5F5F5", // Light background
        fog: "#CCCCCC", // Light gray
        stroke: "#CCCCCC", // Light borders
        ivory: "#F5F5F5", // Light background
        cream: "#F5F5F5", // Light background
        taupe: "#999999", // Gray
        terracotta: "#00D9FF", // Cyan (accent)
        "ivory-hover": "#E8E8E8", // Hover state
        "ivory-soft": "#F5F5F5", // Soft background
        cocoa: "#0A0A0A", // Near-black
        "cocoa-hover": "#333333", // Hover
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
