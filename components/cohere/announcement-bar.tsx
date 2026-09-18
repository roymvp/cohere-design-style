'use client'

import * as React from 'react'
import { X } from 'lucide-react'

interface AnnouncementBarProps {
  message: React.ReactNode
  href?: string
  linkLabel?: string
}

export function AnnouncementBar({
  message,
  href,
  linkLabel = '了解更多',
}: AnnouncementBarProps) {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <div className="relative flex h-9 items-center justify-center bg-cohere-black px-12 text-canvas">
      <p className="type-micro text-center">
        {message}{' '}
        {href && (
          <a href={href} className="underline underline-offset-2">
            {linkLabel}
          </a>
        )}
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="关闭公告"
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-canvas/70 transition-colors hover:text-canvas focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring"
      >
        <X aria-hidden />
      </button>
    </div>
  )
}

export type { AnnouncementBarProps }
