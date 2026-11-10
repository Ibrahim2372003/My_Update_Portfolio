/** @type {import('tailwindcss').Config} */
// Design tokens live in src/app/globals.css (CSS variables, stored as RGB
// channels so Tailwind opacity modifiers work). This file only maps them to
// utility names. Breakpoints are Tailwind's defaults (mobile-first, min-width).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: token('ink'), // #111111  primary text, header, footer
        paper: token('paper'), // #FFFFFF  page background
        red: {
          DEFAULT: token('red'), // #8B0000  signature accent
          deep: token('red-deep'), // pressed state
        },
        tint: token('tint'), // #F8EEEE  sparing supporting surface
        muted: token('muted'), // secondary text on white
        'muted-dark': token('muted-dark'), // secondary text on black
        line: token('line'), // hairline borders on white
        'line-dark': token('line-dark'), // hairline borders on black
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '76rem' },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      borderRadius: { card: '4px' },
    },
  },
  plugins: [],
}
