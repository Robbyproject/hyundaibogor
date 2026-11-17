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
  name: 'Palisade HEV',
  eyebrow: 'SUV Andalan',
  tags: ['Turbo Hybrid', 'Andalan 7 Penumpang', 'AWD Tersedia'],
  image: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555190/palisade_Hev.jpg',
  description: 'SUV andalan bertenaga 2.5L Turbo Hybrid dengan kenyamanan kabin kelas utama, suasana kabin senyap, dan fitur keselamatan aktif Hyundai SmartSense yang lengkap.',
  price: 'Rp 1.137.000.000,-',
  availability: 'Tersedia pilihan varian Signature FWD, Calligraphy FWD, dan Calligraphy AWD',
  variants: [
    { name: 'Signature FWD', price: 'Rp 1.137.000.000' },
    { name: 'Calligraphy FWD', price: 'Rp 1.324.000.000', highlight: true },
    { name: 'Calligraphy AWD', price: 'Rp 1.411.000.000' },
  ],
}

const images = {
  stargazerCartenz: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555189/cartenz.jpg',
  stargazerCartenzX: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555189/cartenz-x.jpg',
  stargazer: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-stargazer-regular_compressed.webp',
  cretaFl: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-creta-fl_compressed.webp',
  cretaNLine: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-creta-n-line_compressed.webp',
  santaFe: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-santa-fe_compressed.webp',
  palisadeHev: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555190/palisade_Hev.jpg',
  palisadeDiesel: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/palisade-diesel.png',
  staria: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1790337128/staria.png',
  ioniq6: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-ioniq-6-ev_compressed.webp',
  ioniq5Bluelink: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1793344954/hyundai-ioniq-5_compressed.webp',
  ioniq9: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555189/ioniq-9.jpg',
  neira: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1794896830/hyundai-neira-new_compressed.webp',
}

export const carPricelist: CarPricelistItem[] = [
  // --- MPV / FAMILY CAR ---
  {
    id: 'stargazer-cartenz',
    name: 'Stargazer Cartenz',
    tagline: 'MPV Keluarga untuk Setiap Perjalanan',
    image: images.stargazerCartenz,
    badge: 'MPV Keluarga',
    categories: ['mpv'],
    priceFrom: 'Rp 241.400.000,-',
    description: 'MPV keluarga dengan pilihan varian lengkap dan kabin nyaman untuk perjalanan sehari-hari.',
    variants: [
      { name: 'Trend MT', price: 'Rp 241.400.000' },
      { name: 'Trend IVT', price: 'Rp 256.400.000' },
      { name: 'Style IVT 6 Kursi', price: 'Rp 274.700.000' },
      { name: 'Smart HSS IVT 6 Kursi', price: 'Rp 298.500.000' },
      { name: 'Style MT 6 Kursi', price: 'Rp 300.100.000' },
      { name: 'Prime HSS IVT 6 Kursi', price: 'Rp 321.500.000', highlight: true },
    ],
    quoteLabel: 'Minta Brosur Stargazer Cartenz',
  },
  {
    id: 'stargazer-cartenz-x',
    name: 'Stargazer Cartenz X',
    tagline: 'MPV Keluarga Siap Berpetualang',
    image: images.stargazerCartenzX,
    badge: 'MPV Crossover',
    categories: ['mpv'],
    priceFrom: 'Rp 353.500.000,-',
    description: 'Varian crossover keluarga dengan karakter tangguh, jarak terendah ke tanah yang tinggi, dan fitur lengkap.',
    variants: [
      { name: 'X Style IVT 6 Kursi', price: 'Rp 353.500.000' },
      { name: 'X Trend IVT 6 Kursi', price: 'Rp 373.750.000' },
      { name: 'X Prime Package 6 Kursi', price: 'Rp 388.500.000', highlight: true },
      { name: 'Opsi 7 Kursi', price: '-Rp 3.500.000' },
      { name: 'Tambahan Harga untuk Warna Premium', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Stargazer Cartenz X',
  },
  {
    id: 'stargazer',
    name: 'Stargazer',
    tagline: 'MPV 7 Penumpang yang Dinamis dan Ekspresif',
    image: images.stargazer,
    badge: 'MPV 7 Penumpang',
    categories: ['mpv'],
    priceFrom: 'Rp 331.900.000,-',
    description: 'Pilihan MPV 7 penumpang dengan kabin luas dan kenyamanan berkendara untuk keluarga Indonesia.',
    variants: [
      { name: 'Prime IVT 7 Kursi', price: 'Rp 331.900.000', highlight: true },
      { name: 'X Prime IVT 7 Kursi', price: 'Rp 358.600.000' },
      { name: 'Tambahan untuk 6 Kursi (Kursi Kapten)', price: 'Rp 1.000.000' },
      { name: 'Tambahan untuk Prime Two Tone', price: 'Rp 1.500.000' },
      { name: 'Tambahan Harga untuk Warna Premium', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Stargazer',
  },

  // --- SUV ---
  {
    id: 'creta-fl',
    name: 'Creta FL',
    tagline: 'SUV Kompak untuk Perkotaan',
    image: images.cretaFl,
    badge: 'SUV Perkotaan',
    categories: ['suv'],
    priceFrom: 'Rp 307.800.000,-',
    description: 'SUV kompak dengan pilihan transmisi lengkap, tampilan modern, dan fitur pintar.',
    variants: [
      { name: 'Active MT', price: 'Rp 307.800.000' },
      { name: 'Trend MT', price: 'Rp 340.600.000' },
      { name: 'Trend IVT', price: 'Rp 361.650.000' },
      { name: 'Style IVT', price: 'Rp 407.350.000' },
      { name: 'Prime IVT 2 Tone', price: 'Rp 441.500.000', highlight: true },
      { name: 'Alpha MT', price: 'Rp 455.000.000' },
      { name: 'Opsi 1 Tone Metalik', price: '-Rp 3.000.000' },
    ],
    quoteLabel: 'Minta Brosur Creta FL',
  },
  {
    id: 'creta-n-line',
    name: 'Creta N Line',
    tagline: 'Performa Sporty dan Tampilan Dinamis',
    image: images.cretaNLine,
    badge: 'SUV Sporty',
    categories: ['suv'],
    priceFrom: 'Rp 476.000.000,-',
    description: 'SUV kompak dengan DNA motorsport N Line, aerodinamika agresif, dan performa responsif.',
    variants: [
      { name: 'N Line 2 Tone', price: 'Rp 476.000.000', highlight: true },
      { name: 'N Line Turbo 2 Tone', price: 'Rp 524.000.000' },
      { name: 'Opsi 1 Tone', price: '-Rp 3.000.000' },
    ],
    quoteLabel: 'Minta Brosur Creta N Line',
  },
  {
    id: 'santa-fe',
    name: 'All New Santa Fe',
    tagline: 'SUV Hybrid Premium dengan Desain Progresif',
    image: images.santaFe,
    badge: 'SUV Hybrid',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 735.800.000,-',
    description: 'SUV premium dengan kabin lapang, desain kokoh, dan pilihan mesin bensin maupun hybrid.',
    variants: [
      { name: 'Gasoline Prime (varian bensin)', price: 'Rp 735.800.000' },
      { name: 'Gasoline Calligraphy (varian bensin)', price: 'Rp 825.300.000' },
      { name: 'HEV Prime', price: 'Rp 827.400.000', highlight: true },
      { name: 'HEV Calligraphy', price: 'Rp 914.700.000' },
      { name: 'HEV XRT', price: 'Rp 932.400.000' },
      { name: 'Tambahan Harga untuk Warna Matte', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur All New Santa Fe',
  },
  {
    id: 'palisade-hev',
    name: 'Palisade HEV',
    tagline: 'SUV Hybrid Andalan dengan Kenyamanan Kelas Utama',
    image: images.palisadeHev,
    badge: 'SUV Hybrid Andalan',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 1.137.000.000,-',
    description: 'Kenyamanan kelas utama dengan teknologi hybrid dan kabin premium untuk perjalanan jauh.',
    variants: [
      { name: 'Signature FWD', price: 'Rp 1.137.000.000' },
      { name: 'Calligraphy FWD', price: 'Rp 1.324.000.000', highlight: true },
      { name: 'Calligraphy AWD', price: 'Rp 1.411.000.000' },
    ],
    quoteLabel: 'Minta Brosur Palisade HEV',
  },
  {
    id: 'palisade-diesel',
    name: 'Palisade Diesel',
    tagline: 'Pengalaman Berkendara SUV Diesel Premium',
    image: images.palisadeDiesel,
    badge: 'SUV Diesel Mewah',
    categories: ['suv'],
    priceFrom: 'Rp 1.089.700.000,-',
    description: 'SUV premium bertenaga diesel dengan ruang kabin luas dan kenyamanan kelas atas.',
    variants: [
      { name: 'Signature', price: 'Rp 1.089.700.000', highlight: true },
      { name: 'Signature XRT', price: 'Rp 1.118.600.000' },
    ],
    quoteLabel: 'Minta Brosur Palisade Diesel',
  },

  // --- PREMIUM MPV ---
  {
    id: 'staria',
    name: 'Staria',
    tagline: 'MPV Premium untuk Perjalanan Eksekutif',
    image: images.staria,
    badge: 'MPV Eksekutif',
    categories: ['mpv'],
    priceFrom: 'Rp 954.800.000,-',
    description: 'MPV premium dengan kabin luas dan kenyamanan eksekutif untuk keluarga maupun bisnis.',
    variants: [
      { name: 'Signature 9 Kursi', price: 'Rp 954.800.000', highlight: true },
      { name: 'Signature 7 Kursi', price: 'Rp 1.095.600.000' },
    ],
    quoteLabel: 'Minta Brosur Staria',
  },

  // --- HYUNDAI ELECTRIC (EV) ---
  {
    id: 'hyundai-neira',
    name: 'Hyundai NEIRA EV',
    tagline: 'SUV Keluarga Listrik 7 Penumpang - Segera Hadir',
    image: images.neira,
    badge: 'Segera Hadir',
    categories: ['ev', 'suv', 'mpv'],
    priceFrom: 'Harga Segera Diumumkan',
    description: 'Hyundai NEIRA EV belum resmi diluncurkan. Informasi harga dan ketersediaan akan diumumkan kemudian.',
    variants: [
      { name: 'Status', price: 'Belum Diluncurkan', highlight: true },
      { name: 'Harga resmi', price: 'Segera diumumkan' },
    ],
    quoteLabel: 'Minta Brosur Hyundai NEIRA',
  },
  {
    id: 'ioniq-6-ev',
    name: 'Ioniq 6 EV',
    tagline: 'Mobil Listrik Streamliner dengan Desain Aerodinamis',
    image: images.ioniq6,
    badge: 'Sedan 100% Listrik',
    categories: ['ev'],
    priceFrom: 'Rp 1.237.200.000,-',
    description: 'Sedan listrik futuristis dengan efisiensi aerodinamis luar biasa, tenaga AWD ganda, dan interior kelas atas.',
    variants: [
      { name: 'Signature AWD', price: 'Rp 1.237.200.000', highlight: true },
      { name: 'Tambahan Harga untuk Warna Matte', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Ioniq 6 EV',
  },
  {
    id: 'ioniq-5-bluelink',
    name: 'Ioniq 5 Bluelink',
    tagline: 'Ikon Mobil Listrik dengan Pengisian Daya Sangat Cepat',
    image: images.ioniq5Bluelink,
    badge: 'Crossover 100% Listrik',
    categories: ['ev'],
    priceFrom: 'Rp 809.000.000,-',
    description: 'Mobil listrik ikonik dengan desain futuristis, ruang kabin luas, dan pengisian cepat 800V.',
    variants: [
      { name: 'Prime Std', price: 'Rp 809.000.000' },
      { name: 'Prime Longrange', price: 'Rp 851.500.000' },
      { name: 'Signature Std', price: 'Rp 873.900.000' },
      { name: 'Signature Longrange', price: 'Rp 925.600.000', highlight: true },
      { name: 'Tambahan Harga untuk Warna Matte', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Ioniq 5 Bluelink',
  },
  {
    id: 'ioniq-9',
    name: 'Ioniq 9',
    tagline: 'SUV Listrik Andalan dengan 6 Kursi',
    image: images.ioniq9,
    badge: 'SUV 100% Listrik',
    categories: ['ev'],
    priceFrom: 'Rp 1.547.000.000,-',
    description: 'SUV listrik andalan dengan kabin lega, konfigurasi 6 penumpang eksklusif, dan teknologi canggih.',
    variants: [
      { name: 'Calligraphy AWD 6 Kursi Putar', price: 'Rp 1.547.000.000' },
      { name: 'Calligraphy AWD 6 Kursi Elektrik', price: 'Rp 1.557.000.000', highlight: true },
    ],
    quoteLabel: 'Minta Brosur Ioniq 9',
  },
]