// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        eurostile: ["Eurostile", "Arial", "sans-serif"]
      },
      colors: {
        primaryBg: "#EDE4E0",
        primaryText: "#262627",
        accent: "#BD9977"
      }
    }
  },
  plugins: []
};
