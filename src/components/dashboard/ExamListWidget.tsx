import { FileText, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { recentExams } from '@/data/mockData'

export function ExamListWidget() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-surface-900 dark:text-white">
          Exames recentes
        </h3>
        <Link
          to="/exames"
          className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1"
        >
          Ver todos <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <ul className="space-y-3">
        {recentExams.map((exam) => (
          <li
            key={exam.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 dark:bg-brand-900/40">
              <FileText className="h-5 w-5 text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-surface-900 dark:text-white truncate">
                {exam.name}
              </p>
              <p className="text-xs text-surface-500">
                {exam.date} · {exam.lab}
              </p>
            </div>
            <Badge variant="brand">{exam.type}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}
