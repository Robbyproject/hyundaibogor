import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-secondary">{eyebrow}</span>
        <h2 className="text-3xl font-bold tracking-[-0.03em] text-ink md:text-4xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}
