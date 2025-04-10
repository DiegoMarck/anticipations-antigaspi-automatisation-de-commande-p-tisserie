/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          DEFAULT: '#4A2B0F',
          light: '#8B633B',
          dark: '#2C1907',
        },
        'gold': '#C5A572',
        'beige': '#E8D5B5',
        'rose': '#E4C3B9',
      },
      fontFamily: {
        'primary': ['Cormorant Garamond', 'serif'],
        'secondary': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
