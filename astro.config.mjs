import { defineConfig } from 'astro/config'
import i18next from 'astro-i18next'

export default defineConfig({
  server: { host: true },
  integrations: [i18next()]
})
