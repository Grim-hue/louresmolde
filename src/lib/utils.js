/**
 * Utility: combine class names, filtering out falsy values.
 * Lightweight replacement for clsx/classnames.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Prepend Vite's base URL to asset paths so they resolve correctly
 * both locally (base = '/') and on GitHub Pages (base = '/louresmolde/').
 */
export const img = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
