/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      minWidth: {
        base: '640px',
      },
      minHeight: {
        base: '600px',
      },
      colors: {
        'base-color': '#6D3B00',
      },
    },
  },
  plugins: [],
};
