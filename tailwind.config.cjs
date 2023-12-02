/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8F8F8',
          dark: '#171717',
        },
        primary: {
          light: '#110F0F',
          dark: '#F0F0F0',
        },
        secondary: {
          light: '#64748b',
          dark: '#A8A8A8',
        },
        pill: {
          light: '#E0E0E0',
          dark: '#575757',
        },
        border: {
          light: '#000000',
          dark: '#F0F0F0',
        },
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      fontFamily: {
        sans: ['roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}