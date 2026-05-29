import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8"
    >
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-surface-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-surface-600 max-w-2xl text-base">{subtitle}</p>
        )}
      </div>
      {action}
    </motion.div>
  )
}
