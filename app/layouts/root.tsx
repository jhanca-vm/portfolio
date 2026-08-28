import beVietnamPro400 from '@fonts/be-vietnam-pro-latin-400-normal.woff2'
import beVietnamPro500 from '@fonts/be-vietnam-pro-latin-500-normal.woff2'
import beVietnamPro600 from '@fonts/be-vietnam-pro-latin-600-normal.woff2'
import type { ReactNode } from 'react'

import Footer from '@/components/footer'

import fonts from '@/styles/fonts.css?inline'
import tailwind from '@/styles/tailwind.css?url'

interface Props {
  title: string
  description: string
  head?: ReactNode
  children?: ReactNode
}

export default function RootLayout({
  title,
  description,
  head,
  children
}: Props) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${title} - Jhan Viloria`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <style>{fonts}</style>
        <link
          rel="preload"
          href={beVietnamPro400}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href={beVietnamPro500}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href={beVietnamPro600}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="stylesheet" href={tailwind} />
        {head}
      </head>
      <body className="bg-slate-50 text-slate-500">
        {children}
        <Footer />
      </body>
    </html>
  )
}
