Tolong kerjakan update fitur pengumuman unit baru (Hyundai NEIRA) dan optimasi Local SEO pada project website ini. 

PENTING: Sebelum menulis kode, periksa terlebih dahulu desain sistem yang sudah ada (`tailwind.config.js`, `src/index.css`, `src/components/SectionHeading.tsx`, `src/sections/PromoSection.tsx`, dan `src/sections/highlight-unit/FeaturedUnitSection.tsx`). Gunakan design token, warna (`text-ink`, `text-muted`, `bg-surface`, `bg-secondary`, `border-line`), ukuran tipografi, radius border, dan atribut animasi (`data-reveal`) yang SAMA PERSIS dengan section yang sudah ada agar tampilannya 100% menyatu.

Kerjakan 3 tugas berikut secara berurutan:

### TUGAS 1: Buat Section Pengumuman / Berita "Hyundai NEIRA" & Pasang di HomePage
1. Buat komponen baru `src/sections/NeiraAnnouncementSection.tsx` (atau sesuaikan dengan penempatan section di `src/pages/HomePage.tsx`).
2. Gunakan gaya visual yang konsisten dengan section utama website (misalnya card dengan `rounded-2xl border border-line bg-gradient-to-b from-blue-50 to-white p-5 shadow-sm lg:p-9` dan atribut `data-reveal`).
3. Muat konten informasi resmi berikut:
   - **Badge / Eyebrow:** "Berita & Pre-Booking Terbaru" & "Launching 20 November 2026 (GJAW)"
   - **Judul:** "Hyundai NEIRA: SUV Listrik 7-Seater Terbaru Segera Hadir!"
   - **Deskripsi:** PT Hyundai Motors Indonesia resmi membuka Pre-Booking untuk Hyundai NEIRA, SUV listrik 7-penumpang pertama yang diproduksi lokal di Indonesia (TKDN 60%) menjelang peluncuran resminya pada ajang GAIKINDO Auto Week (GAW) 20–29 November 2026. Dirancang khusus untuk mobilitas keluarga di wilayah Bogor, Sentul, Jakarta, Depok, Tangerang, dan Bekasi.
   - **Highlight Keunggulan (4 poin):**
     1. SUV Listrik 7-Seater Pertama Rakitan Lokal Indonesia
     2. Ground Clearance Tinggi untuk Beragam Kondisi Jalan
     3. Dilengkapi Hyundai Bluelink & Blind-Spot View Monitor (Hyundai SmartSense)
     4. Kabin Keluarga Luas dengan Akses Baris ke-3 yang Praktis (Easy 3rd Row Access)
   - **Info Panel / Status Pemesanan:**
     - Status: Open Pre-Booking Kloter Pertama
     - Jadwal Rilis Harga Resmi: 20 November 2026 (GAW)
     - Harga OTR: Segera Diumumkan (Coming Soon)
   - **Tombol CTA WhatsApp:** 
     - Ambil base nomor dari `whatsappUrl.split('?')[0]` di `src/lib/data/site.ts`.
     - Buat teks pesan otomatis yang sopan (tanpa emoji agar aman dari bug encoding): `"Halo Mbak Deva, salam kenal. Saya melihat berita di website hyundaijabodetabek.com mengenai peluncuran mobil listrik terbaru Hyundai NEIRA (EV 7-Seater). Boleh minta informasi terbaru seputar estimasi harga, spesifikasi, dan cara daftar antrean Pre-Booking Hyundai NEIRA? Terima kasih!"`
     - Label tombol: `"Daftar Info & Pre-Booking NEIRA"`
4. Import dan pasang `NeiraAnnouncementSection` di `src/pages/HomePage.tsx` pada posisi strategis (misalnya setelah `HeroSection` atau `HighlightSection`).

### TUGAS 2: Tambahkan Unit "Hyundai NEIRA EV" ke Katalog `CarPricelist.ts`
1. Buka file `src/lib/data/CarPricelist.ts`.
2. Tambahkan data unit **Hyundai NEIRA EV** ke dalam array `carPricelist` (letakkan di urutan paling atas atau di kategori EV/SUV) dengan tetap mematuhi tipe data `CarPricelistItem`:
   - `id`: `'hyundai-neira'`
   - `name`: `'Hyundai NEIRA EV'`
   - `tagline`: `'New 7-Seater Electric Family SUV (Coming Soon)'`
   - `image`: gunakan aset gambar EV/SUV yang tersedia di objek `images` (atau buat key baru di `images` jika ada foto khusus)
   - `badge`: `'Open Pre-Booking'`
   - `categories`: `['ev', 'suv', 'mpv']`
   - `priceFrom`: `'Pre-Booking (Rilis 20 Nov)'`
   - `description`: `'SUV listrik 7 penumpang terbaru rakitan lokal Indonesia dengan Ground Clearance tinggi, Hyundai Bluelink, dan fitur keselamatan Hyundai SmartSense.'`
   - `variants`:
     - `{ name: 'Pre-Booking Kloter Pertama (GAW 2026)', price: 'Hubungi Sales', highlight: true }`
     - `{ name: 'Pengumuman Pricelist Resmi', price: '20 Nov 2026' }`
   - `quoteLabel`: `'Minta Brosur Hyundai NEIRA'`

### TUGAS 3: Optimasi Local SEO On-Page (Cakupan Kota Bogor, Jakarta, Depok, Bekasi, Tangerang)
Agar website terindeks kuat di Google saat pengguna mencari kata kunci wilayah (seperti "hyundai bogor", "hyundai depok", "hyundai bekasi", "hyundai jakarta"):
1. Periksa `src/sections/ContactSection.tsx` (atau bagian Footer di `HomePage.tsx` dan `HighlightUnitPage.tsx`).
2. Tambahkan blok informasi "Area Layanan Dealer Resmi Hyundai" dengan styling yang rapi dan menyatu dengan desain section tersebut (menggunakan `text-xs`, `text-muted`, `border-t border-line`).
3. Pastikan teks yang dirender ke layar (visible text) memuat kalimat semantik yang mencantumkan kata kunci wilayah secara alami:
   - Judul (`<h3>`): **"Layanan Dealer Resmi Hyundai Jabodetabek & Sentul Bogor"**
   - Isi paragraf (`<p>`): Menjelaskan bahwa Showroom Resmi Hyundai Sentul Bogor (PT Sinar Inti Primajaya Perkasa) melayani konsultasi pembelian tunai/kredit DP ringan, tukar tambah (trade-in), test drive ke rumah/kantor, dan pengiriman unit untuk wilayah **Dealer Hyundai Bogor (Kota Bogor, Kabupaten Bogor, Sentul, Cibinong), Dealer Hyundai Depok, Dealer Hyundai Jakarta (Jakarta Selatan, Jakarta Timur, Jakarta Pusat, Jakarta Barat, Jakarta Utara), Dealer Hyundai Bekasi, dan Dealer Hyundai Tangerang**.
4. Periksa juga `index.html` utama dan `unit-unggulan/index.html` untuk memastikan tidak ada error build atau konflik tag, lalu jalankan pengecekan TypeScript (`npm run build` atau `tsc`) untuk memastikan 0 error.