/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf3e1",
          100: "#fbe1b3",
          DEFAULT: "#f8cd82",
          200: "#f8cd82",
          300: "#f6b950",
          400: "#f5aa2b",
          500: "#f49c0b",
          600: "#f09007",
          accent: "#ea8103",
          700: "#ea8103",
          800: "#e47200",
          900: "#db5a00",
        },
        error: "#cf6679",
        surface: "#121212"
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
