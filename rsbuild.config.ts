import { glob } from 'node:fs/promises'
import path from 'node:path'
import { defineConfig, type RsbuildEntry } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSvgr } from '@rsbuild/plugin-svgr'
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss'
import { pluginPrerender } from './plugins/prerender'
import { pluginSsg } from './plugins/ssg'

export default defineConfig(async () => {
  const entry: RsbuildEntry = {}

  for await (const file of glob('app/pages/**/*.tsx')) {
    const [name] = path.relative('app/pages', file).split('.')
    entry[name] = `./${file}`
  }

  return {
    plugins: [
      pluginReact(),
      pluginSvgr({ svgrOptions: { exportType: 'default' } }),
      pluginTailwindcss()
    ],
    environments: {
      node: { plugins: [pluginPrerender(entry)] },
      web: {
        plugins: [pluginSsg()],
        source: { entry },
        html: { favicon: './app/favicon.svg' }
      }
    },
    dev: {
      watchFiles: [
        { paths: 'plugins', type: 'restart' },
        { paths: 'app', options: { ignored: (file) => file.endsWith('.css') } }
      ]
    },
    server: { host: true }
  }
})
