/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#50A6DE",
        "second": "#1B262C",
        "tree": "#44494C"
      }
    },
  },
  plugins: [],
}