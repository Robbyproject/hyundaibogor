import { CalendarDays } from 'lucide-react'
import type { CarCategory } from '../../lib/data/CarPricelist'

type CatalogFilterProps = {
  active: CarCategory | 'all'
  onChange: (category: CarCategory | 'all') => void
}

const filters: Array<{ label: string; value: CarCategory | 'all' }> = [
  { label: 'Semua Model', value: 'all' },
  { label: 'SUV', value: 'suv' },
  { label: 'MPV Family', value: 'mpv' },
  { label: 'Electric (EV)', value: 'ev' },
  { label: 'Hybrid (HEV)', value: 'hybrid' },
]

export function CatalogFilter({ active, onChange }: CatalogFilterProps) {
  return <div className="mt-8 flex items-center justify-between gap-4 overflow-x-auto pb-2"><div className="flex shrink-0 items-center gap-2">{filters.map((filter) => <button key={filter.value} type="button" onClick={() => onChange(filter.value)} className={`rounded-full px-4 py-2.5 text-xs font-bold transition-colors ${active === filter.value ? 'bg-ink text-white shadow-sm' : 'bg-surface text-muted hover:bg-blue-50 hover:text-ink'}`}>{filter.label}</button>)}</div><div className="hidden shrink-0 items-center gap-2 pl-4 text-[11px] font-semibold text-muted sm:flex"><CalendarDays size={15} className="text-secondary" /> Update Price List Resmi: September 2026</div></div>
}
