/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#F7F7F7",
        common: "#161616",
      },
    },
  },
  plugins: [],
}
