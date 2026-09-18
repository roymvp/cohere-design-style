const SCALE = [
  { cls: 'type-hero', label: 'Hero Display · 96/‑1.92', family: 'Display' },
  { cls: 'type-product-display', label: 'Product Display · 72', family: 'Display' },
  { cls: 'type-section-display', label: 'Section Display · 60', family: 'UI' },
  { cls: 'type-section-heading', label: 'Section Heading · 48', family: 'UI' },
  { cls: 'type-card-heading', label: 'Card Heading · 32', family: 'UI' },
  { cls: 'type-feature-heading', label: 'Feature Heading · 24', family: 'UI' },
  { cls: 'type-body-large', label: 'Body Large · 18', family: 'UI' },
  { cls: 'type-body', label: 'Body · 16', family: 'UI' },
  { cls: 'type-caption', label: 'Caption · 14', family: 'UI' },
]

export function TypeSection() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="type-mono-label text-body-muted">02 — Typography</p>
        <h2 className="type-section-heading mt-3 text-ink">排版层级</h2>
        <p className="type-body-large mt-4 max-w-2xl text-pretty text-body-muted [word-break:keep-all]">
          Display 与 UI 双字族分工：标题近等宽、字距收紧；正文精确克制。避免重字重，靠尺寸与面色做层级。
        </p>

        <div className="mt-12 divide-y divide-hairline">
          {SCALE.map((s) => (
            <div
              key={s.cls}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="type-mono-label w-56 shrink-0 text-body-muted">
                {s.family} · {s.label}
              </span>
              <span className={`${s.cls} text-ink`}>科学让平台可信</span>
            </div>
          ))}

          <div className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8">
            <span className="type-mono-label w-56 shrink-0 text-body-muted">
              Mono Label · 14
            </span>
            <span className="type-mono-label text-coral">Clinical Phase II</span>
          </div>
        </div>
      </div>
    </section>
  )
}
