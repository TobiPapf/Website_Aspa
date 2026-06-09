/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#fdf2f2',
          100: '#fce4e4',
          200: '#f8c5c5',
          500: '#800000',
          600: '#6b0000',
          700: '#5c0000',
        },
        charcoal: {
          50:  '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d0d0d0',
          400: '#7a7a7a',
          500: '#5a5a5a',
          600: '#404040',
          700: '#2d2d2d',
          800: '#1f1f1f',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
      },
      boxShadow: {
        'card':   '0 2px 12px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 28px 0 rgba(0,0,0,0.12)',
        'crimson': '0 4px 16px 0 rgba(128,0,0,0.28)',
      },
    },
  },
  plugins: [],
};
