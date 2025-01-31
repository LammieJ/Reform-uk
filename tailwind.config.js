/** @type {import('tailwindcss').Config} */
export default {
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
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
