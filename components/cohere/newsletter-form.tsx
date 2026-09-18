import * as React from 'react'
import { ArrowRight } from 'lucide-react'

import { Input } from '@/components/ui/input'

interface NewsletterFormProps extends React.ComponentProps<'form'> {
  label?: string
  title: string
  legal?: string
}

export function NewsletterForm({
  label = 'AI moves fast',
  title,
  legal,
  ...props
}: NewsletterFormProps) {
  return (
    <div className="flex max-w-lg flex-col gap-4">
      <span className="type-mono-label text-coral">{label}</span>
      <h2 className="type-card-heading text-canvas">{title}</h2>
      <form className="flex items-center gap-3" {...props}>
        <label htmlFor="newsletter-email" className="sr-only">
          工作邮箱
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="工作邮箱"
          tone="dark"
          required
        />
        <button
          type="submit"
          aria-label="订阅更新"
          className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-xs)] bg-canvas text-ink transition-colors hover:bg-canvas/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring"
        >
          <ArrowRight aria-hidden />
        </button>
      </form>
      {legal && <p className="type-micro text-canvas/50">{legal}</p>}
    </div>
  )
}

export type { NewsletterFormProps }
