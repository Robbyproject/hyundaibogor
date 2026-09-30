import type { CarCategory } from '../../lib/data/CarPricelist'
import { carPricelist } from '../../lib/data/CarPricelist'
import { CarCatalogCard } from '../../components/highlight-unit/CarCatalogCard'
import { CatalogFilter } from '../../components/highlight-unit/CatalogFilter'

type CarCatalogSectionProps = {
  activeCategory: CarCategory | 'all'
  onCategoryChange: (category: CarCategory | 'all') => void
}

export function CarCatalogSection({ activeCategory, onCategoryChange }: CarCatalogSectionProps) {
  const visibleCars = activeCategory === 'all' ? carPricelist : carPricelist.filter((car) => car.categories.includes(activeCategory))

  return (
    <section id="catalog-list" className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8">
      {/* Container utama katalog dianimasikan bersamaan */}
      <div data-catalog-item className="mb-6">
        <CatalogFilter active={activeCategory} onChange={onCategoryChange} />
      </div>

      <div data-catalog-item className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink lg:text-3xl">Katalog Pilihan Unit Hyundai 2026</h2>
          <p className="mt-1 text-sm text-muted">Daftar harga On The Road resmi wilayah Jabodetabek dan sekitarnya.</p>
        </div>
        <p className="text-xs font-semibold text-muted">{visibleCars.length} unit tersedia</p>
      </div>

      <div data-catalog-item className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg:gap-6">
        {visibleCars.map((car, index) => (
          <CarCatalogCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </section>
  )
}