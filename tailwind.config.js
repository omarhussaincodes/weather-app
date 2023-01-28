/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-primary": "#334155",
        "default": "#1e293b"
      }
    },
  },
  plugins: [],
}
