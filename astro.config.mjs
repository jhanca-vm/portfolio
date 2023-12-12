import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import unocss from 'unocss/astro'

export default defineConfig({
  server: { host: true, port: 3000 },
  integrations: [svelte(), unocss()]
})
