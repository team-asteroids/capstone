/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,css}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikmono: ['Rubik Mono One', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
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
        'pale-blue': '#76BED0',
        // 'pale-purple': '#CAA9F7',
        'pale-purple': '#AF7EF3',
        'pale-pink': '#FF5BA2',
        'bright-white': '#ffffff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
