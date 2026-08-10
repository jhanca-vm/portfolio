import type { RsbuildPlugin } from '@rsbuild/core'

export const pluginSsg = (): RsbuildPlugin => ({
  name: 'plugin-ssg',
  setup(api) {
    if (process.env.NODE_ENV === 'production') {
      api.processAssets({ stage: 'optimize' }, ({ assets, compilation }) => {
        for (const name in assets) {
          if (name.endsWith('.js')) compilation.deleteAsset(name)
        }
      })
    }

    api.modifyHTML((_, { compilation }) => {
      let html = api.useExposed('plugin-prerender') as string

      function add(tag: string) {
        html = html.replace('</head>', `${tag}</head>`)
      }

      for (const { info, name } of compilation.getAssets()) {
        switch (info.assetType) {
          case 'javascript':
            add(`<script defer src="/${name}"></script>`)
            break
          case 'extract-css':
            add(`<link href="/${name}" rel="stylesheet"/>`)
        }
      }

      return `<!doctype html>${html}`
    })
  }
})
