import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderModals() {
  const state = store.getState();
  const activeModal = state.activeModal;
  const project = state.selectedProjectForInvestment;

  if (!activeModal) return '';

  if (activeModal === 'investor-modal' && project) {
    return `
      <div id="modal-backdrop" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
        <div class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
          
          <!-- Modal Header -->
          <div class="px-6 py-5 bg-gradient-to-r from-slate-900 to-[#0873a6] text-white flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-[#ffcb08] uppercase tracking-wider block">Program Siap Tumbuh · Kurasi Kemitraan</span>
              <h3 class="text-lg font-bold text-white leading-tight">Pengajuan Minat Kemitraan</h3>
            </div>
            <button 
              type="button" 
              id="btn-close-modal" 
              class="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Tutup modal"
            >
              ${getIcon('x', 'w-5 h-5')}
            </button>
          </div>

          <!-- Project Brief Box -->
          <div class="p-6 bg-slate-50 border-b border-slate-200 text-xs text-slate-600 space-y-2">
            <div class="flex items-center justify-between font-bold text-slate-900 text-sm">
              <span>${project.title}</span>
              <span class="text-[#0873a6]">${project.targetFunding}</span>
            </div>
            <p class="line-clamp-2">${project.summary}</p>
            <div class="flex items-center gap-2 text-slate-500 pt-1">
              <span>Pengelola: ${project.contactPerson}</span>
              <span>•</span>
              <span>${project.location}</span>
            </div>
          </div>

          <!-- Form Body -->
          <form id="form-investor-interest" class="p-6 space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Nama Calon Mitra / Investor *</label>
              <input 
                type="text" 
                id="investor-name" 
                required 
                placeholder="Nama lengkap perwakilan" 
                class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]" 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Nama Lembaga / Perusahaan / Pribadi *</label>
              <input 
                type="text" 
                id="investor-company" 
                required 
                placeholder="Contoh: Studio Mandiri / Angel Investor" 
                class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]" 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp Aktif *</label>
              <input 
                type="tel" 
                id="investor-wa" 
                required 
                placeholder="Contoh: 08123456789" 
                class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]" 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Bentuk Minat Kemitraan</label>
              <select id="investor-scheme" class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] min-h-[44px]">
                <option value="Pendanaan Modal Kerja (Bagi Hasil)">Pendanaan Modal Kerja (Bagi Hasil)</option>
                <option value="Penyertaan Modal Saham / Ekuitas">Penyertaan Modal Saham / Ekuitas</option>
                <option value="Kemitraan Distribusi & Rantai Pasok">Kemitraan Distribusi & Rantai Pasok</option>
                <option value="Kolaborasi Ruang & Fasilitas">Kolaborasi Ruang & Fasilitas</option>
              </select>
            </div>

            <!-- Disclaimer Notice -->
            <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-slate-600 leading-relaxed">
              <strong class="text-amber-800">Catatan Penting:</strong> GEKRAFS Banjarbaru memfasilitasi pertemuan dan kurasi awal. GEKRAFS bukan pihak dalam kesepakatan investasi atau perjanjian bisnis.
            </div>

            <div class="pt-2">
              <button 
                type="submit" 
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
              >
                ${getIcon('phone', 'w-4 h-4 text-slate-900')}
                <span>Kirim Minat Kemitraan</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    `;
  }

  if (activeModal === 'register-modal') {
    return `
      <div id="modal-backdrop" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
        <div class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 p-6 space-y-5">
          
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span class="text-xs font-bold text-[#0873a6] uppercase tracking-wider block">Pilih Peran</span>
              <h3 class="text-xl font-extrabold text-slate-900">Masuk sebagai siapa?</h3>
            </div>
            <button 
              type="button" 
              id="btn-close-modal" 
              class="p-2 text-slate-400 hover:text-slate-700 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Tutup modal"
            >
              ${getIcon('x', 'w-5 h-5')}
            </button>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ekosistem kreatif Banjarbaru bergerak karena karya yang dibuat, publik yang mengapresiasi, dan mitra yang membuka jalan.
          </p>

          <div class="space-y-3">
            <!-- Option 1: Pelaku Kreatif -->
            <button 
              type="button" 
              id="btn-modal-role-pelaku"
              class="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-[#0873a6] hover:bg-sky-50/50 transition-all flex items-start gap-3.5 group min-h-[44px]"
            >
              <div class="p-2.5 rounded-xl bg-blue-50 text-[#0873a6] group-hover:bg-[#0873a6] group-hover:text-white transition-colors shrink-0">
                ${getIcon('user-check', 'w-5 h-5')}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-slate-900 group-hover:text-[#0873a6]">Pelaku Kreatif</span>
                  <span class="text-xs font-semibold text-[#0873a6]">Form Pemetaan →</span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Punya karya, studio, atau usaha di salah satu dari 21 subsektor Banjarbaru.</p>
              </div>
            </button>

            <!-- Option 2: Kawan Kreatif -->
            <a 
              href="https://wa.me/628115002121?text=Halo%20Sekretariat%20DPC%20GEKRAFS%20Banjarbaru,%20saya%20ingin%20bergabung%20sebagai%20Kawan%20Kreatif%20(komunitas/relawan)"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-start gap-3.5 group min-h-[44px]"
            >
              <div class="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                ${getIcon('heart', 'w-5 h-5')}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-slate-900 group-hover:text-emerald-700">Kawan Kreatif</span>
                  <span class="text-xs font-semibold text-emerald-600">Grup WhatsApp →</span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Pengapresiasi, penikmat karya lokal, atau relawan kegiatan kreatif kota.</p>
              </div>
            </a>

            <!-- Option 3: Mitra Ekosistem -->
            <a 
              href="https://wa.me/628115002121?text=Halo%20Sekretariat%20DPC%20GEKRAFS%20Banjarbaru,%20saya%20ingin%20menjajaki%20kerja%20sama%20sebagai%20Mitra%20Ekosistem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-[#ffcb08] hover:bg-amber-50/50 transition-all flex items-start gap-3.5 group min-h-[44px]"
            >
              <div class="p-2.5 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-[#ffcb08] group-hover:text-slate-950 transition-colors shrink-0">
                ${getIcon('briefcase', 'w-5 h-5')}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-slate-900 group-hover:text-amber-800">Mitra Ekosistem</span>
                  <span class="text-xs font-semibold text-amber-700">Hubungi Kami →</span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Pemodal, pemilik ruang publik, instansi pemerintah, atau media peliput.</p>
              </div>
            </a>
          </div>

          <div class="pt-2">
            <button 
              type="button" 
              id="btn-close-modal-footer" 
              class="w-full px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 min-h-[44px]"
            >
              Tutup Jendela
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

export function initModalsEvents() {
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('btn-close-modal');
  const closeFooterBtn = document.getElementById('btn-close-modal-footer');
  const btnRolePelaku = document.getElementById('btn-modal-role-pelaku');
  const scrollToStepper = document.getElementById('btn-scroll-to-stepper');
  const formInvestor = document.getElementById('form-investor-interest');

  const closeModal = () => {
    store.closeModal();
    updateModalsDom();
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (btnRolePelaku) {
    btnRolePelaku.addEventListener('click', () => {
      closeModal();
      const el = document.getElementById('pemetaan');
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (scrollToStepper) {
    scrollToStepper.addEventListener('click', () => {
      closeModal();
      const el = document.getElementById('pemetaan');
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (formInvestor) {
    formInvestor.addEventListener('submit', (e) => {
      e.preventDefault();
      const state = store.getState();
      const proj = state.selectedProjectForInvestment;
      const name = document.getElementById('investor-name')?.value || '';
      const comp = document.getElementById('investor-company')?.value || '';
      const wa = document.getElementById('investor-wa')?.value || '';
      const scheme = document.getElementById('investor-scheme')?.value || '';

      const waMsg = `Halo Tim Kurator DPC GEKRAFS Kota Banjarbaru, saya ${name} (${comp}, No WA: ${wa}) mengajukan minat kemitraan untuk proyek: ${proj?.title} (${proj?.businessName}) dengan skema: ${scheme}.`;
      const waUrl = `https://wa.me/628115002121?text=${encodeURIComponent(waMsg)}`;
      
      store.closeModal();
      updateModalsDom();
      window.open(waUrl, '_blank');
    });
  }
}

export function updateModalsDom() {
  const root = document.getElementById('modal-root');
  if (root) {
    root.innerHTML = renderModals();
    initModalsEvents();
  }
}
