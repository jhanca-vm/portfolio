import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function InlineCode({ children }: Props) {
  return (
    <span className="rounded-md bg-olive-100 px-1.5 shadow-inner">
      {children}
    </span>
  )
}
