export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-surface-200 ${className}`}
      aria-hidden
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl glass p-6 space-y-4">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-24 w-full" />
    </div>
  )
}
