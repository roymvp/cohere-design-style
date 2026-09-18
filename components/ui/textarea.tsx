import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-28 w-full resize-y rounded-[var(--radius-xs)] border border-input bg-canvas px-4 py-3 text-base text-ink caret-ink transition-colors outline-none',
        'placeholder:text-muted-foreground focus-visible:border-[var(--form-focus)] focus-visible:ring-3 focus-visible:ring-ring/40',
        'disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
