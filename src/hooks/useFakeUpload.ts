import { useCallback, useState } from 'react'

type UploadPhase = 'idle' | 'uploading' | 'analyzing' | 'complete'

export function useFakeUpload() {
  const [phase, setPhase] = useState<UploadPhase>('idle')
  const [progress, setProgress] = useState(0)
  const [fileName, setFileName] = useState<string | null>(null)

  const reset = useCallback(() => {
    setPhase('idle')
    setProgress(0)
    setFileName(null)
  }, [])

  const startUpload = useCallback((name: string) => {
    setFileName(name)
    setPhase('uploading')
    setProgress(0)

    let p = 0
    const uploadInterval = setInterval(() => {
      p += Math.random() * 18 + 8
      if (p >= 100) {
        clearInterval(uploadInterval)
        setProgress(100)
        setPhase('analyzing')
        setTimeout(() => {
          setPhase('complete')
        }, 1800)
      } else {
        setProgress(Math.min(p, 99))
      }
    }, 280)
  }, [])

  return { phase, progress, fileName, startUpload, reset }
}
