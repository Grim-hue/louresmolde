/**
 * Utility: combine class names, filtering out falsy values.
 * Lightweight replacement for clsx/classnames.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Prepend Vite's base URL to asset paths so they resolve correctly
 * Kept for portability if the site is ever served from a sub-path again;
 * with a custom domain BASE_URL is simply '/'.
 */
export const img = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
