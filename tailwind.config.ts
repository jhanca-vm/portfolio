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
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        22: '5.5rem'
      }
    }
  }
}

export default config
