'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'framer-motion'
import { TECH, filterOptions, visibleProjects } from '@/data/projects'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import Reveal from '@/components/motion/Reveal'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null) // { slug, origin, dir }
  const [mounted, setMounted] = useState(false)
  const trigger = useRef(null) // element that opened the dialog, for focus return

  const shown =
    filter === 'all' ? visibleProjects : visibleProjects.filter((p) => p.tech.includes(filter))
  const live = visibleProjects.filter((p) => p.links.live).length

  useEffect(() => setMounted(true), [])

  const openProject = useCallback((slug, el) => {
    trigger.current = el || document.activeElement
    setOpen({ slug, origin: slug, dir: 0 })
    // History entry so the mobile Back button closes the dialog.
    window.history.pushState({ modal: slug }, '', `#project=${slug}`)
  }, [])

  const closeProject = useCallback(() => {
    if (window.history.state?.modal) window.history.back()
    else setOpen(null)
  }, [])

  const navigate = useCallback((slug, dir) => {
    setOpen((o) => (o ? { ...o, slug, dir } : o))
    window.history.replaceState({ modal: slug }, '', `#project=${slug}`)
  }, [])

  useEffect(() => {
    const onPop = () => {
      if (!window.history.state?.modal) setOpen(null)
    }
    // Opened from elsewhere (e.g. a skill's "used in" list).
    const onOpen = (e) => openProject(e.detail.slug, e.detail.trigger)
    window.addEventListener('popstate', onPop)
    window.addEventListener('open-project', onOpen)
    // Deep link: /#project=slug
    const match = window.location.hash.match(/^#project=([\w-]+)$/)
    if (match && visibleProjects.some((p) => p.slug === match[1])) {
      window.history.replaceState({ modal: match[1] }, '', window.location.hash)
      setOpen({ slug: match[1], origin: null, dir: 0 })
    }
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('open-project', onOpen)
    }
  }, [openProject])

  const list = open && !shown.some((p) => p.slug === open.slug) ? visibleProjects : shown

  return (
    <Section
      id="projects"
      index="01"
      label="Selected work"
      title={[[{ t: 'Selected ' }, { t: 'work', accent: true }]]}
      intro={`${visibleProjects.length} projects, each with its source on GitHub. ${live} of them have a working live demo. Open any card for the details.`}
    >
      {/* Filter chips with a sliding highlight */}
      <Reveal className="mb-10 flex flex-wrap items-center gap-2" y={12}>
        <span className="label-mono mr-2">Filter</span>
        {['all', ...filterOptions].map((id) => {
          const active = filter === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={active}
              className={`relative px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-wider transition-colors ${
                active ? 'text-white' : 'text-ink/70 hover:text-ink'
              } border border-ink/15`}
            >
              {active && (
                <m.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-0 bg-ink"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{id === 'all' ? 'All' : TECH[id]}</span>
            </button>
          )
        })}
        <span className="ml-auto font-mono text-[0.68rem] text-muted" aria-live="polite">
          {shown.length} of {visibleProjects.length}
        </span>
      </Reveal>

      <m.ul layout className="grid gap-6 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={visibleProjects.indexOf(p)}
              flip={visibleProjects.indexOf(p) % 2 === 1}
              onOpen={openProject}
            />
          ))}
        </AnimatePresence>
      </m.ul>

      {shown.length === 0 && <p className="py-16 text-center text-muted">No projects match this filter.</p>}

      {mounted &&
        createPortal(
          <AnimatePresence
            onExitComplete={() => {
              // The page is inert while the dialog is open; once it is released,
              // put focus back where the user was.
              const el = trigger.current
              if (el && el.isConnected) requestAnimationFrame(() => el.focus({ preventScroll: true }))
            }}
          >
            {open && (
              <ProjectModal
                key="modal"
                list={list}
                slug={open.slug}
                origin={open.origin}
                dir={open.dir}
                onClose={closeProject}
                onNavigate={navigate}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </Section>
  )
}
