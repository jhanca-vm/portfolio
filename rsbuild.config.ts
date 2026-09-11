import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSvgr } from '@rsbuild/plugin-svgr'
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss'
import { pluginYaml } from '@rsbuild/plugin-yaml'
import type { ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { pluginSsg } from 'rsbuild-plugin-ssg'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({ svgrOptions: { exportType: 'default' } }),
    pluginTailwindcss(),
    pluginYaml(),
    pluginSsg({
      pattern: '**/*.tsx',
      render: (Page: () => ReactNode) => renderToStaticMarkup(Page())
    })
  ]
})
