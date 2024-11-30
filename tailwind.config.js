/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      dropShadow: {
             'full': '20px 20px 0px #000000',
             'mid': '10px 10px 0px #000000',
              'low': '5px 5px 0px #000000',
           },
      colors: {
        cmxblack: "#030303",
        cmxgreen: "#00D690",
        cmxyellow: "#F2D301",
        cmxred: "#FF6D53",
        cmxblue: "#0073F4"
      },
      padding: {
        hero: '83px'
      }
    }
  },
  plugins: [require("daisyui"),  require('@tailwindcss/typography')]
};
