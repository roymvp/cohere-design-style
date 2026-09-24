import { Button } from '@/components/ui/button'
import { AgentConsoleCard } from '@/components/cohere/agent-console-card'
import { HeroMedia } from '@/components/cohere/hero-media'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="mx-auto max-w-[var(--container-hero)] text-center">
        <h1 className="type-hero text-ink">克制的企业级 AI 视觉语言</h1>
        <p className="type-body-large mx-auto mt-5 max-w-[37em] text-ink">
          以 Live Preview 为视觉基准：编辑化留白、深绿产品带、圆角媒体卡与珊瑚色分类。这里的产品与内容仅作设计示例。
        </p>
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button nativeButton={false} render={<a href="#tokens" />}>查看设计规范</Button>
            <Button nativeButton={false} render={<a href="#components" />} variant="secondary">探索组件</Button>
          </div>
        </div>
        <HeroMedia className="mt-18">
          <AgentConsoleCard name="Research agent" status="Ready" integrations={['Data', 'Cloud']} prompt="比较本季度的研究数据并标记异常。" />
        </HeroMedia>
      </div>
    </section>
  )
}
