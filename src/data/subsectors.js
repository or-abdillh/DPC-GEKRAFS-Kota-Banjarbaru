export const subsectorClusters = [
  { id: 'all', name: 'Semua 21 Subsektor' },
  { id: 'seni-budaya', name: 'Seni & Budaya' },
  { id: 'desain', name: 'Desain & Mode' },
  { id: 'teknologi-digital', name: 'Teknologi & Digital' },
  { id: 'media-distribusi', name: 'Media & Kuliner' }
];

export const subsectorsData = [
  // 1. Berbasis Seni & Budaya
  {
    id: 'kriya',
    cluster: 'seni-budaya',
    name: 'Kriya (Kerajinan)',
    tag: 'Sentra Unggulan Cempaka',
    count: 42,
    icon: 'hammer',
    description: 'Anyaman purun khas Banjarbaru, kerajinan kayu ulin, dan aksesoris batuan intan khas Martapura-Banjarbaru.',
    localHero: 'Kampung Purun Banjarbaru',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'musik',
    cluster: 'seni-budaya',
    name: 'Musik',
    tag: 'Komunitas Indie Banua',
    count: 28,
    icon: 'music',
    description: 'Musisi tradisional musik panting, band independen, produser musik digital, dan audio sound studio.',
    localHero: 'Kolektif Musik Murjani',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    readiness: 'Tahap Inkubasi'
  },
  {
    id: 'seni-pertunjukan',
    cluster: 'seni-budaya',
    name: 'Seni Pertunjukan',
    tag: 'Sanggar & Teater',
    count: 19,
    icon: 'theater',
    description: 'Tari tradisional Radap Rahayu, teater modern pemuda, seni tari kreasi baru, dan pergelaran panggung.',
    localHero: 'Sanggar Seni Banjarbaru',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
    readiness: 'Tahap Inkubasi'
  },
  {
    id: 'seni-rupa',
    cluster: 'seni-budaya',
    name: 'Seni Rupa',
    tag: 'Galeri & Pelukis',
    count: 16,
    icon: 'palette',
    description: 'Lukisan cat minyak, seni instalasi, sketsa kontemporer, dan galeri pameran seni rupa independen.',
    localHero: 'Komunitas Perupa Banjarbaru',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    readiness: 'Tahap Inkubasi'
  },
  {
    id: 'fotografi',
    cluster: 'seni-budaya',
    name: 'Fotografi',
    tag: 'Studio Komersial & Lanskap',
    count: 35,
    icon: 'camera',
    description: 'Fotografer komersial produk ekraf, foto dokumenter budaya Banjar, serta jasa studio kreatif.',
    localHero: 'Lensa Banua Studio',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'film-animasi-video',
    cluster: 'seni-budaya',
    name: 'Film, Animasi & Video',
    tag: 'Sinematografi Lokal',
    count: 22,
    icon: 'video',
    description: 'Pembuat film pendek festival, rumah produksi video iklan, dan studio animasi karya kreator muda.',
    localHero: 'Sinema Banjarbaru Creative',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },

  // 2. Berbasis Desain
  {
    id: 'fesyen',
    cluster: 'desain',
    name: 'Fesyen & Wastra',
    tag: 'Sasirangan Kontemporer',
    count: 54,
    icon: 'shirt',
    description: 'Pengrajin motif sasirangan modern pewarna alami, desainer busana muslim, dan brand pakaian lokal.',
    localHero: 'Atelier Sasirangan Idaman',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'arsitektur',
    cluster: 'desain',
    name: 'Arsitektur',
    tag: 'Konsultan & Arsitek Muda',
    count: 18,
    icon: 'building',
    description: 'Studio arsitektur tropis modern, perencana ruang publik kota ramah lingkungan di Ibukota Kalsel.',
    localHero: 'Banjarbaru Urban Lab',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    readiness: 'Kemitraan Pemda'
  },
  {
    id: 'desain-interior',
    cluster: 'desain',
    name: 'Desain Interior',
    tag: 'Interior Kedai & Residensial',
    count: 24,
    icon: 'armchair',
    description: 'Perancang interior kafe modern, display toko ritel kreatif, serta penataan ruang hunian estetik.',
    localHero: 'Ruang Idaman Studio',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'desain-komunikasi-visual',
    cluster: 'desain',
    name: 'Desain Komunikasi Visual (DKV)',
    tag: 'Branding & Identitas',
    count: 48,
    icon: 'layout',
    description: 'Perancangan identitas visual merek UMKM, kemasan ramah lingkungan, dan grafis komunikasi digital.',
    localHero: 'Grafika Banua Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Kemitraan'
  },
  {
    id: 'desain-produk',
    cluster: 'desain',
    name: 'Desain Produk',
    tag: 'Industrial & Souvenir',
    count: 21,
    icon: 'package',
    description: 'Perancang cinderamata ikonik kota, perabot modular berbasis bahan lokal, dan inovasi kemasan.',
    localHero: 'Inovasi Produk Banjarbaru',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },

  // 3. Berbasis Teknologi & Digital
  {
    id: 'aplikasi',
    cluster: 'teknologi-digital',
    name: 'Aplikasi & Software',
    tag: 'Tech Enabler UMKM',
    count: 31,
    icon: 'smartphone',
    description: 'Pengembang platform web, aplikasi mobile pemesanan lokal, dan sistem operasional bisnis.',
    localHero: 'Kalsel Code Collective',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'pengembang-permainan',
    cluster: 'teknologi-digital',
    name: 'Pengembang Permainan (Game)',
    tag: 'Indie Game Studio',
    count: 14,
    icon: 'gamepad-2',
    description: 'Developer game PC dan mobile mengangkat cerita rakyat Kalimantan Selatan dan edukasi budaya.',
    localHero: 'Borneo Game Works',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Pendanaan'
  },
  {
    id: 'teknologi-baru',
    cluster: 'teknologi-digital',
    name: 'Teknologi Baru (Subsektor Baru 2026)',
    tag: 'AI, IoT & Smart City',
    count: 18,
    icon: 'cpu',
    description: 'Solusi otomasi kecerdasan buatan (AI), sensor IoT untuk pertanian urban kota, dan keamanan digital.',
    localHero: 'Banjarbaru AI Innovation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    readiness: 'Fasilitasi Riset'
  },
  {
    id: 'konten-digital',
    cluster: 'teknologi-digital',
    name: 'Konten Digital (Subsektor Baru 2026)',
    tag: 'Creator & Live Commerce',
    count: 67,
    icon: 'share-2',
    description: 'Kreator konten edukasi dan wisata kota, affiliator UMKM, live stream broadcaster, dan agensi media sosial.',
    localHero: 'Idaman Creator Hub',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Kemitraan'
  },

  // 4. Berbasis Media & Distribusi Kreatif
  {
    id: 'kuliner',
    cluster: 'media-distribusi',
    name: 'Kuliner & Kopi Spesialti',
    tag: 'Kultur Kopi & Wadai',
    count: 85,
    icon: 'coffee',
    description: 'Roastery kopi lokal, kedai artisan pemuda, inovasi wadai tradisional Banjar, dan kuliner rempah.',
    localHero: 'Kedai Kopi Landasan Ulin',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  },
  {
    id: 'penerbitan',
    cluster: 'media-distribusi',
    name: 'Penerbitan & Literasi',
    tag: 'Buku & Zine Komunitas',
    count: 15,
    icon: 'book-open',
    description: 'Penerbit independen buku sastra lokal, pencetakan zine seni, dan perpustakaan kreatif komunitas.',
    localHero: 'Pustaka Borneo Banjarbaru',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    readiness: 'Tahap Inkubasi'
  },
  {
    id: 'periklanan',
    cluster: 'media-distribusi',
    name: 'Periklanan (Advertising)',
    tag: 'Agency Kampanye Lokal',
    count: 26,
    icon: 'megaphone',
    description: 'Agensi periklanan luar ruang, pengelola baliho digital, dan pengarah strategi kampanye brand Banua.',
    localHero: 'Media Kreasi Idaman',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Kemitraan'
  },
  {
    id: 'televisi-radio',
    cluster: 'media-distribusi',
    name: 'Televisi & Radio',
    tag: 'Broadcasting & Podcast',
    count: 12,
    icon: 'radio',
    description: 'Stasiun radio komunitas anak muda, platform podcast tematik Banjarbaru, dan streaming program kota.',
    localHero: 'Radio Suara Banjarbaru',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    readiness: 'Kemitraan Pemda'
  },
  {
    id: 'sulih-suara',
    cluster: 'media-distribusi',
    name: 'Sulih Suara (Subsektor Baru 2026)',
    tag: 'Voiceover & Dubbing',
    count: 11,
    icon: 'mic',
    description: 'Talenta pengisi suara iklan komersial, narasi video dokumenter, animasi lokal, dan lokalisasi bahasa Banjar.',
    localHero: 'Borneo VO Lab',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Kemitraan'
  },
  {
    id: 'modifikasi-otomotif',
    cluster: 'media-distribusi',
    name: 'Modifikasi Otomotif (Subsektor Baru 2026)',
    tag: 'Kustom Motor & Aksesoris',
    count: 23,
    icon: 'wrench',
    description: 'Bengkel kustom motor gaya klasik, perancang aksesoris kendaraan lokal, dan modifikator berprestasi nasional.',
    localHero: 'Banjarbaru Custom Garage',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    readiness: 'Siap Investasi'
  }
];
