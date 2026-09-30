import { ArrowUpRight, MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import type { CarPricelistItem } from '../../lib/data'
import { whatsappUrl } from '../../lib/data/site'

type CarCatalogCardProps = {
  car: CarPricelistItem
  index: number
}

export function CarCatalogCard({ car }: CarCatalogCardProps) {
  const handleEnter = (event: React.MouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, { y: -6, duration: 0.35, ease: 'power2.out', overwrite: true })
  }

  const handleLeave = (event: React.MouseEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, { y: 0, duration: 0.45, ease: 'power3.out', overwrite: true })
  }

  const message = encodeURIComponent(`Halo Deva, saya tertarik dengan unit ${car.name}. Mohon info promo dan simulasi kreditnya.`)

  return (
    <article
      className="catalog-card flex w-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="group relative aspect-[16/9] overflow-hidden bg-surface">
        <span className="absolute left-2 top-2 z-10 rounded bg-ink/90 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.1em]">
          {car.badge}
        </span>
        <img src={car.image} alt={car.name} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold tracking-tight text-ink sm:text-lg">{car.name}</h3>
            <p className="mt-1 truncate text-[10px] leading-relaxed text-muted sm:text-xs">{car.tagline}</p>
          </div>
          <div className="shrink-0 text-right">
            <span className="block text-[8px] text-muted sm:text-[10px]">Mulai</span>
            <span className="text-[10px] font-bold text-secondary sm:text-sm">{car.priceFrom}</span>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-[10px] leading-relaxed text-muted sm:mt-4 sm:text-xs">{car.description}</p>

        <div className="catalog-variants-scroll mt-3 max-h-32 space-y-1 overflow-y-auto border-t border-line pt-3 pr-1 sm:mt-5 sm:max-h-40 sm:space-y-1.5 sm:pt-4">
          {car.variants.map((variant) => (
            <div
              key={variant.name}
              className={`flex items-center justify-between gap-2 rounded px-1.5 py-1 text-[9px] sm:px-2 sm:py-1.5 sm:text-[11px] ${
                variant.highlight ? 'bg-blue-50' : ''
              }`}
            >
              <span className={`truncate ${variant.highlight ? 'font-bold text-ink' : 'text-muted'}`}>{variant.name}</span>
              <span className={`shrink-0 font-bold ${variant.highlight ? 'text-secondary' : 'text-ink'}`}>{variant.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex gap-1.5 border-t border-line pt-3 sm:gap-2 sm:pt-5">
          <a
            href={`${whatsappUrl}&text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg bg-surface px-2 py-2 text-[9px] font-bold text-ink transition-colors hover:bg-blue-50 sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-[11px]"
          >
            <ArrowUpRight size={12} /> <span className="truncate">{car.quoteLabel}</span>
          </a>
          <a
            href={`${whatsappUrl}&text=${message}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chat untuk ${car.name}`}
            className="inline-flex items-center justify-center rounded-lg bg-ink px-2.5 py-2 text-white transition-colors hover:bg-secondary sm:px-3 sm:py-2.5"
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}