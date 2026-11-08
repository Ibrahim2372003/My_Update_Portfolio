'use client'
import { motion } from 'framer-motion'

/** Small, one-time fade-and-rise used for content blocks as they scroll into view. */
export default function Reveal({ as = 'div', delay = 0, y = 12, className, children, ...props }) {
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
