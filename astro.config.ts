import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 3000 },
  devToolbar: { enabled: false }
})
