/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{php,js,jsx}"],
  theme: {
    extend: {

      colors: {
        "primary" : "#276e59",
        "secondary" : "#EBA53B",
        "grey" : " #5B5B5B",
        "offWhite" : "#FAFAFA",
        "darkGrey" : "#E6E6E6",
        "darkBrown" : "#5B5B5B",
        "shadeGrey" : "#999999",
        "shadeGrey2" : "#D9DBE1",
        "shadeGrey3" : "#EEEFF4"
      },
      backgroundImage: {
        'vector': "url('/resources/js/assets/vector.png')"
      },

      fontFamily: {
        "manrope": ['Manrope']
      },

      screens: {

        xxs: "375",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xl: "1700px"
      },
    },
  },
  plugins: [],
}
