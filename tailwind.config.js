/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        grey: "var(--grey)",
        greylight: "var(--grey-light)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
};
