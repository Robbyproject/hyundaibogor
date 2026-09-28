import { ArrowUpRight, BadgePercent, Calculator, Gift } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { whatsappUrl } from '../lib/data/site'

const promos = [
  { icon: BadgePercent, label: 'Cashback Eksklusif', title: 'Diskon & cashback terbaik', text: 'Nikmati penawaran khusus bulan ini untuk unit ready stock.' },
  { icon: Calculator, label: 'Simulasi Kredit', title: 'DP dan angsuran fleksibel', text: 'Sesuaikan skema pembayaran dengan kebutuhan keluarga atau bisnis.' },
  { icon: Gift, label: 'Bonus Pembelian', title: 'Paket bonus bernilai', text: 'Dapatkan bonus aksesoris dan paket perawatan untuk unit pilihan.' },
]

export function PromoSection() {
  return <section id="pricelist" className="bg-paper py-16 lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Pricelist & Promo Package" title="Pilih Paket yang Paling Pas" description="Konsultasikan kebutuhan Anda dan dapatkan simulasi harga yang transparan." /><div className="grid gap-5 md:grid-cols-3">{promos.map(({ icon: Icon, label, title, text }) => <article key={title} className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-blue-100/60" data-reveal><div className="mb-8 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-secondary"><Icon size={21} /></div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">{label}</span></div><h3 className="text-lg font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary">Konsultasi sekarang <ArrowUpRight size={16} /></a></article>)}</div></div></section>
}
