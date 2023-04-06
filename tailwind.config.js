/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          main: "#133359",
          sky: "#8BBDF9",
          skyOff: "#EAF4FE",
          off: "#3D5361",
          cool:"#598FCF"
        },
        white: {
          main: "#FFFFFF",
        },
        orange: {
          main: "#FF9973",
          off: "#FFF5EE",
        },
        great:"#8EBF50"
      },
      fontFamily: {
        Catamaran: ["Catamaran", "sans-serif"],
        Amatic: ["Amatic SC", "cursive"],
      },
    },
  },
  plugins: [],
};
