/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        dark: "#151515",
        green: "#4EE1A0",
        grayLight: "#D9D9D9",
        grayMid: "#979797",
        grayDark: "#242424"
      },
      maxWidth: {
        container: "1110px"
      }
    },
  },
  plugins: [],
}