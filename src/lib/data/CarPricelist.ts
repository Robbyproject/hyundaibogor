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
  eyebrow: 'Flagship SUV',
  tags: ['Turbo Hybrid', 'Flagship 7-Seater', 'AWD Available'],
  image: 'https://res.cloudinary.com/bofnhqhp/image/upload/v1792555190/palisade_Hev.jpg',
  description: 'SUV flagship first-class bertenaga 2.5L Turbo Hybrid dengan kenyamanan kabin eksklusif, kesenyapan superior, dan fitur keamanan aktif Hyundai SmartSense terlengkap.',
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
}

export const carPricelist: CarPricelistItem[] = [
  // --- MPV / FAMILY CAR ---
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
      { name: 'Style IVT 6 Seat', price: 'Rp 274.700.000' },
      { name: 'Smart HSS IVT 6 Seat', price: 'Rp 298.500.000' },
      { name: 'Style MT 6 Seat', price: 'Rp 300.100.000' },
      { name: 'Prime HSS IVT 6 Seat', price: 'Rp 321.500.000', highlight: true },
    ],
    quoteLabel: 'Minta Brosur Stargazer Cartenz',
  },
  {
    id: 'stargazer-cartenz-x',
    name: 'Stargazer Cartenz X',
    tagline: 'Adventure-ready Family MPV',
    image: images.stargazerCartenzX,
    badge: 'Crossover MPV',
    categories: ['mpv'],
    priceFrom: 'Rp 353.500.000,-',
    description: 'Varian crossover keluarga dengan karakter tangguh, ground clearance tinggi, dan fitur lengkap.',
    variants: [
      { name: 'X Style IVT 6 Seat', price: 'Rp 353.500.000' },
      { name: 'X Trend IVT 6 Seat', price: 'Rp 373.750.000' },
      { name: 'X Prime Package 6 Seat', price: 'Rp 388.500.000', highlight: true },
      { name: 'Opsi 7 Seat', price: '-Rp 3.500.000' },
      { name: 'Add Price For Premium Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Stargazer Cartenz X',
  },
  {
    id: 'stargazer',
    name: 'Stargazer',
    tagline: 'Dynamic & Expressive 7-Seater MPV',
    image: images.stargazer,
    badge: '7-Seater MPV',
    categories: ['mpv'],
    priceFrom: 'Rp 331.900.000,-',
    description: 'Pilihan MPV 7-seater luas dengan kenyamanan berkendara maksimal untuk keluarga Indonesia.',
    variants: [
      { name: 'Prime IVT 7 Seat', price: 'Rp 331.900.000', highlight: true },
      { name: 'X Prime IVT 7 Seat', price: 'Rp 358.600.000' },
      { name: 'Add Price For 6 Seat (Captain Seat)', price: 'Rp 1.000.000' },
      { name: 'Add Price For Prime Two Tone', price: 'Rp 1.500.000' },
      { name: 'Add Price For Premium Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Stargazer',
  },

  // --- SUV ---
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
    tagline: 'Sporty Performance & Dynamic Styling',
    image: images.cretaNLine,
    badge: 'Sporty SUV',
    categories: ['suv'],
    priceFrom: 'Rp 476.000.000,-',
    description: 'SUV kompak dengan DNA motorsport N Line sporty, aerodinamika agresif, dan performa responsif.',
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
    tagline: 'Progressive Premium Hybrid SUV',
    image: images.santaFe,
    badge: 'Hybrid SUV',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 735.800.000,-',
    description: 'SUV premium dengan kabin lapang, desain kokoh, dan pilihan mesin Gasoline maupun Hybrid.',
    variants: [
      { name: 'Gasoline Prime', price: 'Rp 735.800.000' },
      { name: 'Gasoline Calligraphy', price: 'Rp 825.300.000' },
      { name: 'HEV Prime', price: 'Rp 827.400.000', highlight: true },
      { name: 'HEV Calligraphy', price: 'Rp 914.700.000' },
      { name: 'HEV XRT', price: 'Rp 932.400.000' },
      { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur All New Santa Fe',
  },
  {
    id: 'palisade-hev',
    name: 'Palisade HEV',
    tagline: 'The Ultimate First-Class Hybrid SUV',
    image: images.palisadeHev,
    badge: 'Flagship Hybrid SUV',
    categories: ['suv', 'hybrid'],
    priceFrom: 'Rp 1.137.000.000,-',
    description: 'Kenyamanan first-class dengan teknologi hybrid dan kabin premium untuk perjalanan panjang.',
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

  // --- PREMIUM MPV ---
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
      { name: 'Signature 9 Seat', price: 'Rp 954.800.000', highlight: true },
      { name: 'Signature 7 Seat', price: 'Rp 1.095.600.000' },
    ],
    quoteLabel: 'Minta Brosur Staria',
  },

  // --- HYUNDAI ELECTRIC (EV) ---
  {
    id: 'ioniq-6-ev',
    name: 'Ioniq 6 EV',
    tagline: 'All-Electric Streamliner with Aerodynamic Elegance',
    image: images.ioniq6,
    badge: '100% Electric Sedan',
    categories: ['ev'],
    priceFrom: 'Rp 1.237.200.000,-',
    description: 'Sedan listrik futuristis dengan efisiensi aerodinamis luar biasa, tenaga AWD ganda, dan interior kelas atas.',
    variants: [
      { name: 'Signature AWD', price: 'Rp 1.237.200.000', highlight: true },
      { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Ioniq 6 EV',
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
      { name: 'Prime Std', price: 'Rp 809.000.000' },
      { name: 'Prime Longrange', price: 'Rp 851.500.000' },
      { name: 'Signature Std', price: 'Rp 873.900.000' },
      { name: 'Signature Longrange', price: 'Rp 925.600.000', highlight: true },
      { name: 'Add Price For Matte Color', price: 'Rp 3.500.000' },
    ],
    quoteLabel: 'Minta Brosur Ioniq 5 Bluelink',
  },
  {
    id: 'ioniq-9',
    name: 'Ioniq 9',
    tagline: 'All-Electric Flagship 6-Seater SUV',
    image: images.ioniq9,
    badge: '100% Electric SUV',
    categories: ['ev'],
    priceFrom: 'Rp 1.547.000.000,-',
    description: 'SUV listrik flagship dengan kabin lega, konfigurasi 6-seater eksklusif, dan teknologi tercanggih.',
    variants: [
      { name: 'Calligraphy AWD 6P Swivel Seat', price: 'Rp 1.547.000.000' },
      { name: 'Calligraphy AWD 6P Power Seat', price: 'Rp 1.557.000.000', highlight: true },
    ],
    quoteLabel: 'Minta Brosur Ioniq 9',
  },
]