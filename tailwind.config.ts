import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          gold: "#D4AF37",
          rose: "#F4C2C2",
          blush: "#DCAE96",
          ink: "#17110f",
          pearl: "#fff8f4"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(212, 175, 55, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
