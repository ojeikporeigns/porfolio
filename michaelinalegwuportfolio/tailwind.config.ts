import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#2563EB",
        accent: "#06B6D4",
        highlight: "#38BDF8",
        base: "#020617",
        card: "#111827",
        ink: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.9rem, 0.85rem + 0.25vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)",
        "fluid-lg": "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        "fluid-xl": "clamp(1.6rem, 1.3rem + 1.5vw, 2.25rem)",
        "fluid-2xl": "clamp(2.2rem, 1.6rem + 3vw, 3.5rem)",
        "fluid-3xl": "clamp(3rem, 2rem + 5vw, 6rem)",
        "fluid-4xl": "clamp(3.5rem, 2rem + 8vw, 9rem)",
      },
      maxWidth: {
        content: "80rem",
        prose: "42rem",
      },
      spacing: {
        section: "clamp(5rem, 3rem + 8vw, 10rem)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(56, 189, 248, 0.5)",
        "glow-lg": "0 0 80px -20px rgba(37, 99, 235, 0.55)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.8)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -4%) scale(1.1)" },
          "66%": { transform: "translate(-4%, 4%) scale(0.95)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        aurora: "aurora-shift 18s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
