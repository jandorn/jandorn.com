/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#110F0F',
        },
        primary: {
          light: '#110F0F',
          dark: '#FFFFFF',
        },
        secondary: {
          light: '#64748b',
          dark: '#FFFFFF',
        },
        pill: {
          light: '#f1f5f9',
          dark: '#64748b',
        },
        border: {
          light: '#000000',
          dark: '#FFFFFF',
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