'use client'
import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { TECH } from '@/data/projects'
import { ease } from '@/lib/motion'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useScrollLock } from '@/hooks/useScrollLock'
import ProjectCover from '@/components/ProjectCover'
import { ArrowLeft, ArrowRight, ArrowUpRight, Close, GitHub } from '@/components/ui/Icons'

const item = (i, dir = 0) => ({
  initial: { opacity: 0, y: 18, x: dir * 18 },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.6, ease: ease.outExpo, delay: 0.2 + i * 0.06 },
})

// Premium project dialog: shared-element cover, staged content, keyboard and
// focus handling. Everything the viewer can click here comes from projects.js.
export default function ProjectModal({ list, slug, origin, dir, onClose, onNavigate }) {
  const panelRef = useRef(null)
  const project = list.find((p) => p.slug === slug)
  const idx = list.findIndex((p) => p.slug === slug)
  const prev = list[(idx - 1 + list.length) % list.length]
  const next = list[(idx + 1) % list.length]

  useScrollLock(true)
  useFocusTrap(panelRef, true, '[data-autofocus]')

  // Page behind the dialog (header + content) is inert while open.
  useEffect(() => {
    const els = ['page-root', 'site-header'].map((id) => document.getElementById(id)).filter(Boolean)
    els.forEach((el) => (el.inert = true))
    return () => els.forEach((el) => (el.inert = false))
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && list.length > 1) onNavigate(next.slug, 1)
      else if (e.key === 'ArrowLeft' && list.length > 1) onNavigate(prev.slug, -1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate, next, prev, list.length])

  if (!project) return null
  const num = String(idx + 1).padStart(2, '0')
  const total = String(list.length).padStart(2, '0')
  const placeholder = !project.image?.src

  return (
    <m.div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6 lg:p-10">
      <m.div
        aria-hidden
        className="absolute inset-0 bg-ink/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
        aria-describedby="pm-desc"
        tabIndex={-1}
        className="relative z-10 flex h-[100dvh] w-full flex-col overflow-hidden bg-white outline-none sm:h-[min(92dvh,800px)] sm:max-w-6xl"
        initial={{ opacity: 0, y: 60, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.99, transition: { duration: 0.3, ease: ease.inOut } }}
        transition={{ duration: 0.6, ease: ease.outExpo }}
      >
        {/* Header bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-ink/10 pl-5 sm:pl-7">
          <p className="label-mono !text-ink">
            <span className="text-red">{num}</span> / {total}
            <span className="ml-3 hidden text-muted sm:inline">Project</span>
          </p>
          <div className="flex">
            {list.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => onNavigate(prev.slug, -1)}
                  aria-label={`Previous project: ${prev.name}`}
                  className="flex h-12 w-12 items-center justify-center border-l border-ink/10 transition-colors hover:bg-tint"
                >
                  <ArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(next.slug, 1)}
                  aria-label={`Next project: ${next.name}`}
                  className="flex h-12 w-12 items-center justify-center border-l border-ink/10 transition-colors hover:bg-tint"
                >
                  <ArrowRight />
                </button>
              </>
            )}
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              aria-label="Close project details"
              className="group flex h-12 w-12 items-center justify-center border-l border-ink/10 bg-ink text-white transition-colors hover:bg-red"
            >
              <Close className="transition-transform duration-500 ease-out-expo group-hover:rotate-90" />
            </button>
          </div>
        </div>

        {/* Body: scrolls as a whole on mobile; right column scrolls on desktop. */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain lg:grid lg:grid-cols-12 lg:overflow-hidden">
          <div className="relative lg:col-span-5 lg:h-full">
            <m.div
              layoutId={slug === origin ? `cover-${slug}` : undefined}
              className="aspect-[16/10] w-full lg:aspect-auto lg:h-full"
              transition={{ duration: 0.7, ease: ease.outExpo }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <m.div
                  key={slug}
                  className="h-full w-full"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: ease.outExpo }}
                >
                  <ProjectCover project={project} label={false} />
                </m.div>
              </AnimatePresence>
            </m.div>
          </div>

          <div className="lg:col-span-7 lg:h-full lg:overflow-y-auto lg:overscroll-contain">
            <div key={slug} className="px-5 pb-6 pt-8 sm:px-8 lg:px-12 lg:pt-12">
              <m.p {...item(0, dir)} className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="label-mono">{project.year}</span>
                {project.status && (
                  <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink">
                    <span aria-hidden className={`h-1.5 w-1.5 ${project.status.tone === 'live' ? 'bg-red' : 'border border-ink/50'}`} />
                    {project.status.label}
                  </span>
                )}
              </m.p>

              <m.h2 id="pm-title" {...item(1, dir)} className="display text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink">
                {project.name}
              </m.h2>
              <m.p id="pm-desc" {...item(2, dir)} className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink/80">
                {project.description}
              </m.p>

              <m.div {...item(3, dir)} className="mt-9">
                <h3 className="label-mono mb-4">Key features</h3>
                <ol className="border-t border-ink/10">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-4 border-b border-ink/10 py-3 text-[0.95rem] leading-snug">
                      <span className="mt-0.5 font-mono text-[0.7rem] text-red">{String(i + 1).padStart(2, '0')}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ol>
              </m.div>

              {project.highlights.length > 0 && (
                <m.div {...item(4, dir)} className="mt-9 bg-tint p-5 sm:p-6">
                  <h3 className="label-mono mb-3 !text-red">Engineering notes</h3>
                  <ul className="space-y-2.5 text-[0.93rem] leading-snug text-ink/85">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-red" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              )}

              <m.div {...item(5, dir)} className="mt-9">
                <h3 className="label-mono mb-3">Built with</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((id) => (
                    <li key={id} className="border border-ink/20 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider">
                      {TECH[id] || id}
                    </li>
                  ))}
                </ul>
                {placeholder && (
                  <p className="mt-5 text-xs text-muted">
                    The image is designed cover artwork, not a screenshot. Real screenshots will replace it.
                  </p>
                )}
              </m.div>
            </div>

            {/* Actions stay visible at the bottom of the column. */}
            <m.div
              {...item(6, dir)}
              className="sticky bottom-0 flex flex-wrap items-center gap-3 border-t border-ink/10 bg-white px-5 py-4 sm:px-8 lg:px-12"
            >
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary group"
                >
                  Live demo
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-3 px-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  <span aria-hidden className="h-px w-6 bg-ink/30" />
                  No live demo yet
                </span>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline group"
                  aria-label={`GitHub repository for ${project.name} (opens in a new tab)`}
                >
                  <GitHub width={17} height={17} />
                  GitHub repository
                </a>
              )}
            </m.div>
          </div>
        </div>
      </m.div>
    </m.div>
  )
}
