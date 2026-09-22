# Technical Design Specification: DPC GEKRAFS Kota Banjarbaru

> **Document Version:** 1.1.1 | **Status:** Approved | **Last Updated:** 2026-09-22  
> **Governing Agent/Role:** Principal Design System Architect & Lead UI Specialist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.1 | 2026-09-22 | Principal Design System Architect | Spesifikasi Full-Width Image Background Hero dengan teknik Directional Overlay Scrim (WCAG AAA) & footage rapat organisasi |
| 1.1.0 | 2026-09-22 | Principal Design System Architect | Penyesuaian arsitektur implementasi teknikal ke Vanilla JS (ES Modules) + Vite + Tailwind CSS v4 sesuai arahan user |
| 1.0.0 | 2026-09-22 | Principal Design System Architect | Spesifikasi teknis implementasi desain agensi anti-slop, mapping token CSS variables Tailwind v4, dan checklist 5-Pillar Armor |

---

## 1. Overview & Creative Thesis

- **Aesthetic Stance:** 
  Platform digital `gekrafsbjb.com` menerapkan estetika *Bold Contemporary & Civic Infrastructure*. Memadukan ketegasan portal data resmi pemerintah dengan kehangatan dan dinamisme pelaku industri kreatif Banjarbaru.
- **Tech & Styling Stack Alignment:**
  - Vite (v8+) dengan native ES Modules
  - Vanilla JavaScript (Clean ES6+, modular components, native event handling)
  - Tailwind CSS v4 dengan utility-first dan CSS variables di `:root`
  - Lenis Smooth Scroll via native browser animation loop
  - Lucide Icons (Vanilla icon sets)
- **Target Experience:** Ringan, presisi, waktu muat instan (< 1 detik), responsif tanpa kebocoran scroll horizontal pada resolusi 360px–390px, dan kontras tajam yang lolos uji WCAG AA.

---

## 2. Color System & CSS Variable Mapping

Token didefinisikan pada root stylesheet (`src/style.css`) dan dipetakan ke Tailwind v4:

```css
@import "tailwindcss";

:root {
  /* Brand Core Tokens */
  --color-primary: #0873a6;
  --color-primary-hover: #065b84;
  --color-primary-light: #1495c9;
  --color-accent: #ffcb08;
  --color-accent-hover: #e5b600;
  
  /* Neutral & Canvas Tokens */
  --color-canvas: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-dark: #0f172a;
  --color-card-dark: #1e293b;
  
  /* Text Tokens */
  --color-text-main: #0f172a;
  --color-text-muted: #64748b;
  --color-text-inverse: #ffffff;
  --color-text-inverse-muted: #94a3b8;
  
  /* Border & Line Tokens */
  --color-border-subtle: #e2e8f0;
  --color-border-dark: #334155;
  --color-border-accent: rgba(20, 149, 201, 0.4);
}
```

### WCAG Contrast Verification Matrix:
- `#ffffff` on `#0873a6` (Primary CTA): **5.23:1** (PASS >= 4.5:1)
- `#0f172a` on `#ffcb08` (Accent Tag): **11.73:1** (PASS >= 4.5:1)
- `#0f172a` on `#f8fafc` (Body Text on Canvas): **17.06:1** (PASS >= 4.5:1)
- `#ffffff` on `#0f172a` (Headings on Dark Surface): **17.85:1** (PASS >= 4.5:1)

---

## 3. Typography Architecture & Pairing Specs

- **Font Family:** Plus Jakarta Sans (`font-sans`)
- **Type Scale Hierarchy (Fluid Clamp):**
  - `display-hero`: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]`
  - `section-title`: `text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
  - `card-title`: `text-lg sm:text-xl font-bold text-slate-900`
  - `body-large`: `text-base sm:text-lg text-slate-600 leading-relaxed`
  - `body-base`: `text-sm sm:text-base text-slate-600 leading-relaxed`
  - `micro-tag`: `text-xs font-semibold uppercase tracking-wider`

---

## 4. Layout Engineering & Grid Blueprints

- **Dynamic Bento Grid Layout:**
  - Breakpoints: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`
  - Bobot asimetris: Kartu utama fitur investasi merentang 2 kolom (`md:col-span-2`), metrik counter merentang 1 kolom.
- **Multi-State Responsive Reflow:**
  - *Mobile (< 640px):* Runtuh sempurna menjadi 1 kolom vertikal tanpa tumpang-tindih teks.
  - *Zero Overflow Rule:* Kontainer utama menggunakan `max-w-full overflow-x-hidden`.
- **Section Height Cadence:**
  - Padding vertikal desktop: `py-20 md:py-24`
  - Padding vertikal mobile: `py-12 sm:py-16`
  - Larangan `100vh` kaku pada mobile: gunakan `min-h-[calc(100dvh-5rem)]` atau `h-auto`.

---

## 5. Elevation, Depth & Ambient Lighting

- **Hairline Precision Borders:** `border border-slate-200/80` pada permukaan terang, `border border-slate-700/60` pada kanvas gelap.
- **Ambient Light Glow Dose Cap:** Maksimal 2 elemen glow per viewport:
  - Hero Glow: `radial-gradient(circle, rgba(20,149,201,0.12) 0%, rgba(20,149,201,0) 70%)` dengan `blur-3xl`.
  - Impact Glow: `radial-gradient(circle, rgba(255,203,8,0.10) 0%, rgba(255,203,8) 70%)` dengan `blur-3xl`.
- **Controlled Glassmorphism:**
  - Navbar: `bg-white/85 backdrop-blur-md border-b border-slate-200/70`
  - Floating Badge: `bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-lg`

---

## 6. Shapes, Radii & Geometry

- **Border Radius Hierarchy:**
  - Surface Cards & Bento Items: `rounded-2xl`
  - Interactive Action Buttons: `rounded-xl`
  - Status Badges & Pills: `rounded-full`
  - Form Inputs: `rounded-xl`
- Larangan membuat seluruh elemen berbentuk pill seragam (`rounded-full`).

---

## 7. Components, Micro-Interactions & Tap Targets

- **Smooth Scroll (Lenis):**
  - Inisialisasi Vanilla JS via `src/utils/smoothScroll.js`:
    `const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })`
- **Touch Target Accessibility:**
  - Seluruh tombol, switch, dan link navigasi memiliki area sentuh minimal `min-h-[44px] min-w-[44px]`.
- **Focus Visible Ring:**
  - Kelas universal: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0873a6]`.
- **Component Roster (Modular Vanilla JS):**
  1. `Navbar.js`: Sticky blur bar dengan logo DPC GEKRAFS Banjarbaru, mobile menu drawer, dan CTA pendaftaran.
  2. `HeroSection.js`: Headline editorial, hook nilai utama, dan Navigator Interaktif 21 Subsektor.
  3. `SubsectorNavigator.js`: Filter dinamis 21 subsektor ekraf dalam 4 klaster utama dengan data reaktif lokal.
  4. `ImpactDashboard.js`: Counter metrik agregat transparan untuk publik dan Pemko Banjarbaru.
  5. `RegistrationStepper.js`: Pratinjau alur formulir 5 tahap pemetaan mandiri selaras UU PDP.
  6. `InvestmentDirectory.js`: Etalase kartu proyek kreatif lolos kurasi dengan modal target dan modal interaktif *"Ajukan Minat"*.
  7. `EventCalendar.js`: Tab switcher mode Pra-Acara dan Pasca-Acara.
  8. `OrganizationProfile.js`: Struktur kepengurusan DPC GEKRAFS Banjarbaru dan komite 21 subsektor.
  9. `ConversionFooter.js`: Footer resmi dengan kontak sekretariat dan tombol floating WhatsApp.
  10. `Modals.js`: Dialog modal interaktif untuk pengajuan minat investor dan simulasi pendaftaran pelaku ekraf.

---

## 8. Do's and Don'ts Matrix (5-Pillar Quality Armor Checklist)

| Aspek | Dilarang (AI-Slop) | Wajib (Standar Agensi) |
|---|---|---|
| **Warna** | Palet cream-terracotta atau neon acak | Deep Cerulean (`#0873a6`), Signature Cyan (`#1495c9`), Solar Amber (`#ffcb08`) |
| **Kontras** | Teks abu-abu muda di atas putih | Kontras WCAG AA minimal 4.5:1 teruji via `contrast-check.py` |
| **Dose Caps** | Semua elemen diberi glass dan glow | Glass maks 2 elemen (Navbar & Badge); glow maks 2 titik |
| **Layout** | 3 kotak seragam flexbox vertikal | Dynamic Bento Grid dengan bobot informasi riil |
| **Mobile** | `100vh` kaku dan scroll horizontal bocor | Fluid `clamp()`, `min-h-[100dvh]`, 100% no horizontal leak |
| **Sentuh** | Link kecil di bawah 30px | Target sentuh interaktif minimal 44 × 44 px |
| **Copy** | Kosakata klise AI (*unlock, elevate, seamless*) | Bahasa lugas, kalimat aktif, nol em dash (`—` / `--`) |
| **Gambar** | Placeholder abu-abu kosong | Foto Unsplash terkurasi sesuai 21 subsektor Banjarbaru |
