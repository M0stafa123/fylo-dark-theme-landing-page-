/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: "Open Sans, sans-serif",
        Ralway: "Raleway, sans-serif",
      },
      colors: {
        introAndEmail: "hsl(217, 28%, 15%)",
        mainBackground: "hsl(218, 28%, 13%)",
        footerBackground: "hsl(216, 53%, 9%)",
        testimonialsBackground: "hsl(219, 30%, 18%)",
        Err: "hsl(0, 100%, 63%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
      },
      backgroundImage: {
        ButtonGradiant:
          "linear-gradient(to right ,hsl(176, 68%, 64%),hsl(198, 60%, 50%))",
        ButtonHoverGradiant:
          "linear-gradient(to right ,hsl(176, 68%, 64%),hsl(176, 68%, 64%))",
      },
    },
  },
  plugins: [],
};
