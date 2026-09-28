import { MaterialIcon } from '../components/MaterialIcon'
import { SectionHeading } from '../components/SectionHeading'
import { benefits } from '../lib/data/benefits'

export function BenefitsSection() {
  return <section className="border-y border-line bg-surface py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Kenapa Memilih Kami" title="Pendampingan yang Serius" description="Setiap tahap pembelian dirancang agar mudah dipahami dan nyaman dijalani." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <article key={benefit.title} className="rounded-2xl bg-white p-5" data-reveal><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-secondary"><MaterialIcon>{benefit.icon}</MaterialIcon></div><h3 className="font-bold text-ink">{benefit.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</p></article>)}</div></div></section>
}
