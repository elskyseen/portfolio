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
      margin: {
        c26: "26px",
        c72: "72px",
      },
      padding: {
        c120: "120px",
      },
      width: {
        c21: "21px",
        c38: "38px",
        c50: "50px",
        c236: "236px",
        c336: "336px",
      },
      height: {
        c38: "38px",
        c50: "50px",
        c236: "236px",
      },
      borderRadius: {
        8: "8px",
      },
    },
  },
  plugins: [],
}
