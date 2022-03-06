import preprocess from 'svelte-preprocess'
import adapter from "@sveltejs/adapter-static"

const dev = true

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),

    paths: {
      base: dev ? "" : "/peterparsons.me",
    },

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
