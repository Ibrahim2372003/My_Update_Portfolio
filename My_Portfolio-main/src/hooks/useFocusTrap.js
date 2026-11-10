'use client'
import { useEffect } from 'react'

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'

// Keeps Tab / Shift+Tab inside `ref` while `active` and moves focus in on open.
// Returning focus on close is the caller's job: the page behind a dialog is
// inert (which blurs the trigger), so the caller restores it once inert is off.
export function useFocusTrap(ref, active, initialFocusSelector) {
  useEffect(() => {
    if (!active || !ref.current) return
    const node = ref.current

    const first = initialFocusSelector ? node.querySelector(initialFocusSelector) : null
    ;(first || node).focus({ preventScroll: true })

    const onKey = (e) => {
      if (e.key !== 'Tab') return
      const items = [...node.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null)
      if (!items.length) {
        e.preventDefault()
        return
      }
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      if (e.shiftKey && (document.activeElement === firstEl || document.activeElement === node)) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }, [active, ref, initialFocusSelector])
}
