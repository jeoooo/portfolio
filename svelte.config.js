import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexOptions = {
  extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
    paths: {
      // base: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    },

  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
