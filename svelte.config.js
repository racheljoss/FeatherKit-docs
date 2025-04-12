import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],

	adapter: adapter({
		fallback: '404.html'
	}),
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
};

export default config;