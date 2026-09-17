import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  cohere 风格卡片
  源规范 components：capability-card（白面细边）/ product-card（暖石 soft-stone）
  / dark-feature-band（深绿）/ agent-console-card（近黑）。
  规范强调「扁平」——靠面色交替、圆角与细边分层，不用重投影。
*/
const cardVariants = cva('flex flex-col rounded-[var(--radius-md)]', {
  variants: {
    tone: {
      // 白面能力卡：仅细边描线，无投影
      plain: 'border border-card-border bg-card text-card-foreground p-6',
      // 暖石产品卡
      stone: 'bg-soft-stone text-ink p-8',
      // 深绿产品带
      green: 'bg-deep-green text-canvas p-8 rounded-[var(--radius-lg)]',
      // 深蓝安全/金融带
      navy: 'bg-dark-navy text-canvas p-8 rounded-[var(--radius-lg)]',
      // 近黑 agent console
      console: 'bg-primary text-canvas p-6 rounded-[var(--radius-sm)]',
    },
  },
  defaultVariants: {
    tone: 'plain',
  },
})

function Card({
  className,
  tone,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div data-slot="card" className={cn(cardVariants({ tone, className }))} {...props} />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('flex flex-col gap-2', className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('type-feature-heading', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('type-body text-current/70', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('type-body', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center gap-4 pt-2', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
}
