'use client'
import { MotionConfig } from 'framer-motion'

// One place to define motion defaults. `reducedMotion="user"` disables transform
// and layout animations for visitors who ask their OS for less motion.
export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  )
}
