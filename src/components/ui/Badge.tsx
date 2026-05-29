import type { RiskLevel } from '@/types'

const riskStyles: Record<RiskLevel, string> = {
  low: 'bg-emerald-100 text-emerald-900',
  normal: 'bg-emerald-100 text-emerald-900',
  moderate: 'bg-amber-100 text-amber-900',
  attention: 'bg-orange-100 text-orange-900',
}

const riskLabels: Record<RiskLevel, string> = {
  low: 'Baixo',
  normal: 'Normal',
  moderate: 'Moderado',
  attention: 'Atenção',
}

interface BadgeProps {
  level: RiskLevel
  className?: string
}

export function RiskBadge({ level, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskStyles[level]} ${className}`}
    >
      {riskLabels[level]}
    </span>
  )
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'muted'
  className?: string
}) {
  const styles = {
    default: 'bg-surface-100 text-surface-800',
    brand: 'bg-sr-blue-50 text-sr-blue',
    muted: 'bg-surface-200 text-surface-700',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
