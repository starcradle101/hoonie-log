import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: { 'dark-theme': '#121212' },
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100ch', // add required value here
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
