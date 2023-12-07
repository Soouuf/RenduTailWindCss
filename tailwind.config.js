/** @type {import('tailwindcss').Config} */
export default {
  content: [
      '**/*.html',
      'src/**/*.{css,js}',
  ],
  theme: {
      fontFamily: {
        'sans': ['Wagon'],
        'mono': ['Chillax']
      },
      extend: {}
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}

