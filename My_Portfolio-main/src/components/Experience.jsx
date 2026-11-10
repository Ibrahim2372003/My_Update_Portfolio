'use client'
import { useRef } from 'react'
import { m, useScroll, useSpring } from 'framer-motion'
import { journey } from '@/data/experience'
import { ease } from '@/lib/motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/motion/Reveal'

const KIND = { work: 'Experience', training: 'Training', education: 'Education' }

export default function Experience() {
  const ref = useRef(null)
  // The red spine fills as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 70%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })

  return (
    <Section
      id="journey"
      index="04"
      label="Experience and learning"
      title={[[{ t: 'Experience and ' }, { t: 'learning', accent: true }]]}
      intro="Taken from my résumé: internships, teaching, and the training that got me here."
    >
      <div ref={ref} className="relative">
        {/* Spine: faint base line + red progress line */}
        <span aria-hidden className="absolute bottom-0 left-[5px] top-2 w-px bg-ink/15 lg:left-[13.5rem]" />
        <m.span
          aria-hidden
          className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-red lg:left-[13.5rem]"
          style={{ scaleY: fill }}
        />

        <ol className="space-y-14 lg:space-y-20">
          {journey.map((j, i) => (
            <li key={j.id} className="relative grid gap-3 pl-8 lg:grid-cols-[12rem_1fr] lg:gap-14 lg:pl-0">
              {/* Node */}
              <m.span
                aria-hidden
                className="absolute left-0 top-[0.55rem] z-10 h-[11px] w-[11px] border border-ink bg-white lg:left-[13.5rem] lg:-ml-[5px]"
                initial={{ scale: 0, backgroundColor: '#ffffff' }}
                whileInView={{ scale: 1, backgroundColor: '#8B0000', borderColor: '#8B0000' }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, ease: ease.outExpo }}
              />

              <Reveal x={-14} y={0} className="lg:text-right">
                <p className="font-mono text-[0.78rem] tracking-[0.06em] text-ink">{j.display}</p>
                <p className="label-mono mt-1">{KIND[j.kind]}</p>
              </Reveal>

              <div className="lg:pl-14">
                <Reveal as="h3" className="display text-[clamp(1.7rem,3vw,2.5rem)] text-ink">
                  {j.title}
                </Reveal>
                <Reveal as="p" i={1} className="mt-2 text-[0.98rem] text-muted">
                  <span className="font-medium text-ink">{j.org}</span>
                  {j.place ? <span> · {j.place}</span> : null}
                </Reveal>
                {j.points.length > 0 && (
                  <ul className="mt-5 max-w-2xl space-y-2.5">
                    {j.points.map((p, k) => (
                      <Reveal as="li" key={k} i={k + 2} y={14} className="flex gap-3 text-[0.96rem] leading-snug text-ink/85">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-red" />
                        <span>{p}</span>
                      </Reveal>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
