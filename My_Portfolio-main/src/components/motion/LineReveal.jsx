'use client'
import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import { dur, ease } from '@/lib/motion'

// Headline "mask reveal": every line rises out of its own clipped wrapper.
// `lines` is an array of nodes (or arrays of {t, accent}). `play` lets the hero
// hold the animation until the intro curtain lifts; otherwise it triggers in view.
export default function LineReveal({
  as = 'h2',
  lines,
  className,
  id,
  label,
  lineClassName = '',
  play,
  delay = 0,
  step = 0.09,
}) {
  const Tag = as
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, amount: 0.4 })
  const run = typeof play === 'boolean' ? play : seen
  return (
    <Tag ref={ref} className={className} id={id} aria-label={label}>
      {lines.map((line, i) => (
        <span key={i} aria-hidden={label ? true : undefined} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <m.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: '112%' }}
            animate={{ y: run ? '0%' : '112%' }}
            transition={{ duration: dur.hero, ease: ease.outExpo, delay: delay + i * step }}
          >
            {Array.isArray(line)
              ? line.map((seg, j) =>
                  seg.accent ? (
                    <em key={j} className="font-display italic text-red">
                      {seg.t}
                    </em>
                  ) : (
                    <span key={j}>{seg.t}</span>
                  ),
                )
              : line}
          </m.span>
        </span>
      ))}
    </Tag>
  )
}
