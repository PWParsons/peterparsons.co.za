const config = {
  mode: 'jit',

  darkMode: 'class',

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        mirage: '#141d2c',
        'black-pearl': '#1a2333',
        madison: '#2b3b54',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = config
