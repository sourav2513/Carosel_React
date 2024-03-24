/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#191B1F',
        searchbox: '#22C55E',
        searchBanner: '#3e3737',
        customColor: '#57534e',
        colordot:'#16a34a',
      }
    },
  },
  plugins: [],
}

