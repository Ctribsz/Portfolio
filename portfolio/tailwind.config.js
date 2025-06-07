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
        sans: ["Eurostile","Helvetica Neue","Arial","sans-serif"],
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
