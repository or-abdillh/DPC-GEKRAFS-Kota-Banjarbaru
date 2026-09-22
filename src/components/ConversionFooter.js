import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderConversionFooter() {
  return `
    <!-- Pre-Footer Community Assembly Banner with Authentic Assembly Crowd Footage -->
    <section class="relative bg-slate-950 text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      
      <!-- Assembly Crowd Photo Background -->
      <img 
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80" 
        alt="Dokumentasi Perhimpunan Anggota dan Delegasi Pelaku Ekraf Banjarbaru" 
        class="absolute inset-0 w-full h-full object-cover object-center filter saturate-75 opacity-40 scale-105"
        loading="lazy"
      />
      
      <!-- Multi-layered Scrim Overlay for WCAG AA Contrast (17.8:1+) -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0873a6]/85"></div>
      <div class="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950/90"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#ffcb08] text-slate-950 shadow-md">
          ${getIcon('users', 'w-3.5 h-3.5 text-slate-950')}
          <span>Local IP Powerhouse · Kota Banjarbaru</span>
        </div>

        <h2 class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Karya Banjarbaru layak dicatat.
        </h2>

        <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
          Mulai dari satu profil. Kami bantu sisanya.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button 
            id="btn-footer-register" 
            type="button" 
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-lg transition-all min-h-[44px]"
          >
            ${getIcon('user-check', 'w-5 h-5 text-slate-950')}
            <span>Gabung Sekarang</span>
          </button>
          
          <a 
            href="#siap-tumbuh"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/30 rounded-xl backdrop-blur-sm transition-all min-h-[44px]"
          >
            ${getIcon('sparkles', 'w-4 h-4 text-[#ffcb08]')}
            <span>Jelajahi Siap Tumbuh</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Main Footer Information & Secretariat -->
    <footer class="bg-slate-950 text-white pt-16 pb-28 md:pb-16 border-t border-slate-800 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          <!-- Column 1: Brand & Secretariat -->
          <div class="lg:col-span-5 space-y-4">
            <div class="flex items-center gap-3">
              <img src="/image.png" alt="Logo DPC GEKRAFS Banjarbaru" class="w-12 h-12 rounded-full object-contain bg-white p-1" />
              <div>
                <span class="text-xs font-bold text-[#ffcb08] uppercase tracking-widest block">DPC GEKRAFS</span>
                <span class="text-base font-extrabold tracking-tight text-white block">KOTA BANJARBARU</span>
              </div>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Satu pintu data dan jejaring karya kreatif Banjarbaru. Memetakan 21 subsektor ekraf, membuka kurasi program Siap Tumbuh, dan agenda kolaborasi kota selaras UU PDP No. 27/2022.
            </p>

            <div class="space-y-2 pt-2 text-xs text-slate-400">
              <div class="flex items-start gap-2.5">
                ${getIcon('map-pin', 'w-4 h-4 text-[#ffcb08] shrink-0 mt-0.5')}
                <span>Sekretariat DPC GEKRAFS Banjarbaru, Jl. Panglima Batur / Taman Murjani, Kota Banjarbaru, Kalimantan Selatan 70714</span>
              </div>
              <div class="flex items-center gap-2.5">
                ${getIcon('phone', 'w-4 h-4 text-[#ffcb08] shrink-0')}
                <span>WhatsApp Sekretariat: +62 811-500-2121</span>
              </div>
              <div class="flex items-center gap-2.5">
                ${getIcon('mail', 'w-4 h-4 text-[#ffcb08] shrink-0')}
                <span>Email: halo@gekrafsbjb.com</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="lg:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-[#ffcb08]">Navigasi Portal</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#subsektor" class="hover:text-white transition-colors">21 Subsektor Ekraf</a></li>
              <li><a href="#data" class="hover:text-white transition-colors">Angka Ekosistem</a></li>
              <li><a href="#peran" class="hover:text-white transition-colors">Pilih Peran</a></li>
              <li><a href="#siap-tumbuh" class="hover:text-white transition-colors">Siap Tumbuh</a></li>
              <li><a href="#agenda" class="hover:text-white transition-colors">Agenda Kota</a></li>
              <li><a href="#organisasi" class="hover:text-white transition-colors">Tentang GEKRAFS</a></li>
            </ul>
          </div>

          <!-- Column 3: Governance, National Affiliation & Privacy -->
          <div class="lg:col-span-4 space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest text-[#ffcb08]">Jejaring Nasional & Privasi</h4>
            <div class="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-2">
              <div class="flex items-center gap-2 text-emerald-400 font-bold">
                ${getIcon('lock', 'w-4 h-4')}
                <span>Data Aman Selaras UU PDP</span>
              </div>
              <p class="leading-relaxed">
                Data publik hanya memuat profil karya yang disetujui. Kontak pribadi dan data sensitif dienkripsi dan tidak disebarluaskan tanpa persetujuan tertulis.
              </p>
            </div>
            <div class="text-[11px] text-slate-500 space-y-1">
              <div>Portal Resmi DPC GEKRAFS Kota Banjarbaru: <code class="text-slate-300">gekrafsbjb.com</code></div>
              <div>Afiliasi Nasional: <a href="https://gekrafs.com" target="_blank" rel="noopener noreferrer" class="text-[#1495c9] hover:underline font-semibold">DPP GEKRAFS (gekrafs.com)</a></div>
            </div>
          </div>

        </div>

        <!-- Copyright Bottom -->
        <div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div class="space-y-1 text-center md:text-left">
            <p>© 2026 DPC GEKRAFS Kota Banjarbaru. Gerakan Ekonomi Kreatif Nasional.</p>
            <p class="text-[11px] text-slate-500">Banjarbaru, Ibukota Provinsi Kalimantan Selatan (UU No. 8/2022)</p>
          </div>
          
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-400 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ffcb08]"></span>
            <span>Website In Collaboration with <a href="https://digitaliz.id/" target="_blank" rel="noopener noreferrer" class="text-white font-bold tracking-wide hover:text-[#ffcb08] hover:underline transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ffcb08] rounded">Digitaliz</a></span>
          </div>
        </div>

      </div>

      <!-- Floating WhatsApp Action Button (Mobile-friendly, 44x44px safe touch) -->
      <aside class="fixed bottom-5 right-5 z-50">
        <a 
          href="https://wa.me/628115002121?text=Halo%20Sekretariat%20DPC%20GEKRAFS%20Banjarbaru,%20saya%20ingin%20berkonsultasi%20seputar%20pelaku%20kreatif%20dan%20jejaring%20ekosistem" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 border-2 border-white/20 min-h-[48px] min-w-[48px]"
          aria-label="Hubungi WhatsApp Sekretariat DPC GEKRAFS Banjarbaru"
        >
          <span class="p-1 rounded-full bg-emerald-500">
            ${getIcon('phone', 'w-5 h-5 text-white')}
          </span>
          <span class="text-xs sm:text-sm font-bold pr-1">Kontak Sekretariat</span>
        </a>
      </aside>
    </footer>
  `;
}

export function initConversionFooterEvents() {
  const btnFooterRegister = document.getElementById('btn-footer-register');
  if (btnFooterRegister) {
    btnFooterRegister.addEventListener('click', () => {
      store.openModal('register-modal');
    });
  }
}
