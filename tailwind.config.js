/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/**/*.{svg,html}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main_color': '#6D9886',
        'second_color': '#D9CAB3',
        'dark--theme': '#212121',
        'white--theme': '#F6F6F6',
        // 'main_color': '#00ADB5',
        // 'second_color': '#393E46',
        // 'dark--theme': '#222831',
        // 'white--theme': '#EEEEEE',
      }
    },
    
    screens: {
      '2xl': {'max': '1919px'},
      'xl': {'max': '1023px'},
      'lg': {'max': '767px'},
      'md': {'max': '539px'},
      'sm': {'max': '360px'},
      'xm': {'max': '320px'},
    },
  },
  plugins: [],
}