import { ShieldCheck } from 'lucide-react'

export function CatalogIntroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl" data-reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" /> Katalog Unit Resmi 2026
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
            Pilihan Unit Unggulan & Harga OTR Hyundai
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">
            Dapatkan penawaran harga terbaik, promo bunga ringan, diskon eksklusif, serta unit test drive siap antar ke lokasi Anda bersama <strong className="text-ink">Deva Agriani</strong>.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-surface p-4" data-reveal>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-secondary">
            <ShieldCheck size={22} />
          </div>
          <div>
            <span className="block text-xs font-bold text-ink">Authorized Dealer OTR</span>
            <span className="block text-[10px] text-muted">Garansi resmi Hyundai</span>
          </div>
        </div>
      </div>
    </section>
  )
}