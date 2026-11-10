'use client'
import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { skillGroups, alsoFamiliar } from '@/data/skills'
import { visibleProjects } from '@/data/projects'
import { ease } from '@/lib/motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/motion/Reveal'
import DrawLine from '@/components/motion/DrawLine'

const usedIn = (id) => visibleProjects.filter((p) => p.tech.includes(id))
const openProject = (slug, trigger) =>
  window.dispatchEvent(new CustomEvent('open-project', { detail: { slug, trigger } }))

export default function Skills() {
  const [active, setActive] = useState(null)
  const matches = active ? usedIn(active.id) : []

  return (
    <Section
      id="skills"
      index="03"
      label="Technical skills"
      title={[[{ t: 'Tools I ' }, { t: 'actually', accent: true }, { t: ' use.' }]]}
      intro="Grouped by what they are for, with no ratings. Select a skill to see which of my projects use it."
    >
      {/* Readout: a skill lights up the projects that really use it. */}
      <Reveal className="mb-12 min-h-[5.5rem] border border-ink/15 p-5 sm:p-6" y={14}>
        <p className="label-mono mb-2">Used in</p>
        <div aria-live="polite" className="min-h-[2.2rem]">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active ? active.id : 'idle'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: ease.outExpo }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              {!active && <span className="text-muted">Choose a skill below.</span>}
              {active && matches.length === 0 && (
                <span className="text-muted">
                  <strong className="font-medium text-ink">{active.label}</strong> is part of my toolkit but is not in a
                  featured project yet. See the journey below.
                </span>
              )}
              {active && matches.length > 0 && (
                <>
                  <strong className="font-display text-2xl text-red">{active.label}</strong>
                  <span aria-hidden className="h-px w-6 bg-ink/30" />
                  {matches.map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={(e) => openProject(p.slug, e.currentTarget)}
                      className="border-b border-ink/40 text-[0.98rem] text-ink transition-colors hover:border-red hover:text-red"
                    >
                      {p.name}
                    </button>
                  ))}
                </>
              )}
            </m.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <div>
        {skillGroups.map((g, gi) => (
          <div key={g.id}>
            <DrawLine />
            <div className="grid gap-5 py-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <Reveal className="flex items-baseline gap-3" y={12}>
                <span className="font-mono text-[0.7rem] text-red">{String(gi + 1).padStart(2, '0')}</span>
                <h3 className="display text-3xl text-ink">{g.title}</h3>
              </Reveal>
            </div>
            <ul className="flex flex-wrap gap-2.5 lg:col-span-9">
              {g.items.map((s, i) => {
                const isActive = active?.id === s.id
                const n = usedIn(s.id).length
                return (
                  <m.li
                    key={s.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, ease: ease.outExpo, delay: i * 0.045 }}
                  >
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onMouseEnter={() => setActive(s)}
                      onFocus={() => setActive(s)}
                      onClick={() => setActive(s)}
                      className={`group relative inline-flex items-center gap-2.5 overflow-hidden border px-4 py-2.5 text-[0.98rem] transition-colors duration-300 ${
                        isActive ? 'border-red bg-tint text-red' : 'border-ink/15 text-ink hover:border-ink'
                      }`}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                      />
                      <span>{s.label}</span>
                      {n > 0 && (
                        <span className="font-mono text-[0.6rem] text-muted group-hover:text-red">
                          <span aria-hidden>{n}</span>
                          <span className="sr-only">used in {n} featured projects</span>
                        </span>
                      )}
                    </button>
                  </m.li>
                )
              })}
            </ul>
            </div>
          </div>
        ))}
        <DrawLine />
        <Reveal as="p" className="mt-6 text-sm text-muted">
          Also familiar with {alsoFamiliar.join(' and ')}. The small number on a skill is how many featured projects use it.
        </Reveal>
      </div>
    </Section>
  )
}
