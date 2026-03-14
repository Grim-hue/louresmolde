/**
 * Utility: combine class names, filtering out falsy values.
 * Lightweight replacement for clsx/classnames.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
