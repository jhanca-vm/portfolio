import clsx from 'clsx/lite'
import profile from './profile.avif'

export default function Hero() {
  return (
    <section
      class={clsx(
        'pt-9 px-6 bg-linear-to-b from-red-500/5 to-amber-500/5 sm:pt-12',
        'sm:px-9 md:px-12 xl:pt-18'
      )}
    >
      <div class="max-w-6xl mx-auto flex gap-6 max-xl:flex-col xl:gap-12">
        <div class="max-w-prose">
          <hgroup class="font-semibold">
            <p class="mb-3 text-lg text-pretty">
              ¡Hola! Soy Jhan Carlos Viloria Murillo
            </p>
            <h1 class="text-3xl text-balance md:text-5xl/tight">
              Programador de aplicaciones de software
            </h1>
          </hgroup>
          <p class="mt-6 text-slate-700">
            Cuento con 3 años de experiencia (Freelance). Especializado en el
            ecosistema de JavaScript (React, Next.js, Node.js), con sólidos
            conocimientos en Java y SQL. Gracias a mi faceta autodidacta, poseo
            una alta capacidad de aprendizaje y autogestión, logrando
            transformar requerimientos de clientes en aplicaciones funcionales y
            escalables.
          </p>
        </div>
        <figure class="max-w-96 xl:mx-auto">
          <img
            class="grayscale-25 drop-shadow-md mask-l-from-60%"
            src={profile}
            alt=""
            width={400}
            height={400}
          />
        </figure>
      </div>
    </section>
  )
}
