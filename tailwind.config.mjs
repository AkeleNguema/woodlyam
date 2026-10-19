/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cad: {
          dark: "#0F1115",
          charcoal: "#16191E",
          surface: "#1E2229",
          border: "#2A303A",
          grid: "rgba(255, 255, 255, 0.05)",
        },
        studio: {
          bg: "#FAFAFA",
          card: "#FFFFFF",
          muted: "#F4F5F6",
          border: "#E5E7EB",
          dark: "#111827",
        },
        amber: {
          accent: "#D97706",
          light: "#F59E0B",
          glow: "rgba(245, 158, 11, 0.15)",
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;