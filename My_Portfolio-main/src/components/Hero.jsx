'use client'
import { useRef } from 'react'
import { m } from 'framer-motion'
import { hero } from '@/data/profile'
import { visibleProjects } from '@/data/projects'
import { rise } from '@/lib/motion'
import LineReveal from '@/components/motion/LineReveal'
import Magnetic from '@/components/motion/Magnetic'
import CountUp from '@/components/motion/CountUp'
import DrawLine from '@/components/motion/DrawLine'
import { useIntroReady } from '@/components/motion/Intro'
import { ArrowDown, ArrowRight } from '@/components/ui/Icons'

// Verified tech from the résumé and project repositories.
const TICKER = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Vercel AI SDK',
  'Vitest',
  'Playwright',
  'Tailwind CSS',
]

const plus = (hex) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><path d='M22 18v8M18 22h8' stroke='${hex}' stroke-width='1'/></svg>`,
  )}")`

export default function Hero() {
  const ready = useIntroReady()
  const ref = useRef(null)
  const live = visibleProjects.filter((p) => p.links.live).length

  // Pointer position is written straight to CSS variables (no React state).
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
    el.style.setProperty('--on', '1')
  }
  const onLeave = () => ref.current?.style.setProperty('--on', '0')

  const state = ready ? 'show' : 'hidden'

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative isolate flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden pt-[var(--header-h)]"
    >
      {/* Technical backdrop: a faint crosshair grid; dark-red marks reveal near the pointer. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.55]" style={{ backgroundImage: plus('#d9d2d2') }} />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: plus('#8B0000'),
            opacity: 'var(--on, 0)',
            WebkitMaskImage: 'radial-gradient(240px circle at var(--mx, 50%) var(--my, 40%), #000, transparent 70%)',
            maskImage: 'radial-gradient(240px circle at var(--mx, 50%) var(--my, 40%), #000, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-5 pb-10 pt-12 sm:px-8 lg:px-10">
        {/* Eyebrow */}
        <m.div
          className="mb-7 flex items-center gap-4 sm:mb-10"
          variants={rise}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <span className="h-1.5 w-1.5 bg-red" aria-hidden />
          <span className="label-mono !text-ink">{hero.eyebrow}</span>
          <span className="hidden h-px w-16 bg-ink/20 sm:block" aria-hidden />
          <span className="label-mono hidden sm:inline">Open to junior roles and internships</span>
        </m.div>

        {/* Headline: three masked lines; the accent word is the signature red. */}
        <LineReveal
          as="h1"
          id="hero-title"
          label={hero.lines.map((l) => l.map((x) => x.t).join('')).join(' ')}
          lines={hero.lines}
          play={ready}
          delay={0.12}
          className="display text-[clamp(2.2rem,10.4vw,10.5rem)] text-ink"
        />

        {/* Red rule that draws under the headline */}
        <m.div
          className="mt-8 h-px w-full origin-left bg-ink/15 sm:mt-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: ready ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          <span className="block h-px w-24 bg-red" />
        </m.div>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <m.p
              className="max-w-xl text-[1.05rem] leading-relaxed text-ink/80 sm:text-lg"
              variants={rise}
              initial="hidden"
              animate={state}
              custom={5}
            >
              {hero.summary}
            </m.p>
            <m.div
              className="mt-8 flex flex-wrap items-center gap-3"
              variants={rise}
              initial="hidden"
              animate={state}
              custom={7}
            >
              <Magnetic>
                <a href="#projects" className="btn btn-primary group">
                  View projects
                  <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn btn-outline group">
                  Get in touch
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </m.div>
          </div>

          <m.dl
            className="grid grid-cols-2 gap-6 lg:col-span-5 lg:col-start-8"
            variants={rise}
            initial="hidden"
            animate={state}
            custom={9}
          >
            {[
              ['Projects', visibleProjects.length],
              ['Live demos', live],
            ].map(([label, n]) => (
              <div key={label} className="border-t border-ink/15 pt-3">
                <dt className="label-mono">{label}</dt>
                <dd className="display mt-1 text-6xl text-ink">
                  <CountUp to={n} />
                </dd>
              </div>
            ))}
          </m.dl>
        </div>
      </div>

      {/* Tech ticker */}
      <m.div
        className="ticker relative border-y border-ink/10 bg-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="overflow-hidden py-3.5" role="presentation">
          <ul className="ticker-track flex w-max items-center gap-10 pr-10">
            {[...TICKER, ...TICKER].map((t, i) => (
              <li
                key={i}
                aria-hidden={i >= TICKER.length ? true : undefined}
                className="flex items-center gap-10 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted"
              >
                {t}
                <span className="h-1 w-1 bg-red" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </m.div>
    </section>
  )
}
