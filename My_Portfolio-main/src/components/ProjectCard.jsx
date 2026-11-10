'use client'
import { useState } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'
import { TECH } from '@/data/projects'
import { ease } from '@/lib/motion'
import { usePointerFine } from '@/hooks/usePointerFine'
import ProjectCover from '@/components/ProjectCover'
import { ArrowUpRight } from '@/components/ui/Icons'

function Status({ status }) {
  if (!status) return null
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 ${status.tone === 'live' ? 'bg-red' : 'border border-ink/50'}`}
      />
      {status.label}
    </span>
  )
}

export default function ProjectCard({ project, index, flip, onOpen }) {
  const fine = usePointerFine()
  const [hover, setHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.35 })
  const flagship = project.kind === 'flagship'
  const num = String(index + 1).padStart(2, '0')

  const track = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }

  return (
    <m.li
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: ease.outExpo, layout: { duration: 0.6, ease: ease.outExpo } }}
      className={flagship ? 'lg:col-span-3' : 'lg:col-span-1'}
    >
      <button
        type="button"
        onClick={(e) => onOpen(project.slug, e.currentTarget)}
        onPointerEnter={() => fine && setHover(true)}
        onPointerLeave={() => setHover(false)}
        onPointerMove={fine ? track : undefined}
        aria-label={`Open details for ${project.name}`}
        aria-haspopup="dialog"
        className={`group relative block h-full w-full overflow-hidden border border-ink/15 bg-white text-left transition-colors duration-500 hover:border-ink ${
          flagship ? 'lg:grid lg:grid-cols-12' : ''
        }`}
      >
        {/* Top edge: red bar sweeps across on hover / focus. */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-red transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />

        <span
          className={`relative block overflow-hidden ${
            flagship ? `lg:col-span-7 ${flip ? 'lg:order-2' : ''}` : ''
          }`}
        >
          <m.span
            layoutId={`cover-${project.slug}`}
            className="block aspect-[16/10] origin-center transition-transform duration-[1100ms] ease-out-expo group-hover:scale-[1.045]"
            transition={{ duration: 0.7, ease: ease.outExpo }}
          >
            <ProjectCover project={project} />
          </m.span>
        </span>

        <span
          className={`relative flex flex-col justify-between gap-8 p-6 sm:p-8 ${
            flagship ? 'lg:col-span-5 lg:p-10' : ''
          }`}
        >
          <span className="block">
            <span className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.14em] text-red">{num}</span>
              <Status status={project.status} />
            </span>
            <span
              className={`display block text-ink ${
                flagship ? 'text-[clamp(2rem,3.4vw,3.2rem)]' : 'text-[clamp(1.7rem,2.4vw,2.2rem)]'
              }`}
            >
              <span className="link-draw">{project.name}</span>
            </span>
            <span className={`mt-4 block text-muted ${flagship ? 'text-base' : 'text-[0.95rem]'}`}>
              {project.summary}
            </span>
          </span>

          <span className="flex items-end justify-between gap-4">
            <span className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, flagship ? 5 : 3).map((id) => (
                <span
                  key={id}
                  className="border border-ink/15 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-ink/70"
                >
                  {TECH[id] || id}
                </span>
              ))}
              {project.tech.length > (flagship ? 5 : 3) && (
                <span className="px-1 py-1 font-mono text-[0.62rem] text-muted">
                  +{project.tech.length - (flagship ? 5 : 3)}
                </span>
              )}
            </span>
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/20 text-ink transition-all duration-500 ease-out-expo group-hover:border-red group-hover:bg-red group-hover:text-white group-focus-visible:bg-red group-focus-visible:text-white"
            >
              <ArrowUpRight className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </span>
          </span>
        </span>

        {/* Cursor-following label (fine pointers only). */}
        {fine && (
          <m.span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-red font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white"
            style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
            initial={false}
            animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.35, ease: ease.outExpo }}
          >
            View
          </m.span>
        )}
      </button>
    </m.li>
  )
}
