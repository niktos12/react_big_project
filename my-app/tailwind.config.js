/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'swiperShadow': '38.817px 11.763px 58.813px 0px rgba(199, 199, 199, 0.60);'
      }
    },
  },
  plugins: [],
}

