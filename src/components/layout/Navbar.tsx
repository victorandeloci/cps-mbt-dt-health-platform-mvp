import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/dashboard', label: 'Início rápido' },
  { to: '/exames', label: 'Exames' },
  { to: '/consultas', label: 'Consultas' },
  { to: '/privacidade', label: 'Privacidade' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass border-b border-surface-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <BrandLogo className="h-8 w-auto sm:h-9" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sr-blue bg-sr-blue-50'
                    : 'text-surface-700 hover:text-surface-900 hover:bg-surface-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/dashboard" className="hidden sm:block">
            <Button size="sm">Entrar</Button>
          </Link>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-surface-700 hover:bg-surface-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-surface-200 overflow-hidden bg-white"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive ? 'bg-sr-blue-50 text-sr-blue' : 'text-surface-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/dashboard" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full">Entrar</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
