/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#606C38",
          dark: "#283618",
        },
        secondary: {
          DEFAULT: "#DDA15E",
          dark: "#BC6C25",
        },
        white: "#FEFAE0",
        black: "#180B00",
      },
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
}

