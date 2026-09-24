import { cn } from '@/lib/utils'

interface AgentConsoleCardProps {
  name: string
  status: string
  integrations?: string[]
  prompt: string
  response?: string
  className?: string
}

export function AgentConsoleCard({ name, status, integrations = [], prompt, response, className }: AgentConsoleCardProps) {
  return (
    <div className={cn('w-full max-w-155 rounded-[var(--radius-sm)] bg-primary p-7 text-canvas ring-1 ring-canvas/10', className)}>
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-[var(--radius-xs)] bg-canvas type-feature-heading text-primary">A</span>
        <span className="type-feature-heading">{name}</span>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2" aria-label="状态与集成">
          {[status, ...integrations].map((label, index) => (
            <span key={`${label}-${index}`} className="rounded-[var(--radius-xs)] border border-[var(--console-border)] px-3 py-2 type-micro font-mono uppercase text-hairline">{label}</span>
          ))}
        </div>
      </div>
      <p className="type-body mt-6 rounded-[var(--radius-xs)] border border-[var(--console-border)] p-4.5">{prompt}</p>
      {response && <p className="type-caption mt-4 text-hairline">{response}</p>}
    </div>
  )
}

export type { AgentConsoleCardProps }
