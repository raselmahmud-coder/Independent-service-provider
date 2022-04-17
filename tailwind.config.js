module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "435px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
