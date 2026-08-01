import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 3000 },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Be Vietnam Pro',
      cssVariable: '--font-be-vietnam-pro',
      weights: ['400', '500', '600'],
      styles: ['normal']
    }
  ]
})
