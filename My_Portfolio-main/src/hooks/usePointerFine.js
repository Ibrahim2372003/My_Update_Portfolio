'use client'
import { useEffect, useState } from 'react'

// True only for devices with a hover-capable fine pointer (mouse / trackpad).
// Pointer effects (magnetic buttons, cursor label, parallax) key off this.
export function usePointerFine() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return fine
}
