/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#c4b5fd',

					secondary: '#fda4af',

					accent: '#42f4dc',

					neutral: '#1d1c26',

					'base-100': '#273e53',

					info: '#60abd7',

					success: '#1c8243',

					warning: '#efce48',

					error: '#f0574c',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
