/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'rantages-yellow': '#F7FF1D',
        'rantages-teal': '#50FFAE',
        'facebook-blue': '#6780FF',
        'google-red': '#EE4326',
        'inactive-button': '#39ddff',
        'active-button': '#02f671',
        'witty-blue': '#2FCDFF',
        'aesthetic-orange': '#FFB156',
        'inspiring-purple': '#FF57E4',
        'relatable-green': '#63FF60',
      }
    },
  },
  plugins: [],
}

