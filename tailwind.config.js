/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe0000",
        secondary: "#010101",
        greybg: "#d7d7d9",
      },
    },
  },
  plugins: [],
};
