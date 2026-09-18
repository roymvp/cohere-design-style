import { BrainCircuit, Network, ShieldCheck } from 'lucide-react'

import { CapabilityCard } from '@/components/cohere/capability-card'
import { ContactFormCard } from '@/components/cohere/contact-form-card'
import { FeatureBand } from '@/components/cohere/feature-band'
import { FilterChip } from '@/components/cohere/filter-chip'
import { ProductCard } from '@/components/cohere/product-card'
import { ResearchList } from '@/components/cohere/research-list'
import { TrustLogoStrip } from '@/components/cohere/trust-logo-strip'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const products = [
  {
    title: 'Command',
    description: '面向复杂企业任务的生成与推理模型。',
    features: ['长上下文处理', '工具调用', '私有化部署'],
  },
  {
    title: 'Embed',
    description: '把多语言内容转换为高质量语义表示。',
    features: ['多语言检索', '低延迟向量化', '企业数据优化'],
  },
  {
    title: 'Rerank',
    description: '在候选结果中重新排序最相关内容。',
    features: ['语义重排', '混合检索', '可扩展 API'],
  },
]

const research = [
  { title: '让企业智能体在受控环境中可靠协作', topics: ['Agents', '安全'], date: '2026.08', href: '#' },
  { title: '跨语言嵌入模型的检索基准', topics: ['Embedding', '研究'], date: '2026.06', href: '#' },
  { title: '从检索结果到可引用答案', topics: ['RAG'], date: '2026.03', href: '#' },
]

export function ComponentsSection() {
  return (
    <section id="components" className="border-t border-hairline bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-20">
        <header className="flex max-w-3xl flex-col gap-4">
          <p className="type-mono-label text-body-muted">03 — Components</p>
          <h2 className="type-section-heading text-ink">从基础控件到完整业务模式</h2>
          <p className="type-body-large text-body-muted">
            组件按源规范补齐，并保持公共 API 小而明确：基础控件负责状态，组合组件负责 Cohere 风格的结构与节奏。
          </p>
        </header>

        <div className="flex flex-col gap-6">
          <h3 className="type-mono-label text-body-muted">Actions & taxonomy</h3>
          <div className="flex flex-wrap items-center gap-4 rounded-[var(--radius-md)] border border-card-border p-6">
            <Button>申请演示</Button>
            <Button variant="outline">研究筛选</Button>
            <Button variant="secondary">探索产品</Button>
            <Button variant="link">阅读论文</Button>
            <Button disabled>禁用</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <FilterChip active>全部</FilterChip>
            {['研究', '平台', '安全', '监管'].map((item) => (
              <FilterChip key={item}>{item}</FilterChip>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="type-mono-label text-body-muted">Form controls</h3>
          <div className="grid gap-6 rounded-[var(--radius-lg)] bg-soft-stone p-6 md:grid-cols-2 md:p-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="demo-email">工作邮箱</FieldLabel>
                <Input id="demo-email" type="email" placeholder="you@company.com" />
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="demo-invalid">校验示例</FieldLabel>
                <Input id="demo-invalid" aria-invalid defaultValue="not-an-email" />
                <FieldError>请输入有效的工作邮箱。</FieldError>
              </Field>
            </FieldGroup>
            <Field>
              <FieldLabel htmlFor="demo-message">项目背景</FieldLabel>
              <Textarea id="demo-message" placeholder="描述你的团队与目标" />
            </Field>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="type-mono-label text-body-muted">Capability cards</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <CapabilityCard visual={<BrainCircuit aria-hidden />} title="模型能力" description="用清晰层级解释复杂模型，而不是把所有信息装进同一种卡片。" href="#" />
            <CapabilityCard visual={<Network aria-hidden />} title="系统集成" description="用细线、留白与轻量媒体建立产品关系。" href="#" />
            <CapabilityCard visual={<ShieldCheck aria-hidden />} title="安全治理" description="把安全与合规置于产品叙事中，而不是页面角落。" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="type-mono-label text-body-muted">Product cards</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} href="#" />
            ))}
          </div>
        </div>

        <FeatureBand
          title="让企业 AI 保持可控"
          description="深色产品带用于承载能力、安全和系统级主张；它是独立页面段落，不是默认卡片皮肤。"
          action={<Button variant="primary-invert">查看安全方案</Button>}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {['数据隔离', '权限边界', '审计轨迹'].map((item) => (
              <article key={item} className="flex flex-col gap-3 border-t border-canvas/20 pt-5">
                <h3 className="type-feature-heading">{item}</h3>
                <p className="type-body text-canvas/70">把关键约束放在使用路径中，让团队能够理解、检查并复核。</p>
              </article>
            ))}
          </div>
        </FeatureBand>

        <TrustLogoStrip
          label="被研究、产品与安全团队采用"
          items={['Northstar', 'Arc Labs', 'Morrow', 'Fieldwork', 'Tern'].map((name) => ({ name }))}
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="type-section-heading text-ink">研究与观点</h3>
              <p className="type-body mt-3 text-body-muted">高行距、规则线与紧凑主题标签组成研究列表。</p>
            </div>
            <Button variant="secondary" size="text">查看全部研究</Button>
          </div>
          <ResearchList items={research} />
        </div>

        <div className="grid gap-8 rounded-[var(--radius-lg)] bg-deep-green p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-4 text-canvas">
            <h3 className="type-section-heading">讨论你的企业 AI 场景</h3>
            <p className="type-body-large text-canvas/70">联系表单卡在深绿或暖石背景上形成清晰的填写焦点。</p>
          </div>
          <ContactFormCard title="告诉我们你的需求" description="我们会根据团队规模、数据环境与部署要求与你联系。" />
        </div>
      </div>
    </section>
  )
}
