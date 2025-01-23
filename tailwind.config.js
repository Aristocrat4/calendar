/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 5px 15px rgba(233, 232, 239, 0.5)", // #E9E8EF80 with 50% opacity
      },
    },
  },
  plugins: [],
};
