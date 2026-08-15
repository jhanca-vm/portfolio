import { createContext, Script } from 'node:vm'
import type { RsbuildEntry, RsbuildPlugin } from '@rsbuild/core'
import { jsx } from 'react/jsx-runtime'
import { renderToStaticMarkup } from 'react-dom/server'

export const pluginPrerender = (entry: RsbuildEntry): RsbuildPlugin => ({
  name: 'plugin-prerender',
  async setup(api) {
    api.modifyEnvironmentConfig((config, { mergeEnvironmentConfig }) => {
      const source: { entry: RsbuildEntry } = { entry: {} }

      for (const file in entry) {
        source.entry[file] = {
          import: entry[file] as string,
          library: { type: 'commonjs-static' }
        }
      }

      return mergeEnvironmentConfig(config, {
        source,
        output: { emitAssets: false, target: 'node' },
        tools: {
          cssLoader: { esModule: false },
          rspack: { stats: { errors: false } },
          swc: { jsc: { transform: { react: { development: false } } } }
        }
      })
    })

    api.processAssets({ stage: 'optimize' }, ({ assets, compilation }) => {
      for (const name of compilation.entrypoints.keys()) {
        const file = `static/js/${name}.js`
        const script = new Script(assets[file].source() as string)
        const context = createContext({ exports: {} })

        try {
          script.runInContext(context)

          const Page = jsx(context.exports.default, {})
          const html = `<!doctype html>${renderToStaticMarkup(Page)}`

          api.expose(`${name}.html`, html, { environment: 'web' })
          compilation.deleteAsset(file)
        } catch (error) {
          api.logger.error(error)
        }
      }
    })
  }
})
