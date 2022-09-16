import preprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json'
import adapter from '@sveltejs/adapter-netlify';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: { assets: 'src/content' },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		paths: {
			base: process.env.SVELTE_BASE_PATH ?? '',
		},
	},
	plugins: [
		json({
			compact: true
		})]
};

export default config;
