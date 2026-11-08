import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#111310",
          surface: "#181B16",
          subtle: "#1F231D",
        },
        border: {
          DEFAULT: "#282D24",
          subtle: "#1E231B",
          highlight: "#3A4234",
        },
        fg: {
          DEFAULT: "#E5E9DF",
          muted: "#A5AF9D",
          dim: "#6B7563",
        },
        accent: {
          DEFAULT: "#B6CF83",
          hover: "#C8DF98",
          subtle: "rgba(182, 207, 131, 0.12)",
        },
      },
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "Geist Mono",
          "IBM Plex Mono",
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "72ch",
        container: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
