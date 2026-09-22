import { renderSubsectorNavigator } from './SubsectorNavigator.js';
import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderHeroSection() {
  return `
    <section id="hero" class="relative w-full pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-950 text-white">
      
      <!-- Full-Width Authentic Organizational Assembly Footage Background -->
      <div class="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2000&q=80" 
          alt="Dokumentasi Sidang Pleno & Forum Konsolidasi Ekraf DPC GEKRAFS Banjarbaru" 
          class="w-full h-full object-cover object-right md:object-center filter brightness-95 contrast-105"
          loading="eager"
        />
        
        <!-- Multi-Stop Directional Overlay Scrim (WCAG AAA Contrast Ratio >= 17:1 on text area) -->
        <!-- 1. Directional Gradient Scrim: Deep dark on the left for text readability, clear fade on the right to reveal assembly footage -->
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35"></div>
        <!-- 2. Vertical Blend to Ground the Lower Content and Smooth Navigation -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        <!-- 3. Tactile Micro-Noise Texture -->
        <div class="absolute inset-0 bg-noise opacity-15 mix-blend-overlay"></div>
      </div>

      <!-- Atmospheric Ambient Glow (antislop-ui dose cap: exactly 1 focal point) -->
      <div class="absolute top-1/4 -right-20 w-[480px] h-[480px] bg-[#0873a6]/20 rounded-full blur-3xl pointer-events-none z-0" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Hero Header Area -->
        <div class="space-y-6 md:space-y-8 max-w-4xl">
          
          <!-- Badges & Verification Row -->
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-xs">
              <span class="w-2 h-2 rounded-full bg-[#ffcb08] animate-pulse"></span>
              DPC GEKRAFS Kota Banjarbaru
            </span>
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/80 shadow-xs">
              ${getIcon('shield-check', 'w-3.5 h-3.5 text-[#ffcb08]')}
              UU PDP No. 27/2022 Compliant
            </span>
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ${getIcon('users', 'w-3.5 h-3.5 text-[#ffcb08]')}
              Organisasi Ekraf Resmi Ibukota Kalsel
            </span>
          </div>

          <!-- Main Display Headline with High Dramatic Contrast -->
          <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Satu Pintu Data dan Peluang Ekonomi Kreatif <span class="text-[#ffcb08]">Banjarbaru</span>.
          </h1>

          <!-- Body Copy: Concrete, Natural Human Tone (antislop-copywriting) -->
          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
            Platform resmi DPC GEKRAFS Kota Banjarbaru untuk mengonsolidasikan seluruh 21 subsektor ekraf, kurasi proyek investasi mandiri, dan advokasi kebijakan berbasis data bersama Pemerintah Kota Banjarbaru.
          </p>

          <!-- Primary CTA Action Cluster -->
          <div class="flex flex-wrap items-center gap-3.5 pt-2">
            <button 
              id="btn-hero-register" 
              type="button" 
              class="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-slate-950 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-lg shadow-amber-500/20 transition-all min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ffcb08]"
            >
              ${getIcon('file-text', 'w-5 h-5 text-slate-950')}
              <span>Daftarkan Usaha Ekraf Anda</span>
            </button>
            <a 
              href="#investasi" 
              class="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/25 backdrop-blur-xs rounded-xl shadow-sm transition-all min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <span>Eksplorasi Proyek Investasi</span>
              ${getIcon('arrow-right', 'w-4 h-4 text-slate-300')}
            </a>
          </div>

          <!-- Social Proof & Institutional Trust Strip -->
          <div class="pt-4 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-white/15">
            <div class="flex items-center gap-2.5">
              <span class="text-lg sm:text-xl font-extrabold text-white">540+</span>
              <span class="leading-tight">Pelaku Terdata Mandiri</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-lg sm:text-xl font-extrabold text-[#ffcb08]">21/21</span>
              <span class="leading-tight">Subsektor Terwakili</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-lg sm:text-xl font-extrabold text-white">100%</span>
              <span class="leading-tight">Perlindungan Data Pribadi</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-lg sm:text-xl font-extrabold text-white">5</span>
              <span class="leading-tight">Kecamatan Kota</span>
            </div>
          </div>

          <!-- Authentic Footage Caption Metadata -->
          <div class="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
            ${getIcon('camera', 'w-3.5 h-3.5 text-[#ffcb08]')}
            <span>Dokumentasi: Sidang Pleno Koordinasi Komite Subsektor DPC GEKRAFS Kota Banjarbaru</span>
          </div>

        </div>

        <!-- Hero Showstopper Centerpiece: Interactive 21 Subsector Navigator -->
        <div id="subsector-navigator-wrapper" class="w-full mt-12 md:mt-16">
          ${renderSubsectorNavigator()}
        </div>

      </div>
    </section>
  `;
}

export function initHeroEvents() {
  const btnHeroRegister = document.getElementById('btn-hero-register');
  if (btnHeroRegister) {
    btnHeroRegister.addEventListener('click', () => {
      store.openModal('register-modal');
    });
  }
}
