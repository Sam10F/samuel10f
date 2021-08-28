module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'pastel-green': '#61D0A8',
    },
    extend: {
      gridTemplateColumns: {
        header: 'repeat(3, minmax(00px, 1fr))',
        headerMobile: 'repeat(2, minmax(100px, 1fr))',
        '75fr': '1fr 0.25fr',
      },
      gridTemplateRows: {
        navigationLinks: 'auto 15px',
        navigationLinksMobile: '40px 40px',
      },
    },
    fontFamily: {
      assistant: ['Assistant', 'sans-serif'],
    },
    letterSpacing: {
      widest: '.15em',
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
