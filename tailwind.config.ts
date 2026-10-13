import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

const { fontFamily } = defaultTheme;

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: { 500: "#24AE7C", 600: "#0D2A1F" },
        red: { 500: "#F37877", 600: "#3E1716", 700: "#F24E43" },

        page: "rgb(var(--page) / <alpha-value>)", // dark-300
        deep: "rgb(var(--deep) / <alpha-value>)", // dark-200
        card: "rgb(var(--card) / <alpha-value>)", // dark-400
        line: "rgb(var(--line) / <alpha-value>)", // dark-500
        faint: "rgb(var(--faint) / <alpha-value>)", // dark-600
        soft: "rgb(var(--soft) / <alpha-value>)", // dark-700
        main: "rgb(var(--main) / <alpha-value>)", // light-200
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
