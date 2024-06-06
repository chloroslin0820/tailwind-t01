/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        '2xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        'none': 'none',
      },
      translate: {
        'n2': '-2px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-2xl': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.text-shadow-sm-green': {
          textShadow: '1px 1px 2px rgba(34, 197, 94, 0.5)',
        },
        '.text-shadow-md-green': {
          textShadow: '2px 2px 4px rgba(34, 197, 94, 0.5)',
        },
        '.text-shadow-lg-green': {
          textShadow: '3px 3px 6px rgba(34, 197, 94, 0.5)',
        },
        '.text-shadow-xl-green': {
          textShadow: '4px 4px 8px rgba(34, 197, 94, 0.5)',
        },
        '.text-shadow-2xl-green': {
          textShadow: '5px 5px 10px rgba(34, 197, 94, 0.5)'
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    }
  ]
}

