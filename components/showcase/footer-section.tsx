import { NewsletterForm } from '@/components/cohere/newsletter-form'

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
          <NewsletterForm
            title="订阅进展更新"
            legal="提交即表示你同意接收研究与产品更新，可随时退订。"
          />

          <div className="grid grid-cols-3 gap-8">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="type-caption text-canvas">{column.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="type-body text-canvas/60 hover:text-canvas">
                        {link}
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
