/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // ← ESTA LINHA É ESSENCIAL!
  theme: {
    extend: {},
  },
  plugins: [],
}