/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary ': "#FFCBA5",
        'secondary':'#FFE3C6',
        'light' : '#FFFAF0',
      }
    },
  },
  plugins: [],
}

