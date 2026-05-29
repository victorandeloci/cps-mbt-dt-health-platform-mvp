import { Activity, Calendar, Moon, Sun } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { preventiveRecommendations } from '@/data/mockData'

const icons: Record<string, typeof Calendar> = {
  calendar: Calendar,
  sun: Sun,
  moon: Moon,
  activity: Activity,
}

const priorityColors = {
  high: 'border-l-brand-500',
  medium: 'border-l-amber-400',
  low: 'border-l-surface-300',
}

export function RecommendationsWidget() {
  return (
    <Card>
      <h3 className="font-display font-semibold text-surface-900 dark:text-white mb-4">
        Recomendações preventivas
      </h3>
      <ul className="space-y-3">
        {preventiveRecommendations.map((rec) => {
          const Icon = icons[rec.icon] ?? Activity
          return (
            <li
              key={rec.id}
              className={`flex gap-3 p-3 rounded-xl border-l-4 bg-surface-50 dark:bg-surface-800/50 ${priorityColors[rec.priority]}`}
            >
              <Icon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-surface-900 dark:text-white">
                  {rec.title}
                </p>
                <p className="text-xs text-surface-500 mt-0.5">{rec.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
