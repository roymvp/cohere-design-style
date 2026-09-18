'use client'

import * as React from 'react'
import { Menu, X } from 'lucide-react'

import { AnnouncementBar } from '@/components/cohere/announcement-bar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/*
  cohere 风格导航
  源规范 Grid & Container：全局导航三区布局 = logo 左 / 菜单居中 / 登录+CTA 右。
  源规范 announcement-bar：nav 之上 36px 黑条，居中微文案 + 关闭控件。
  规范 Collapsing：移动端收成紧凑菜单。
  这里用中性占位标记代替品牌 logo/文案（不复制品牌名）。
*/

const NAV_LINKS = ['产品', '解决方案', '研究', '文档', '公司'] as const

export function SiteNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar message="新一代模型平台现已上线。" href="#" />

      <div className="border-b border-hairline bg-canvas/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* 左：品牌标记占位（非品牌 logo） */}
          <a href="#" className="flex items-center gap-2" aria-label="首页">
            <span className="size-5 rounded-[var(--radius-xs)] bg-primary" aria-hidden />
            <span className="font-display text-lg tracking-tight text-ink">Aurora</span>
          </a>

          {/* 中：主菜单 */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="type-body text-ink/80 transition-colors hover:text-ink">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* 右：登录 + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="type-body text-ink/80 hover:text-ink">
              登录
            </a>
            <Button size="sm">申请演示</Button>
          </div>

          {/* 移动端触发 */}
          <button
            type="button"
            className="md:hidden"
            aria-label="打开菜单"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* 移动端展开菜单 */}
        <div className={cn('md:hidden', open ? 'block' : 'hidden')}>
          <ul className="flex flex-col gap-1 border-t border-hairline px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="type-body block py-2 text-ink/80">
                  {l}
                </a>
              </li>
            ))}
            <li className="mt-3 flex items-center gap-4">
              <a href="#" className="type-body text-ink/80">
                登录
              </a>
              <Button size="sm">申请演示</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
