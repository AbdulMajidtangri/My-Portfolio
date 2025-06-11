/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#8892b0",
        light: "#ccd6f6"
      },
    },
  },
  plugins: [],
}

