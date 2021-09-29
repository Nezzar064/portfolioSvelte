const colors = require('tailwindcss/colors');

const production = !process.env.ROLLUP_WATCH;
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
  plugins: [],
};

