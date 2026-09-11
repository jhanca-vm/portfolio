import IconNpm from '@/assets/icons/npm.svg'

import ExternalLink from './external-link'
import Section from './section'

export default function Libraries() {
  return (
    <Section title="Librerías">
      <ExternalLink
        className="block max-w-prose rounded-sm p-3 hover:bg-slate-300/20"
        href="https://www.npmjs.com/package/rsbuild-plugin-ssg"
      >
        <h3 className="text-lg font-medium text-slate-600">
          rsbuild-plugin-ssg{' '}
          <IconNpm
            className="inline w-6 align-text-top text-red-700"
            aria-hidden
          />
        </h3>
        <p className="mt-1.5 text-sm">
          Plugin de generación de sitios estáticos para Rsbuild. Prerrenderiza
          páginas con cero JavaScript por defecto e interactividad selectiva
          mediante Islands Architecture.
        </p>
      </ExternalLink>
    </Section>
  )
}
