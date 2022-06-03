module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#E9DAC1',
        'secondary': '#A97155',
        'tertiary': '#632626'
        
      },
      fontFamily :{
        'body': ['Nunito'] 
      },
      backgroundImage: {
                'food': "url('/public/img/suya.jpg')"
            },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
