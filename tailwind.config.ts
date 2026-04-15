import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Lead Generation Academy
        primary: "hsl(40, 100%, 50%)", // #FFAA00 - Bright gold/orange
        "primary-light": "hsl(40, 100%, 60%)", // #FFBF40 - Lighter gold
        "primary-dark": "hsl(40, 100%, 40%)", // #CC8800 - Darker gold
        gold: "hsl(40, 100%, 50%)", // #FFAA00 - Same as primary
        "gold-light": "hsl(40, 100%, 60%)", // #FFBF40
        "gold-dark": "hsl(40, 100%, 40%)", // #CC8800
        background: "hsl(0, 0%, 100%)", // #FFFFFF - Pure white
        foreground: "hsl(220, 15%, 15%)", // #2A2E33 - Dark gray text
        "foreground-secondary": "hsl(220, 15%, 15%)", // #2A2E33
        "foreground-muted": "hsl(220, 10%, 45%)", // #6B7280 - Muted gray
        "foreground-on-gold": "hsl(220, 15%, 10%)", // #1F2328 - Dark text on gold
        card: "hsl(0, 0%, 100%)", // #FFFFFF
        "card-secondary": "hsl(220, 10%, 96%)", // #F5F5F7 - Light gray
        border: "hsl(220, 15%, 90%)", // #E2E5E9 - Light border
        input: "hsl(220, 15%, 90%)", // #E2E5E9
        ring: "hsl(40, 100%, 50%)", // #FFAA00 - Gold focus ring
        destructive: "hsl(0, 84.2%, 60.2%)", // #EF4444 - Error red
        "destructive-foreground": "hsl(210, 40%, 98%)", // #FAFAFA
        // Legacy color mappings for existing components
        ink: "hsl(220, 15%, 15%)", // #2A2E33
        "ink-2": "hsl(220, 10%, 45%)", // #6B7280
        accent: "hsl(40, 100%, 50%)", // #FFAA00
        "accent-2": "hsl(40, 100%, 60%)", // #FFBF40
        slate: "hsl(220, 10%, 96%)", // #F5F5F7
        paper: "hsl(0, 0%, 100%)", // #FFFFFF
        onyx: "hsl(220, 15%, 15%)", // #2A2E33
        stone: "hsl(220, 10%, 45%)", // #6B7280
        bone: "hsl(220, 10%, 96%)", // #F5F5F7
        fog: "hsl(220, 15%, 90%)", // #E2E5E9
        stroke: "hsl(220, 15%, 90%)", // #E2E5E9
        ivory: "hsl(220, 10%, 96%)", // #F5F5F7
        cream: "hsl(220, 10%, 96%)", // #F5F5F7
        taupe: "hsl(220, 10%, 45%)", // #6B7280
        terracotta: "hsl(40, 100%, 50%)", // #FFAA00
        "ivory-hover": "hsl(220, 15%, 90%)", // #E2E5E9
        "ivory-soft": "hsl(220, 10%, 96%)", // #F5F5F7
        cocoa: "hsl(220, 15%, 15%)", // #2A2E33
        "cocoa-hover": "hsl(220, 15%, 10%)", // #1F2328
        espresso: "hsl(220, 15%, 10%)", // #1F2328
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
