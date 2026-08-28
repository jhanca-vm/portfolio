// rsbuild.config.ts
import { glob } from 'node:fs/promises'
import path from 'node:path'

import { defineConfig, rspack } from '@rsbuild/core'

export default defineConfig(async () => {
  const nodeEntry: Record<string, string> = {}
  const webEntry: Record<string, string[]> = {}

  for await (const file of glob('src/pages/**/*.{server,client}.tsx')) {
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
      node: { source: { entry: nodeEntry } },
      web: {
        source: { entry: webEntry },
        tools: {
          rspack: {
            plugins: [
              new rspack.experiments.VirtualModulesPlugin({ './fallback': '' })
            ]
          }
        }
      }
    }
  }
})
