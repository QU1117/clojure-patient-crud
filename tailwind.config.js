/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/cljs/patients/*.cljs",
	    "./src/cljs/patients/components/*.cljs",
	    "./resources/public/*.html"],
  theme: {
    fontFamily: {
      'cinzel': ['Cinzel']
    },
    extend: {},
  },
  plugins: [],
}
