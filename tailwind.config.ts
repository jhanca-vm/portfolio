import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        default: {
          100: '#ffffff',
          200: '#d9d9d9',
          300: '#242424',
          400: '#151515'
        },
        primary: '#4ee1a0'
      },
      fontFamily: {
        sans: ['Space Grotesk Variable', 'sans-serif']
      },
      fontSize: {
        '4xl': '2.5rem'
      },
      maxWidth: {
        '5xl': '62.5rem'
      },
      screens: {
        xl: '1064px'
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        22: '5.5rem',
        32.25: '8.0625rem',
        55.75: '13.9375rem',
        79.5: '19.875rem',
        101.75: '25.4375rem'
      }
    }
  }
}

export default config
