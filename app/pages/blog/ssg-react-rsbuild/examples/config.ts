// rsbuild.config.ts
import { glob } from 'node:fs/promises'
import path from 'node:path'

import { defineConfig, rspack } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

import { pluginPrerender } from './plugin-prerender'
import { pluginSsg } from './plugin-ssg'

export default defineConfig(async () => {
  const nodeEntry: Record<string, string> = {}
  const webEntry: Record<string, string[]> = {}

  for await (const file of glob('app/pages/**/*.{server,client}.tsx')) {
    const { name, dir, ext } = path.parse(file.substring(10, file.length - 4))
    const entryName = name === 'index' && dir ? dir : dir + name

    if (ext === '.server') {
      nodeEntry[entryName] = `./${file}`
      webEntry[entryName] = ['./fallback']
    } else {
      webEntry[entryName].push(`./${file}`)
    }
  }

  return {
    environments: {
      node: {
        plugins: [pluginReact({ fastRefresh: false }), pluginPrerender()],
        source: { entry: nodeEntry },
        output: {
          autoExternal: true,
          filename: { css: '[contenthash:10].css' },
          module: false,
          target: 'node'
        },
        tools: {
          cssLoader: { esModule: false },
          rspack: { output: { library: { type: 'commonjs-static' } } }
        }
      },
      web: {
        plugins: [pluginSsg()],
        source: { entry: webEntry },
        tools: {
          rspack: {
            plugins: [
              new rspack.experiments.VirtualModulesPlugin({ './fallback': '' })
            ],
            dependencies: ['node']
          }
        }
      }
    },
    dev: { hmr: false }
  }
})
