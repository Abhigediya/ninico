/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container:{
      center:true
    },

    container:{
      padding:{
        default : '10px',
        xs: '0px',
        sm:'50px',
        lg : '30px',
        md : '30px',
        xl : '5rem',
      }
    },

    screens:{
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
         
        'ninico' : '#d51243',
        'ninico-two' : '#D61E4C',
        'topBar' : '#F3EEE7',
        'search' : '#F3F4F7',
        'footer' : '#F8F8F8',
        'footer-2' : '#EDEDED',
        'footer-3' : '#777777',
        'bdr-color' : '#E7E7E7',

        // Shop Page Color
        'shop-border' : '#CED4DA',
        'sign-in' : '#F6F6F6',
        'register' : '#F3EEE7',
        'checkout' : '#F5F5F5',
        'checkoutBorder' : '#ECB1C0',
        'checkoutText' : '#6f7172',
        'about' : '#F4F4F4',
        // 'white' : "FFFEFC",
      },

      // screens:{
        // 'xs':{'min':'300px'},
      // }
    },
  },
  plugins: [],
}

