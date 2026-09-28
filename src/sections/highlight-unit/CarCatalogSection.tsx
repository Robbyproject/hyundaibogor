import type { CarCategory } from '../../lib/data/CarPricelist'
import { carPricelist } from '../../lib/data/CarPricelist'
import { CarCatalogCard } from '../../components/highlight-unit/CarCatalogCard'

type CarCatalogSectionProps = {
  activeCategory: CarCategory | 'all'
}

export function CarCatalogSection({ activeCategory }: CarCatalogSectionProps) {
  const visibleCars = activeCategory === 'all' ? carPricelist : carPricelist.filter((car) => car.categories.includes(activeCategory))
  return <section id="catalog-list" className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8"><div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end" data-reveal><div><h2 className="text-2xl font-bold tracking-tight text-ink lg:text-3xl">Katalog Pilihan Unit Hyundai 2026</h2><p className="mt-1 text-sm text-muted">Daftar harga On The Road resmi wilayah Jabodetabek dan sekitarnya.</p></div><p className="text-xs font-semibold text-muted">{visibleCars.length} unit tersedia</p></div><div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg:gap-6">{visibleCars.map((car, index) => <CarCatalogCard key={car.id} car={car} index={index} />)}</div></section>
}
