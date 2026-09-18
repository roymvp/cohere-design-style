import { ArrowRight } from 'lucide-react'

import { Input } from '@/components/ui/input'

/*
  展示页页脚
  源规范 footer-newsletter：深色底、coral 小标签、白标题、邮箱单行 + 箭头提交、muted 法务微文案。
*/
const COLUMNS = [
  { title: '产品', links: ['平台', '模型', 'API', '定价'] },
  { title: '研究', links: ['论文', '开放科学', '基准'] },
  { title: '公司', links: ['关于', '招聘', '新闻', '联系'] },
]

export function FooterSection() {
  return (
    <footer className="bg-primary text-canvas">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="type-mono-label text-coral">AI moves fast</span>
            <h2 className="type-card-heading mt-4 max-w-sm text-canvas">
              订阅进展更新
            </h2>
            <div className="mt-6 flex max-w-md items-center gap-3">
              <Input
                type="email"
                placeholder="工作邮箱"
                className="border-canvas/20 bg-canvas/5 text-canvas placeholder:text-canvas/50"
              />
              <button
                type="button"
                aria-label="订阅"
                className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-xs)] bg-canvas text-ink"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p className="type-caption text-canvas">{c.title}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="type-body text-canvas/60 hover:text-canvas">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-canvas/15 pt-8 md:flex-row">
          <p className="type-micro text-canvas/50">
            「cohere 风格」设计系统演示 · 视觉语言源自公开设计规范，不含任何品牌资产。
          </p>
          <p className="type-micro text-canvas/50">© 2026 Aurora Demo</p>
        </div>
      </div>
    </footer>
  )
}
