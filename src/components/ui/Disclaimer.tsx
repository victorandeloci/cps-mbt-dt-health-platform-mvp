import { AlertTriangle, Info } from 'lucide-react'

interface DisclaimerProps {
  variant?: 'info' | 'warning'
  title?: string
  children: React.ReactNode
  className?: string
}

export function Disclaimer({
  variant = 'warning',
  title,
  children,
  className = '',
}: DisclaimerProps) {
  const isWarning = variant === 'warning'
  const Icon = isWarning ? AlertTriangle : Info

  return (
    <div
      role="note"
      className={`flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${
        isWarning
          ? 'border-amber-300 bg-amber-50 text-amber-950'
          : 'border-sr-blue-100 bg-sr-blue-50 text-surface-900'
      } ${className}`}
    >
      <Icon
        className={`h-5 w-5 shrink-0 mt-0.5 ${isWarning ? 'text-amber-700' : 'text-sr-blue'}`}
      />
      <div>
        {title && <p className="font-semibold mb-1 text-inherit">{title}</p>}
        <p className="text-inherit">{children}</p>
      </div>
    </div>
  )
}
