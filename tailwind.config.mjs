/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'swiss-black': '#000000',
        'swiss-white': '#FFFFFF',
      },
      fontFamily: {
        'syne':          ['"Syne"', 'system-ui', 'sans-serif'],
        'ibm-plex-sans': ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
