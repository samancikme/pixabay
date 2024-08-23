/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : { 
        montserrat : " 'Montserrat', sans-serif"
      },
      backgroundImage : {
        img : "url('./src/images/header-bg.jpg')"
      }
    },
  },
  plugins: [],
}

