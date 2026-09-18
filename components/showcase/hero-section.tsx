import { Button } from '@/components/ui/button'
import { AgentConsoleCard } from '@/components/cohere/agent-console-card'
import { HeroPhotoCard } from '@/components/cohere/hero-photo-card'

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
      <p className="type-mono-label text-body-muted">Design System · Demo</p>
      <h1 className="type-hero mt-6 text-ink">克制的企业级 AI 视觉语言</h1>
      <p className="type-body-large mt-6 max-w-[24em] text-body-muted">
        编辑化白底、深色产品带、圆角媒体卡与近等宽标题。现在组件集覆盖从营销首页到研究列表与企业表单的主要场景。
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="lg">
          申请演示
        </Button>
        <Button render={<a href="#components" />} variant="secondary" size="text">
          探索组件
        </Button>
      </div>

      <HeroPhotoCard
        src="/images/ai-workspace.png"
        alt="研究人员在企业 AI 工作空间协作"
        priority
        className="mt-14"
        overlay={
          <AgentConsoleCard
            name="Research agent"
            status="运行中"
            integrations={['数据仓库', '文档库']}
            prompt="比较本季度的研究数据并标记异常。"
            response="已归纳 4 个趋势，并找到 2 个需要复核的异常点。"
          />
        }
      />
    </section>
  )
}
