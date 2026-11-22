/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#f5ede8',
          surface: '#faf5f2',
          accent: '#bb7840',
          accentHover: '#a36431',
          dark: '#26160e',
          brown: '#432616',
          muted: '#7a6558',
          border: '#e4d3c7',
          wheat: '#df9c5e',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
