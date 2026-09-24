'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  ['色板', '#tokens'], ['排版', '#typography'], ['组件', '#components'], ['响应式', '#responsive'],
] as const

export function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-canvas/95 backdrop-blur-sm">
      <nav aria-label="主导航" className="flex min-h-18 items-center justify-between px-5 md:px-12">
        <a href="#" className="type-body font-medium text-ink">Aurora / Design</a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <li key={href}><a href={href} className="type-caption text-ink underline-offset-4 hover:underline">{label}</a></li>)}
        </ul>
        <div className="hidden md:block"><Button nativeButton={false} render={<a href="#components" />}>探索组件</Button></div>
        <button type="button" aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center rounded-[var(--radius-xs)] focus-visible:outline-2 focus-visible:outline-ring md:hidden">
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
      <nav id="mobile-nav" aria-label="移动导航" hidden={!open} className="border-t border-card-border p-5 md:hidden">
        <ul className="flex flex-col gap-2">
          {links.map(([label, href]) => <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-3 type-body text-ink">{label}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}
