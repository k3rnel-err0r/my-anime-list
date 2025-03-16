/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f2ff',
        neonOrange: '#ff7300',
        neonPurple: '#b700ff',
        neonPink: '#ff00e6',
        neonGreen: '#39ff14',
      }
    },
  },
  plugins: [],
}