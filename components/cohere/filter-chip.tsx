import * as React from 'react'

import { cn } from '@/lib/utils'

interface FilterChipProps extends React.ComponentProps<'button'> {
  active?: boolean
}

export function FilterChip({ active = false, className, ...props }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border px-3.5 py-2 type-feature-heading transition-colors outline-none',
        'focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
        active
          ? 'border-coral bg-coral text-ink'
          : 'border-coral-soft bg-[var(--chip-surface)] text-[var(--coral-ink)] hover:border-coral hover:bg-coral hover:text-primary',
        className,
      )}
      {...props}
    />
  )
}

export type { FilterChipProps }
