import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

/*
  展示页 hero
  源规范 Grid：居中大字声明 + 双卡媒体（宽产品卡 + 窄图卡）。
  用中性占位内容，不引用任何品牌营销文案。
*/
export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
      <p className="type-mono-label text-body-muted">Design System · Demo</p>
      <h1 className="type-hero mt-6 text-ink">
        克制的企业级 AI 视觉语言
      </h1>
      <p className="type-body-large mt-6 max-w-[24em] text-body-muted">
        编辑化白底、深色产品带、圆角媒体卡与近等宽标题。以下页面用于验收本设计系统的
        tokens 与组件。
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="lg">
          申请演示
        </Button>
        <Button variant="secondary" size="text">
          探索组件
        </Button>
      </div>

      {/* 双卡媒体组合 */}
      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-deep-green p-8 lg:col-span-3">
          <span className="type-mono-label text-canvas/70">Product Band</span>
          <p className="type-card-heading mt-4 max-w-sm text-canvas">
            深绿产品带承载媒体与暗色控制台
          </p>
          <div className="mt-8 rounded-[var(--radius-sm)] bg-primary p-5">
            <div className="flex items-center justify-between">
              <span className="type-caption text-canvas/70">agent · pipeline</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas/10 px-2.5 py-1 type-micro text-canvas">
                <span className="size-1.5 rounded-full bg-coral" aria-hidden />
                运行中
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-3/4 rounded-full bg-canvas/15" />
              <div className="h-2.5 w-1/2 rounded-full bg-canvas/10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[var(--radius-lg)] bg-soft-stone p-8 lg:col-span-2">
          <span className="type-mono-label text-body-muted">Photo Card</span>
          <div>
            <p className="type-feature-heading text-ink">圆角媒体卡</p>
            <p className="type-body mt-2 text-body-muted">
              22px 大圆角、暖石底，图像与产品视频的默认承载形态。
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 type-body text-action-blue hover:underline"
            >
              查看用法
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
