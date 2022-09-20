import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		files: { assets: 'src/content' },
		adapter: adapter()
	},

	paths: {
		base: process.env.SVELTE_BASE_PATH ?? '',
	},
};

export default config;
