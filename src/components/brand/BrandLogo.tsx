const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`

interface BrandLogoProps {
  className?: string
  height?: number
}

export function BrandLogo({ className = 'h-9 w-auto', height }: BrandLogoProps) {
  return (
    <img
      src={logoSrc}
      alt="SR — plataforma de saúde preventiva"
      className={className}
      height={height}
      width={height ? undefined : 120}
      decoding="async"
    />
  )
}
