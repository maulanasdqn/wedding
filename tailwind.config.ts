import type { Config } from "tailwindcss";
import { colors } from "./src/styles/color";
import { fontFamily } from "./src/styles/font";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors,
    extend: {
      fontFamily,
    },
  },
  plugins: [],
};
export default config;
