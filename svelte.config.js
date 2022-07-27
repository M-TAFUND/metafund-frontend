import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// ... ℹ NODE-JS deployment Environment ...
		// adapter: vercel()
		adapter: node(),
		csp: {
			mode: 'hash', // ... hash | nonce | auto
}
}
}


export default config;
