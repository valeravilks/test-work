module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.twig',
		'./src/**/*.js'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}