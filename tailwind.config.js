/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#060714",
        buttonBG: "#111137",
        buttonTxt: "#514cff",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
        Sora: "Sora, sans-serif",
      },
      backgroundImage: {
        circles: "url('/images/Background-Circles.png')",
      },
      maxWidth: {
        128: "36rem",
        56: "12rem",
      },
      minWidth: {
        56: "12rem",
        62: "19rem",
        72: "23rem",
      },
      inset: {
        70: "16.5rem",
      },
      width: {
        128: "36rem",
        120: "105%",
      },
      height: {
        128: "66vh",
      }
    },
  },
  plugins: [],
};
