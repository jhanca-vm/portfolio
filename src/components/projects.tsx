import data from '../data.json' with { type: 'json' }

export default function Projects() {
  return (
    <section>
      <h2>
        Proyectos <span class='txt-gradient'>destacados</span>
      </h2>
      <div class='projects grid'>
        {data.projects.map(({ id, url, name }) => (
          <article>
            <div>
              <a
                class='font-medium'
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                {name}{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  aria-hidden='true'
                >
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
                  <path d='M11 13l9 -9' />
                  <path d='M15 4h5v5' />
                </svg>
              </a>
              <a
                href={`https://github.com/jhanca-vm/${id}`}
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <title>Repositorio</title>
                  <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
                </svg>
              </a>
            </div>
            <img src={`/images/${id}.webp`} alt='' loading='lazy' />
          </article>
        ))}
      </div>
    </section>
  )
}
