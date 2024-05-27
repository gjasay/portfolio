/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'title-red': '#D0473B',
        'custom-red': '#8D3E37',
      },
    },
  },
  plugins: [require("daisyui")],
  variants: {},
};