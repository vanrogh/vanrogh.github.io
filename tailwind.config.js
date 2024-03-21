/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '6xl': ['68px', '80px'],
        '8xl': ['96px', '106px']
    },
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
          },
          colors: {
            "primary": "#5F42AA",
            'secondary': "#7C5CF5",
            "slate-gray": "#6D6D6D",
            "graybg": "#F8F9FF",
            "white-400": "rgba(255, 255, 255, 0.80)"
          },
          boxShadow: {
            '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
          },
          screens: {
            "wide": "1440px"
          }
    },
},
  plugins: [],
}