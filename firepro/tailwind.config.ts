import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fire-red": "#dc2626",
        "fire-orange": "#ea580c",
        "fire-yellow": "#f59e0b",
        "navy": "#1e3a5f",
        "navy-dark": "#0f2744",
      },
    },
  },
  plugins: [],
};

export default config;
