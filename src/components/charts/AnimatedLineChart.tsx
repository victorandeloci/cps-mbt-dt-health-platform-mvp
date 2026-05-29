import { motion } from 'framer-motion'
import type { ChartDataPoint } from '@/types'

interface AnimatedLineChartProps {
  data: ChartDataPoint[]
  color?: string
  height?: number
  label?: string
  unit?: string
}

export function AnimatedLineChart({
  data,
  color = '#0d9488',
  height = 120,
  label,
  unit = '',
}: AnimatedLineChartProps) {
  const max = Math.max(...data.map((d) => d.value)) * 1.1
  const min = Math.min(...data.map((d) => d.value)) * 0.9
  const range = max - min || 1
  const width = 280
  const padding = 8

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1 || 1)) * (width - padding * 2)
    const y = height - padding - ((d.value - min) / range) * (height - padding * 2)
    return `${x},${y}`
  })

  const pathD = `M ${points.join(' L ')}`
  const last = data[data.length - 1]

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm font-medium text-surface-600 dark:text-surface-400">
            {label}
          </span>
          {last && (
            <span className="text-lg font-bold text-surface-900 dark:text-white">
              {last.value}
              {unit && <span className="text-sm font-normal text-surface-500 ml-1">{unit}</span>}
            </span>
          )}
        </div>
      )}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-hidden>
        <defs>
          <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={padding}
            x2={width - padding}
            y1={height * ratio}
            y2={height * ratio}
            stroke="currentColor"
            strokeOpacity="0.06"
            className="text-surface-900"
          />
        ))}
        <motion.path
          d={`${pathD} L ${width - padding},${height} L ${padding},${height} Z`}
          fill={`url(#grad-${label})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {data.map((d, i) => {
          const x = padding + (i / (data.length - 1 || 1)) * (width - padding * 2)
          const y = height - padding - ((d.value - min) / range) * (height - padding * 2)
          return (
            <motion.circle
              key={d.label}
              cx={x}
              cy={y}
              r="4"
              fill={color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * i + 0.5 }}
            />
          )
        })}
      </svg>
      <div className="flex justify-between mt-2 px-1">
        {data.map((d) => (
          <span key={d.label} className="text-xs text-surface-400">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  )
}
