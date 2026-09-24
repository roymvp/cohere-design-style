import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  cohere 风格按钮
  源规范 components：button-primary（近黑 pill CTA）/ button-secondary（下划线文字链接）
  / button-pill-outline（描边 pill 分类控件）。
  用 font-[family-name] 挂到 UI 字体，label 用规范 button 排版（14px/500）。
*/
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // 主 CTA：近黑 pill，浅色面上的最高优先级操作（Live Preview：32px 圆角）
        primary:
          'rounded-[var(--radius-pill)] bg-primary text-primary-foreground hover:bg-primary/90',
        // 浅色面反白 pill：用于深色带内部的主操作
        'primary-invert':
          'rounded-[var(--radius-pill)] bg-canvas text-ink hover:bg-canvas/90',
        // 次操作：纯文字下划线链接
        secondary:
          'rounded-none border-b border-current px-0 py-2 type-body text-ink hover:text-body-muted',
        // 描边 pill：research / topic 分类控件（Live Preview：32px 圆角）
        outline:
          'rounded-[var(--radius-xl)] border border-primary bg-transparent text-primary hover:bg-primary hover:text-canvas',
        // 链接蓝：编辑面的行内链接与分页
        link: 'rounded-[var(--radius-xs)] px-0 text-action-blue underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 type-button',
        sm: 'h-8 px-4 text-sm leading-none',
        lg: 'h-12 px-8 text-base leading-none',
        pill: 'h-9 px-3 text-sm leading-none',
        text: 'h-auto p-0 text-base',
      },
    },
    compoundVariants: [
      { variant: 'secondary', size: 'default', class: 'h-auto' },
      { variant: 'link', size: 'default', class: 'h-auto' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
