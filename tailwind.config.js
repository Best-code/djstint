const { rgbToHex } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'dark': '#2f2e2e',
        'light': '#ffffff',
        'offwhite': "#fafafa",  
        "gray": "#cccccc",
        "lightgray": "#afafaf",

      }
    },
    fontFamily: {
      'avenir': ['avenir-light'],
    }
  },
  plugins: [],
}