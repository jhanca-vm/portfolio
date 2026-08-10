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

          const code = assets[name].buffer().toString('base64')
          const module = await import(`data:text/javascript;base64,${code}`)
          const Page: FunctionComponent = module.default

          api.expose('plugin-prerender', renderToStaticMarkup(h(Page, {})))
          compilation.deleteAsset(name)

          break
        }
      }
    )
  }
})
