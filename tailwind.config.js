/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',
      },
    },
  },
  variants: {
    extend: {
      textStrokeWidth: ['responsive', 'hover', 'focus'],
      textStrokeColor: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};