const BRAND_SWATCHES = [
  { name: 'primary', hex: '#17171c', note: '主 CTA / 深 UI 卡', dark: true },
  { name: 'cohere-black', hex: '#000000', note: '公告条 / 最高对比', dark: true },
  { name: 'ink', hex: '#212121', note: '正文文字', dark: true },
  { name: 'deep-green', hex: '#003c33', note: '产品带', dark: true },
  { name: 'dark-navy', hex: '#071829', note: '安全/金融带', dark: true },
  { name: 'action-blue', hex: '#1863dc', note: '编辑面链接', dark: true },
  { name: 'coral', hex: '#ff7759', note: '分类 chip 强调', dark: false },
  { name: 'coral-soft', hex: '#ffad9b', note: 'chip 描边', dark: false },
]

const SURFACE_SWATCHES = [
  { name: 'canvas', hex: '#ffffff', note: '主背景', dark: false },
  { name: 'soft-stone', hex: '#eeece7', note: '暖石卡面', dark: false },
  { name: 'pale-green', hex: '#edfce9', note: '浅绿区块底', dark: false },
  { name: 'pale-blue', hex: '#f1f5ff', note: '博客 CTA 底', dark: false },
  { name: 'card-border', hex: '#f2f2f2', note: '最浅描线', dark: false },
  { name: 'hairline', hex: '#d9d9dd', note: '列表分隔线', dark: false },
]

const RADII = [
  { name: 'xs', v: '4px' },
  { name: 'sm', v: '8px' },
  { name: 'md', v: '16px' },
  { name: 'lg', v: '22px' },
  { name: 'xl', v: '30px' },
  { name: 'pill', v: '32px' },
]

const SPACING = [
  { name: 'xxs', v: '2px' },
  { name: 'xs', v: '6px' },
  { name: 'sm', v: '8px' },
  { name: 'md', v: '12px' },
  { name: 'lg', v: '16px' },
  { name: 'xl', v: '24px' },
  { name: 'xxl', v: '32px' },
  { name: 'section', v: '80px' },
]

function Swatch({
  name,
  hex,
  note,
  dark,
}: {
  name: string
  hex: string
  note: string
  dark: boolean
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-sm)] border border-card-border">
      <div
        className="flex h-20 items-end p-3"
        style={{ backgroundColor: hex, color: dark ? '#ffffff' : '#212121' }}
      >
        <span className="type-mono-label">{hex}</span>
      </div>
      <div className="bg-canvas p-3">
        <p className="type-body text-ink">{name}</p>
        <p className="type-caption text-body-muted">{note}</p>
      </div>
    </div>
  )
}

export function TokensSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="type-mono-label text-body-muted">01 — Foundations</p>
      <h2 className="type-section-heading mt-3 text-ink">设计 tokens</h2>
      <p className="type-body-large mt-4 max-w-2xl text-body-muted">
        颜色、圆角与间距全部落实为 CSS 变量与 Tailwind token，源自规范原始数值。
      </p>

      <div className="mt-12 space-y-12">
        <div>
          <h3 className="type-mono-label text-body-muted">品牌与强调色</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {BRAND_SWATCHES.map((s) => (
              <Swatch key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="type-mono-label text-body-muted">表面与背景</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SURFACE_SWATCHES.map((s) => (
              <Swatch key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="type-mono-label text-body-muted">圆角刻度</h3>
            <div className="mt-4 flex flex-wrap items-end gap-6">
              {RADII.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div
                    className="size-16 border border-hairline bg-soft-stone"
                    style={{ borderRadius: r.v }}
                  />
                  <span className="type-caption text-ink">{r.name}</span>
                  <span className="type-micro text-body-muted">{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="type-mono-label text-body-muted">间距刻度（8px 基）</h3>
            <div className="mt-4 space-y-2">
              {SPACING.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="w-16 type-caption text-ink">{s.name}</span>
                  <div className="h-3 bg-deep-green" style={{ width: s.v }} />
                  <span className="type-micro text-body-muted">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
