# Product Requirements Document (PRD): DPC GEKRAFS Kota Banjarbaru

> **Document Version:** 1.1.0 | **Status:** Approved | **Last Updated:** 2026-09-22  
> **Governing Agent/Role:** Senior Technical Product Manager

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.0 | 2026-09-22 | Senior Technical Product Manager | Penyesuaian arsitektur implementasi teknikal ke Vanilla JS (ES Modules) + Vite + Tailwind CSS v4 sesuai arahan user |
| 1.0.0 | 2026-09-22 | Senior Technical Product Manager | Penerjemahan spesifikasi Initial PRD klien ke dalam PRD operasional, pemetaan MoSCoW, dan NFR kriteria pitch |

---

## 1. Product Overview & Executive Summary

- **Nama Produk:** Website Portal & Database Resmi DPC GEKRAFS Kota Banjarbaru (`gekrafsbjb.com`)
- **Product Owner:** Bidang Pengembangan Teknologi & Transformasi Digital DPC GEKRAFS Banjarbaru
- **Visi Produk:** Satu pintu data dan peluang bagi pelaku ekonomi kreatif Banjarbaru
- **Tujuan Utama:** 
  1. Menjadi pusat pendataan mandiri pelaku ekonomi kreatif lintas 21 subsektor selaras dengan UU Pelindungan Data Pribadi (UU PDP No. 27/2022).
  2. Menyediakan etalase terkurasi *"Open for Investment"* untuk menjembatani pelaku usaha dengan investor dan mitra strategis.
  3. Mempublikasikan kalender event kreatif kota (mode pra dan pasca-acara).
  4. Menyajikan dasbor analitik publik sebagai instrumen advokasi kebijakan berbasis data ke Pemko Banjarbaru.

---

## 2. Target Users & Core Scenarios

1. **Pelaku Ekonomi Kreatif & Komunitas:**
   - Melakukan simulasi pendaftaran karya, mengisi kuesioner pemetaan 5 tahap, dan memahami perlindungan data pribadi.
2. **Calon Investor & Mitra Bisnis:**
   - Menelusuri etalase proyek terkurasi berdasarkan subsektor dan kebutuhan modal kerja, lalu mengajukan minat kemitraan via WhatsApp kurator.
3. **Pemerintah Kota (Pemko) & Publik:**
   - Memantau metrik pertumbuhan dan sebaran agregat pelaku usaha kreatif di 5 kecamatan Kota Banjarbaru.
4. **Pengurus & Kurator DPC GEKRAFS:**
   - Mempublikasikan agenda resmi, mengelola kurasi portofolio, dan memandu pelaku usaha rintisan.

---

## 3. Section & Functional Specifications (MoSCoW Matrix)

| ID | Modul / Section | Prioritas | Deskripsi Fungsional & Kebutuhan Copy | Acuan Modul Vanilla JS |
|---|---|---|---|---|
| **SEC-01** | **Sticky Dynamic Navbar** | Must Have | Logo resmi DPC GEKRAFS, link navigasi cepat (21 Subsektor, Investasi, Event, Data, Profil), tombol *"Daftar Pelaku"*, backdrop blur on scroll. | `src/components/Navbar.js` |
| **SEC-02** | **Hero Showstopper & Subsector Navigator** | Must Have | Headline editorial, hook nilai utama, lencana kepatuhan UU PDP, dan Navigator Interaktif 21 Subsektor (filter instan subsektor, data representasi, dan status kurasi). | `src/components/HeroSection.js` & `SubsectorNavigator.js` |
| **SEC-03** | **Public Impact Analytics Dashboard** (EPIC 4) | Must Have | Metric counter dinamis: Total Pelaku Terdata (540+), 21 Subsektor Terwakili (100%), Komunitas Aktif (48), Estimasi Valuasi Proyek (Rp4.2 Miliar), dan catatan advokasi Pemko. | `src/components/ImpactDashboard.js` |
| **SEC-04** | **Portal Pemetaan Mandiri & UU PDP Stepper** (EPIC 1) | Must Have | Visualisasi formulir pemetaan 5 tahap: (1) Identitas Karya, (2) Skala Usaha, (3) Legalitas NIB/HKI, (4) Arah Pengembangan, (5) Mandat UU PDP Data Consent. Interaktif stepper dengan validasi form. | `src/components/RegistrationStepper.js` |
| **SEC-05** | **Direktori "Open for Investment"** (EPIC 2) | Must Have | Kanvas gelap berwibawa menampilkan kartu proyek terkurasi: Nama Usaha, Subsektor, Tahap (Growth/Scale), Target Dana (Rp...), dan tombol modal interaktif *"Ajukan Minat"*. | `src/components/InvestmentDirectory.js` |
| **SEC-06** | **Kalender Program & Event Ekraf** (EPIC 3) | Must Have | Tab switcher interaktif: Mode Pra-Acara (tiket & registrasi) dan Mode Pasca-Acara (galeri foto dokumentasi, jumlah peserta, press coverage). | `src/components/EventCalendar.js` |
| **SEC-07** | **Profil Kelembagaan & Komite 21 Subsektor** (EPIC 5) | Should Have | Struktur pengurus DPC GEKRAFS Banjarbaru, komite bidang kerja, visi-misi organisasi, dan saluran kolaborasi formal. | `src/components/OrganizationProfile.js` |
| **SEC-08** | **Conversion Footer & Floating Hotline** | Must Have | Footer komprehensif, informasi sekretariat Banjarbaru Creative Hub, legal disclaimer UU PDP, dan Floating WhatsApp Hotline kurator resmi. | `src/components/ConversionFooter.js` |

---

## 4. Technical & Non-Functional Requirements (NFR)

- **Framework & Arsitektur:** Vite (v8+), Vanilla JavaScript (Modular ES6+), Tailwind CSS v4, Lucide Icons.
- **Motion & Scrolling:** Smooth scrolling via Lenis.
- **Aksesibilitas & Kepatuhan:**
  - Kontras teks minimal 4.5:1 untuk teks normal dan 3.0:1 untuk non-teks tervalidasi WCAG AA.
  - `:focus-visible` styling berkontras tinggi pada setiap elemen interaktif.
  - Target sentuh mobile minimal 44 × 44 px.
- **Responsiveness & Fluid Reflow:** 100% responsif tanpa kebocoran scroll horizontal pada resolusi 360px–390px ponsel (`antislop-layoutmobile`).
- **Copywriting Hygiene:** Bebas kata klise AI (*unlock, elevate, seamless*) dan bebas karakter em dash (`—` / `--`).

---

## 5. Explicit Out of Scope (Tahap MVP Launching)

- Integrasi payment gateway otomatis perbankan/kartu kredit (digantikan oleh alur WhatsApp kurasi investor terarah).
- Backend multi-tenant authentication dengan session cookie server (digantikan oleh state reaktif Vanilla JS lokal dan mock persetujuan konsen data UU PDP untuk demonstrasi interaktif penuh).
- Modul administrasi backoffice kompleks dengan role permission level tinggi (disiapkan pada roadmap Fase 2 sesuai budget).

---

## 6. Pitch Readiness & Soft-Selling Checklist

- [x] Headline hero menjawab langsung mandat DPC GEKRAFS Banjarbaru dan kebutuhan pelaku usaha kota.
- [x] Nomor WhatsApp dan email resmi sekretariat Banjarbaru terpasang pada seluruh titik konversi.
- [x] Palet warna diturunkan secara presisi dari logo asli (`public/image.png`) dengan rasio kontras WCAG AA.
- [x] Struktur 5 Epic Modul dari Initial PRD klien terintegrasi dalam arsitektur single-page Vanilla JS berstandar agensi.
