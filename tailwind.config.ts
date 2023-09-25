import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#2d2f31",
        },
        purplegray: "#c0c4fc;",
        graywhite: "#e0e0e0",
        linkpurple: "#5624d0",
        darkfull: "#1c1d1f",
        gray: {
          100: "#f7f9fa",
          150: "#e4e8eb",
          200: "#d1d7dc",
          250: "#9da3a7",
          300: "#6a6f73",
          400: "#3e4143",
          500: "#2d2f31",
          550: "#1c1d1f",
          600: "#101112",
        },
        red: {
          100: "#fbece9",
          150: "#fbd5c4",
          200: "#fcbca0",
          250: "#ef8e70",
          300: "#f4522d",
          400: "#b32d0f",
          500: "#612012",
        },
        blue: {
          100: "#eeeffc",
          150: "#d8e0fb",
          200: "#c0c4fc",
          250: "#8072e6",
          300: "#5624d0",
          400: "#371783",
          500: "#180a3d",
        },

        orange: {
          100: "#fcf5e8",
          150: "#f7dfba",
          200: "#f3ca8c",
          250: "#ebb152",
          300: "#f69c08",
          400: "#b4690e",
          500: "#4d3105",
        },
        yellow: {
          100: "#f9f9d7",
          150: "#f3f2b8",
          200: "#eceb98",
          250: "#eeec5d",
          300: "#e9e729",
          400: "#98961b",
          500: "#3d3c0a",
        },
        green: {
          100: "#f2f7f6",
          150: "#cfe4e1",
          200: "#acd2cc",
          250: "#6cb1a5",
          300: "#19a38c",
          400: "#1e6055",
          500: "#113731",
        },
        purple: {
          100: "#f6eefc",
          150: "#ebd3fc",
          200: "#e1b8fc",
          250: "#c377f6",
          300: "#a435f0",
          400: "#7325a3",
          500: "#350c50",
        },
        white: "#fff",
      },
      borderWidth: {
        "1": "1px",
      },
      screens: {
        sm: "640px", // Pequeño
        md: "768px", // Mediano
        lg: "1080px", // Grande
        xl: "1280px", // Extra grande
        "2xl": "1536px", // Doble extra grande
      },
      fontSize: {
        xs: ".75rem", // Tamaño de fuente extra pequeño
        sm: ".875rem", // Tamaño de fuente pequeño
        base: "1rem", // Tamaño de fuente por defecto
        lg: "1.125rem", // Tamaño de fuente grande
        xl: "1.25rem", // Tamaño de fuente extra grande
        "2xl": "1.5rem", // Tamaño de fuente 2x extra grande
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
