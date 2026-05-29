import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'inverse' | 'onDark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 shadow-md shadow-brand-700/20 hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-surface-800 text-white hover:bg-surface-900 hover:scale-[1.02] active:scale-[0.98]',
  ghost: 'bg-transparent text-surface-800 hover:bg-surface-100',
  outline:
    'border-2 border-surface-300 bg-white text-surface-900 hover:bg-surface-50 hover:border-surface-400',
  /** Fundo claro + texto escuro (uso em seções com fundo brand escuro) */
  inverse:
    'bg-white text-surface-900 hover:bg-surface-100 shadow-sm hover:scale-[1.02] active:scale-[0.98] [color:var(--color-surface-900)]',
  /** Contorno em seção escura — também fundo claro e texto escuro */
  onDark:
    'border-2 border-surface-200 bg-white text-surface-900 hover:bg-surface-100 hover:scale-[1.02] active:scale-[0.98] [color:var(--color-surface-900)]',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
