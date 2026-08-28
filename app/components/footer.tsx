import clsx from 'clsx/lite'

import IconGithub from '@/assets/icons/github.svg'
import IconX from '@/assets/icons/x.svg'

import ExternalLink from './external-link'

export default function Footer() {
  return (
    <footer className="px-6 text-sm sm:px-9 md:px-12">
      <div
        className={clsx(
          'py-9 max-w-6xl mx-auto flex items-center justify-between',
          'border-t border-olive-300'
        )}
      >
        <p>© 2026 Jhan Viloria</p>
        <div className="flex gap-3">
          <ExternalLink
            className="text-slate-600 transition-colors hover:text-blue-600"
            href="https://github.com/jhanca-vm"
            ariaLabel="GitHub"
          >
            <IconGithub className="h-5" />
          </ExternalLink>
          <ExternalLink
            className="text-slate-600 transition-colors hover:text-blue-600"
            href="https://x.com/jhanca_vm"
            ariaLabel="X"
          >
            <IconX className="h-5" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
