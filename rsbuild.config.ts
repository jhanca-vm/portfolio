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
      tools: {
        cssLoader: { esModule: false },
        rspack: {
          output: { library: { type: 'commonjs-static' } },
          stats: { errors: false }
        }
      }
    },
    web: {
      plugins: [pluginSsg()],
      tools: { rspack: { dependencies: ['node'] } }
    }
  },
  dev: {
    watchFiles: [
      { paths: 'plugins/**/*', type: 'restart' },
      { paths: 'app/**/*' }
    ]
  },
  source: { entry: { index: './app/page.tsx' } },
  html: { favicon: './app/favicon.svg' },
  server: { host: true }
})
