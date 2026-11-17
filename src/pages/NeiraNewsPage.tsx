import { CalendarDays, Check, ChevronRight, Eye, Gauge, MessageCircle, Users } from 'lucide-react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { whatsappUrl } from '../lib/data/site'

const highlights = [
  { icon: Users, text: 'SUV listrik dengan konfigurasi tujuh penumpang' },
  { icon: Gauge, text: 'Jarak terendah ke tanah 200 mm untuk beragam kondisi jalan' },
  { icon: Eye, text: 'Hyundai Bluelink dan Blind-Spot View Monitor (BVM)' },
  { icon: Check, text: 'Kabin tiga baris dengan akses praktis ke baris ketiga' },
]

const message = encodeURIComponent(
  'Halo Mbak Deva, salam kenal. Saya membaca berita di website hyundaijabodetabek.com mengenai Hyundai NEIRA, SUV listrik 7 penumpang terbaru. Boleh minta informasi terbaru seputar harga, spesifikasi, dan jadwal pemesanan Hyundai NEIRA? Terima kasih!'
)
const chatUrl = `${whatsappUrl.split('?')[0]}?text=${message}`

export function NeiraNewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper pb-16">
        <article className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <a href="/" className="transition-colors hover:text-secondary">Beranda</a>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Berita Hyundai</span>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="font-semibold text-ink">Hyundai NEIRA</span>
          </nav>

          <header className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Berita & Informasi Mobil Baru
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl xl:text-6xl">
              Hyundai NEIRA: SUV Listrik 7 Penumpang Terbaru Segera Hadir
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              Hyundai NEIRA dijadwalkan diperkenalkan dan mulai menerima pemesanan awal pada
              GAIKINDO Jakarta Auto Week 2026. Simak informasi awal mengenai SUV listrik keluarga
              ini dan cara meminta kabar terbaru.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
              <CalendarDays size={14} className="text-secondary" aria-hidden="true" />
              <time dateTime="2026-11-17">17 November 2026</time>
              <span aria-hidden="true">·</span>
              <span>Informasi Hyundai NEIRA</span>
            </div>
          </header>

          <section
            aria-labelledby="neira-status-title"
            className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-56 bg-surface sm:min-h-72">
                <img
                  src="https://res.cloudinary.com/bofnhqhp/image/upload/v1794896830/hyundai-neira-new_compressed.webp"
                  alt="Hyundai NEIRA, SUV listrik keluarga tujuh penumpang"
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white shadow">
                  Segera Hadir
                </span>
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  Status Hyundai NEIRA
                </p>
                <h2 id="neira-status-title" className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Informasi harga dan pemesanan
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base">
                  SUV listrik keluarga 7 penumpang. Pemesanan awal dijadwalkan mulai 20 November
                  2026; harga resmi belum diumumkan.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <dt className="text-xs text-muted">Pemesanan awal</dt>
                    <dd className="mt-1 text-sm font-bold text-ink">Dijadwalkan 20 November 2026</dd>
                  </div>
                  <div className="rounded-xl bg-surface p-3">
                    <dt className="text-xs text-muted">Harga OTR resmi</dt>
                    <dd className="mt-1 text-sm font-bold text-secondary">Belum diumumkan</dd>
                  </div>
                </dl>
                <a
                  href={chatUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-ink"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Minta Informasi Hyundai NEIRA
                </a>
              </div>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
            <div className="min-w-0 space-y-6 text-sm leading-7 text-muted sm:text-base">
              <section>
                <h2 className="mb-3 text-xl font-bold tracking-tight text-ink">
                  Informasi awal Hyundai NEIRA
                </h2>
                <p>
                  PT Hyundai Motors Indonesia mengumumkan rencana memperkenalkan Hyundai NEIRA,
                  SUV listrik berkonfigurasi tujuh penumpang, di GAIKINDO Jakarta Auto Week
                  (GJAW) 2026. Berdasarkan informasi yang tersedia, pemesanan awal dijadwalkan mulai
                  dibuka pada 20 November 2026. Informasi ini merupakan jadwal yang diumumkan
                  sebelumnya; calon pembeli sebaiknya mengonfirmasi status pemesanan dan
                  ketersediaan terkini kepada konsultan penjualan.
                </p>
                <p className="mt-3">
                  NEIRA direncanakan diproduksi di Indonesia. Laporan media otomotif menyebut
                  tingkat komponen dalam negeri (TKDN) ditargetkan melampaui 60 persen. Harga OTR
                  resmi belum diumumkan dalam informasi yang kami rujuk.
                </p>
              </section>

              <section>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  Sekilas tentang NEIRA
                </p>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Fitur dan keunggulan
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {highlights.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-start gap-3 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm sm:p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-white shadow-sm">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="pt-1 text-sm font-bold leading-relaxed text-ink sm:text-base">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed">
                  Rincian di atas adalah informasi awal yang diberitakan; spesifikasi akhir dapat
                  berbeda saat produk dan harga resmi diumumkan.
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

            <aside className="h-fit rounded-2xl border border-line bg-gradient-to-b from-blue-50 to-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                Informasi lokal
              </p>
              <h2 className="mt-2 text-lg font-bold text-ink">
                Hyundai NEIRA di Bogor & Jabodetabek
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Minta kabar terbaru mengenai harga, spesifikasi, dan pemesanan Hyundai NEIRA dari
                Deva Agriani untuk area Bogor, Sentul, Jakarta, Depok, Tangerang, dan Bekasi.
              </p>
              <a
                href={chatUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-ink"
              >
                Hubungi via WhatsApp <ChevronRight size={14} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
