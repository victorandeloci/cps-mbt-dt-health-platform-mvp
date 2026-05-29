import { Link } from 'react-router-dom'
import { BRAND } from '@/data/mockData'

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-white font-bold text-sm">
                P
              </div>
              <span className="font-display font-bold text-surface-900 text-sm">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-surface-600 max-w-md leading-relaxed">{BRAND.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-surface-900 mb-3">Acesso rápido</h4>
            <ul className="space-y-2 text-sm text-surface-700">
              <li>
                <Link to="/exames" className="hover:text-brand-800 font-medium">
                  Analisar exames
                </Link>
              </li>
              <li>
                <Link to="/consultas" className="hover:text-brand-800 font-medium">
                  Consultas
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-brand-800 font-medium">
                  Início rápido
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-surface-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-surface-700">
              <li>
                <Link to="/privacidade" className="hover:text-brand-800 font-medium">
                  Privacidade & LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-surface-200 space-y-3">
          <p className="text-xs text-surface-600 leading-relaxed max-w-3xl">
            Protótipo visual para apresentação. Os fluxos exibidos são demonstrativos; interpretações
            de IA são apoio educativo e não substituem consulta ou diagnóstico médico.
          </p>
          <p className="text-xs text-surface-500">© 2026 {BRAND.fullName}</p>
        </div>
      </div>
    </footer>
  )
}
