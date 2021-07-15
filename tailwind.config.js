module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        header: "repeat(3, minmax(00px, 1fr))",
        headerMobile: "repeat(2, minmax(100px, 1fr))",
      },
      gridTemplateRows: {
        navigationLinks: "auto 15px",
        navigationLinksMobile: "40px 40px",
      },
    },
    fontFamily: {
      assistant: ["Assistant", "sans-serif"],
    },
    letterSpacing: {
      widest: ".15em",
    },
  },
  variants: {
    extend: {
      fontSize: ["hover"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
