import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0969DA",
          foreground: "#ffffff",
          light: "#54AEFF",
        },
        success: "#1A7F37",
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f6f8fa",
          dark: "#212121",
          "dark-muted": "#2a2a2a",
          "dark-elevated": "#333333",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "IBM Plex Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "IBM Plex Serif",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        display: [
          "var(--font-serif)",
          "IBM Plex Serif",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "IBM Plex Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 40% 20%, rgba(9,105,218,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(84,174,255,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(9,105,218,0.05) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(9,105,218,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(84,174,255,0.06) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(9,105,218,0.08) 0px, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(9,105,218,0.12) 0%, rgba(84,174,255,0.04) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
