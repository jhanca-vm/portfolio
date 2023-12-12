import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#4ee1a0',
      secondary: '#242424',
      accent: '#d9d9d9',
      neutral: '#151515',
      error: '#ff6f5b'
    },
    fontSize: {
      '2xl': ['1.5rem', '2rem']
    },
    letterSpacing: {
      tighter: '-0.0284em',
      tight: '-0.013875em'
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
