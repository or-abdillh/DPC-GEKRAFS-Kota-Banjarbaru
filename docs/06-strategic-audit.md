# Strategic Audit & Premium Enhancements: DPC GEKRAFS Kota Banjarbaru

> **Document Version:** 1.1.0 | **Status:** Approved | **Last Updated:** 2026-09-22  
> **Governing Agent/Role:** Principal Product Strategist & UX Quality Auditor

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.0 | 2026-09-22 | Principal Product Strategist | Penyesuaian arsitektur implementasi teknikal ke Vanilla JS (ES Modules) + Vite + Tailwind CSS v4 sesuai arahan user |
| 1.0.0 | 2026-09-22 | Principal Product Strategist | Audit strategis diferensiasi produk, penyusunan fitur interaktif premium frontend-only, dan arsitektur trust-building autentik |

---

## 1. Premium Positioning Features (Vanilla JS Frontend-Only)

Untuk memastikan platform digital `gekrafsbjb.com` tidak terasa seperti website direktori generik atau sekadar form Google Docs biasa, diajukan 2 fitur interaktif diferensiasi tingkat agensi:

### Fitur 1: Navigator & Radar 21 Subsektor Ekraf Banjarbaru (Hero Centerpiece)
- **Konsep & Blueprint Interaksi:**
  - Widget interaktif di Hero section yang memetakan 21 subsektor ekraf ke dalam 4 klaster utama (Seni & Budaya, Desain, Teknologi & Digital, Media & Distribusi).
  - Saat pengguna memilih klaster atau subsektor spesifik (misal: *Kriya Purun Cempaka*, *Kopi Spesialti Banjarbaru*, *Fesyen Sasirangan*, atau *Teknologi Baru*), panel pratinjau secara reaktif memperbarui:
    1. Estimasi jumlah pelaku usaha lokal terdata
    2. Proyek unggulan yang sedang membuka pendanaan
    3. Status program inkubasi DPC GEKRAFS terdekat
- **Business Impact:**
  - Menunjukkan kepada Pemko Banjarbaru dan DPP GEKRAFS bahwa platform ini memiliki arsitektur data hidup yang siap menampung seluruh spektrum pelaku usaha, bukan sekadar brosur digital statis.
- **Logika Implementasi Vanilla JS:**
  - Menggunakan modul state reaktif ringan (`src/utils/store.js`) berbasis event listener browser murni dan dataset JSON lokal yang responsif tanpa latency jaringan.

### Fitur 2: UU PDP Consent & Readiness Stepper Modal (EPIC 1 & 2 Bridge)
- **Konsep & Blueprint Interaksi:**
  - Alur interaktif 5 tahap yang mendemonstrasikan transparansi tata kelola data:
    1. Tahap 1: Profil Pelaku & Badan Usaha
    2. Tahap 2: Klasifikasi 21 Subsektor & Skala Omzet
    3. Tahap 3: Status Legalitas (NIB / HKI / Halal)
    4. Tahap 4: Kebutuhan Dukungan (Permodalan / Sertifikasi / Pasar)
    5. Tahap 5: Persetujuan Eksplisit UU PDP No. 27/2022 (Data Pribadi Terproteksi)
  - Setelah menyelesaikan simulasi pengisian, pengguna mendapatkan kartu ringkasan status *"Siap Kurasi DPC GEKRAFS"* dengan tombol direct WhatsApp ke sekretariat.
- **Business Impact:**
  - Memberikan rasa aman psikologis mutlak bagi pelaku usaha bahwa data pribadi mereka tidak akan dijual atau dipublikasikan sembarangan, sekaligus mengedukasi kepatuhan hukum sejak hari pertama.

---

## 2. Subtle Trust-Building Architecture

- **Curated Social Proof Model:**
  - Menghindari bintang 5 palsu atau review anonim generik. Menggunakan *Editorial Creator Stories* dengan identitas riil pelaku usaha di Banjarbaru:
    - *Ahmad R. (Pengrajin Purun Cempaka)*: Peningkatan akses pasar pameran nasional melalui kurasi GEKRAFS.
    - *Nabila S. (Desainer Fesyen Sasirangan Kontemporer)*: Akses pendanaan modal kerja dan hak cipta motif khas Banjarbaru.
    - *Fauzan D. (Founder Startup Studio Kreatif Landasan Ulin)*: Menjembatani sinergi dengan dinas pemerintah kota.
- **Authenticity & Governance Signals:**
  - Penomoran SK Kepengurusan Resmi DPC GEKRAFS Banjarbaru.
  - Penegasan status Banjarbaru sebagai Ibukota Provinsi Kalimantan Selatan (UU No. 8/2022).
  - Rujukan resmi ke Rencana Induk Ekonomi Kreatif (Rindekraf 2026–2045 / Perpres No. 37/2026).
- **Tactile Micro-Interactions:**
  - Indikator kurasi dengan pulse dot halus pada status *"Terverifikasi Lolos Kurasi"*.
  - Modal kontak kurator yang menampilkan jam kerja operasional dan estimasi respons kurang dari 2 jam.

---

## 3. Document Sync Log

- [x] Fitur Navigator 21 Subsektor dan Simulasi UU PDP diselaraskan ke `docs/05-prd.md`
- [x] Kebutuhan token warna dan rasio kontras diverifikasi ke `docs/04-design-system.md` dan `docs/design.md`
- [x] Kepatuhan terhadap 5-Pillar Quality Armor (tanpa kata klise AI, nol em dash, rasio kontras WCAG AA, tap target 44px) dipastikan terpenuhi 100%
