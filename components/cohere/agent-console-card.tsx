import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AgentConsoleCardProps {
  name: string
  status: string
  integrations?: string[]
  prompt: string
  response: string
  className?: string
}

export function AgentConsoleCard({
  name,
  status,
  integrations = [],
  prompt,
  response,
  className,
}: AgentConsoleCardProps) {
  return (
    <Card tone="console" className={cn('gap-4', className)}>
      <div className="flex items-center justify-between gap-4">
        <span className="type-mono-label text-canvas/70">{name}</span>
        <Badge variant="status">
          <span className="size-1.5 rounded-full bg-coral" aria-hidden />
          {status}
        </Badge>
      </div>
      {integrations.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label="集成">
          {integrations.map((integration) => (
            <Badge key={integration} variant="integration">
              {integration}
            </Badge>
          ))}
        </div>
      )}
      <div className="rounded-[var(--radius-xs)] bg-canvas/5 p-3 type-caption text-canvas/70">
        {prompt}
      </div>
      <div className="rounded-[var(--radius-xs)] border border-canvas/15 p-3 type-caption text-canvas">
        {response}
      </div>
    </Card>
  )
}

export type { AgentConsoleCardProps }
