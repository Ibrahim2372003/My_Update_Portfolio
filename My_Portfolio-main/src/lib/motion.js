// Motion tokens: one place for easing, duration and stagger so the whole site
// shares a single motion language. (CSS counterparts live in globals.css.)

export const ease = {
  outExpo: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
}

export const dur = {
  micro: 0.18,
  ui: 0.4,
  reveal: 0.7,
  hero: 1.0,
}

export const spring = {
  snappy: { type: 'spring', stiffness: 320, damping: 30 },
  soft: { type: 'spring', stiffness: 170, damping: 26 },
}

export const stagger = { tight: 0.045, base: 0.07 }

// Mask reveal: a line of text rises out of an overflow-hidden wrapper.
export const maskLine = {
  hidden: { y: '112%' },
  show: (i = 0) => ({
    y: '0%',
    transition: { duration: dur.hero, ease: ease.outExpo, delay: i * 0.09 },
  }),
}

export const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: dur.reveal, ease: ease.outExpo, delay: i * stagger.base },
  }),
}
