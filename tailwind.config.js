/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        reform: {
          primary: '#00bed6',
          secondary: '#004452',
          light: '#80dfe9',
          dark: '#003340',
          gray: '#f5f5f5',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.reform.dark'),
            a: {
              color: theme('colors.reform.primary'),
              '&:hover': {
                color: theme('colors.reform.light'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.reform.light'),
              '&:hover': {
                color: theme('colors.reform.primary'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            code: { color: theme('colors.white') },
            blockquote: { color: theme('colors.gray.400') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
