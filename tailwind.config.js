/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#0f1115",
        darker: "#0b0c10",
        card: "#15171c"
      }
    }
  },
  plugins: [],
};
