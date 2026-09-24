const SCALE = [
  { cls: 'type-hero', name: 'Hero Display', meta: 'Display · 96 / ‑1.92' },
  { cls: 'type-product-display', name: 'Product Display', meta: 'Display · 72' },
  { cls: 'type-section-display', name: 'Section Display', meta: 'UI · 60' },
  { cls: 'type-section-heading', name: 'Section Heading', meta: 'UI · 48' },
  { cls: 'type-card-heading', name: 'Card Heading', meta: 'UI · 32' },
  { cls: 'type-feature-heading', name: 'Feature Heading', meta: 'UI · 24' },
  { cls: 'type-body-large', name: 'Body Large', meta: 'UI · 18' },
  { cls: 'type-body', name: 'Body', meta: 'UI · 16' },
  { cls: 'type-caption', name: 'Caption', meta: 'UI · 14' },
  { cls: 'type-button', name: 'Button', meta: 'UI · 14 / 500' },
  { cls: 'type-micro', name: 'Micro', meta: 'UI · 12' },
]

export function TypeSection() {
  return (
    <section id="typography" className="scroll-mt-24 border-t border-hairline bg-canvas">
      <div className="catalog-section">
        <p className="type-mono-label text-body-muted">02 — Typography</p>
        <h2 className="type-section-heading mt-3 text-ink">排版层级</h2>
        <p className="type-body-large mt-4 max-w-2xl text-pretty text-body-muted [word-break:keep-all]">
          Display 与正文统一采用 Space Grotesk，等宽标签采用 Space Mono；中文保留 Noto Sans SC 回退。以尺寸、行距和留白建立层级。
        </p>

        <div className="mt-12 divide-y divide-hairline">
          {SCALE.map((s) => (
            <div
              key={s.cls}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="w-56 shrink-0">
                <span className="type-mono-label block whitespace-nowrap text-ink">
                  {s.name}
                </span>
                <span className="type-mono-label block whitespace-nowrap text-body-muted">
                  {s.meta}
                </span>
              </span>
              <span className={`${s.cls} text-ink`}>科学让平台可信</span>
            </div>
          ))}

          <div className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8">
            <span className="w-56 shrink-0">
              <span className="type-mono-label block whitespace-nowrap text-ink">
                Mono Label
              </span>
              <span className="type-mono-label block whitespace-nowrap text-body-muted">
                Mono · 14
              </span>
            </span>
            <span className="type-mono-label text-body-muted">Clinical Phase II</span>
          </div>
        </div>
      </div>
    </section>
  )
}
