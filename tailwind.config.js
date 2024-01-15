/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 12px rgba(255,255,255,0.5)',
      }
    },
  },
  plugins: [],
}

