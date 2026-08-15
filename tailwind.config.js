/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			colors: {
				'frame-ink': '#000000',
				'canvas': '#ffffff',
				'ink': '#000000',
				'primary': '#e91d2a',
				'yellow-sticker': '#fcc20f',
				'purple-stripe': '#6a26a4',
				'link': '#0000ee',
				// Ribbon-card tint family
				'tint-olive': '#8e8a25',
				'tint-sage': '#b3bd95',
				'tint-salmon': '#d77a7a',
				'tint-peach': '#e6915d',
				'tint-lime': '#c0d4a7',
				'tint-sky': '#9ab6c8',
				'tint-steel': '#a5b8c0',
				'tint-periwinkle': '#8c9ae0',
			},
			fontFamily: {
				display: ['"Arial Black"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
				ui: ['Helvetica', 'Arial', 'system-ui', 'sans-serif'],
				serif: ['"Times New Roman"', 'Times', 'serif'],
			},
			borderRadius: {
				none: '0px',
			},
		}
	},
	plugins: []
};
