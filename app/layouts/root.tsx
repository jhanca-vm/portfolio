import clsx from 'clsx/lite'
import type { ReactNode } from 'react'
import IconGithub from '@/assets/icons/github.svg'
import fonts from '@/styles/fonts.css?inline'

interface Props {
  title: string
  description: string
  children?: ReactNode
}

export default function RootLayout({ title, description, children }: Props) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <style>{fonts}</style>
      </head>
      <body className="bg-slate-50 text-slate-500">
        <main>{children}</main>
        <footer className="px-6 text-sm sm:px-9 md:px-12">
          <div
            className={clsx(
              'py-9 max-w-6xl mx-auto flex items-center justify-between',
              'border-t border-olive-300'
            )}
          >
            <p>© 2026 Jhan Viloria</p>
            <a
              className="text-slate-600 transition-colors hover:text-blue-600"
              href="https://github.com/jhanca-vm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IconGithub className="h-5" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}
