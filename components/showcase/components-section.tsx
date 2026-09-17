import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ComponentsSection() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="type-mono-label text-body-muted">03 — Components</p>
        <h2 className="type-section-heading mt-3 text-ink">可复用组件</h2>
        <p className="type-body-large mt-4 max-w-2xl text-body-muted">
          按钮、输入框、卡片与导航构成最小可安装组件集，全部消费上面的 tokens。
        </p>

        {/* 按钮 */}
        <div className="mt-12">
          <h3 className="type-mono-label text-body-muted">按钮</h3>
          <div className="mt-4 flex flex-wrap items-center gap-4 rounded-[var(--radius-md)] border border-card-border p-6">
            <Button variant="primary">申请演示</Button>
            <Button variant="outline">研究筛选</Button>
            <Button variant="secondary">探索产品</Button>
            <Button variant="link">阅读论文</Button>
            <Button variant="primary" disabled>
              禁用
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 rounded-[var(--radius-lg)] bg-deep-green p-6">
            <Button variant="primary-invert">深色带内主操作</Button>
            <span className="type-caption text-canvas/70">
              深绿产品带上反白 pill CTA
            </span>
          </div>
        </div>

        {/* 输入框 */}
        <div className="mt-12">
          <h3 className="type-mono-label text-body-muted">输入框</h3>
          <Card tone="plain" className="mt-4 rounded-[var(--radius-lg)] p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="type-caption text-ink">工作邮箱</span>
                <Input type="email" placeholder="you@company.com" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-caption text-ink">机构名称</span>
                <Input placeholder="研究机构 / 企业" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="type-caption text-ink">校验示例</span>
                <Input aria-invalid placeholder="错误态：紫色 focus 边 / 红色校验环" />
              </label>
            </div>
            <div className="mt-6">
              <Button variant="primary">提交</Button>
            </div>
          </Card>
        </div>

        {/* 卡片 */}
        <div className="mt-12">
          <h3 className="type-mono-label text-body-muted">卡片</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <Card tone="plain">
              <CardHeader>
                <CardTitle>能力卡</CardTitle>
                <CardDescription>白面细边，无投影，仅靠圆角与描线分层。</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link">了解更多</Button>
              </CardFooter>
            </Card>

            <Card tone="stone">
              <CardHeader>
                <CardTitle>产品卡</CardTitle>
                <CardDescription className="text-ink/70">
                  暖石面，用于模型/产品摘要。
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-2">
                <ul className="space-y-2">
                  {['高吞吐推理', '私有化部署', '合规审计'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-ink">
                      <Check className="size-4 text-deep-green" />
                      {t}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="pill">
                  查看规格
                </Button>
              </CardFooter>
            </Card>

            <Card tone="console">
              <div className="flex items-center justify-between">
                <span className="type-mono-label text-canvas/70">Agent Console</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas/10 px-2.5 py-1 type-micro text-canvas">
                  <span className="size-1.5 rounded-full bg-coral" aria-hidden />
                  运行中
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-[var(--radius-xs)] bg-canvas/5 p-3 type-caption text-canvas/80">
                  分析临床数据集…
                </div>
                <div className="rounded-[var(--radius-xs)] border border-canvas/15 p-3 type-caption text-canvas/90">
                  已生成候选序列摘要
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 分类 chip（编辑面） */}
        <div className="mt-12">
          <h3 className="type-mono-label text-body-muted">分类 chip（编辑面）</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-[var(--radius-sm)] bg-coral px-3.5 py-1.5 type-feature-heading text-ink">
              全部
            </span>
            {['研究', '平台', '安全', '监管'].map((t) => (
              <span
                key={t}
                className="rounded-[var(--radius-sm)] border border-coral-soft bg-pale-green px-3.5 py-1.5 type-feature-heading text-coral"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
