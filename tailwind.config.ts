import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: [
        "0.625rem",
        {
          lineHeight: "1rem",
          letterSpacing: "-0.00625rem",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "1.125rem",
        },
      ],
      base: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.00625rem",
        },
      ],
      md: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.0125rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "-0.0125rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.0125rem",
        },
      ],
      "2xl": [
        "1.375rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01875rem",
        },
      ],
    },
    extend: {
      screens: {
        "2xl": "87.5rem",
        "3xl": "100rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
    },
    colors: {
      base: {
        "100": "rgb(var(--color-base-100) / <alpha-value>)",
        "200": "rgb(var(--color-base-200) / <alpha-value>)",
        "300": "rgb(var(--color-base-300) / <alpha-value>)",
        "400": "rgb(var(--color-base-400) / <alpha-value>)",
        "500": "rgb(var(--color-base-500) / <alpha-value>)",
        "600": "rgb(var(--color-base-600) / <alpha-value>)",
      },
      dark: {
        "100": "rgb(var(--color-dark-100) / <alpha-value>)",
        "200": "rgb(var(--color-dark-200) / <alpha-value>)",
        "300": "rgb(var(--color-dark-300) / <alpha-value>)",
        "400": "rgb(var(--color-dark-400) / <alpha-value>)",
        "500": "rgb(var(--color-dark-500) / <alpha-value>)",
        "600": "rgb(var(--color-dark-600) / <alpha-value>)",
      },
      primary: {
        "100": "rgb(var(--color-primary-100) / <alpha-value>)",
        "200": "rgb(var(--color-primary-200) / <alpha-value>)",
        "300": "rgb(var(--color-primary-300) / <alpha-value>)",
        "400": "rgb(var(--color-primary-400) / <alpha-value>)",
        "500": "rgb(var(--color-primary-500) / <alpha-value>)",
        "600": "rgb(var(--color-primary-600) / <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
