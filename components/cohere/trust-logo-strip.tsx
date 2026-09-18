import * as React from 'react'

import { cn } from '@/lib/utils'

interface TrustLogoStripProps extends React.ComponentProps<'section'> {
  label: string
  items: Array<{ name: string; mark?: React.ReactNode }>
  inverted?: boolean
}

export function TrustLogoStrip({
  label,
  items,
  inverted = false,
  className,
  ...props
}: TrustLogoStripProps) {
  return (
    <section className={cn('flex flex-col gap-8 text-center', className)} {...props}>
      <p className={cn('type-caption', inverted ? 'text-canvas/60' : 'text-body-muted')}>
        {label}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {items.map((item) => (
          <li
            key={item.name}
            aria-label={item.name}
            className={cn(
              'font-display text-xl tracking-tight',
              inverted ? 'text-canvas' : 'text-ink',
            )}
          >
            {item.mark ?? item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export type { TrustLogoStripProps }
