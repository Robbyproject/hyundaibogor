import { CalendarDays, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { assets } from '../lib/data/assets'
import { phoneDisplay, phoneUrl, whatsappUrl } from '../lib/data/site'

const showroomAddress = 'Jl. MH. Thamrin No.63, Sentul, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810'
const mapUrl = 'https://maps.app.goo.gl/2WV6S1WLczVFiwwC6?g_st=ac'
const mapEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6380095451245!2d106.8578237!3d-6.567290599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7707f7f4193%3A0xa8b98647a74f9d36!2sHyundai%20AEON%20Sentul%20Official!5e0!3m2!1sid!2sid!4v1790739081162!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-3 border-b border-line pb-7 md:flex-row md:items-end">
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">
              Lokasi & Kontak Resmi
            </p>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-ink">
              Showroom & Konsultasi
            </h2>
          </div>
          <p className="max-w-xs text-left text-[11px] leading-relaxed text-muted md:text-right"></p>
        </div>

        <div className="grid gap-8 pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-10">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-12">
              <div className="sm:col-span-7">
                <div className="mb-4 flex items-center gap-3">
                  <img src={assets.dealerLogo} alt="Hyundai Logo" className="h-7 w-auto object-contain" />
                  <span className="text-xs font-bold text-ink">PT Sinar Inti Primajaya Perkasa</span>
                </div>
                <div className="space-y-2.5 text-[11px] leading-relaxed text-muted">
                  <p className="flex gap-2">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-secondary" />
                    {showroomAddress}
                  </p>
                  <p className="flex gap-2">
                    <CalendarDays size={13} className="mt-0.5 shrink-0 text-secondary" />
                    Senin - Minggu: 08.30 - 19.00 WIB
                  </p>
                  <p className="flex items-center gap-1.5 pt-1 text-[10px] font-semibold text-emerald-600">
                    <ShieldCheck size={13} /> Dealer Resmi Terakreditasi
                  </p>
                </div>
              </div>

              <div className="sm:col-span-5">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.14em] text-secondary">
                  Sales Supervisor
                </p>
                <p className="text-xs font-bold text-ink">Deva Agriani</p>
                <div className="mt-3 space-y-2 text-[11px] text-muted">
                  <a href={phoneUrl} className="flex items-center gap-2 hover:text-secondary">
                    <Phone size={12} className="text-secondary" /> {phoneDisplay}
                  </a>
                  <a href="mailto:deva.sales@sinaprimajaya.co.id" className="flex items-center gap-2 break-all hover:text-secondary">
                    <Mail size={12} className="text-secondary" />devaagriani2208@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Button dibuat lebih memanjang */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-[11px] font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto sm:min-w-[240px]"
              >
                <Phone size={13} /> Hubungi Sekarang
              </a>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-md border border-line bg-white lg:col-span-5">
            <iframe
              title="Lokasi showroom Sentul Bogor"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              src={mapEmbed}
            />
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-1.5 text-[10px] font-bold text-ink shadow-md"
            >
              <MapPin size={12} className="text-secondary" /> Buka di Maps <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2.5">
            <img src={assets.dealerLogo} alt="Hyundai Dealer Logo" className="hidden h-4 w-auto object-contain sm:block" />
            <span>© 2026 PT Sinar Inti Primajaya Perkasa - Deva Agriani.</span>
          </div>
          <div className="flex gap-4">
            <a href="/#home" className="hover:text-ink">Kebijakan Privasi</a>
            <a href="/#home" className="hover:text-ink">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
