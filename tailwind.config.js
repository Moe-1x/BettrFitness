/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        primary: "#1D4E89",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans font
        cairo: ["Cairo", "sans-serif"], // Add Cairo as an additional font
      },
      container: {
        padding: "0 15px",
        center: true,
        screens: {
          sm: "750px",
          md: "970px",
          lg: "1300px",
        },
      },
    },
  },
  plugins: [],
};
