/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        cinematic: ["Cinzel", "serif"],
        japan: ["Noto Serif JP", "serif"],
      },
    },
  },
  plugins: [],
}