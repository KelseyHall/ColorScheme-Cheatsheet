/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'Primary-dark': '#050606',
        'Primary-light': '#ADB3BC',
        'backdrop-dark': '#D8D7D5',
        'backdrop-light': '#FDFDFD',
        'button-dark': '#52525B',
        'button-hover': '#ADB3BC',
        'text-light': '#FDFDFD',
      },
    },
  },
  plugins: [],
};
