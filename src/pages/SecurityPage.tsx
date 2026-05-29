import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Database,
  Eye,
  FileCheck,
  Lock,
  Shield,
  UserCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { BRAND, securityFeatures } from '@/data/mockData'

const iconMap: Record<string, typeof Lock> = {
  lock: Lock,
  'file-check': FileCheck,
  database: Database,
  'badge-check': BadgeCheck,
}

const principles = [
  {
    title: 'Minimização de dados',
    description: 'Coletamos apenas o necessário para oferecer os serviços da plataforma.',
    icon: Eye,
  },
  {
    title: 'Consentimento explícito',
    description: 'Você controla o que compartilha, com opção de revogar a qualquer momento.',
    icon: UserCheck,
  },
  {
    title: 'Profissionais validados',
    description: 'Registros CRM/CRN verificados antes de atendimentos na plataforma.',
    icon: BadgeCheck,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function SecurityPage() {
  return (
    <div className="pb-16">
      <div className="bg-brand-50 border-b border-surface-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <PageHeader
            title="Segurança & Privacidade"
            subtitle="LGPD by design — transparência e controle dos seus dados de saúde."
          />
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {securityFeatures.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Shield
            return (
              <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08 }}>
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 mb-4">
                    <Icon className="h-6 w-6 text-brand-800" />
                  </div>
                  <h3 className="font-display font-semibold text-surface-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-surface-600 leading-relaxed">{f.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="bg-brand-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div {...fadeUp}>
            <Shield className="h-10 w-10 text-brand-200 mb-4" />
            <h2 className="font-display text-2xl font-bold">Compromisso com a LGPD</h2>
            <p className="mt-4 text-brand-50 leading-relaxed">
              Na {BRAND.fullName}, privacidade é requisito de design. Interpretações de IA nunca
              são apresentadas como decisões clínicas autônomas.
            </p>
          </motion.div>
          <div className="mt-10 space-y-6">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <p.icon className="h-7 w-7 text-brand-200 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-brand-50 text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <Card padding="lg" className="text-center">
          <Lock className="h-10 w-10 text-brand-700 mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-surface-900">Seus dados, seu controle</h3>
          <p className="mt-4 text-surface-600 leading-relaxed">
            Exportação, correção e exclusão de dados em poucos cliques, conforme a LGPD.
          </p>
          <Link to="/dashboard" className="inline-block mt-6">
            <Button>Voltar ao início rápido</Button>
          </Link>
        </Card>
      </section>
    </div>
  )
}
