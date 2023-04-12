/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'rantages-yellow': '#F7FF1D',
        'facebook-blue': '#6780FF',
        'google-red': '#EE4326',
        'inactive-button': '#39ddff',
        'active-button': '#02f671'
      }
    },
  },
  plugins: [],
}

