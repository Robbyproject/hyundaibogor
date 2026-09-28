export type CarCategory = 'suv' | 'mpv' | 'ev' | 'hybrid'

export type CarVariant = {
  name: string
  price: string
  highlight?: boolean
}

export type CarPricelistItem = {
  id: string
  name: string
  tagline: string
  image: string
  badge: string
  categories: CarCategory[]
  priceFrom: string
  description: string
  variants: CarVariant[]
  quoteLabel: string
}

export const featuredUnit = {
  name: 'All New Santa Fe',
  eyebrow: 'Popular Choice',
  tags: ['Hybrid & Bensin', 'Family SUV'],
  image: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790310985/6.png',
  description: 'SUV premium dengan desain kokoh, kabin lapang, dan pilihan mesin hybrid yang siap menemani perjalanan keluarga maupun bisnis.',
  price: 'Rp 735.800.000,-',
  availability: 'Tersedia varian Gasoline 2.5 8AT dan Turbo Hybrid (HEV)',
  variants: [
    { name: 'G 2.5 8AT Prime', price: 'Rp 735.800.000' },
    { name: 'G 2.5 8AT Calligraphy', price: 'Rp 825.300.000' },
    { name: 'HEV Prime (Hybrid)', price: 'Rp 827.400.000', highlight: true },
    { name: 'HEV Calligraphy', price: 'Rp 914.700.000' },
    { name: 'HEV XRT', price: 'Rp 932.400.000' },
    { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
  ],
}

const images = {
  stargazerCartenz: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337129/stargazer-cartenz.png',
  stargazerCartenzX: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337129/stargazer-cartenz-x.png',
  cretaFl: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/Creta-fl.png',
  santaFe: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/all-new-santa-fe.png',
  palisadeHev: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/palisade-hev.png',
  ioniq9: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/ioniq-9.png',
  palisadeDiesel: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/palisade-diesel.png',
  ioniq5Bluelink: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/ioniq-5-bluelink.png',
  staria: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/staria.png',
}

export const carPricelist: CarPricelistItem[] = [
  {
    id: 'stargazer-cartenz',
    name: 'Stargazer Cartenz',
    tagline: 'Smart Family MPV for Every Journey',
    image: images.stargazerCartenz,
    badge: 'Family MPV',
    categories: ['mpv'],
    priceFrom: 'Rp 241.400.000,-',
    description: 'MPV keluarga dengan pilihan varian lengkap dan kabin nyaman untuk perjalanan sehari-hari.',
    variants: [
      { name: 'Trend MT', price: 'Rp 241.400.000' },
      { name: 'Trend IVT', price: 'Rp 256.400.000' },
      { name: 'Style IVT', price: 'Rp 271.200.000' },
      { name: 'Smart HSS IVT', price: 'Rp 295.000.000' },
      { name: 'Prime HSS IVT', price: 'Rp 318.000.000', highlight: true },
      { name: 'Add Price For Captain Seat', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Promo Stargazer',
  },
  {
    id: 'stargazer-cartenz-x',
    name: 'Stargazer Cartenz X',
    tagline: 'Adventure-ready Family MPV',
    image: images.stargazerCartenzX,
    badge: 'MPV Family',
    categories: ['mpv'],
    priceFrom: 'Rp 350.000.000,-',
    description: 'Varian keluarga dengan karakter lebih tangguh dan pilihan fitur yang lebih lengkap.',
    variants: [
      { name: 'Style IVT', price: 'Rp 350.000.000' },
      { name: 'Prime Package IVT', price: 'Rp 385.000.000', highlight: true },
      { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
      { name: 'Add Price For Captain Seat', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Konsultasi Stargazer X',
  },
  {
    id: 'creta-fl',
    name: 'Creta FL',
    tagline: 'Compact Urban SUV',
    image: images.cretaFl,
    badge: 'Urban SUV',
    categories: ['suv'],
    priceFrom: 'Rp 307.800.000,-',
    description: 'SUV kompak dengan pilihan transmisi lengkap, tampilan modern, dan fitur pintar.',
    variants: [
      { name: 'Active 1.5 MT', price: 'Rp 307.800.000' },
      { name: 'Trend MT', price: 'Rp 340.600.000' },
      { name: 'Trend 1.5 IVT', price: 'Rp 361.650.000' },
      { name: 'Style 1.5 IVT', price: 'Rp 407.350.000' },
      { name: 'Prime 1.5 IVT', price: 'Rp 438.500.000', highlight: true },
      { name: 'Alpha 1.5 IVT', price: 'Rp 455.000.000' },
      { name: 'N-Line IVT', price: 'Rp 473.000.000' },
      { name: 'N-Line Turbo', price: 'Rp 521.000.000' },
      { name: 'Add Price For 2 Tone', price: 'Rp 3.000.000' },
    ],
    quoteLabel: 'Konsultasi Creta FL',
  },
  {
    id: 'santa-fe',
    name: 'All New Santa Fe',
    tagline: 'Progressive Premium Hybrid SUV',
    image: images.santaFe,
    badge: 'Hybrid SUV',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 735.800.000,-',
    description: 'SUV premium dengan kabin lapang, desain kokoh, dan pilihan mesin Gasoline maupun Hybrid.',
    variants: featuredUnit.variants,
    quoteLabel: 'Konsultasi Santa Fe',
  },
  {
    id: 'palisade-hev',
    name: 'Palisade HEV',
    tagline: 'The Ultimate First-Class Hybrid SUV',
    image: images.palisadeHev,
    badge: 'Flagship Hybrid SUV',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 1.134.000.000,-',
    description: 'Kenyamanan first-class dengan teknologi hybrid dan kabin premium untuk perjalanan panjang.',
    variants: [
      { name: 'Signature', price: 'Rp 1.134.000.000' },
      { name: 'Calligraphy', price: 'Rp 1.321.000.000', highlight: true },
      { name: 'Calligraphy AWD', price: 'Rp 1.408.000.000' },
    ],
    quoteLabel: 'Minta Brosur Palisade HEV',
  },
  {
    id: 'ioniq-9',
    name: 'Ioniq 9',
    tagline: 'All-Electric Flagship SUV',
    image: images.ioniq9,
    badge: '100% Electric SUV',
    categories: ['ev'],
    priceFrom: 'Rp 1.547.000.000,-',
    description: 'SUV listrik flagship dengan kabin lega, desain progresif, dan pengalaman berkendara premium.',
    variants: [
      { name: 'Calligraphy AWD', price: 'Rp 1.547.000.000', highlight: true },
    ],
    quoteLabel: 'Konsultasi Ioniq 9',
  },
  {
    id: 'palisade-diesel',
    name: 'Palisade Diesel',
    tagline: 'Premium Diesel SUV Experience',
    image: images.palisadeDiesel,
    badge: 'Luxury Diesel SUV',
    categories: ['suv'],
    priceFrom: 'Rp 1.089.700.000,-',
    description: 'SUV premium bertenaga diesel dengan ruang kabin luas dan kenyamanan kelas atas.',
    variants: [
      { name: 'Signature', price: 'Rp 1.089.700.000', highlight: true },
      { name: 'Signature XRT', price: 'Rp 1.118.600.000' },
    ],
    quoteLabel: 'Minta Brosur Palisade Diesel',
  },
  {
    id: 'ioniq-5-bluelink',
    name: 'Ioniq 5 Bluelink',
    tagline: 'Electric Icon with Ultra-Fast Charging',
    image: images.ioniq5Bluelink,
    badge: '100% Electric Crossover',
    categories: ['ev'],
    priceFrom: 'Rp 809.000.000,-',
    description: 'Mobil listrik ikonik dengan desain futuristis, ruang kabin luas, dan pengisian cepat 800V.',
    variants: [
      { name: 'Prime Reguler', price: 'Rp 809.000.000' },
      { name: 'Prime Long Range', price: 'Rp 851.500.000' },
      { name: 'Signature Reguler', price: 'Rp 873.900.000' },
      { name: 'Signature Long Range', price: 'Rp 925.600.000', highlight: true },
      { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Simulasi Kredit EV',
  },
  {
    id: 'staria',
    name: 'Staria',
    tagline: 'Premium MPV for Executive Mobility',
    image: images.staria,
    badge: 'Executive MPV',
    categories: ['mpv'],
    priceFrom: 'Rp 954.800.000,-',
    description: 'MPV premium dengan kabin luas dan kenyamanan eksekutif untuk keluarga maupun bisnis.',
    variants: [
      { name: 'Signature 9 Seater', price: 'Rp 954.800.000', highlight: true },
      { name: 'Signature 7 Seater', price: 'Rp 1.095.600.000' },
    ],
    quoteLabel: 'Konsultasi Staria',
  },
]
