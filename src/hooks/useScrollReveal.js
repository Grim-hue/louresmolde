import { useRef } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Returns [ref, isInView] for scroll-triggered reveal animations.
 * Respects prefers-reduced-motion: when reduced motion is preferred,
 * isInView is always true (content immediately visible, no animation).
 *
 * @param {object} options - Options forwarded to framer-motion's useInView
 * @param {string} [options.margin='-8% 0px'] - Intersection margin
 * @param {boolean} [options.once=true] - Only trigger once
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const isInView = useInView(ref, {
    once: true,
    margin: '-8% 0px',
    ...options,
  })

  return [ref, reducedMotion ? true : isInView]
}
