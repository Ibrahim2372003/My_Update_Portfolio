'use client'
import { useEffect } from 'react'

let locks = 0

// Locks page scroll (reference-counted so the menu and modal can both use it)
// and compensates for the scrollbar width so the layout does not jump.
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return
    const root = document.documentElement
    if (locks === 0) {
      const sbw = window.innerWidth - root.clientWidth
      root.style.setProperty('padding-right', sbw > 0 ? `${sbw}px` : '')
      root.classList.add('scroll-locked')
    }
    locks += 1
    return () => {
      locks -= 1
      if (locks === 0) {
        root.classList.remove('scroll-locked')
        root.style.removeProperty('padding-right')
      }
    }
  }, [active])
}
