const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      white: colors.white,
      blue: colors.sky
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
