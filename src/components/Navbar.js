import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderNavbar() {
  return `
    <header class="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity -->
          <a href="#" class="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0873a6] rounded-lg p-1" aria-label="Beranda GEKRAFS Kota Banjarbaru">
            <img src="/image.png" alt="Logo DPC GEKRAFS Banjarbaru" class="w-12 h-12 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-200" />
            <div class="flex flex-col">
              <span class="text-xs font-bold tracking-widest text-[#0873a6] uppercase">DPC GEKRAFS</span>
              <span class="text-base font-extrabold tracking-tight text-slate-900 leading-tight">KOTA BANJARBARU</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            <a href="#subsektor" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">21 Subsektor</a>
            <a href="#data" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">Angka Ekosistem</a>
            <a href="#pemetaan" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">Pilih Peran</a>
            <a href="#investasi" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">Siap Tumbuh</a>
            <a href="#event" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">Agenda</a>
            <a href="#organisasi" class="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0873a6] hover:bg-slate-100/80 rounded-lg transition-colors min-h-[44px] flex items-center">Tentang</a>
          </nav>

          <!-- Action Cluster -->
          <div class="hidden sm:flex items-center gap-3">
            <button id="btn-nav-register" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0873a6] hover:bg-[#065b84] active:scale-[0.98] rounded-xl shadow-sm transition-all duration-200 min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0873a6]">
              ${getIcon('users', 'w-4 h-4 text-white')}
              <span>Gabung Sekarang</span>
            </button>
          </div>

          <!-- Mobile Hamburger Menu Button -->
          <div class="flex lg:hidden items-center gap-2">
            <button id="btn-mobile-menu-toggle" type="button" class="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#0873a6] min-h-[44px] min-w-[44px]" aria-expanded="false" aria-label="Buka menu navigasi">
              ${getIcon('menu', 'w-6 h-6')}
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu-drawer" class="hidden lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl">
        <a href="#subsektor" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">21 Subsektor Ekraf</a>
        <a href="#data" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">Angka Ekosistem Banjarbaru</a>
        <a href="#pemetaan" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">Pilih Peranmu (Registrasi)</a>
        <a href="#investasi" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">Siap Tumbuh (Mitra & Modal)</a>
        <a href="#event" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">Agenda Ekosistem</a>
        <a href="#organisasi" class="mobile-nav-link block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0873a6] rounded-xl transition-colors min-h-[44px]">Tentang GEKRAFS Banjarbaru</a>
        <div class="pt-2">
          <button id="btn-mobile-nav-register" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-white bg-[#0873a6] hover:bg-[#065b84] rounded-xl shadow-md transition-colors min-h-[44px]">
            ${getIcon('users', 'w-5 h-5 text-white')}
            <span>Gabung Sekarang</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const toggleBtn = document.getElementById('btn-mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const navRegister = document.getElementById('btn-nav-register');
  const mobileNavRegister = document.getElementById('btn-mobile-nav-register');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isClosed = drawer.classList.contains('hidden');
      if (isClosed) {
        drawer.classList.remove('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = getIcon('x', 'w-6 h-6');
      } else {
        drawer.classList.add('hidden');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = getIcon('menu', 'w-6 h-6');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = getIcon('menu', 'w-6 h-6');
      });
    });
  }

  const openRegisterModal = () => {
    store.openModal('register-modal');
  };

  if (navRegister) navRegister.addEventListener('click', openRegisterModal);
  if (mobileNavRegister) {
    mobileNavRegister.addEventListener('click', () => {
      drawer?.classList.add('hidden');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      if (toggleBtn) toggleBtn.innerHTML = getIcon('menu', 'w-6 h-6');
      openRegisterModal();
    });
  }
}
