# PRODUCT REQUIREMENT DOCUMENT (PRD)

## Platform Digital GEKRAFS Banjarbaru (gekrafsbjb.com)

| Atribut Produk     | Detail / Spesifikasi                                                        |
| :----------------- | :-------------------------------------------------------------------------- |
| **Nama Produk**    | Website Portal & Database GEKRAFS Banjarbaru                                |
| **Domain Resmi**   | `gekrafsbjb.com`                                                            |
| **Product Owner**  | Bidang Pengembangan Teknologi & Transformasi Digital DPC GEKRAFS Banjarbaru |
| **Visi Produk**    | Satu pintu data dan peluang bagi pelaku ekonomi kreatif Banjarbaru          |
| **Target Release** | Desember 2026                                                               |
| **Batas Anggaran** | Rp1.000.000 (Domain 1 tahun, Hosting 1 tahun, & Pengembangan)               |

---

### 1. Tujuan Strategis & Target Pengguna (User Personas)

#### **Tujuan Produk**

Membuat platform digital satu pintu untuk memetakan **21 subsektor ekonomi kreatif**, membuka peluang investasi/kemitraan karya, mengelola publikasi event, serta menyediakan data acuan untuk advokasi ke Pemko Banjarbaru.

#### **Target Pengguna (User Personas)**

1. **Pelaku Ekraf & Komunitas:** Mendaftar akun, mengisi kuesioner pemetaan karya, mengelola profil _self-service_, serta mengajukan proyek bisnis.
2. **Calon Investor & Mitra Bisnis:** Mengeksplorasi etalase proyek terkurasi dan mengajukan minat kemitraan.
3. **Publik & Penikmat Event:** Memperoleh informasi event ekraf, pendaftaran tiket, serta melihat dokumentasi pasca-acara.
4. **Admin / Pengurus GEKRAFS:** Memverifikasi data pelaku, melakukan kurasi proyek investasi, mempublikasikan event, dan merekap analitik agregat.

---

### 2. Spesifikasi Fitur Utama & Epics (Product Epics)

Sistem dibangun dalam **5 Modul Utama** yang terintegrasi pada satu _landing page_:

#### **EPIC 1: Portal Pelaku Kreatif & Database (Priority: P0 - Critical)**

- **User Story:** Sebagai pelaku ekraf, saya ingin membuat akun dan mengisi data usaha agar terdata secara resmi dan memiliki profil mandiri.
- **Persyaratan Teknis & Keamanan (FR-1.1 & FR-1.3):**
  - Registrasi & autentikasi mandiri untuk individu maupun komunitas.
  - Mandatory _Data Consent Checkbox_ pada pendaftaran selaras dengan **UU Pelindungan Data Pribadi (UU PDP)**.
  - Fitur _Self-Service Dashboard_ di mana data sepenuhnya dikelola oleh pelaku (_Data Milik Pelaku_).
- **Formulir Kuesioner Pemetaan (FR-1.2):**
  - Mendukung input data dari **21 subsektor ekraf** dengan 5 struktur data utama: (1) Identitas Karya & Pelaku, (2) Skala Usaha, (3) Legalitas, (4) Arah Pengembangan Karya, dan (5) Konteks Tambahan.

#### **EPIC 2: Directory "Open for Investment" (Priority: P0 - Critical)**

- **User Story:** Sebagai pelaku ekraf yang siap berkembang, saya ingin menampilkan profil bisnis saya kepada investor agar bisa mendapatkan pendanaan/kemitraan.
- **Persyaratan Teknis (FR-2.1 - FR-2.3):**
  - **UI Project Cards:** Menampilkan Nama Karya/Usaha, Subsektor, Tahap Usaha, Ringkasan Karya, dan Kebutuhan Pendanaan/Pengembangan (\\(\text{Rp}\dots\\)).
  - **Sistem Kurasi Internal (FR-2.2):** Kartu proyek hanya aktif setelah mendapat status _Verifikasi/Kurasi Lolos_ dari admin internal.
  - **Lead Generation (FR-2.3):** Tombol interaktif _"Ajukan Minat"_ yang terhubung ke formulir kontak mitra/investor.

#### **EPIC 3: Event & Program Listing (Priority: P0 - Critical)**

- **User Story:** Sebagai publik/komunitas, saya ingin melihat agenda event ekraf di Banjarbaru serta melihat dokumentasinya setelah acara selesai.
- **Persyaratan Teknis (FR-3.1 & FR-3.2):**
  - **Mode Pra-Acara (FR-3.1):** Halaman pengumuman mencakup Judul, Tanggal, Lokasi, Penyelenggara, Subsektor, Tautan Tiket/Pendaftaran, dan tombol _Social Media Sharing_.
  - **Mode Pasca-Acara (FR-3.2):** Halaman rekapitulasi mencakup Ringkasan acara, Galeri foto dokumentasi, Jumlah peserta, Daftar karya yang tampil, dan Tautan _press coverage_.

#### **EPIC 4: Public Impact Analytics Dashboard (Priority: P1 - High)**

- **User Story:** Sebagai publik dan pengurus, saya ingin melihat statistik pertumbuhan ekraf Banjarbaru secara _real-time_ tanpa melanggar privasi data pribadi.
- **Persyaratan Teknis (FR-4.1 & FR-4.2):**
  - **Metric Counter Publik (FR-4.1):** Menampilkan jumlah total pelaku terdaftar, sebaran di 21 subsektor, dan total komunitas.
  - **Internal Data Aggregation (FR-4.2):** Rekapitulasi data agregat untuk advokasi kebijakan berbasis data ke Pemko Banjarbaru.

#### **EPIC 5: Profil Kelembagaan Organisasi (Priority: P1 - High)**

- **User Story:** Sebagai pengunjung umum, saya ingin mengetahui profil dan kontak resmi GEKRAFS Banjarbaru.
- **Persyaratan Teknis (FR-5.1):** Halaman statis yang memuat profil DPC GEKRAFS Banjarbaru, struktur pengurus, program kerja, dan kontak resmi.

---

### 3. Persyaratan Non-Fungsional (NFR) & Tata Kelola Data

1. **Privasi & Keamanan Data (NFR-1):**
   - **Strict Data Privacy:** Data pribadi individual/pelaku bersifat rahasia dan **tidak dipublikasikan ke umum**.
   - Halaman depan hanya menampilkan data agregat/anonim.
   - Kepatuhan penuh terhadap regulasi UU PDP.
2. **SEO & Discoverability (NFR-2):**
   - Arsitektur _Dynamic URL_ untuk setiap halaman event baru guna mengoptimalkan pencarian Google dengan kata kunci lokal seperti _"event kreatif Banjarbaru"_.
   - Struktur Halaman mendukung _backlink_ media & mitra.
3. **Infrastruktur & Domain (NFR-3):**
   - Domain utama: `gekrafsbjb.com`.
   - Setup hosting dan domain dengan alokasi aktif 1 tahun.

---

### 4. Panduan Eksekusi Lintas Lini (Cross-Functional Directives)

#### **🎨 Tim UI/UX Design**

- Buat _layout_ terpadu berkonsep _Single Landing Page_ yang responsif (_mobile-first_).
- Sediakan komponen visual khusus untuk _Project Cards_ (Open for Investment) dan _Metric Counter_ di halaman utama.
- Rancang alur pendaftaran kuesioner 5 tahap agar ramah pengguna (_user-friendly stepper form_).

#### **💻 Tim Engineering & Tech**

- Gunakan _stack_ yang efisien, ringan, dan sesuai dengan batasan anggaran Rp1.000.000.
- Pastikan konfigurasi domain `gekrafsbjb.com` dan SSL aktif pada bulan pertama (Oktober 2026).
- Implementasikan pemisahan hak akses (_Role-based Access Control_) antara Admin/Pengurus dan Pelaku Ekraf.
- Pastikan _database schema_ memisahkan data pribadi (private) dengan data publik (agregat).

#### **🔍 Tim QA & Compliance**

- Uji alur persetujuan _Data Consent_ saat pendaftaran akun.
- Pastikan uji keterisian formulir kuesioner mencakup opsi untuk seluruh **21 subsektor ekraf**.
- Lakukan verifikasi bahwa data individu pelaku tidak bocor ke publik atau terindeks secara tidak sengaja oleh _search engine_.

#### **📢 Tim Operations & Marketing**

- Siapkan SOP kurasi internal untuk memverifikasi entri pada modul _Open for Investment_.
- Kelola penerbitan konten event pra dan pasca-acara secara berkala.
- Gunakan rekap data agregat dari Modul 4 untuk penyusunan laporan advokasi ke Pemko Banjarbaru.

---

### 5. Rencana Rilis, Anggaran, & KPI Metrik Kesuksesan

#### **Rencana Rilis (Okt – Des 2026)**

- **Fase 1 (Oktober 2026 - Fondasi):** Aktivasi domain `gekrafsbjb.com`, desain _landing page_, dan pembuatan halaman Profil GEKRAFS.
- **Fase 2 (November 2026 - Portal & Data):** Pembangunan dan pengujian Modul Akun/Kuesioner, Open for Investment, Listing Event, serta uji coba internal pengurus.
- **Fase 3 (Desember 2026 - Launching & Sosialisasi):** Peluncuran resmi (_grand launching_), sosialisasi ke komunitas ekraf, dan pengolahan rekap data awal.

#### **KPI Kesuksesan Produk**

1. Akumulasi jumlah akun pelaku kreatif yang terdaftar.
2. Kelengkapan data keterwakilan dari 21 subsektor ekraf Banjarbaru.
3. Jumlah proyek kreatif yang lolos kurasi di etalase _Open for Investment_.
4. Jumlah _listing event_ dan program yang terbit di platform.
