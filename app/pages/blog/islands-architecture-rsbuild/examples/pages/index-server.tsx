// src/pages/index.server.tsx
import { renderToStaticMarkup } from 'react-dom/server'

import Counter from '../components/counter'
import Island from '../components/island'

export function render() {
  return renderToStaticMarkup(
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React + Rsbuild</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <h1>Islands Architecture (SSG con React + Rsbuild)</h1>
        <Island name="counter">
          <Counter />
        </Island>
      </body>
    </html>
  )
}
