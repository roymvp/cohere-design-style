import * as React from 'react'

import { cn } from '@/lib/utils'

/*
  cohere 风格输入框
  源规范 contact-form-card：矩形输入、细灰边、12–16px 内边距、紧凑标签。
  focus 边框用规范 form-focus 紫（#9b60aa），ring 用 focus-blue。
*/
function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full rounded-[var(--radius-xs)] border border-input bg-canvas px-4 py-3 text-base text-ink',
        'placeholder:text-muted-foreground',
        'transition-colors outline-none',
        'focus-visible:border-[var(--form-focus)] focus-visible:ring-3 focus-visible:ring-ring/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
