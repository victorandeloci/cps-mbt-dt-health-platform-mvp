import { motion, AnimatePresence } from 'framer-motion'
import { Upload, FileText, Loader2, MessageCircle, Sparkles } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { RiskBadge } from '@/components/ui/Badge'
import { PageHeader } from '@/components/ui/PageHeader'
import { useFakeUpload } from '@/hooks/useFakeUpload'
import { mockAIInterpretation } from '@/data/mockData'

export function ExamAnalysisPage() {
  const { phase, progress, fileName, startUpload, reset } = useFakeUpload()
  const [dragOver, setDragOver] = useState(false)

  const handleFile = useCallback(
    (file: File) => startUpload(file.name),
    [startUpload]
  )

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const showResults = phase === 'complete'

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 pb-16">
      <PageHeader
        title="Analisar exame"
        subtitle="Envie seu laudo e receba uma explicação de apoio — nunca um diagnóstico."
      />

      <Card className="mb-6">
        <h3 className="font-display font-semibold text-surface-900 mb-4">Enviar exame</h3>

        {phase === 'idle' && (
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 transition-colors ${
              dragOver
                ? 'border-sr-blue bg-sr-blue-50'
                : 'border-surface-300 bg-white hover:border-sr-blue'
            }`}
          >
            <Upload className="h-10 w-10 text-sr-blue mb-4" />
            <p className="font-semibold text-surface-900 text-center">
              Arraste seu PDF ou imagem
            </p>
            <p className="text-sm text-surface-600 mt-1 text-center">
              ou toque para selecionar
            </p>
            <input
              type="file"
              accept=".pdf,image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) handleFile(f)
              }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {(phase === 'uploading' || phase === 'analyzing') && (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center"
            >
              <Loader2 className="h-10 w-10 text-sr-blue animate-spin mx-auto mb-4" />
              <p className="font-semibold text-surface-900">
                {phase === 'uploading'
                  ? 'Enviando com segurança...'
                  : 'Gerando interpretação de apoio...'}
              </p>
              {fileName && (
                <p className="text-sm text-surface-600 mt-1 flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  {fileName}
                </p>
              )}
              <div className="mt-6 h-2.5 rounded-full bg-surface-200 overflow-hidden max-w-xs mx-auto">
                <motion.div
                  className="h-full bg-linear-to-r from-sr-blue to-sr-green rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-surface-600 mt-2 font-medium">{Math.round(progress)}%</p>
            </motion.div>
          )}
        </AnimatePresence>

        {showResults && (
          <Button variant="ghost" size="sm" className="mt-4 w-full" onClick={reset}>
            Enviar outro arquivo
          </Button>
        )}
      </Card>

      {!showResults && phase === 'idle' && (
        <Card className="flex items-center justify-center py-12">
          <div className="text-center text-surface-600">
            <Sparkles className="h-10 w-10 mx-auto mb-3 text-sr-green" />
            <p className="text-sm">O resumo aparecerá aqui após o envio.</p>
          </div>
        </Card>
      )}

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-sr-green" />
                <h3 className="font-display font-semibold text-surface-900">Resumo de apoio (IA)</h3>
              </div>
              <p className="text-surface-700 leading-relaxed">{mockAIInterpretation.summary}</p>
            </Card>

            <Card>
              <h3 className="font-display font-semibold text-surface-900 mb-4">O que merece atenção</h3>
              <ul className="space-y-3">
                {mockAIInterpretation.riskIndicators.map((r) => (
                  <li
                    key={r.label}
                    className="flex items-start justify-between gap-4 p-3 rounded-xl bg-surface-50 border border-surface-200"
                  >
                    <div>
                      <p className="font-semibold text-sm text-surface-900">{r.label}</p>
                      <p className="text-sm text-surface-600 mt-0.5">{r.description}</p>
                    </div>
                    <RiskBadge level={r.level} />
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-display font-semibold text-surface-900 mb-4">Valores em destaque</h3>
              <ul className="space-y-3">
                {mockAIInterpretation.highlightedValues.map((v) => (
                  <li key={v.name} className="border-l-4 border-sr-blue pl-4 py-1">
                    <p className="font-semibold text-sm text-surface-900">{v.name}</p>
                    <p className="text-sm text-surface-600 mt-0.5">{v.note}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Link to="/consultas">
              <Button size="lg" className="w-full">
                <MessageCircle className="h-5 w-5" />
                Discutir com especialista
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
