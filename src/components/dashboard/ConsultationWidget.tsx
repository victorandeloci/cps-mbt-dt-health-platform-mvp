import { Calendar, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { upcomingConsultation } from '@/data/mockData'

export function ConsultationWidget() {
  const c = upcomingConsultation
  return (
    <Card className="bg-linear-to-br from-brand-600/5 to-transparent dark:from-brand-500/10">
      <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
        Próxima consulta
      </p>
      <div className="mt-4 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white font-display font-bold text-sm">
          {c.avatarInitials}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-surface-900 dark:text-white">{c.doctorName}</p>
          <p className="text-sm text-surface-500">{c.specialty}</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-surface-600 dark:text-surface-400">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {c.date} às {c.time}
            </span>
            <span className="inline-flex items-center gap-1">
              <Video className="h-4 w-4" />
              Teleconsulta
            </span>
          </div>
        </div>
      </div>
      <Link to="/consultas" className="mt-4 block">
        <Button variant="outline" size="sm" className="w-full">
          Gerenciar agendamento
        </Button>
      </Link>
    </Card>
  )
}
