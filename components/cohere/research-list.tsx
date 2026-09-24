import { Badge } from '@/components/ui/badge'

interface ResearchItem {
  title: string
  topics: string[]
  date: string
  href: string
}

interface ResearchListProps {
  items: ResearchItem[]
  titleLabel?: string
  topicLabel?: string
  dateLabel?: string
}

export function ResearchList({ items, titleLabel = '出版物', topicLabel = '主题', dateLabel = '日期' }: ResearchListProps) {
  return (
    <ul aria-label={titleLabel} className="min-w-0 border-t border-slate">
      {items.map((item) => (
        <li key={item.title} className="research-row">
          <a href={item.href} className="min-w-0 type-body text-action-blue underline-offset-4 [overflow-wrap:anywhere] hover:underline focus-visible:outline-2 focus-visible:outline-ring">{item.title}</a>
          <div aria-label={topicLabel} className="flex min-w-0 flex-wrap gap-2">
            {item.topics.map((topic) => <Badge key={topic} variant="topic">{topic}</Badge>)}
          </div>
          <span className="type-caption tabular-nums text-body-muted"><span className="sr-only">{dateLabel}：</span>{item.date}</span>
        </li>
      ))}
    </ul>
  )
}

export type { ResearchItem, ResearchListProps }
