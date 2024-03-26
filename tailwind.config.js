/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['responsive', 'hover', 'focus', 'group-hover'], // enable group-hover
  },
  plugins: [],
}

