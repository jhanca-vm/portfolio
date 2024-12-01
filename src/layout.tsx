import type { PropsWithChildren } from 'hono/jsx'
import Styles from './components/styles.tsx'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='es'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <meta
          name='description'
          content={'Desarrollador web especializado en React, Next.js y ' +
            'Astro en el frontend, y Node.js en el backend.'}
        />
        <title>Jhan Viloria | Desarrollador web</title>
        <link rel='icon' href='/favicon.png' />
        <link
          rel='preload'
          href='/outfit.woff2'
          as='font'
          type='font/woff2'
          crossorigin='anonymous'
        />
        <Styles />
      </head>
      <body>{children}</body>
    </html>
  )
}
