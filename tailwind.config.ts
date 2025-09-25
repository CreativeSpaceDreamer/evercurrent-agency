import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",
        "ink-2": "#1B2B44",
        accent: "#12B5C9",
        "accent-2": "#0FA3B1",
        slate: "#EEF2F6",
        paper: "#FFFFFF",
        onyx: "#111827"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 26, 43, 0.08)",
        lift: "0 30px 60px rgba(15, 26, 43, 0.12)"
      },
      borderRadius: {
        xl: "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;