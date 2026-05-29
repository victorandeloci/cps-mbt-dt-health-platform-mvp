import { Activity, Calendar, FileText, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { healthTimeline } from '@/data/mockData'
import type { TimelineEvent } from '@/types'

const categoryIcon: Record<TimelineEvent['category'], typeof FileText> = {
  exam: FileText,
  consultation: Calendar,
  lifestyle: Activity,
  insight: Sparkles,
}

export function TimelineWidget() {
  return (
    <Card>
      <h3 className="font-display font-semibold text-surface-900 dark:text-white mb-4">
        Linha do tempo
      </h3>
      <ol className="relative border-l border-surface-200 dark:border-surface-700 ml-3 space-y-6">
        {healthTimeline.map((event) => {
          const Icon = categoryIcon[event.category]
          return (
            <li key={event.id} className="ml-6 relative">
              <span className="absolute -left-[1.65rem] flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/50 ring-4 ring-white dark:ring-surface-900">
                <Icon className="h-3 w-3 text-brand-600" />
              </span>
              <time className="text-xs text-surface-400">{event.date}</time>
              <p className="font-medium text-sm text-surface-900 dark:text-white mt-0.5">
                {event.title}
              </p>
              <p className="text-sm text-surface-500 mt-0.5">{event.description}</p>
            </li>
          )
        })}
      </ol>
    </Card>
  )
}
