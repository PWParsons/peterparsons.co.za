const config = {
  mode: 'jit',

  darkMode: 'class',

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        mirage: '#141d2c',
        'black-pearl': '#1a2333',
        madison: '#2b3b54',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            strong: { color: theme('colors.slate.500') },
            h2: { color: theme('colors.slate.900') },
            blockquote: { color: theme('colors.slate.600') },
            a: { color: theme('colors.blue.600') },
          },
        },
        dark: {
          css: {
            strong: { color: theme('colors.slate.400') },
            h2: { color: theme('colors.white') },
            blockquote: { color: theme('colors.slate.300') },
            a: { color: theme('colors.lime.400') },
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = config
