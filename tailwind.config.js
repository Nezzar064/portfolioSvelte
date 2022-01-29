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
      require('daisyui'),
  ],
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#e7f5f5',
          'base-300': '#c9ecee',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
};

