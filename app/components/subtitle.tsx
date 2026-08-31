import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function Subtitle({ children }: Props) {
  return (
    <h2 className="mt-12 text-2xl font-semibold text-slate-700 md:text-3xl">
      {children}
    </h2>
  )
}
