import { cn } from '../../lib/utils'

/**
 * Button variants:
 *  - primary: accent orange fill (main CTAs)
 *  - secondary: brand blue fill
 *  - outline: transparent with border
 *  - ghost: text-only with hover state
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-light active:scale-[0.98] shadow-sm',
    secondary:
      'bg-brand text-white hover:bg-brand-light active:scale-[0.98] shadow-sm',
    outline:
      'border-2 border-graphite text-graphite hover:bg-graphite hover:text-white active:scale-[0.98]',
    'outline-white':
      'border-2 border-white text-white hover:bg-white hover:text-graphite active:scale-[0.98]',
    ghost:
      'text-accent hover:text-accent-light underline-offset-4 hover:underline',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-sm rounded-md',
    lg: 'px-8 py-4 text-base rounded-md',
  }

  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Tag>
  )
}
