import clsx from 'clsx/lite'
import enLaMano from './en-la-mano.avif'
import fxChecker from './fx-checker.avif'
import healthy from './healthy.avif'
import techBookClub from './tech-book-club.avif'

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
    <section class="py-24 px-6 sm:px-9 md:px-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="flex items-center gap-9 font-semibold text-2xl md:text-3xl">
          <span>Mis proyectos</span>
          <span class="grow border-t-2 border-dashed border-slate-200" />
        </h2>
        <ul class="mt-12 grid gap-9 md:grid-cols-2">
          {list.map(([id, description, domain, screenshot]) => (
            <li
              class={
                'pt-9 pl-9 flex flex-col rounded-md bg-slate-300/20 lg:pl-12'
              }
            >
              <p class="mr-9 font-medium text-pretty md:text-lg">
                {description}
              </p>
              <div class="mt-3 mb-9 flex gap-3 font-semibold text-sm">
                <a
                  class="text-blue-600/80 underline-offset-2 hover:underline"
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar sitio
                </a>
                <a
                  class="text-red-500/80 underline-offset-2 hover:underline"
                  href={`https://github.com/jhanca-vm/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver código
                </a>
              </div>
              <img
                class={clsx(
                  'mt-auto rounded-tl-md rounded-br-md border-t-3 border-l-3',
                  'border-slate-50'
                )}
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
