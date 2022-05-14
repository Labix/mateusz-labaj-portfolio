const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xD': '#141414',
        'xDD': '#E9E9EB',
        'napisdark': '#5D5C61',
        'napislight': '#9E94C7',
        'imie': '#6C55E1',
        'bluebg': '#669DB3FF',
        'offwhite': '#FAF9F6'
      },
      height:{
        'hcard': '310px',
        '1/5': '20%',
        '2%': '2%',
        '600px': '600px'
      },
      width: {
        'wcard': '250px',
        '2%': '2%',
        '600px': '600px'
      },
      marginleft:{

      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      translate: {
        'aaa': '0vh',
      },
      gridTemplateColumns: {
        '21':'repeat(21, 1fr)',
      },
      gridTemplateRows: {
        '21': 'repeat(21, 1fr)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  variants:{
    extends:{
      display:['group-hover']
    },
  },
  plugins: [],
}