import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface HeroPhotoCardProps extends React.ComponentProps<'figure'> {
  src: string
  alt: string
  overlay?: React.ReactNode
  priority?: boolean
}

export function HeroPhotoCard({
  src,
  alt,
  overlay,
  priority = false,
  className,
  ...props
}: HeroPhotoCardProps) {
  return (
    <figure
      className={cn(
        'isolate overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-soft-stone',
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] min-h-72">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
        />
        {overlay && (
          <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:right-6 md:w-[min(22rem,60%)]">
            {overlay}
          </div>
        )}
      </div>
    </figure>
  )
}

export type { HeroPhotoCardProps }
