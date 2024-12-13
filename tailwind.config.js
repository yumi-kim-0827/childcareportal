/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        large: "1920px", //=> @media (min-width: 1920px) { ... }
        medium: "1024px",
        small: "768px",
      },
    },
  },
  plugins: [],
};
