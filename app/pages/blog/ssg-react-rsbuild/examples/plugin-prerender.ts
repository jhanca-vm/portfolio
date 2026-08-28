// plugin-prerender.ts
import { createRequire } from 'node:module'
import { createContext, Script } from 'node:vm'

import type { RsbuildPlugin } from '@rsbuild/core'

const require = createRequire(import.meta.url)

export const pluginPrerender = (): RsbuildPlugin => ({
  name: 'plugin-prerender',
  async setup(api) {
    api.processAssets({ stage: 'optimize' }, ({ assets, compilation }) => {
      for (const file in assets) {
        if (file.endsWith('.js')) {
          const script = new Script(assets[file].source() as string)
          const context = createContext({ require, exports: {} })

          try {
            script.runInContext(context)

            const name = file.substring(0, file.length - 3)
            const html = `<!doctype html>${context.exports.render()}`

            api.expose(`${name}.html`, html, { environment: 'web' })
            compilation.deleteAsset(file)
          } catch (error) {
            api.logger.error(error)
          }
        }
      }
    })
  }
})
