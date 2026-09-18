import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CapabilityCardProps extends React.ComponentProps<'article'> {
  visual: React.ReactNode
  title: string
  description: string
  href: string
  linkLabel?: string
}

export function CapabilityCard({
  visual,
  title,
  description,
  href,
  linkLabel = '了解能力',
  className,
  ...props
}: CapabilityCardProps) {
  return (
    <article
      className={cn('flex flex-col gap-4 border-t border-hairline pt-6', className)}
      {...props}
    >
      <div className="flex size-12 items-center justify-center rounded-[var(--radius-sm)] bg-pale-blue text-action-blue [&_svg]:size-6 [&_svg]:stroke-[1.5]">
        {visual}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="type-feature-heading text-ink">{title}</h3>
        <p className="type-body text-body-muted">{description}</p>
        <Button render={<a href={href} />} variant="link" size="text" className="self-start">
          {linkLabel}
        </Button>
      </div>
    </article>
  )
}

export type { CapabilityCardProps }
