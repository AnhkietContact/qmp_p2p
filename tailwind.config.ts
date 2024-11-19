import type { Config } from "tailwindcss";
import defaultConfig from "tailwindcss/defaultConfig";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import tailwindcssTextshadow from "tailwindcss-textshadow";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5C00",
      },
      backgroundImage: {
        "bgImage-Footer": 'url("/image/svg/bg-footer.svg")',
        "bgImage-Game": 'url("/image/svg/Game.svg")',
        "bgImage-Sea": 'url("/image/svg/Bg-Sea.svg")',
        "gradient-right": "linear-gradient(-90deg, #FEFA40 0%, #FF5C00 100%)",
        "gradient-top": "linear-gradient(180deg, #FF7A00 0%, #994900 100%)",
      },
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        "Shadow-Purple": "0 4px 20px rgba(255, 86, 246, 0.6)",
        "Shadow-White": "0 4px 6px rgba(255, 255, 255, 0.5)",
        "text-shadow": "0 4px 6px rgba(255, 255, 255, 0.5)",
        red: "0 4px 6px rgba(255, 0, 0, 0.5)",
        Purple: "#36011D",
      },
      container: {
        ...defaultConfig?.theme?.container,
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "2rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1100px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out",
        "fade-in-haftRight2":
          "fade-in-haftRight2 5s ease-in-out infinite alternate",
        "fade-in-haftRightReimagined":
          "fade-in-haftRightReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftBottomtReimagined":
          "fade-in-haftBottomtReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftLeftReimagined":
          "fade-in-haftLeftReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftLeftBottomReimagined":
          "fade-in-haftLeftBottomReimagined 30s ease-in-out infinite alternate",
        "fade-in-RightLeftReimagined":
          "fade-in-RightLeftReimagined 30s linear infinite alternate",
        "spin-clockwise": "spin-clockwise 50s linear infinite",
        "spin-counterclockwise": "spin-counterclockwise 50s linear infinite",
        "ping-delay": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 20s",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
          "75%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        "fade-in-haftLeftReimagined": {
          "0%": {
            top: "9%",
            left: "12%",
          },
          "33%": {
            top: "22%",
            left: "5%",
          },
          "66%": {
            top: "11%",
            left: "9%",
          },
          "100%": {
            left: "25%",
            top: "8%",
          },
        },
        "fade-in-haftLeftBottomReimagined": {
          "0%": {
            bottom: "9%",
            left: "12%",
          },
          "33%": {
            bottom: "22%",
            left: "5%",
          },
          "66%": {
            bottom: "11%",
            left: "9%",
          },
          "100%": {
            left: "25%",
            bottom: "8%",
          },
        },
        "fade-in-haftRightReimagined": {
          "0%": {
            top: "9%",
            right: "12%",
          },
          "33%": {
            right: "22%",
            top: "5%",
          },
          "66%": {
            top: "11%",
            right: "9%",
          },
          "100%": {
            right: "25%",
            top: "8%",
          },
        },
        "fade-in-haftBottomtReimagined": {
          "0%": {
            bottom: "3%",
            right: "33%",
          },
          "33%": {
            bottom: "10%",
            right: "5%",
          },
          "66%": {
            bottom: "4%",
            right: "35%",
          },
          "100%": {
            bottom: "12%",
            right: "7%",
          },
        },
        floating: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
