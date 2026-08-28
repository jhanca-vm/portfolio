import { renderToStaticMarkup } from 'react-dom/server'

import Hero from '@/components/hero'
import Posts from '@/components/posts'
import Projects from '@/components/projects'
import RootLayout from '@/layouts/root'

const description =
  'Cuento con 3 años de experiencia (Freelance). Especializado en el ' +
  'ecosistema de JavaScript (React, Next.js, Node.js), con sólidos ' +
  'conocimientos en Java y SQL.'

export function render() {
  return renderToStaticMarkup(
    <RootLayout title="Portafolio" description={description}>
      <main>
        <Hero description={description} />
        <Projects />
        <Posts />
      </main>
    </RootLayout>
  )
}
