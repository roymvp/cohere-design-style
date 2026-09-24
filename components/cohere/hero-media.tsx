import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function HeroMedia({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('hero-media', className)}>
      <div className="hero-media-console min-w-0">{children}</div>
      <div className="hero-media-art" aria-hidden="true" />
    </div>
  )
}
