/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: '#151515',
        secondary: '#242424',
        accent: '#4ee1a0',
        neutral: '#d9d9d9'
      },
      fontFamily: {
        sans: ['Space Grotesk Variable', 'sans-serif']
      },
      spacing: {
        15: '3.75rem'
      }
    }
  }
}
