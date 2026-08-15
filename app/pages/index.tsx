import beVietnamPro400 from '@fonts/be-vietnam-pro-latin-400-normal.woff2'
import beVietnamPro500 from '@fonts/be-vietnam-pro-latin-500-normal.woff2'
import beVietnamPro600 from '@fonts/be-vietnam-pro-latin-600-normal.woff2'
import Hero from '@/components/hero'
import Preload from '@/components/preload'
import Projects from '@/components/projects'
import RootLayout from '@/layouts/root'

const description =
  'Cuento con 3 años de experiencia (Freelance). Especializado en el ' +
  'ecosistema de JavaScript (React, Next.js, Node.js), con sólidos ' +
  'conocimientos en Java y SQL. Gracias a mi faceta autodidacta, poseo una ' +
  'alta capacidad de aprendizaje y autogestión, logrando transformar ' +
  'requerimientos de clientes en aplicaciones funcionales y escalables.'

export default function Home() {
  return (
    <RootLayout title="Portafolio - Jhan Viloria" description={description}>
      <Preload fonts={[beVietnamPro400, beVietnamPro500, beVietnamPro600]} />
      <Hero description={description} />
      <Projects />
    </RootLayout>
  )
}
