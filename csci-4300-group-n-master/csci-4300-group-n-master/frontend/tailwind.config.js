/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#b91c1c',
      'card': '#f5f5f5'
    },
    extend:
      {
        fontFamily: {
          'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
          'bebas-neue': ['Bebas Neue', 'sans-serif'],
          'anuphan': ['Anuphan', 'sans-serif'],
          'orbitron': ['Orbitron', 'sans-serif']
        },
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

