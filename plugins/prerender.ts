import { createContext, Script } from 'node:vm'
import type { RsbuildPlugin } from '@rsbuild/core'
import { jsx } from 'react/jsx-runtime'
import { renderToStaticMarkup } from 'react-dom/server'

export const pluginPrerender = (): RsbuildPlugin => ({
  name: 'plugin-prerender',
  async setup(api) {
    api.processAssets({ stage: 'optimize' }, ({ assets, compilation }) => {
      for (const file in assets) {
        if (file.endsWith('.js')) {
          const script = new Script(assets[file].source() as string)
          const context = createContext({ exports: {} })

          try {
            script.runInContext(context)

            const Page = jsx(context.exports.default, {})
            const html = `<!doctype html>${renderToStaticMarkup(Page)}`
            const name = file.substring(0, file.length - 3)

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
