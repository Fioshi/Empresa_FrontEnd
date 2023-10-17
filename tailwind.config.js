/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      animation: {
        'color-change': 'color-change 10s infinite',
      },
      keyframes: {
        'color-change': {
          '0%': { backgroundColor: 'red' },
          '25%': { backgroundColor: 'blue' },
          '50%': { backgroundColor: 'green' },
          '75%': { backgroundColor: 'yellow' },
          '100%': { backgroundColor: 'red' },
        }
      },
    },
  },
  plugins: [],
}

