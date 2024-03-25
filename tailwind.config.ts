import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    colors: {
      green: {
        100: "#30af5b",
        200: "#29984f",
      },
      gray: {
        100: "#ebebeb",
        200: "#e5e7eb",
        300: "#a2a2a2",
        400: "#7b7b7b",
        500: "#585858",
        600: "#292d27",
        700: "#292c27",
        800: "#1d1f1c",
      },
      white: "#ffffff",
      dark: "#000000",
      blue: "#021639",
      pale: "#fec601",
    },
    fontSize: {
      sm: ["0.875rem", "1.25rem"],
      md: ["0.9375rem", "1.375rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.875rem"],
      "2xl": ["1.75rem", "2rem"],
      "3xl": ["2rem", "2.375rem"],
      "4xl": ["2.5rem", "1.2"],
      "5xl": ["3rem", "1.2"],
      "6xl": ["3.25rem", "1.2"],
      "7xl": ["4rem", "1.2"],
      "8xl": ["5.5rem", "1.2"],
    },
    extend: {
      borderRadius: { "40x": "40px" },
      screens: { "2xl": "1400px" },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
