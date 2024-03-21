/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        headingFirst:"#010f1c",
        headingSec:"#021d35"
      },
      container:{
        center:true,
        padding:"15px",
      },
      fontFamily:{
        primary:"popins",
        secondary:"Pacifico"
      }
    },
  },
  plugins: [],
}

