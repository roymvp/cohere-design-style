import { AnnouncementBar } from '@/components/cohere/announcement-bar'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'

export function RulesSection() {
  return (
    <section id="responsive" className="scroll-mt-24 border-t border-hairline">
      <div className="catalog-section">
        <div className="flex flex-col gap-12">
          <header>
            <p className="type-mono-label text-body-muted">04 — Depth & responsive</p>
            <h2 className="type-section-heading mt-4">平面分层，明确的适配规则</h2>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[var(--radius-sm)] border border-card-border p-6">
              <h3 className="type-feature-heading">白底描边</h3><p className="type-body mt-4 text-body-muted">白色画布 + 1px 浅描边。没有投影层级。</p>
            </article>
            <article className="rounded-[var(--radius-sm)] bg-soft-stone p-6">
              <h3 className="type-feature-heading">暖石面色</h3><p className="type-body mt-4 text-body-muted">产品卡用面色区别于页面，而不是浮起。</p>
            </article>
            <article className="rounded-[var(--radius-sm)] bg-primary p-6 text-canvas">
              <h3 className="type-feature-heading">深色界面</h3><p className="type-body mt-4 text-hairline">控制台允许 1px 浅色 ring；聚焦环不是阴影刻度。</p>
            </article>
          </div>
          <Field>
            <FieldLabel htmlFor="focus-example">聚焦态示例（按 Tab 或点击输入框）</FieldLabel>
            <Input id="focus-example" placeholder="紫色描边与 2px 浅紫聚焦环" />
          </Field>
          <div className="grid gap-8 md:grid-cols-2">
            <article><h3 className="type-feature-heading">820px 内容断点</h3><p className="type-body mt-4 text-body-muted">Hero 媒体由 2:1 变为单列；产品带、研究列表堆叠。页边距 40 → 20px，深绿带内距 54 → 28px。</p></article>
            <article><h3 className="type-feature-heading">兼容与无障碍</h3><p className="type-body mt-4 text-body-muted">手机导航保留可关闭菜单；中文字体实体加载。修复来源的白底白字、低对比分类文字和窄容器列表溢出。</p></article>
          </div>
          <div>
            <h3 className="type-mono-label mb-4 text-body-muted">Announcement bar · 可关闭组件示例</h3>
            <AnnouncementBar message="设计规范已按 Live Preview 校准。" href="#tokens" linkLabel="查看色板" />
          </div>
          <p className="type-caption text-body-muted">此 starter 提供浅色页面与深色局部表面，不宣称具备完整的全站暗色主题。摄影叠层、forest / sage 色调和深色订阅输入是兼容扩展。</p>
        </div>
      </div>
    </section>
  )
}
