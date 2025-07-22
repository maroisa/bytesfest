/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          0: "#E1F5FE",
          25: "#B3E5FC",
          50: "#81D4FA",
          75: "#4FC3F7",
          100: "#3B82F6",
          200: "#29B6F6",
          300: "#03A9F4",
          400: "#039BE5",
          500: "#0288D1",
          600: "#0077B6",
          700: "#0277BD",
          800: "#01579B",
          900: "#023E8A",
        },
        neutral: {
          0: "#FAFAFA",
          25: "#EBEBEB",
          50: "#DBDBDB",
          75: "#C4C4C4",
          100: "#A6A6A6",
          200: "#888888",
          300: "#6B6B6B",
          400: "#4D4D4D",
          500: "#404040",
          600: "#333333",
          700: "#272727",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
      },
    },
  },
  plugins: [],
};
