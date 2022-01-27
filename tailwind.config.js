module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
        'display':'display'
       }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require('tailwind-scrollbar'),],
  
}
