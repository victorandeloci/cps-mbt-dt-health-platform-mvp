import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Check, Mic, Star, Video, VideoOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'
import { doctors, specialties } from '@/data/mockData'
import type { Doctor } from '@/types'

export function ConsultationPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todos')
  const [scheduled, setScheduled] = useState(false)
  const [inCallPreview, setInCallPreview] = useState(false)

  const filtered =
    selectedSpecialty === 'Todos'
      ? doctors
      : doctors.filter((d) =>
          d.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase().slice(0, 4))
        )

  const handleSchedule = () => {
    if (selectedDoctor && selectedSlot) setScheduled(true)
  }

  const filterClass = (active: boolean) =>
    active
      ? 'bg-brand-700 text-white'
      : 'bg-white border border-surface-300 text-surface-800 hover:border-brand-600'

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 pb-16">
      <PageHeader
        title="Consultas online"
        subtitle="Escolha o profissional, agende o horário e acesse a teleconsulta."
      />

      <div className="flex gap-2 overflow-x-auto pb-6">
        <button
          type="button"
          onClick={() => setSelectedSpecialty('Todos')}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filterClass(selectedSpecialty === 'Todos')}`}
        >
          Todos
        </button>
        {specialties.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSelectedSpecialty(s)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filterClass(selectedSpecialty === s)}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                hover
                className={selectedDoctor?.id === doc.id ? 'ring-2 ring-brand-700' : ''}
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => {
                    setSelectedDoctor(doc)
                    setSelectedSlot(null)
                    setScheduled(false)
                    setInCallPreview(false)
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-bold">
                      {doc.avatarInitials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="font-display font-semibold text-surface-900">{doc.name}</h3>
                          <p className="text-sm text-surface-600">{doc.specialty}</p>
                        </div>
                        <p className="font-bold text-brand-800 shrink-0">R$ {doc.price}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-surface-700">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        <span className="font-semibold">{doc.rating}</span>
                        <span className="text-surface-600">({doc.reviews} avaliações)</span>
                      </div>
                    </div>
                  </div>
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card>
          <h3 className="font-display font-semibold text-surface-900 flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-brand-700" />
            Agendar horário
          </h3>

          {!selectedDoctor ? (
            <p className="text-surface-600 text-sm py-4 text-center">
              Selecione um profissional acima.
            </p>
          ) : scheduled ? (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-4"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 mb-4">
                <Check className="h-7 w-7 text-emerald-800" />
              </div>
              <p className="font-semibold text-surface-900">Consulta agendada!</p>
              <p className="text-sm text-surface-600 mt-2">
                {selectedDoctor.name} — {selectedSlot}
              </p>
              <Button className="mt-6 w-full" variant="outline" onClick={() => setInCallPreview(true)}>
                Entrar na sala (prévia)
              </Button>
            </motion.div>
          ) : (
            <>
              <p className="text-sm text-surface-600 mb-3">{selectedDoctor.name}</p>
              <div className="grid gap-2">
                {selectedDoctor.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold text-left transition-colors ${
                      selectedSlot === slot
                        ? 'bg-brand-700 text-white'
                        : 'bg-surface-50 border border-surface-200 text-surface-900 hover:border-brand-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <Button className="w-full mt-4" disabled={!selectedSlot} onClick={handleSchedule}>
                Confirmar agendamento
              </Button>
            </>
          )}
        </Card>

        {inCallPreview && selectedDoctor && (
          <Card padding="sm">
            <h3 className="font-display font-semibold text-sm px-2 pt-2 mb-3 flex items-center gap-2 text-surface-900">
              <Video className="h-4 w-4 text-brand-700" />
              Sala de teleconsulta (prévia)
            </h3>
            <div className="relative aspect-video rounded-xl bg-brand-800 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="h-16 w-16 rounded-full bg-brand-700 flex items-center justify-center text-xl font-bold mb-2">
                  {selectedDoctor.avatarInitials}
                </div>
                <p className="font-semibold">{selectedDoctor.name}</p>
                <p className="text-brand-100 text-sm mt-1">Conectando...</p>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 flex justify-center gap-3 bg-black/40">
                <button
                  type="button"
                  className="p-3 rounded-full bg-white/20 text-white"
                  aria-label="Microfone"
                >
                  <Mic className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="p-3 rounded-full bg-red-700 text-white"
                  aria-label="Encerrar"
                  onClick={() => setInCallPreview(false)}
                >
                  <VideoOff className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
