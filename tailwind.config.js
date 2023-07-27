/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms"
import cntQueries from "@tailwindcss/container-queries"
import typo from "@tailwindcss/typography"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms, cntQueries, typo],
}
