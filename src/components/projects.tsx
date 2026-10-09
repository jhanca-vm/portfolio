import clsx from 'clsx/lite'

import enLaMano from '@/assets/en-la-mano.avif'
import fxChecker from '@/assets/fx-checker.avif'
import healthy from '@/assets/healthy.avif'
import passwordGenerator from '@/assets/password-generator.avif'

import ExternalLink from './external-link'
import Section from './section'

const list = [
  [
    'password-generator',
    'Generador de contraseñas.',
    'passwordgenerator.koyeb.app',
    passwordGenerator
  ],
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
    'Sitio web de préstamos en línea.',
    'enlamano.com.uy',
    enLaMano
  ]
]

export default function Projects() {
  return (
    <Section title="Proyectos">
      <ul className="grid gap-9 md:grid-cols-2">
        {list.map(([id, description, domain, screenshot]) => (
          <li
            className={clsx(
              'overflow-hidden pt-9 pl-9 flex flex-col rounded-md',
              'bg-slate-300/20 lg:pl-12'
            )}
            key={id}
          >
            <p
              className={
                'mr-9 font-medium text-pretty text-slate-600 md:text-lg/snug'
              }
            >
              {description}
            </p>
            <div className="mt-3 mb-6 flex gap-3 text-sm">
              <ExternalLink
                className="text-blue-600 underline-offset-2 hover:underline"
                href={`https://${domain}`}
              >
                Visitar sitio
              </ExternalLink>
              |
              <ExternalLink
                className="text-red-700 underline-offset-2 hover:underline"
                href={`https://github.com/jhanca-vm/${id}`}
              >
                Ver repositorio
              </ExternalLink>
            </div>
            <img
              className={
                'mt-auto rounded-tl-md rounded-br-md opacity-95 shadow-lg'
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
    </Section>
  )
}
