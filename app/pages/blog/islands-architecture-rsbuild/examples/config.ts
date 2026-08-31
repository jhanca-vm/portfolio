// rsbuild.config.ts
//...
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
// ...
import { pluginSsg } from 'plugins/ssg'

export default defineConfig(async () => {
  // ...

  return {
    environments: {
      node: {
        // ...
      },
      web: {
        plugins: [pluginReact({ reactCompiler: true }), pluginSsg()]
        // ...
      }
    }
    // ...
  }
})
