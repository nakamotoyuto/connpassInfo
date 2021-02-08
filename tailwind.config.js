module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'green-primary': '#3f9202'
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
