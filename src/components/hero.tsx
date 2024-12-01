import data from '../data.json' with { type: 'json' }
import Link from './link.tsx'

export default function Hero() {
  return (
    <section>
      <h1 class='lh-none'>Jhan Viloria</h1>
      <div class='summary grid'>
        <article>
          <p>
            Desarrollador web especializado en{' '}
            <Link class='txt-react' href='react.dev'>React</Link>,{' '}
            <Link class='txt-next' href='nextjs.org'>Next.js</Link> y{' '}
            <Link class='txt-astro' href='astro.build'>Astro</Link>{' '}
            en el frontend, y{' '}
            <Link class='txt-node' href='txt-nodejs.org'>Node.js</Link>{' '}
            en el backend.
          </p>
          <p class='experience'>
            <strong class='h3 txt-sm lh-none'>Años de experiencia</strong> 2+
          </p>
        </article>
        <ol class='grid'>
          {data.experience.map(({ jobTitle, company, dates }) => (
            <li class='txt-sm'>
              <span class='marker' />
              <h3 class='h3 lh-none'>{jobTitle}</h3>
              <p>{company}</p>
              <p>{dates}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
