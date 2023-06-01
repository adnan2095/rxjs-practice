/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg'
      },
      colors: {
        'red': '#FF6946',
        'yellow': '#FFCB46',
        'blue': '#3EA1CB',
      }
    },
  },
  plugins: [],
}