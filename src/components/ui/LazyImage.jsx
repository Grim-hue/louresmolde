import { useState } from 'react'
import { cn, img } from '../../lib/utils'

export default function LazyImage({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const imageSrc = typeof src === 'string' && !src.startsWith('http') ? img(src) : src

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      className={cn(
        className,
        !loaded && 'opacity-0',
        loaded && 'transition-opacity duration-300'
      )}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}
