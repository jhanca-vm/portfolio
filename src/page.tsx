import type { ComponentChildren } from 'preact'
import Hero from './components/hero.tsx'
import Projects from './components/projects.tsx'

interface Props {
  children?: ComponentChildren
}

export default function Page({ children }: Props) {
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
        <title>Jhan Viloria | Desarrollador Web</title>
        <link rel='icon' href='/favicon.png' />
        <link
          rel='preload'
          href='/outfit.woff2'
          as='font'
          type='font/woff2'
          crossorigin='anonymous'
        />
        {children}
      </head>
      <body>
        <main>
          <Hero />
          <Projects />
        </main>
        <footer>
          <p>© 2025 Jhan Viloria</p>
        </footer>
      </body>
    </html>
  )
}
