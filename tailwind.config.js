/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Mono One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      colors: {
        'bold-yellow': '#ffbe0b',
        'bold-orange': '#fb5607',
        'bold-pink': '#ff006e',
        'bold-purple': '#8338ec',
        'bold-blue': '#3a86ff',
        neutral: '#e9cecd',
        'white-smoke': '#F2F4F3',
      },
    },
  },
  plugins: [],
};
