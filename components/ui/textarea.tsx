import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-23 w-full resize-y rounded-[var(--radius-xs)] border border-input bg-canvas p-3 type-caption text-primary caret-ink transition-colors outline-none',
        'placeholder:text-muted-foreground focus-visible:border-[var(--form-focus)] focus-visible:ring-2 focus-visible:ring-[var(--form-focus-ring)]',
        'disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
