/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./features/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],

  theme: {},

  plugins: [require("@tailwindcss/forms")],
};
