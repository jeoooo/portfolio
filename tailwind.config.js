/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans': ["IBM Plex Sans"],
        'ibm-plex-mono': ["IBM Plex Mono"],
        'syne': ["Syne"]
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}

