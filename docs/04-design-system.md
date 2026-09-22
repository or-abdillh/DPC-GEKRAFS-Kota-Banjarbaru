# Design System Document: DPC GEKRAFS Kota Banjarbaru

> **Document Version:** 1.0.0 | **Status:** Approved | **Last Updated:** 2026-09-22  
> **Governing Agent/Role:** Principal Design System Architect & Lead UI Specialist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.0.0 | 2026-09-22 | Principal Design System Architect | Inisialisasi spesifikasi sistem desain pemangku kepentingan untuk platform digital DPC GEKRAFS Banjarbaru |

---

## 1. Design Foundations

### 1.1 Color Palette & Semantic Meaning

Palet warna diturunkan secara organik dari lambang resmi DPC GEKRAFS Kota Banjarbaru (`public/image.png`), dengan kepatuhan rasio kontras WCAG AA yang diuji via `contrast-check.py`:

- **Primary Deep Cerulean (`#0873a6`):**
  - *Makna Semantik:* Merefleksikan kredibilitas kelembagaan, kepastian regulasi, dan kestabilan ekosistem ekonomi kreatif.
  - *Peruntukan:* Tombol aksi utama (Primary CTA), header navigasi aktif, dan ikon sorot. Rasio kontras 5.23:1 terhadap putih (WCAG AA Pass).
- **Signature Cyan (`#1495c9`):**
  - *Makna Semantik:* Karakter dinamis pemuda dan inovasi digital 21 subsektor Banjarbaru.
  - *Peruntukan:* Ambient glow terarah, batas kartu aktif, dan indikator status verifikasi.
- **Solar Amber Accent (`#ffcb08`):**
  - *Makna Semantik:* Daya cipta, optimisme, dan nilai ekonomi yang dihasilkan oleh karya lokal.
  - *Peruntukan:* Tag investasi aktif, lencana status *"Open for Investment"*, dan aksen metrik penting. Rasio kontras 11.73:1 terhadap teks gelap (WCAG AA Pass).
- **Midnight Slate Neutral (`#0f172a`):**
  - *Makna Semantik:* Ketegasan struktural data dan kanvas imersif untuk etalase proyek terkurasi.
  - *Peruntukan:* Judul utama, teks tubuh berbobot, dan latar belakang modul direktori investasi.
- **Studio Off-White Canvas (`#f8fafc` & `#ffffff`):**
  - *Makna Semantik:* Keterbukaan ruang, kebersihan presentasi data, dan kenyamanan visual bagi pengguna.

### 1.2 Typography Pairing & Scale Hierarchy

- **Font Keluarga Inti:** *Plus Jakarta Sans* (Modern Geometric Grotesk). Karakter huruf bersih, netral, memiliki keterbacaan tinggi pada layar ponsel, dan berwibawa pada judul berskala besar.
- **Skala Tipografi Fluid (Clamp):**
  - *H1 Display:* `clamp(2.5rem, 5vw + 1rem, 4.5rem)` – Bobot 700/800, tracking -0.03em.
  - *H2 Section:* `clamp(1.75rem, 3vw + 0.5rem, 2.75rem)` – Bobot 700, tracking -0.02em.
  - *H3 Card Title:* `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` – Bobot 600.
  - *Body Text:* `1rem (16px)` dengan line-height 1.65.
  - *Micro Metadata:* `0.75rem (12px)` dengan tracking 0.1em uppercase, bobot 600.

---

## 2. Layout & Spacing Philosophy

- **Responsive Multi-State System:**
  - *Mobile (< 640px):* Seluruh grid runtuh (*reflow*) menjadi 1 kolom vertikal rapi, padding horizontal 16–20px, section padding 48–64px untuk mencegah ruang kosong berlebih.
  - *Tablet (640px – 1024px):* 2 kolom adaptif dengan jarak antar-kartu 20px.
  - *Desktop (> 1024px):* Dynamic Bento Grid 3–4 kolom dengan lebar kontainer maksimal `max-w-7xl` (1280px).
- **Zero Horizontal Overflow:** Seluruh kontainer wajib menggunakan `w-full max-w-full overflow-hidden` pada elemen pembungkus bergeser agar tidak ada scrollbar horizontal pada ponsel.

---

## 3. Component Visual Specifications

- **Buttons (Tombol Tindakan):**
  - *Primary Button:* Latar `#0873a6`, teks `#ffffff`, sudut `rounded-xl`, padding `px-6 py-3.5`, tinggi minimum 44px, efek hover scale mikro (`scale-[1.02]`) dan shadow halus.
  - *Secondary Button:* Latar transparan dengan border 1px `border-slate-300`, teks `#0f172a`, sudut `rounded-xl`.
  - *Investment Badge Button:* Latar `#ffcb08`, teks `#0f172a` font-bold, sudut `rounded-full`.
- **Cards (Kartu Konten & Proyek):**
  - *Standard Bento Card:* Latar `#ffffff`, border 1px `border-slate-200/80`, sudut `rounded-2xl`, shadow bertingkat halus, padding dalam 24px.
  - *Investment Card:* Latar `#1e293b` (Slate 800), border 1px `border-slate-700/80`, teks judul `#ffffff`, teks detail `#94a3b8`, lencana dana aksen kuning.
- **Navigation (Sticky Navbar):**
  - Posisi `sticky top-0 z-50`, tinggi 72px, latar `#ffffff/85` atau `#f8fafc/85` dengan `backdrop-blur-md`, border bawah 1px `border-slate-200/60`.
- **Tap Targets:** Seluruh kontrol interaktif memiliki target sentuh minimal 44 × 44 px sesuai standar aksesibilitas `antislop-layoutmobile`.

---

## 4. Photography & Asset Curation Guidelines

- Menggunakan foto riil Unsplash beresolusi tinggi dengan optimasi format WebP:
  - *Subsektor Kriya & Wastra:* Dokumentasi detail tekstur purun, anyaman tradisional, dan motif sasirangan kontemporer.
  - *Subsektor Kuliner & Kopi:* Suasana kedai kopi lokal Banjarbaru, proses seduh manual, dan penyajian wadai Banjar.
  - *Subsektor Digital & Inovasi:* Tim kreator muda berdiskusi di co-working space, proses editing video, dan coding aplikasi.
- Dilarang menggunakan placeholder kotak abu-abu atau ilustrasi AI generik tanpa konteks lokal.
