/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('pictures/banner.jpg')",
      },
      colors: {
        reddit_orange: '#f54404',
        reddit_red: '#f54404',
        rd: {
          DEFAULT: "#030303",
          lowbright: "#1a1a1a",
          brighter: "#272728",
        },
        rb: {
          DEFAULT: "#343536",
        },
        rt: {
          DEFAULT: "rgb(215, 218, 220)",
          darker: "#818384",
        },
      },
    },
  },
  plugins: [],
};
