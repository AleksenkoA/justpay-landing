/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'justpay-green': '#1a5d3a', // Dark green from design
        'justpay-dark': '#000000',
        'justpay-light': '#ffffff',
      },
    },
  },
  plugins: [],
}

