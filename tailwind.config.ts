import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#07111c",
        ink: "#ebf2f8",
        muted: "#8aa1b5",
        border: "#183042",
        brand: {
          DEFAULT: "#26c2ad",
          dark: "#1da48f",
          light: "#10352f"
        },
        accent: "#0d1a29",
        success: "#2bd3a6",
        warning: "#f59e0b",
        card: "#0b1623"
      },
      boxShadow: {
        card: "0 20px 60px -36px rgba(2, 10, 20, 0.9)",
        panel: "0 34px 80px -48px rgba(2, 10, 20, 0.96)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
