import * as React from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  tone?: 'light' | 'dark'
}

function Input({ className, type, tone = 'light', ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full rounded-[var(--radius-xs)] border px-4 py-3 text-base transition-colors outline-none',
        'focus-visible:border-[var(--form-focus)] focus-visible:ring-3 focus-visible:ring-ring/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        tone === 'dark'
          ? 'border-canvas/20 bg-canvas/5 text-canvas caret-canvas placeholder:text-canvas/50'
          : 'border-input bg-canvas text-ink caret-ink placeholder:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
export type { InputProps }
