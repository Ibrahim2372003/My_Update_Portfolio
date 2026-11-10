'use client'
import { m, useMotionValue, useSpring } from 'framer-motion'
import { usePointerFine } from '@/hooks/usePointerFine'

// Gently pulls its child toward the pointer. Only on fine-pointer devices;
// touch and keyboard users get the plain element. Driven by motion values, so
// it never re-renders React on pointer move.
export default function Magnetic({ children, strength = 0.28, className = '' }) {
  const fine = usePointerFine()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  if (!fine) return <span className={`inline-block ${className}`}>{children}</span>

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const leave = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <m.span
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {children}
    </m.span>
  )
}
