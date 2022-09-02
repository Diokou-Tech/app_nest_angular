/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      { 
       mytheme : {
        primary: "#37f275",
        secondary: "#caffa5",
        accent: "#a2f78c",
        neutral: "#2C2531",
        "base-100": "#FFFFFF",
        info: "#517BDB",
        success: "#32DCA6",
        warning: "#F3A039",
        error: "#F05247",
        },
      },
      "light", "dark"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require('daisyui')],
}
