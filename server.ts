import { serveDir } from '@std/http/file-server'
import prerender from './src/prerender.tsx'

Deno.serve((req) => {
  if (req.headers.get('upgrade') === 'websocket') {
    const { response } = Deno.upgradeWebSocket(req)

    return response
  }

  const { pathname, host } = new URL(req.url)

  if (pathname === '/') {
    return new Response(
      prerender(host),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    )
  }

  return serveDir(req, { fsRoot: 'public' })
})
