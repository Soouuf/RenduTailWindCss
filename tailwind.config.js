/** @type {import('tailwindcss').Config} */
export default {
  content: [
      'index.html',
      'src/**/*.{css,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}

