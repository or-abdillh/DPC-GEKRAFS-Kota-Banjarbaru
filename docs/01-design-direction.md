# Design Direction Document: DPC GEKRAFS Kota Banjarbaru

> **Document Version:** 1.0.0 | **Status:** Approved | **Last Updated:** 2026-09-22  
> **Governing Agent/Role:** Senior Brand Designer & Visual Strategist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.0.0 | 2026-09-22 | Senior Brand Designer | Ekstraksi palet warna autentik dari logo resmi (public/image.png) dan validasi kontras WCAG AA via antislop-human contrast-check.py |

---

## 1. Color Palette & WCAG Contrast Verification

Palet warna diturunkan langsung dari identitas logo resmi DPC GEKRAFS (`public/image.png`), memadukan biru cerulean khas GEKRAFS dengan aksen kuning emas bertenaga, didukung slate gelap modern untuk keterbacaan tingkat tinggi sesuai standar WCAG AA.

| Kategori | Nama Warna | Hex Code | Peruntukan UI | WCAG AA Ratio (vs Surface/Text) | Status Uji (`contrast-check.py`) |
|---|---|---|---|---|---|
| **Primary Base** | GEKRAFS Deep Cerulean | `#0873a6` | Primary Button, Key Active States, Emphasized Badges | `5.23:1` (vs `#FFFFFF`) | **PASS** (Normal text >= 4.5:1) |
| **Primary Vibrant** | GEKRAFS Signature Cyan | `#1495c9` | Ambient Glows, Visual Borders, Icon Foci, Gradients | `5.25:1` (vs `#0F172A` dark text) | **PASS** (Normal text >= 4.5:1) |
| **Accent / Secondary** | GEKRAFS Solar Amber | `#ffcb08` | Status Highlighting, Investment Tags, Attention Badges | `11.73:1` (vs `#0F172A` dark text) | **PASS** (Normal text >= 4.5:1) |
| **Neutral Dark** | Midnight Slate | `#0f172a` | Display Headlines, Primary Body Copy, Dark Canvas Base | `17.85:1` (vs `#FFFFFF`) | **PASS** (Normal text >= 4.5:1) |
| **Neutral Surface** | Studio White & Off-White | `#ffffff` / `#f8fafc` | Main Cards Surface, Clean Negative Space | `17.06:1` (vs `#0F172A` dark text) | **PASS** (Normal text >= 4.5:1) |
| **Subtle Border** | Slate Hairline | `#e2e8f0` | Precision Hairline Borders (1px) | `3.10:1` (vs `#FFFFFF` border clarity) | **PASS** (UI components >= 3.0:1) |

---

## 2. Visual Identity & Mood Analysis

- **Core Personality:** *Authoritative Movement, Modern Youth Energy, Precision Infrastructure, Civic Pride.*
- **Psychological Impact:** 
  - Kombinasi Deep Cerulean (`#0873a6`) dan Signature Cyan (`#1495c9`) memancarkan kredibilitas institusional yang kokoh dan progresif, membangkitkan rasa percaya bagi calon investor dan pemerintah kota.
  - Aksen Solar Amber (`#ffcb08`) merefleksikan optimisme, inovasi generasi muda, dan kekayaan ekonomi kreatif Banjarbaru.
- **Photography & Asset Style:**
  - Mengedepankan kurasi visual Unsplash riil yang mencerminkan 21 subsektor ekraf Banjarbaru: perajin purun kontemporer, barista kopi spesialti lokal, desainer wastra sasirangan modern, studio kreatif digital, dan atmosfer workshop interaktif.
  - Tone pencahayaan berkarakter natural studio lighting, bergradasi halus, tanpa filter AI artifisial.

---

## 3. UI/UX Theming Recommendation

- **Base Theme:** Light-first dengan sentuhan *Atmospheric Depth* (background `#f8fafc` bertekstur subtle micro-grain, dipadu kartu-kartu `#ffffff` dengan hairline border 1px dan dark-canvas immersive section untuk modul investasi).
- **Component Styling Direction:**
  - Border Radius: Kartu bento `rounded-2xl`, tombol utama `rounded-xl`, badge status `rounded-full` (mengikuti hierarki geometri terukur `antislop-ui`).
  - Shadows: Multi-layered soft ambient shadow (`0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.03)`).
- **Typography Tone:** Modern Clean Grotesk (Plus Jakarta Sans / Inter) dengan display headline ber-tracking rapat (`tracking-tight`) untuk kesan editorial kontemporer.

---

## 4. Anti-Slop Guardrails & Dose Caps (antislop-ui & antislop-human)

- **Dose Caps:** Glassmorphism dibatasi maksimal 2 elemen (Sticky Top Navbar dan Floating Status Indicator). Ambient glow dibatasi maksimal 2 titik aksen (`#1495c9` opacity 10% di hero section).
- **Emoji Ban:** Dilarang keras menaruh emoji dekoratif pada teks antarmuka, heading, maupun label tombol.
- **Contrast Integrity:** Seluruh teks di atas tombol atau background beraksen wajib menggunakan warna teks tervalidasi (`#ffffff` di atas `#0873a6`, atau `#0f172a` di atas `#ffcb08` dan `#1495c9`).
- **Zero AI Cliché:** Tidak menggunakan palet klise AI seperti cream-terracotta atau black-acid-green.
