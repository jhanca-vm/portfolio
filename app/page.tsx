import beVietnamPro400 from '@fontsource/be-vietnam-pro-latin-400-normal.woff2'
import beVietnamPro500 from '@fontsource/be-vietnam-pro-latin-500-normal.woff2'
import beVietnamPro600 from '@fontsource/be-vietnam-pro-latin-600-normal.woff2'
import Footer from './components/footer'
import Hero from './components/hero'
import Projects from './components/projects'
import fonts from './styles/fonts.css?inline'
import './styles/tailwind.css'

const description =
  'Cuento con 3 años de experiencia (Freelance). Especializado en el ' +
  'ecosistema de JavaScript (React, Next.js, Node.js), con sólidos ' +
  'conocimientos en Java y SQL. Gracias a mi faceta autodidacta, poseo una ' +
  'alta capacidad de aprendizaje y autogestión, logrando transformar ' +
  'requerimientos de clientes en aplicaciones funcionales y escalables.'

export default function Page() {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portafolio - Jhan Viloria</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <style dangerouslySetInnerHTML={{ __html: fonts }} />
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
        <main>
          <Hero description={description} />
          <Projects />
          <Footer />
        </main>
      </body>
    </html>
  )
}
