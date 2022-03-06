import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

const dev = true

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    prerender: {
      default: true,
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
