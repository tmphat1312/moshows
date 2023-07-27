/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms"
import cntQueries from "@tailwindcss/container-queries"
import typo from "@tailwindcss/typography"
import colors from "tailwindcss/colors"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: colors.orange[100],
          200: colors.orange[200],
          300: colors.orange[300],
          400: colors.orange[400],
          500: colors.orange[500],
          600: colors.orange[600],
          700: colors.orange[700],
          800: colors.orange[800],
          900: colors.orange[900],
        },
      },
    },
  },
  plugins: [forms, cntQueries, typo],
}
