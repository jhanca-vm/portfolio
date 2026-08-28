// src/pages/index.server.tsx
import { renderToStaticMarkup } from 'react-dom/server'

import style from '@/style.css?url'

export function render() {
  return renderToStaticMarkup(
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React + Rsbuild</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href={style} />
      </head>
      <body>
        <h1>SSG (React + Rsbuild)</h1>
      </body>
    </html>
  )
}
