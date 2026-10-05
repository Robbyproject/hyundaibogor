import { ArrowUpRight, Car, Clock3, MapPin, MessageCircle, MoveRight, ShieldCheck } from 'lucide-react'
import { heroAssets } from '../lib/data/hero'
import { whatsappUrl } from '../lib/data/site'

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 relative overflow-hidden bg-paper pb-12 pt-8 lg:pb-16 lg:pt-8">
      <div className="absolute right-[-8rem] top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:px-8">
        <div className="lg:col-span-7" data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Resmi & Terpercaya <span className="text-blue-300">•</span> Fast Response 24/7
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
            Dapatkan Mobil Impian Anda dengan <span className="text-secondary">Penawaran Terbaik</span>
          </h1>
          <div className="my-7 flex max-w-md items-center gap-3.5 rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-secondary">
              <Car size={22} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-ink">Layanan Test Drive di Tempat</p>
              <p className="mt-1 text-xs text-muted">Siap diantar ke kantor atau kediaman Anda</p>
            </div>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Berpengalaman lebih dari 7 tahun membantu 500+ keluarga dan korporasi mendapatkan unit mobil baru dengan proses transparan, approval kredit kilat, serta paket bonus terbaik.
          </p>
          <div className="mt-9 hidden max-w-xl grid-cols-3 gap-4 border-t border-line pt-6 sm:grid">
            {[
              ['24/7', 'Siap Membantu'],
            ].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-xl font-bold text-ink">{value}</strong>
                <span className="text-xs text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:row-span-2" data-reveal>
          <div className="absolute inset-5 rounded-[2rem] bg-surface" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-4 shadow-xl shadow-blue-100/70">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-surface">
              <img src={heroAssets.consultant} alt="Deva Agriani - Supervisor" className="h-full w-full object-cover object-top" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Official Consultant</p>
                <p className="mt-1 text-lg font-bold text-ink">Deva Agriani</p>
                <p className="text-sm text-muted">Sales Supervisor • PT Sinar Inti Primajaya Perkasa</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <ShieldCheck size={21} />
              </div>
            </div>
          </div>
          <div className="absolute -left-5 top-10 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink shadow-lg sm:flex">
            <Clock3 size={15} className="text-secondary" /> Respon &lt; 5 Menit
          </div>
          <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink shadow-lg sm:flex">
            <MapPin size={15} className="text-secondary" /> Jabodetabek & Sekitarnya
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-colors hover:bg-[#20BA5A] hover:-translate-y-0.5"
          >
            <MessageCircle size={17} /> Chat WhatsApp <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-secondary hover:text-secondary"
          >
            Contact Me <MoveRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
