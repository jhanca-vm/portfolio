import type { ReactNode } from 'react'

interface Props {
  className?: string
  href: string
  ariaLabel?: string
  children?: ReactNode
}

export default function ExternalLink({
  className,
  href,
  ariaLabel,
  children
}: Props) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
