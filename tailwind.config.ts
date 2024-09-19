import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

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
			typography: (theme: PluginAPI['theme']) => ({
				DEFAULT: {
					css: {
						maxWidth: '100ch',
						'ul li li': {
							listStyleType: 'circle',
						},
						'ul li': {
							padding: '0',
						},
						'ol p': {
							margin: '0',
						},
						'ol li': {
							padding: '0',
						},
						'ul li p': {
							margin: '0',
						},
						'ol li p': {
							padding: '0',
						},
						'h1, h2, h3': {
							lineHeight: '1',
							marginTop: '1rem',
							wordBreak: 'break-word',
							fontWeight: '600',
						},
						h1: {
							fontSize: '1.8rem',
						},
						h2: {
							fontSize: '1.4rem',
						},
						h3: {
							fontSize: '1.2rem',
						},
						a: {
							cursor: 'pointer',
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700'),
							},
						},
						img: {
							margin: '1.5rem 0',
							display: 'block',
							height: 'auto',
							maxWidth: '100%',
							alignSelf: 'center',
						},
						'img.ProseMirror-selectednode': {
							outline: `2px solid ${theme('colors.blue.500')}`,
						},
						code: {
							borderRadius: theme('borderRadius.md'),
							backgroundColor: theme('colors.gray.100'),
							padding: '0.25rem 0.375rem',
							color: theme('colors.black'),
							'&::before': {
								content: 'none',
							},
							'&::after': {
								content: 'none',
							},
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
						pre: {
							margin: '1.5rem 0',
							overflowX: 'auto',
							borderRadius: theme('borderRadius.lg'),
							backgroundColor: theme('colors.zinc.800'),
							padding: '0.75rem',
							fontFamily: theme('fontFamily.mono'),
							color: theme('colors.white'),
						},
						'pre code': {
							backgroundColor: 'transparent',
							padding: '0',
							color: 'inherit',
						},
						mark: {
							borderRadius: theme('borderRadius.md'),
							backgroundColor: theme('colors.yellow.200'),
							boxDecorationBreak: 'clone',
							padding: '0.125rem 0.375rem',
						},
						blockquote: {
							borderLeftWidth: '3px',
							margin: '1.5rem 0',
							borderColor: theme('colors.gray.200'),
							paddingLeft: '1rem',
						},
						hr: {
							border: 'none',
							borderTop: `1px solid ${theme('colors.gray.200')}`,
							margin: '2rem 0',
						},
					},
				},
				lg: {
					css: {
						p: {
							fontSize: '1.125rem',
						},
						'h1, h2, h3': {
							lineHeight: '1.2',
							marginTop: '1.5rem',
							wordBreak: 'break-word',
							fontWeight: '600',
						},
						h1: {
							fontSize: '2rem',
						},
						h2: {
							fontSize: '1.6rem',
						},
						h3: {
							fontSize: '1.4rem',
						},
						'ul li p': {
							margin: '0',
						},
						'ol li p': {
							margin: '0',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default config;
