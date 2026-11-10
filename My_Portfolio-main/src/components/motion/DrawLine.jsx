'use client'
import { m } from 'framer-motion'
import { ease } from '@/lib/motion'

// The signature "red line": a hairline that draws itself when scrolled into view.
export default function DrawLine({
  axis = 'x',
  color = 'bg-ink/15',
  accent = false, // renders a short dark-red lead segment over the hairline
  delay = 0,
  duration = 1.1,
  className = '',
}) {
  const horizontal = axis === 'x'
  const grow = (c, d = duration) => (
    <m.span
      aria-hidden
      className={`absolute ${horizontal ? 'inset-x-0 top-0 h-px origin-left' : 'inset-y-0 left-0 w-px origin-top'} ${c}`}
      initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: d, ease: ease.outExpo, delay }}
    />
  )
  return (
    <span
      aria-hidden
      className={`relative block ${horizontal ? 'h-px w-full' : 'h-full w-px'} ${className}`}
    >
      {grow(color)}
      {accent && (
        <m.span
          aria-hidden
          className={`absolute bg-red ${horizontal ? 'left-0 top-0 h-px w-16 origin-left' : 'left-0 top-0 h-16 w-px origin-top'}`}
          initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
          whileInView={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.8, ease: ease.outExpo, delay: delay + 0.15 }}
        />
      )}
    </span>
  )
}
