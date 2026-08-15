import clsx from 'clsx/lite'
import profile from '@/assets/profile.avif'

interface Props {
  description: string
}

export default function Hero({ description }: Props) {
  return (
    <section
      className={clsx(
        'pt-9 px-6 bg-linear-to-b from-red-500/5 to-amber-500/5 sm:pt-12',
        'sm:px-9 md:px-12 xl:pt-18'
      )}
    >
      <div className="max-w-6xl mx-auto flex gap-6 max-xl:flex-col xl:gap-12">
        <div className="max-w-prose">
          <hgroup className="font-semibold">
            <p className="mb-3 text-lg text-pretty">
              ¡Hola! Soy Jhan Carlos Viloria Murillo
            </p>
            <h1 className="text-3xl text-balance md:text-5xl/tight">
              Programador de aplicaciones de software
            </h1>
          </hgroup>
          <p className="mt-6 text-slate-700">{description}</p>
        </div>
        <figure className="max-w-96 xl:mx-auto">
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
