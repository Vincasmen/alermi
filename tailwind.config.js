/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        action: ["Prompt"],
        display: ['"Roboto"'],
      },
      animation: {
        "spin-fast": "spin 0.5s ",
      },
    },
  },
  plugins: [],
};
