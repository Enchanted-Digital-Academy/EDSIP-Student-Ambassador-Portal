/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          "orange-hover": "#EA6C0A",
          "orange-light": "#FFF7ED",
          "orange-mid": "#FDBA74",
          black: "#0A0A0A",
          "black-card": "#1A1A1A",
          brown: "#1C0A00",
          "brown-mid": "#7C3A00",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};