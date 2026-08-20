import { glob } from 'node:fs/promises'
import { defineConfig, type RsbuildEntry } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSvgr } from '@rsbuild/plugin-svgr'
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss'
import { pluginPrerender } from './plugins/prerender'
import { pluginSsg } from './plugins/ssg'

export default defineConfig(async () => {
  const nodeEntry: RsbuildEntry = {}
  const webEntry: RsbuildEntry = {}

  for await (const file of glob('app/pages/**/*.tsx')) {
    const name = file.substring(10, file.length - 4)
    nodeEntry[name] = `./${file}`
    webEntry[name] = './app/main.ts'
  }

  return {
    environments: {
      node: {
        plugins: [
          pluginReact({ fastRefresh: false }),
          pluginSvgr({ svgrOptions: { exportType: 'default' } }),
          pluginPrerender()
        ],
        source: { entry: nodeEntry },
        output: { target: 'node' },
        tools: {
          cssLoader: { esModule: false },
          rspack: { output: { library: { type: 'commonjs-static' } } }
        }
      },
      web: {
        plugins: [pluginTailwindcss(), pluginSsg()],
        source: { entry: webEntry },
        html: { favicon: './app/favicon.svg' },
        tools: { rspack: { dependencies: ['node'] } }
      }
    },
    dev: {
      hmr: false,
      watchFiles: [{ paths: 'plugins', type: 'restart' }, { paths: 'app' }]
    },
    server: { host: true, htmlFallback: false }
  }
})
