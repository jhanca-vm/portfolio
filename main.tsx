import { Hono } from 'hono'
import { serveStatic, toSSG } from 'hono/deno'
import { jsxRenderer } from 'hono/jsx-renderer'
import { logger } from 'hono/logger'
import lightningcss from 'lightningcss'
import Layout from './src/layout.tsx'
import Page from './src/page.tsx'

const [arg] = Deno.args
const app = new Hono()

app.use(logger())

if (arg) {
  app.use(jsxRenderer(Layout))
  app.get('/', ({ render }) => render(<Page />))
}

app.use(
  serveStatic({
    root: 'public',
    onFound(_, { header }) {
      return header('Cache-Control', `public, immutable, max-age=31536000`)
    },
  }),
)

if (!arg || arg === 'dev') {
  Deno.serve({ port: 3000, handler: app.fetch })
} else {
  await lightningcss()

  toSSG(app, { dir: 'public' })
}
