import { format } from '@formkit/tempo'
import type { ReactNode } from 'react'

import RootLayout from './root'

interface Props {
  title: string
  date: string
  description: string
  head?: ReactNode
  children?: ReactNode
}

export default function BlogLayout({
  title,
  date,
  description,
  head,
  children
}: Props) {
  return (
    <RootLayout title={title} description={description} head={head}>
      <header className="p-6 sm:px-9 md:px-12">
        <nav
          className={
            'mx-auto max-w-6xl bg-slate-300/20 px-4 py-3 text-slate-600'
          }
        >
          <ol>
            <li className="inline">
              <a className="font-medium text-blue-600 hover:underline" href="/">
                Inicio
              </a>
            </li>
            <li className="inline before:content-['_/_']">
              <a
                className="font-medium text-blue-600 hover:underline"
                href="/#blog"
              >
                Blog
              </a>
            </li>
            <li className="inline before:content-['_/_']">{title}</li>
          </ol>
        </nav>
      </header>
      <main className="px-6 pt-3 pb-15 sm:px-9 md:px-12">
        <div className="mx-auto max-w-6xl">
          <article
            className={'max-w-prose text-pretty text-slate-600 md:text-lg'}
          >
            <h1
              className={
                'text-3xl font-semibold text-slate-700 md:text-5xl/tight'
              }
            >
              {title}
            </h1>
            <time
              className="mt-3 mb-6 block text-sm text-slate-500 md:mt-6"
              dateTime={date}
            >
              {format(date, { date: 'medium' }, 'es')}
            </time>
            <div className="space-y-6">{children}</div>
          </article>
        </div>
      </main>
    </RootLayout>
  )
}
