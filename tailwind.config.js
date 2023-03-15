/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Roboto Mono', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'sans': ['Playfair Display', 'sans-serif'],
    },
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000F08",
        "orange": "#FEE9D8",
        "red": "#D80032",
        "grey": "#EDF2F4",
        "deepgrey": "#8D99AE"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}