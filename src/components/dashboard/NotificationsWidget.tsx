import { Bell, FileText, MessageCircle, Sparkles, Shield } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { notifications } from '@/data/mockData'
import type { Notification } from '@/types'

const iconMap: Record<Notification['type'], typeof Bell> = {
  exam: FileText,
  consultation: MessageCircle,
  insight: Sparkles,
  system: Shield,
}

export function NotificationsWidget() {
  return (
    <Card padding="sm">
      <div className="flex items-center justify-between px-2 pt-2 pb-3">
        <h3 className="font-display font-semibold text-surface-900 dark:text-white flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notificações
        </h3>
        <span className="text-xs text-brand-600 font-medium">
          {notifications.filter((n) => !n.read).length} novas
        </span>
      </div>
      <ul className="space-y-1 max-h-64 overflow-y-auto">
        {notifications.map((n) => {
          const Icon = iconMap[n.type]
          return (
            <li
              key={n.id}
              className={`flex gap-3 p-3 rounded-xl transition-colors ${
                !n.read ? 'bg-brand-50/80 dark:bg-brand-950/30' : ''
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-100 dark:bg-surface-800">
                <Icon className="h-4 w-4 text-surface-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-surface-900 dark:text-white">{n.title}</p>
                <p className="text-xs text-surface-500 truncate">{n.message}</p>
                <p className="text-xs text-surface-400 mt-0.5">{n.time}</p>
              </div>
              {!n.read && (
                <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0 mt-2" />
              )}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
