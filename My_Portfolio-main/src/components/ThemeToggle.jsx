'use client'
import { MoonIcon, SunIcon } from '@/components/ui/Icons'

const iconBase = 'absolute size-5 transition duration-300 ease-out'

// The icons swap purely through the `dark:` variant, so the button is correct on
// first paint (the theme class is set by the inline script in layout.js).
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement
    const next = !root.classList.contains('dark')
    root.classList.toggle('dark', next)
    try {
      localStorage.setItem('darkTheme', String(next))
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-sunken hover:text-fg active:scale-95"
    >
      <MoonIcon
        className={`${iconBase} rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-50 dark:opacity-0`}
      />
      <SunIcon
        className={`${iconBase} rotate-90 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`}
      />
    </button>
  )
}
