import { createContext, Script } from 'node:vm'
import type { RsbuildPlugin } from '@rsbuild/core'
import { type FunctionComponent, h } from 'preact'
import { renderToStaticMarkup } from 'preact-render-to-string'

export const pluginPrerender = (): RsbuildPlugin => ({
  name: 'plugin-prerender',
  setup(api) {
    api.processAssets(
      { stage: 'optimize' },
      async ({ assets, compilation }) => {
        for (const name in assets) {
          if (!name.endsWith('.js')) continue

          const script = new Script(assets[name].source() as string)
          const context = createContext({ exports: {} })

          script.runInContext(context)

          const Page: FunctionComponent = context.exports.default

          api.expose('plugin-prerender', renderToStaticMarkup(h(Page, {})))
          compilation.deleteAsset(name)

          break
        }
      }
    )
  }
})
