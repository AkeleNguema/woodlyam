/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "surface": "#fcf9f8",
          "on-surface": "#1b1c1c",
          "primary": "#8b5000",
          "primary-container": "#ff9800",
          "on-primary-container": "#653900",
          "surface-container-low": "#f6f3f2",
          "surface-container-lowest": "#ffffff",
          "outline-variant": "#dbc2ad",
        },
        fontFamily: {
          headline: ["var(--font-headline)"],
          body: ["var(--font-body)"],
        },
      },
    },
    plugins: [],
  };