'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ease } from '@/lib/motion'

const IntroContext = createContext(true)
// Hero waits on this so its entrance plays as the curtain lifts.
export const useIntroReady = () => useContext(IntroContext)

// One-time (per browser session) black curtain: monogram, a red line drawing,
// then the curtain lifts as the hero begins. Skipped for reduced motion and
// repeat visits. Total blocking time is ~1.1s and the page underneath is
// already server-rendered.
export default function Intro({ children }) {
  const [phase, setPhase] = useState('pending') // pending -> playing -> done
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('intro-seen') === '1'
    } catch {}
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (seen || reduce) {
      setPhase('done')
      setReady(true)
      return
    }
    try {
      sessionStorage.setItem('intro-seen', '1')
    } catch {}
    setPhase('playing')
    const t = setTimeout(() => {
      setReady(true)
      setPhase('done')
    }, 1250)
    return () => clearTimeout(t)
  }, [])

  return (
    <IntroContext.Provider value={ready}>
      {children}
      <AnimatePresence>
        {phase !== 'done' && (
          <m.div
            key="intro"
            aria-hidden="true"
            className="intro-overlay fixed inset-0 z-[90] flex items-center justify-center bg-ink on-dark"
            exit={{ y: '-100%', transition: { duration: 0.85, ease: ease.inOut } }}
          >
            {phase === 'playing' && (
              <div className="flex flex-col items-center">
                <div className="overflow-hidden pb-2">
                  <m.span
                    className="block font-display text-7xl leading-none text-white sm:text-8xl"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, ease: ease.outExpo }}
                  >
                    IM<span className="text-red">.</span>
                  </m.span>
                </div>
                <m.span
                  className="mt-3 block h-px w-40 origin-left bg-red"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: ease.outExpo, delay: 0.25 }}
                />
                <m.span
                  className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Ibrahim Mohammed
                </m.span>
              </div>
            )}
          </m.div>
        )}
      </AnimatePresence>
      <noscript>
        <style>{'.intro-overlay{display:none!important}'}</style>
      </noscript>
    </IntroContext.Provider>
  )
}
