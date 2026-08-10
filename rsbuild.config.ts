import { defineConfig } from '@rsbuild/core'
import { pluginPreact } from '@rsbuild/plugin-preact'
import { pluginSvgr } from '@rsbuild/plugin-svgr'
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss'
import { pluginPrerender, pluginSsg } from './plugins'

export default defineConfig({
  plugins: [
    pluginPreact(),
    pluginSvgr({ svgrOptions: { exportType: 'default' } }),
    pluginTailwindcss()
  ],
  environments: {
    node: {
      plugins: [pluginPrerender()],
      output: { emitAssets: false, target: 'node' },
      tools: { rspack: { output: { library: { type: 'modern-module' } } } }
    },
    web: {
      plugins: [pluginSsg()],
      tools: { rspack: { dependencies: ['node'] } }
    }
  },
  dev: {
    hmr: false,
    watchFiles: { paths: ['plugins/**/*', 'app/page.tsx'], type: 'restart' }
  },
  source: { entry: { index: './app/page.tsx' } },
  html: { favicon: './app/favicon.svg' },
  server: { host: true }
})
