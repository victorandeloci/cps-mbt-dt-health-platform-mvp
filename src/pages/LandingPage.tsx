import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  FileText,
  Shield,
  Star,
  Video,
  Lock,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { BRAND, howItWorks, landingFeatures, testimonials } from '@/data/mockData'

const featureIcons: Record<string, typeof Video> = {
  video: Video,
  brain: Brain,
  layout: FileText,
  shield: Shield,
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function LandingPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-50 to-surface-50">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-surface-900 leading-[1.15]">
              {BRAND.name}
            </h1>
            <p className="mt-6 text-lg text-surface-700 leading-relaxed max-w-2xl">
              {BRAND.tagline} Agende consultas, entenda seus exames e cuide da saúde com apoio de IA
              — sempre como suporte, nunca como diagnóstico.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/consultas">
                <Button size="lg">
                  Agendar consulta <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/exames">
                <Button variant="outline" size="lg">
                  Analisar exame
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl"
          >
            {[
              { icon: FileText, label: 'Exames', desc: 'Entenda resultados com apoio de IA' },
              { icon: Video, label: 'Consultas', desc: 'Teleatendimento com especialistas' },
              { icon: Shield, label: 'Privacidade', desc: 'LGPD e dados protegidos' },
            ].map((item) => (
              <Card key={item.label} hover={false} padding="sm" className="text-center sm:text-left">
                <item.icon className="h-6 w-6 text-brand-700 mx-auto sm:mx-0 mb-2" />
                <p className="font-semibold text-surface-900">{item.label}</p>
                <p className="text-sm text-surface-600 mt-1">{item.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-surface-900">
              Feito para o seu dia a dia
            </h2>
            <p className="mt-4 text-surface-600">
              Menos cliques, mais clareza — foco em consultas e exames.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingFeatures.map((f, i) => {
              const Icon = featureIcons[f.icon] ?? Shield
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <Card className="h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 mb-4">
                      <Icon className="h-5 w-5 text-brand-800" />
                    </div>
                    <h3 className="font-display font-semibold text-surface-900">{f.title}</h3>
                    <p className="mt-2 text-sm text-surface-600 leading-relaxed">{f.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-display text-3xl font-bold text-center mb-12 text-surface-900">
            Como funciona
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <span className="font-display text-4xl font-bold text-brand-200">{step.step}</span>
                <h3 className="font-display text-lg font-semibold mt-3 text-surface-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-surface-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 text-brand-100 mb-4">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">LGPD</span>
              </div>
              <h2 className="font-display text-3xl font-bold">Privacidade em primeiro lugar</h2>
              <p className="mt-4 text-brand-50 leading-relaxed">
                Criptografia, consentimento claro e profissionais verificados — sua saúde tratada com
                o cuidado que merece.
              </p>
              <Link to="/privacidade" className="inline-block mt-6 text-surface-900">
                <Button variant="inverse">Saiba mais</Button>
              </Link>
            </motion.div>
            <motion.ul {...fadeUp} className="space-y-4">
              {[
                'Criptografia de dados em trânsito e em repouso',
                'Direito de exclusão e portabilidade',
                'IA apenas com finalidade educativa',
                'Profissionais com registro validado',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-50">
                  <CheckCircle2 className="h-5 w-5 text-brand-200 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="font-display text-3xl font-bold text-center mb-12 text-surface-900">
            O que nossos usuários dizem
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-surface-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand-700 flex items-center justify-center text-white text-sm font-bold">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-surface-900">{t.name}</p>
                      <p className="text-xs text-surface-600">{t.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-3xl rounded-3xl bg-brand-700 p-10 sm:p-12 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Comece pela sua necessidade
          </h2>
          <p className="mt-4 text-brand-50 max-w-lg mx-auto">
            Consulta ou exame — escolha o caminho mais direto.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-surface-900">
            <Link to="/consultas">
              <Button variant="inverse" size="lg" className="w-full sm:w-auto">
                Agendar consulta
              </Button>
            </Link>
            <Link to="/exames">
              <Button variant="inverse" size="lg" className="w-full sm:w-auto">
                Analisar exame
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
