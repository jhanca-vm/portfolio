import { defineConfig, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      default: {
        100: '#ffffff',
        200: '#d9d9d9',
        300: '#242424',
        400: '#151515'
      },
      primary: '#4ee1a0'
    }
  },
  transformers: [transformerVariantGroup()]
})
