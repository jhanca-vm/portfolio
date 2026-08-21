import clsx from 'clsx/lite'
import cv from '@/assets/cv.pdf'
import profile from '@/assets/profile.avif'

interface Props {
  description: string
}

export default function Hero({ description }: Props) {
  return (
    <section
      className={clsx(
        'pt-9 px-6 bg-olive-100 text-slate-600 sm:pt-12 sm:px-9 md:px-12',
        'lg:pt-18'
      )}
    >
      <div className="max-w-6xl mx-auto flex gap-9 max-lg:flex-col lg:gap-12">
        <div className="max-w-prose lg:max-xl:max-w-148">
          <hgroup className="font-semibold">
            <p className="mb-3 text-lg text-pretty">
              ¡Hola! Soy Jhan Carlos Viloria Murillo
            </p>
            <h1
              className={clsx(
                'bg-linear-90 from-slate-500 to-slate-700 bg-clip-text',
                'text-3xl text-balance text-transparent md:text-5xl/tight',
                'lg:max-xl:text-3xl'
              )}
            >
              Programador de aplicaciones de software
            </h1>
          </hgroup>
          <p className="my-6 text-slate-700">{description}</p>
          <a
            className={clsx(
              'py-2.5 px-5 inline-block border border-red-700 rounded-sm',
              'font-medium text-sm text-red-700 transition-colors',
              'hover:bg-red-700 hover:text-amber-50'
            )}
            href={cv}
            target="_blank"
            rel="noopener"
          >
            Descargar CV
          </a>
        </div>
        <figure className="max-w-96 lg:min-w-96 lg:mx-auto">
          <img
            className="grayscale-25 drop-shadow-md mask-l-from-60%"
            src={profile}
            alt=""
            width={400}
            height={400}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}
