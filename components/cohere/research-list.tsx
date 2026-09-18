import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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

export function ResearchList({
  items,
  titleLabel = '出版物',
  topicLabel = '主题',
  dateLabel = '日期',
}: ResearchListProps) {
  return (
    <Table className="min-w-2xl border-t border-hairline">
      <TableHeader>
        <TableRow className="border-hairline hover:bg-transparent">
          <TableHead className="h-12 px-0 type-mono-label text-body-muted">{titleLabel}</TableHead>
          <TableHead className="h-12 type-mono-label text-body-muted">{topicLabel}</TableHead>
          <TableHead className="h-12 px-0 text-right type-mono-label text-body-muted">{dateLabel}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.title} className="border-hairline hover:bg-soft-stone/60">
            <TableCell className="px-0 py-6">
              <a href={item.href} className="type-body text-ink underline-offset-4 hover:underline">
                {item.title}
              </a>
            </TableCell>
            <TableCell className="py-6">
              <div className="flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <Badge key={topic} variant="topic">
                    {topic}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="px-0 py-6 text-right type-caption tabular-nums text-body-muted">
              {item.date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export type { ResearchItem, ResearchListProps }
