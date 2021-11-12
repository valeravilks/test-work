module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.twig',
		'./src/**/*.js'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// Testing custom class generation, remove if no needed
				'brand-1': '#18b1a9',
				'brand-2': '#067e79',
				'brand-3': '#c8fa36',
				'brand-4': '#074757',
				'brand-5': '#f4f8f8',
				'brand-6': '#6b6b6b',
				facebook: '#3b5998',
				twitter: '#1da1f2',
				linkedin: '#0077b5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}
