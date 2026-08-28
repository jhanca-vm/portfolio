import { format } from '@formkit/tempo'
import clsx from 'clsx/lite'

import IconArrow from '@/assets/icons/arrow.svg'
import type { Meta } from '@/types'

import Section from './section'

const metadata = import.meta.glob<Meta>('../pages/blog/**/*.meta.yaml', {
  import: 'default',
  eager: true
})

export default function Posts() {
  return (
    <Section title="Blog" id="blog">
      <ul className="max-w-prose">
        {Object.values(metadata).map(
          ({ slug, date, title, description, callToAction }) => (
            <li key={slug}>
              <article className="text-pretty">
                <time className="text-sm" dateTime={date}>
                  {format(date, { date: 'medium' }, 'es')}
                </time>
                <h3 className="my-1.5 text-lg font-semibold text-slate-600">
                  <a
                    className="transition-colors hover:text-blue-600"
                    href={`/blog/${slug}`}
                  >
                    {title}
                  </a>
                </h3>
                <p>
                  {description}{' '}
                  <a
                    className={clsx(
                      'font-medium text-blue-600 underline-offset-2',
                      'hover:underline'
                    )}
                    href={`/blog/${slug}`}
                  >
                    {callToAction} <IconArrow className="inline h-3" />
                  </a>
                </p>
              </article>
            </li>
          )
        )}
      </ul>
    </Section>
  )
}
