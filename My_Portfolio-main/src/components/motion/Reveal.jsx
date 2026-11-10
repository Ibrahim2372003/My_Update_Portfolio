'use client'
import { m } from 'framer-motion'
import { ease, dur } from '@/lib/motion'

// Scroll-triggered rise + fade. `i` staggers siblings; direction picks the axis.
export default function Reveal({
  as = 'div',
  i = 0,
  y = 24,
  x = 0,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  children,
  ...rest
}) {
  const Tag = m[as] || m.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: dur.reveal, ease: ease.outExpo, delay: delay + i * 0.07 }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
