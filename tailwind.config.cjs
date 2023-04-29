/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: "#F0F0F0",
				dark: "#0F1212",
				accent: "#52647A",
				text: "#52647A",
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
