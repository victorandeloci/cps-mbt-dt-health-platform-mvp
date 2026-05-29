import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { BRAND } from '@/data/mockData'

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <BrandLogo className="h-8 w-auto mb-4" />
            <p className="text-sm font-medium text-sr-blue">{BRAND.tagline}</p>
            <p className="text-sm text-surface-600 max-w-md leading-relaxed mt-2">
              Plataforma de saúde preventiva digital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-surface-900 mb-3">Acesso rápido</h4>
            <ul className="space-y-2 text-sm text-surface-700">
              <li>
                <Link to="/exames" className="hover:text-sr-blue font-medium">
                  Analisar exames
                </Link>
              </li>
              <li>
                <Link to="/consultas" className="hover:text-sr-blue font-medium">
                  Consultas
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-sr-blue font-medium">
                  Início rápido
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-surface-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-surface-700">
              <li>
                <Link to="/privacidade" className="hover:text-sr-blue font-medium">
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
          <p className="text-xs text-surface-500">© 2026 {BRAND.name}</p>
        </div>
      </div>
    </footer>
  )
}
