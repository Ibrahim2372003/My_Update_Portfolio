'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { navItems, sectionIds } from '@/data/navigation'
import { profile, socials } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollLock } from '@/hooks/useScrollLock'
import { ease } from '@/lib/motion'
import { ArrowUpRight } from '@/components/ui/Icons'

function NavLink({ item, active, onClick }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      aria-current={active ? 'true' : undefined}
      className="group relative flex h-[var(--header-h)] items-center gap-2 px-3.5 text-[0.92rem] text-white"
    >
      <span className="font-mono text-[0.62rem] text-muted-dark transition-colors group-hover:text-white">
        {item.num}
      </span>
      {/* Text "roll": a duplicate label slides up on hover. */}
      <span className="relative block h-[1.3em] overflow-hidden leading-[1.3]">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full group-focus-visible:-translate-y-full">
          {item.name}
        </span>
        <span
          aria-hidden
          className="absolute left-0 top-full block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full group-focus-visible:-translate-y-full"
        >
          {item.name}
        </span>
      </span>
      {active && (
        <m.span
          layoutId="nav-indicator"
          className="absolute inset-x-3.5 bottom-0 h-[2px] bg-red"
          transition={{ type: 'spring', stiffness: 420, damping: 36 }}
        />
      )}
    </a>
  )
}

export default function Header() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  const menuRef = useRef(null)

  useScrollLock(open)

  // Hide on scroll down, reveal on scroll up (never while the menu is open).
  useMotionValueEvent(scrollY, 'change', (y) => {
    if (open) return
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 180)
  })

  // Background content is inert while the full-screen menu is open.
  useEffect(() => {
    const root = document.getElementById('page-root')
    if (root) root.inert = open
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (root) root.inert = false
    }
  }, [open])

  // Close the menu when the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const fn = () => mq.matches && setOpen(false)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  return (
    <>
      <m.header
        id="site-header"
        className="on-dark fixed inset-x-0 top-0 z-[60] bg-ink text-white"
        style={{ height: 'var(--header-h)' }}
        animate={{ y: hidden ? '-101%' : '0%' }}
        transition={{ duration: 0.45, ease: ease.outExpo }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="mx-auto flex h-full max-w-page items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-baseline gap-3" aria-label={`${profile.name}, back to top`}>
            <span className="font-display text-[1.75rem] leading-none">
              IM<span className="text-red transition-transform duration-300 group-hover:translate-y-[-2px] inline-block">.</span>
            </span>
            <span className="hidden font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-dark sm:inline">
              {profile.role}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink item={item} active={active === item.id} />
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="relative -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <m.span
                className="absolute left-0 top-0 block h-px w-full bg-white"
                animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease: ease.outExpo }}
              />
              <m.span
                className="absolute bottom-0 left-0 block h-px w-full bg-white"
                animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease: ease.outExpo }}
              />
            </span>
          </button>
        </div>

        {/* Scroll progress: the red line. */}
        <m.span
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-red/90"
          style={{ scaleX: progress }}
        />
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="on-dark fixed inset-0 z-[55] flex flex-col bg-ink px-5 pb-8 pt-[calc(var(--header-h)+1.5rem)] text-white"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: ease.inOut }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {navItems.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <m.a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line-dark py-3 font-display text-[2.6rem] leading-none"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.7, ease: ease.outExpo, delay: 0.15 + i * 0.06 }}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    <span className="font-mono text-xs text-red-300 text-muted-dark">{item.num}</span>
                    <span className={active === item.id ? 'italic text-white' : ''}>{item.name}</span>
                  </m.a>
                </li>
              ))}
            </ul>
            <m.div
              className="flex flex-wrap gap-x-6 gap-y-2 pt-6 font-mono text-xs uppercase tracking-widest text-muted-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.55 } }}
              exit={{ opacity: 0 }}
            >
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className="inline-flex items-center gap-1 hover:text-white"
                  {...(s.id !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {s.label}
                  <ArrowUpRight width={12} height={12} />
                </a>
              ))}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
