import { Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Disclaimer } from '@/components/ui/Disclaimer'
import { aiInsights } from '@/data/mockData'

export function AIInsightsPanel() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-brand-600" />
        <h3 className="font-display font-semibold text-surface-900 dark:text-white">
          Insights de apoio (IA)
        </h3>
      </div>
      <Disclaimer variant="warning" className="mb-4 text-xs">
        Interpretações automatizadas para educação — não são diagnóstico.
      </Disclaimer>
      <ul className="space-y-4">
        {aiInsights.map((insight) => (
          <li
            key={insight.id}
            className="p-4 rounded-xl border border-surface-200 dark:border-surface-700"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-medium text-sm text-surface-900 dark:text-white">
                {insight.title}
              </p>
              <span className="text-xs text-surface-400 shrink-0">{insight.confidence}% conf.</span>
            </div>
            <p className="mt-2 text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
              {insight.summary}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  )
}
