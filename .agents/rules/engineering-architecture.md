---
trigger: always_on
---

# OFFICIAL ENGINEERING ARCHITECTURE DOCUMENT

## Vanilla JS + Vite + Tailwind CSS v4 Implementation Standard

**Version: 2.0 (Finalized & Locked to Vanilla JS)**

---

# 1. PURPOSE

Dokumen ini menetapkan standar arsitektur, struktur proyek, dan aturan implementasi teknis untuk seluruh pengembangan website menggunakan:

- Vite
- Vanilla JavaScript (ES6+ Modules)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Lenis Smooth Scroll
- Lucide Icons (Vanilla)

Dokumen ini bersifat:
- Non-negotiable
- Mengikat secara mutlak
- Prioritas tertinggi dalam keputusan teknis sesuai arahan eksplisit pengguna untuk mempertahankan tech stack Vanilla JS

Jika terjadi konflik dengan asumsi sebelumnya, maka keputusan teknis harus mengikuti dokumen ini.

---

# 2. CORE STACK (LOCKED – NON NEGOTIABLE)

## Runtime & Bundler Layer
Wajib menggunakan:
- Vite (v8+) sebagai bundler dan local development server
- Native ES Modules (`import`/`export`)
- Native Web APIs (DOM, Web Animations, Local Storage)
- Node.js ESM (`"type": "module"`)

Dilarang menggunakan:
- React / Vue / Angular / Svelte (Pertahankan Vanilla JS murni)
- jQuery atau library DOM usang
- Mixing CommonJS (`require`) dengan ES Modules

## Styling Layer
Wajib menggunakan:
- Tailwind CSS v4
- `@tailwindcss/vite` plugin di `vite.config.js`
- Design token via CSS variables di `:root`
- Modern CSS entry (`src/style.css`) dengan `@import "tailwindcss";`

Dilarang:
- Tailwind v3 atau PostCSS legacy
- Hardcoded hex color langsung di template tanpa kelas token/CSS variable
- Inline styles berlebihan

---

# 3. PROJECT STRUCTURE (VANILLA JS + VITE)

Struktur direktori resmi:

```
/
├── public/
│   ├── image.png          # Logo DPC GEKRAFS Banjarbaru
│   └── favicon.svg
├── src/
│   ├── components/        # Modular UI components & sections
│   │   ├── Navbar.js
│   │   ├── HeroSection.js
│   │   ├── SubsectorNavigator.js
│   │   ├── ImpactDashboard.js
│   │   ├── RegistrationStepper.js
│   │   ├── InvestmentDirectory.js
│   │   ├── EventCalendar.js
│   │   ├── OrganizationProfile.js
│   │   ├── ConversionFooter.js
│   │   └── Modals.js
│   ├── data/              # Static & Mock datasets (21 subsectors, projects, events)
│   │   ├── subsectors.js
│   │   ├── projects.js
│   │   ├── events.js
│   │   └── organization.js
│   ├── utils/             # Helpers, formatters, Lenis setup, state store
│   │   ├── store.js
│   │   ├── formatters.js
│   │   └── smoothScroll.js
│   ├── style.css          # Main Tailwind v4 stylesheet & CSS variables
│   └── main.js            # Application entry point & mounting logic
├── index.html             # HTML entry point with semantic landmarks
├── vite.config.js         # Vite configuration with @tailwindcss/vite
└── package.json
```

---

# 4. RENDERING STRATEGY

- **Mode:** Client-Side Single Page Application (SPA) yang di-bundle secara efisien oleh Vite menjadi aset statis murni (`dist/`).
- **Keunggulan:** Zero runtime framework overhead, instant load time (< 1 detik), kompatibel dengan segala static hosting (Vercel, Netlify, GitHub Pages, cPanel hemat biaya sesuai limit anggaran Rp1.000.000).

---

# 5. COMPONENT ARCHITECTURE STANDARD

Setiap komponen diatur sebagai ES Module modular mandiri yang mengekspor fungsi render atau class elemen:

- Komponen menghasilkan semantic HTML string atau merender DOM node.
- Event listeners di-bind secara terkapsulasi di dalam modul masing-masing via helper event delegasi atau post-mount listener.
- Komponen diklasifikasikan ke dalam:
  - `src/components/*`: Section-level modules dan interactive widgets
  - `src/data/*`: Single source of truth untuk data 21 subsektor, listing investasi, dan event.

---

# 6. DESIGN TOKEN IMPLEMENTATION

Semua style harus berasal dari Design System.
Token didefinisikan sebagai CSS variables pada `src/style.css`:

```css
@import "tailwindcss";

:root {
  --color-primary: #0873a6;
  --color-primary-hover: #065b84;
  --color-primary-light: #1495c9;
  --color-accent: #ffcb08;
  --color-accent-hover: #e5b600;
  --color-canvas: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-dark: #0f172a;
  --color-card-dark: #1e293b;
  --color-text-main: #0f172a;
  --color-text-muted: #64748b;
  --color-border-subtle: #e2e8f0;
  --color-border-dark: #334155;
}
```

---

# 7. RESPONSIVENESS STANDARD

Wajib:
- Mobile-first approach dengan breakpoint Tailwind (`sm:`, `md:`, `lg:`, `xl:`)
- Fluid clamp typography untuk headline utama
- Target sentuh minimal 44 × 44 px untuk semua kontrol interaktif
- Zero horizontal overflow leak pada layar 360px–390px

---

# 8. PERFORMANCE STANDARD

Wajib:
- Native DOM reactivity tanpa virtual DOM overhead
- Gambar menggunakan format optimal dengan lazy loading bawaan (`loading="lazy"`)
- Transisi CSS hardware-accelerated (`transform`, `opacity`)

---

# 9. SEO & ACCESSIBILITY BASELINE

Wajib:
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Heading hierarchy teratur (`h1` tunggal, `h2`, `h3`)
- Focus state jelas menggunakan `:focus-visible` ring kontras 3:1
- Kontras teks memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal)

---

# 10. STATE MANAGEMENT RULES

- Menggunakan modul state reaktif ringan (`src/utils/store.js`) berbasis pub/sub event bus sederhana atau `EventTarget` bawaan browser.
- Menjaga state filter subsektor, step form registrasi UU PDP, dan modal interaktif secara terpusat tanpa library eksternal berat.

---

# 11. CODE QUALITY STANDARD

- Clean, modern ES6+ (arrow functions, destructuring, template literals, optional chaining)
- Konsisten penamaan camelCase untuk variabel/fungsi dan PascalCase untuk komponen
- Zero console error di runtime production

---

# 12. SCALABILITY PRINCIPLES

- Kode terbagi rapi per subsektor, per proyek investasi, dan per section
- Menambah proyek investasi baru cukup dengan menambahkan entri di `src/data/projects.js`
- Menambah event baru cukup dengan memperbarui `src/data/events.js`

---

# 13. AI ENFORCEMENT CLAUSE

AI wajib:
- Menggunakan Vanilla JavaScript (Vite)
- Mempertahankan stack tanpa memaksakan konversi ke framework lain
- Menulis kode modular dan production-ready

---

# 14. EXECUTION DIRECTIVE

AI bertugas untuk mengimplementasikan landing page portal DPC GEKRAFS Kota Banjarbaru siap produksi secara langsung dan memvalidasinya via Playwright MCP.
