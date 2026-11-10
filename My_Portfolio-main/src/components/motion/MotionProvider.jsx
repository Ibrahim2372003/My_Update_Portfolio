'use client'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { ease } from '@/lib/motion'

// domMax is loaded lazily (after first paint) because layout animations and
// shared-element transitions (the header indicator, the project modal image)
// need it. All components use the lightweight `m` primitives.
const loadFeatures = () => import('./features').then((mod) => mod.default)

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={loadFeatures}>
      {/* reducedMotion="user": transform/layout animations are disabled for
          visitors who ask their OS for less motion. */}
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: ease.outExpo }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
