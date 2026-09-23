import * as React from 'react'

import { cn } from '@/lib/utils'

interface FeatureBandProps extends React.ComponentProps<'section'> {
  title: string
  description?: string
  action?: React.ReactNode
  tone?: 'green' | 'forest' | 'sage' | 'navy'
}

const toneBg: Record<NonNullable<FeatureBandProps['tone']>, string> = {
  green: 'bg-deep-green',
  forest: 'bg-forest-green',
  sage: 'bg-sage-green',
  navy: 'bg-dark-navy',
}

export function FeatureBand({
  title,
  description,
  action,
  tone = 'green',
  children,
  className,
  ...props
}: FeatureBandProps) {
  return (
    <section
      className={cn(
        'rounded-[var(--radius-lg)] px-6 py-12 text-canvas md:px-10',
        toneBg[tone],
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-6 border-b border-canvas/15 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="type-section-heading">{title}</h2>
          {description && <p className="type-body-large text-canvas/70">{description}</p>}
        </div>
        {action}
      </div>
      <div className="pt-8">{children}</div>
    </section>
  )
}

export type { FeatureBandProps }
