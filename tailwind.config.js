/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        GintoNord: ["GINTONORD", "cursive"],
        ggsans:["gg-sans" , ""],
      },
      boxShadow: {
        '3xl': '15px 15px 60px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
