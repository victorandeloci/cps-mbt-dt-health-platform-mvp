import type { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-100">
        <Icon className="h-7 w-7 text-surface-600" />
      </div>
      <h3 className="font-display text-lg font-semibold text-surface-900">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-surface-600">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
