import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
  actionLabel?: string
}

export function ProductCard({
  title,
  description,
  features,
  href,
  actionLabel = '查看规格',
}: ProductCardProps) {
  return (
    <Card tone="stone" className="min-h-65 gap-6 rounded-[var(--radius-sm)] p-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Separator className="bg-ink/15" />
      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 type-caption text-ink">
            <Check aria-hidden className="mt-0.5 size-4 text-deep-green" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button nativeButton={false} render={<a href={href} />} variant="outline" size="pill">
          {actionLabel}
        </Button>
      </div>
    </Card>
  )
}

export type { ProductCardProps }
