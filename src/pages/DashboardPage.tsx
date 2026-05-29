import { Link } from 'react-router-dom'
import {
  Calendar,
  ChevronRight,
  FileText,
  Sparkles,
  Video,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { BRAND, aiInsights, recentExams, upcomingConsultation } from '@/data/mockData'

const actions = [
  {
    to: '/exames',
    title: 'Analisar exame',
    description: 'Envie seu laudo e entenda os resultados com apoio de IA.',
    icon: FileText,
    color: 'bg-brand-700',
  },
  {
    to: '/consultas',
    title: 'Agendar consulta',
    description: 'Escolha um profissional e marque sua teleconsulta.',
    icon: Video,
    color: 'bg-surface-800',
  },
  {
    to: '/consultas',
    title: 'Minhas consultas',
    description: 'Veja agendamentos e acesse a sala de atendimento.',
    icon: Calendar,
    color: 'bg-brand-600',
  },
]

export function DashboardPage() {
  const nextInsight = aiInsights[0]
  const latestExams = recentExams.slice(0, 2)
  const consultation = upcomingConsultation

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 pb-16">
      <PageHeader
        title={`Olá, ${BRAND.persona.name.split(' ')[0]}`}
        subtitle="O que você gostaria de fazer hoje?"
      />

      <div className="grid gap-4 sm:grid-cols-1">
        {actions.map((action) => (
          <Link key={action.title} to={action.to}>
            <Card className="flex items-center gap-4 group cursor-pointer">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${action.color}`}
              >
                <action.icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-surface-900">{action.title}</p>
                <p className="text-sm text-surface-600 mt-0.5">{action.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-surface-400 group-hover:text-brand-700 shrink-0" />
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-surface-600 mb-3">
          Próxima consulta
        </h2>
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-bold text-sm">
              {consultation.avatarInitials}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-surface-900">{consultation.doctorName}</p>
              <p className="text-sm text-surface-600">{consultation.specialty}</p>
              <p className="text-sm font-medium text-brand-800 mt-2">
                {consultation.date} às {consultation.time} · Teleconsulta
              </p>
            </div>
          </div>
          <Link
            to="/consultas"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:text-brand-700"
          >
            Ver detalhes <ChevronRight className="h-4 w-4" />
          </Link>
        </Card>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-surface-600">
            Últimos exames
          </h2>
          <Link to="/exames" className="text-sm font-semibold text-brand-800 hover:text-brand-700">
            Ver todos
          </Link>
        </div>
        <ul className="space-y-3">
          {latestExams.map((exam) => (
            <li key={exam.id}>
              <Link to="/exames">
                <Card hover padding="sm" className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-brand-700 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-surface-900 text-sm">{exam.name}</p>
                    <p className="text-xs text-surface-600">{exam.date}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-surface-400 shrink-0" />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {nextInsight && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-surface-600 mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-700" />
            Apoio sobre seus exames (IA)
          </h2>
          <Card>
            <p className="font-semibold text-surface-900">{nextInsight.title}</p>
            <p className="mt-2 text-sm text-surface-700 leading-relaxed">{nextInsight.summary}</p>
          </Card>
        </section>
      )}
    </div>
  )
}
