import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
      },
      boxShadow: {
        bs: "0px 0px 0px 1.92px #CCDEE6, 0px 0px 0px 0.92px #FFF, 0px 1.92px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px 0px 0px 1.92px rgba(255, 255, 255, 0.20) inset",
      },
    },
  },
  plugins: [],
};
export default config;
