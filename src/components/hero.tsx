import Link from './link.tsx'

export default function Hero() {
  return (
    <section class='hero'>
      <h1>Jhan Viloria</h1>
      <div>
        <article>
          <p>
            Desarrollador web especializado en{' '}
            <Link class='react' href='react.dev'>React</Link>,{' '}
            <Link class='next' href='nextjs.org'>Next.js</Link> y{' '}
            <Link class='astro' href='astro.build'>Astro</Link>{' '}
            en el frontend, y{' '}
            <Link class='node' href='nodejs.org'>Node.js</Link> en el backend.
          </p>
          <p class='experience'>
            <strong>Años de experiencia</strong> 3+
          </p>
        </article>
      </div>
    </section>
  )
}
