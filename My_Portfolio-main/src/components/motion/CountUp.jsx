'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

// Counts up to `to` once when visible. Only used for numbers that are true
// (e.g. the number of projects on the page); reduced motion shows the value.
export default function CountUp({ to, pad = 2, duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return setN(to)
    const c = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref} className="tabular-nums">
      {String(n).padStart(pad, '0')}
    </span>
  )
}
