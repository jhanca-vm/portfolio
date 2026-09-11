import type { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <section className="my-24 px-6 sm:px-9 md:my-30 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2
          className={
            'mb-12 flex items-center gap-9 text-2xl font-semibold md:text-3xl'
          }
        >
          <span>{title}</span>
          <span className="grow border-t-2 border-dashed border-olive-300" />
        </h2>
        {children}
      </div>
    </section>
  )
}
