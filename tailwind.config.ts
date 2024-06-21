import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        "2xl": "87.5rem",
        "3xl": "100rem",
      },
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
  plugins: [],
} satisfies Config;
