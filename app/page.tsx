import beVietnamPro400 from '@fontsource/be-vietnam-pro-latin-400-normal.woff2'
import beVietnamPro500 from '@fontsource/be-vietnam-pro-latin-500-normal.woff2'
import beVietnamPro600 from '@fontsource/be-vietnam-pro-latin-600-normal.woff2'
import Footer from './footer'
import Hero from './hero'
import Projects from './projects'
import './style.css'

export default function Page() {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portafolio - Jhan Viloria</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="preload"
          href={beVietnamPro400}
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href={beVietnamPro500}
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href={beVietnamPro600}
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </head>
      <body class="bg-slate-50 text-slate-500">
        <Hero />
        <Projects />
        <Footer />
      </body>
    </html>
  )
}
