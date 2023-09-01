import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'

export default defineConfig({
  server: { host: true, port: 3000 },
  integrations: [unocss()]
})
