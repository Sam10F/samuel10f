module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        root: "80px minmax(900px, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
