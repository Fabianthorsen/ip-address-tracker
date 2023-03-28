/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-image": "url('/src/assets/pattern-bg-mobile.png')",
        "desktop-image": "url('/src/assets/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
