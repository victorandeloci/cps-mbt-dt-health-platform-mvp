import { TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { healthScore } from '@/data/mockData'

export function HealthScoreCard() {
  const score = useAnimatedCounter(healthScore.value)

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl" />
      <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
        Score de bem-estar
      </p>
      <div className="mt-3 flex items-end gap-3">
        <span className="font-display text-5xl font-bold text-gradient">{score}</span>
        <span className="text-lg text-surface-500 mb-2">/ 100</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          <TrendingUp className="h-3 w-3" />
          +{healthScore.change} este mês
        </span>
        <span className="text-sm text-surface-500">— {healthScore.label}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-brand-500 to-brand-400 transition-all duration-1000"
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-surface-400">Atualizado em {healthScore.lastUpdated}</p>
    </Card>
  )
}
