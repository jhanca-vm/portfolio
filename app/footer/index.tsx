import clsx from 'clsx'
import Github from './github.svg'

export default function Footer() {
  return (
    <footer class="px-6 text-sm sm:px-9 md:px-12">
      <div
        class={clsx(
          'py-9 max-w-6xl mx-auto flex items-center justify-between border-t',
          'border-slate-200'
        )}
      >
        <p>© 2026 Jhan Viloria</p>
        <a
          class="text-slate-600 transition-colors hover:text-blue-600/80"
          href="https://github.com/jhanca-vm"
          target="_blank"
          rel="noreferrer"
        >
          <Github class="h-5" />
        </a>
      </div>
    </footer>
  )
}
