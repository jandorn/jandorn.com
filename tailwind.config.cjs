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
          light: '#7E828B',
          dark: '#67686D',
        },
        pill: {
          light: '#E0E0E0',
          dark: '#575757',
        },
        border: {
          light: '#000000',
          dark: '#F0F0F0',
        },
        hover: {
          light: '#6A6A6A',
          dark: '#B1B2B4',
        },
        divider: {
          light: '#E6E7EB',
          dark: '#242628',
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