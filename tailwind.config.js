// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
    fontFamily: {
      logoFont:['Pacifico', 'cursive'],
      body:["Shrikhand",'cursive'],
      textFont:['Rubik', 'sans-serif'],
      myName:['Russo One', 'sans-serif']
    },
  },

  keyframes:{
   wiggle:{
    "0%, 100%":{transform:'rotate(-9deg)'},
     "50% ": {transform: 'rotate(-9deg)'},
   },
  } ,

  plugins: [require ("tailwindcss-animate")],
  animationIterationCount: {
    '2': '2',
  },


  animationDirection: {
    'normal-reverse': 'normal, reverse',
  },

}

