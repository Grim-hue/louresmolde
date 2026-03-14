import { cn } from '../../lib/utils'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-silver/40 text-steel',
        className,
      )}
    >
      {children}
    </span>
  )
}
