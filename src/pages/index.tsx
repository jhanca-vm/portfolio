import Hero from '@/components/hero'
import Libraries from '@/components/libraries'
import Projects from '@/components/projects'
import RootLayout from '@/layouts/root'
import metadata from '@/metadata/index.yaml'

export default function Home() {
  return (
    <RootLayout title="Portafolio" description={metadata.description}>
      <main>
        <Hero description={metadata.description} />
        <Projects />
        <Libraries />
      </main>
    </RootLayout>
  )
}
