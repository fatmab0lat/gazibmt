/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        navbar: "#E3CCAE",
        line: "#262A56",
        content: "#B8621B",
      },
    },
  },
  plugins: [],
};
