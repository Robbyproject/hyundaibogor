import { CalendarDays, Check, ChevronRight, Eye, Gauge, MessageCircle, Users } from 'lucide-react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { carPricelist } from '../lib/data/CarPricelist'
import { whatsappUrl } from '../lib/data/site'

const neiraCar = carPricelist.find((car) => car.id === 'hyundai-neira')

const highlights = [
  { value: '7', label: 'penumpang', description: 'SUV listrik dengan konfigurasi tujuh penumpang', icon: Users },
  { value: '200 mm', label: 'jarak terendah ke tanah', description: 'Jarak terendah ke tanah untuk beragam kondisi jalan', icon: Gauge },
  { value: 'Bluelink', label: '+ BVM', description: 'Hyundai Bluelink dan Blind-Spot View Monitor (BVM)', icon: Eye },
  { value: '3 baris', label: 'kabin', description: 'Akses praktis ke baris ketiga untuk keluarga', icon: Check },
]

const timeline = [
  {
    date: '16 November 2026',
    title: 'Informasi resmi dirilis',
    description: 'Hyundai Indonesia membagikan informasi awal mengenai NEIRA.',
  },
  {
    date: '20 November 2026',
    title: 'Pemesanan awal dijadwalkan',
    description: 'Pemesanan awal direncanakan pada GAIKINDO Jakarta Auto Week 2026.',
  },
  {
    date: 'Menyusul',
    title: 'Harga OTR resmi',
    description: 'Harga resmi belum diumumkan. Kami akan membagikan kabar terbaru saat tersedia.',
  },
]

const message = encodeURIComponent(
  'Halo Mbak Deva, salam kenal. Saya membaca berita di website hyundaijabodetabek.com mengenai Hyundai NEIRA, SUV listrik 7 penumpang terbaru. Boleh minta informasi terbaru seputar harga, spesifikasi, dan jadwal pemesanan Hyundai NEIRA? Terima kasih!'
)
const chatUrl = `${whatsappUrl.split('?')[0]}?text=${message}`

export function NeiraNewsPage() {
  if (!neiraCar) {
    throw new Error('Hyundai NEIRA is missing from the car pricelist')
  }

  const heroCopyRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const heroStatusRef = useRef<HTMLDListElement>(null)

  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (heroCopyRef.current) {
        timeline.fromTo(
          heroCopyRef.current.children,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 }
        )
      }

      if (heroImageRef.current) {
        timeline.fromTo(
          heroImageRef.current,
          { autoAlpha: 0, scale: 1.04 },
          { autoAlpha: 1, scale: 1, duration: 0.85 },
          '-=0.65'
        )
      }

      if (heroStatusRef.current) {
        timeline.fromTo(
          heroStatusRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          '-=0.4'
        )
      }
    })

    return () => media.revert()
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper pb-16">
        <article>
          <header className="border-b border-line bg-paper text-ink">
            <div className="relative isolate overflow-hidden">
              <div
                ref={heroImageRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-cover [background-position:55%_center] md:[background-position:center_calc(58%_-_15px)]"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/bofnhqhp/image/upload/v1794916438/bg-hyundai-neira.webp')",
                }}
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-paper/80 via-paper/55 to-paper/10 md:hidden" aria-hidden="true" />
              <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col px-5 pb-0 pt-1 sm:px-6 md:pt-5 lg:px-8 lg:pt-6">
                <nav aria-label="Breadcrumb" className="mb-1 flex flex-wrap items-center gap-1.5 text-xs text-muted md:mb-5">
                  <a href="/" className="transition-colors hover:text-secondary">Beranda</a>
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Berita Hyundai</span>
                  <ChevronRight size={14} aria-hidden="true" />
                  <span className="font-semibold text-ink">Hyundai NEIRA</span>
                </nav>
                <div className="relative isolate grid min-h-0 flex-1 items-start gap-5 overflow-hidden pb-56 pt-0 sm:gap-8 sm:pb-40 md:items-center md:grid-cols-2 md:pb-6 md:pt-4 lg:gap-12 lg:pb-8">
                  <div ref={heroCopyRef} className="relative top-[35px] z-10 mx-auto max-w-[19rem] py-0 text-center sm:max-w-none md:top-0 md:mx-0 md:max-w-none md:-translate-y-8 md:py-2 md:text-left">
                    <p className="mx-auto mt-6 mb-2 inline-flex max-w-full flex-nowrap whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1.5 text-[9px] font-bold text-ink shadow-sm sm:px-3 sm:text-xs md:mx-0 md:mt-0 md:mb-4">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Segera hadir · Pemesanan awal 20 Nov 2026
                    </p>
                    <h1 className="mt-5 whitespace-nowrap text-[2.125rem] font-bold leading-none tracking-[-0.055em] md:mt-0 sm:text-6xl lg:text-7xl">
                      Hyundai NEIRA
                    </h1>
                    <p className="mt-2 text-lg font-semibold leading-snug text-ink sm:text-xl md:mt-4">
                      SUV Listrik 7 Penumpang Terbaru
                      <br />
                      Segera Hadir
                    </p>
                    <p className="mx-auto mt-2 max-w-[19rem] text-xs leading-relaxed text-muted sm:text-sm md:mx-0 md:mt-4 md:max-w-md md:text-base">
                      Ikuti informasi jadwal pemesanan dan harga resmi NEIRA dari Deva Agriani.
                    </p>
                    <div className="mt-3 flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 md:mt-6 md:justify-start">
                      <a
                        href={chatUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-secondary px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-ink sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                      >
                        <span className="md:hidden">Tanya NEIRA</span>
                        <span className="hidden md:inline">Konsultasi Hyundai NEIRA</span>
                        <MessageCircle size={16} aria-hidden="true" />
                      </a>
                      <a
                        href="/unit-unggulan"
                        className="inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-line bg-white px-3 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-secondary hover:text-secondary sm:px-5 sm:py-3 sm:text-sm"
                      >
                        Lihat Unit
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <dl ref={heroStatusRef} id="status" className="grid border-t border-line bg-paper sm:grid-cols-3">
                <div className="border-b border-line py-4 sm:border-b-0 sm:border-r sm:pr-5">
                  <dt className="text-xs text-muted">Pemesanan awal</dt>
                  <dd className="mt-1 text-sm font-bold text-ink">Dijadwalkan 20 November 2026</dd>
                </div>
                <div className="border-b border-line py-4 sm:border-b-0 sm:border-r sm:px-5">
                  <dt className="text-xs text-muted">Harga OTR resmi</dt>
                  <dd className="mt-1 text-sm font-bold text-secondary">Belum diumumkan</dd>
                </div>
                <div className="py-4 sm:pl-5">
                  <dt className="text-xs text-muted">Informasi terbaru</dt>
                  <dd className="mt-1 text-sm font-bold text-ink">Hubungi Deva Agriani</dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="pb-10 pt-8 text-xs text-muted">
              <CalendarDays className="mr-1 inline-block text-secondary" size={14} aria-hidden="true" />
              <time dateTime="2026-11-17">17 November 2026</time>
              <span aria-hidden="true"> · </span>
              Berita & Informasi Mobil Baru
            </div>

            <section aria-labelledby="timeline-title" className="pb-12">
              <h2 id="timeline-title" className="mb-6 text-2xl font-bold tracking-tight text-ink">
                Jalur menuju peluncuran
              </h2>
              <ol className="relative grid gap-6 border-l-2 border-blue-100 pl-5 sm:ml-2 sm:grid-cols-3 sm:gap-6 sm:border-l-0 sm:border-t-2 sm:pl-0">
                {timeline.map((item, index) => (
                  <li key={item.title} className="relative sm:pt-5">
                    <span
                      className={`absolute -left-[1.63rem] top-1 h-3 w-3 rounded-full border-2 border-paper sm:-top-[0.43rem] sm:left-0 ${
                        index === 1 ? 'bg-secondary ring-4 ring-blue-100' : 'bg-blue-200'
                      }`}
                      aria-hidden="true"
                    />
                    <p className="text-xs font-bold text-secondary">{item.date}</p>
                    <h3 className="mt-1 text-sm font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-10">
              <section aria-labelledby="features-title">
                <h2 id="features-title" className="mb-4 text-2xl font-bold tracking-tight text-ink">
                  Yang membuat NEIRA berbeda
                </h2>
                <ul className="divide-y divide-blue-100 border-y border-blue-100">
                  {highlights.map(({ value, label, description, icon: Icon }) => (
                    <li key={value} className="grid grid-cols-[2.25rem_6rem_minmax(0,1fr)] items-center gap-3 py-4 sm:grid-cols-[2.5rem_7rem_minmax(0,1fr)] sm:gap-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white sm:h-10 sm:w-10">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <strong className="block text-base font-extrabold leading-tight text-ink sm:text-lg">{value}</strong>
                        <span className="text-[10px] text-secondary">{label}</span>
                      </span>
                      <span className="text-xs leading-relaxed text-muted sm:text-sm">{description}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-4 text-sm leading-7 text-muted sm:text-base">
                  <section>
                    <figure className="mb-6 overflow-hidden rounded-2xl border border-line bg-white p-3 sm:p-5">
                      <img
                        src={neiraCar.image}
                        alt="Hyundai NEIRA EV, SUV listrik tujuh penumpang"
                        className="mx-auto max-h-72 w-full object-contain sm:max-h-96"
                        loading="lazy"
                      />
                    </figure>
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-ink">
                      Informasi awal Hyundai NEIRA
                    </h2>
                    <p>
                      PT Hyundai Motors Indonesia mengumumkan rencana memperkenalkan Hyundai NEIRA,
                      SUV listrik berkonfigurasi tujuh penumpang, di GAIKINDO Jakarta Auto Week
                      (GJAW) 2026. Berdasarkan informasi yang tersedia, pemesanan awal dijadwalkan
                      mulai dibuka pada 20 November 2026. Calon pembeli sebaiknya mengonfirmasi
                      status pemesanan dan ketersediaan terkini kepada konsultan penjualan.
                    </p>
                    <p className="mt-3">
                      NEIRA direncanakan diproduksi di Indonesia. Laporan media otomotif menyebut
                      tingkat komponen dalam negeri (TKDN) ditargetkan melampaui 60 persen. Harga
                      OTR resmi belum diumumkan dalam informasi yang kami rujuk. Spesifikasi akhir
                      dapat berbeda saat produk dan harga resmi diumumkan.
                    </p>
                  </section>

                  <section className="border-t border-line pt-5">
                    <h2 className="mb-3 text-base font-bold text-ink">Sumber informasi</h2>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      <li>
                        <a
                          href="https://www.hyundai.com/id/id/hyundai-story/news/detail?newsid=2872"
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary underline underline-offset-2"
                        >
                          Hyundai Indonesia — informasi NEIRA (16 November 2026)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.hyundai.com/id/id/hyundai-story/news/detail?newsid=2866"
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary underline underline-offset-2"
                        >
                          Hyundai Indonesia — informasi NEIRA (6 November 2026)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.oto.com/berita-mobil/hyundai-siap-buka-pre-booking-neira-di-gaw-2026-bakal-dirakit-lokal"
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary underline underline-offset-2"
                        >
                          Oto.com — jadwal pemesanan awal dan rencana produksi lokal
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://otodriver.com/berita/2026/pre-booking-hyundai-neira-dibuka-di-gaw-2026-tkdn-tembus-60-persen-preefhdgsen"
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary underline underline-offset-2"
                        >
                          OtoDriver — laporan TKDN Hyundai NEIRA
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://oto.detik.com/mobil/d-8739841/hyundai-neira-meluncur-di-ri-akhir-bulan-ini-harga-di-bawah-rp-400-juta"
                          target="_blank"
                          rel="noreferrer"
                          className="text-secondary underline underline-offset-2"
                        >
                          detikOto — informasi peluncuran dan harga yang belum diumumkan
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </section>

              <aside className="h-fit rounded-2xl border border-line bg-white p-5 text-ink shadow-sm sm:p-6 lg:sticky lg:top-24">
                <p className="text-xs font-bold text-secondary">Kabar langsung dari konsultan</p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-ink">
                  Hyundai NEIRA di Bogor & Jabodetabek
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Minta kabar terbaru mengenai harga, spesifikasi, dan pemesanan NEIRA dari Deva
                  Agriani untuk area Bogor, Sentul, Jakarta, Depok, Tangerang, Bekasi, dan Bandung.
                </p>
                <a
                  href={chatUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-ink"
                >
                  Tanya Deva soal NEIRA
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
