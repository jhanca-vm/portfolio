// plugin-ssg.ts
import type { HtmlRspackPlugin, RsbuildPlugin, Rspack } from '@rsbuild/core'

type RsbuildHtmlPlugin = Rspack.RspackPluginInstance & {
  getHTMLPlugin: () => typeof HtmlRspackPlugin
}

export const pluginSsg = (): RsbuildPlugin => ({
  name: 'plugin-ssg',
  setup(api) {
    api.onAfterCreateCompiler(({ compiler }) => {
      const { compilers } = compiler as Rspack.MultiCompiler
      const web = compilers[1]
      const plugin = web.options.plugins.find(
        (plugin) => plugin?.constructor.name === 'RsbuildHtmlPlugin'
      ) as RsbuildHtmlPlugin | undefined

      if (plugin) {
        web.hooks.compilation.tap('SsgPlugin', (compilation) => {
          const hooks = plugin.getHTMLPlugin().getCompilationHooks(compilation)

          hooks.afterTemplateExecution.tap('SsgPlugin', (data) => {
            const html = api.useExposed<string>(data.outputName)

            if (html) data.html = html

            data.headTags.splice(0, 3)

            return data
          })
        })
      }
    })

    if (process.env.NODE_ENV === 'production') {
      api.processAssets(
        { stage: 'optimize-inline' },
        ({ assets, compilation }) => {
          for (const file in assets) {
            if (!assets[file].source()) {
              compilation.deleteAsset(file)
            }
          }
        }
      )
    }
  }
})
