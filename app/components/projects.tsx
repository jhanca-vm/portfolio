import clsx from 'clsx/lite'
import enLaMano from '@/assets/en-la-mano.avif'
import fxChecker from '@/assets/fx-checker.avif'
import healthy from '@/assets/healthy.avif'
import techBookClub from '@/assets/tech-book-club.avif'

const list = [
  [
    'fx_checker',
    'Aplicación web de conversión de divisas.',
    'fx-checker.pages.dev',
    fxChecker
  ],
  [
    'healthy',
    'Sitio web de recetas saludables.',
    'healthy-jvm.vercel.app',
    healthy
  ],
  [
    'en-la-mano',
    'Sitio web para solicitar préstamos en línea.',
    'enlamano.com.uy',
    enLaMano
  ],
  [
    'tech-book-club',
    'Landing page para un club de lectura.',
    'techbookclub.pages.dev',
    techBookClub
  ]
]

export default function Projects() {
  return (
    <section className="py-24 px-6 sm:px-9 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2
          className={
            'flex items-center gap-9 font-semibold text-2xl md:text-3xl'
          }
        >
          <span>Mis proyectos</span>
          <span className="grow border-t-2 border-dashed border-slate-200" />
        </h2>
        <ul className="mt-12 grid gap-9 md:grid-cols-2">
          {list.map(([id, description, domain, screenshot]) => (
            <li
              className={clsx(
                'overflow-hidden pt-9 pl-9 flex flex-col rounded-md',
                'bg-slate-300/20 lg:pl-12'
              )}
              key={id}
            >
              <p
                className={clsx(
                  'mr-9 font-medium text-slate-600 text-pretty',
                  'md:text-lg/snug'
                )}
              >
                {description}
              </p>
              <div className="mt-3 mb-6 flex gap-3 text-sm">
                <a
                  className="text-blue-600 underline-offset-2 hover:underline"
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar sitio
                </a>
                |
                <a
                  className="text-red-700 underline-offset-2 hover:underline"
                  href={`https://github.com/jhanca-vm/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver código
                </a>
              </div>
              <img
                className={
                  'mt-auto rounded-tl-md rounded-br-md shadow-lg opacity-95'
                }
                src={screenshot}
                alt=""
                width={580}
                height={413}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
