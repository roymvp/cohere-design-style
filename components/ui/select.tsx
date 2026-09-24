import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export function Select({ className, ...props }: ComponentProps<'select'>) {
  return (
    <select
      data-slot="select"
      className={cn(
        'min-h-11 w-full rounded-[var(--radius-xs)] border border-input bg-canvas p-3 type-caption text-primary outline-none',
        'focus-visible:border-[var(--form-focus)] focus-visible:ring-2 focus-visible:ring-[var(--form-focus-ring)]',
        'disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}
