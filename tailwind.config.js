/** @type {import('tailwindcss').Config} */
import cntQueries from "@tailwindcss/container-queries"
import forms from "@tailwindcss/forms"
import typo from "@tailwindcss/typography"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dai Banna SIL", ...defaultTheme.fontFamily.sans],
        display: ["Concert One", ...defaultTheme.fontFamily.serif],
      },
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
        active: colors.sky[400],
      },
      width: {
        app: "75rem",
      },
      brightness: {
        20: ".2",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [forms, cntQueries, typo],
}
