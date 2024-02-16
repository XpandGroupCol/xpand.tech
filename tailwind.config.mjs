/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ibm: 'IBM Plex Mono',
				hanken: 'Hanken Grotesk Variable',
				worksans: 'Work Sans Variable'
			}, colors: {
				'xp-base': '#252930',
				'primary': '#0A169A',
				'secondary': '#9BF5F7',
				'xp-white': '#E6E6E6'
			},
			screens: {
				xs:'500px'
			}
		},
	},
	plugins: [],
}
