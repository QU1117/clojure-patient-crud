/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/cljs/patients/*.cljs",
	   "./src/cljs/patients/components/*.cljs"],
  theme: {
    fontFamily: {
      'cinzel': ['Cinzel']
    },
    extend: {},
  },
  plugins: [],
}
