/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        tertiary: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "linear-gradient": "linear-gradient(to right, red , yellow)",
      },
    },
  },
  plugins: [],
};
