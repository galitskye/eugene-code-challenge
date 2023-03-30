/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"ArialMT"', 'sans-serif'],
    },
    colors: {
      black: '#000',
      white: '#fff',
      green: '#009E2D',
      red: '#9E0000',
    },
  },
  plugins: [],
};
