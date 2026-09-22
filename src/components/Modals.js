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
              <span class="text-xs font-bold text-[#ffcb08] uppercase tracking-wider block">Kurasi Investasi Ekraf</span>
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
              <label class="block text-xs font-semibold text-slate-700 mb-1">Nama Calon Investor / Perwakilan Mitra *</label>
              <input 
                type="text" 
                id="investor-name" 
                required 
                placeholder="Contoh: Bpk. Hendra Wijaya" 
                class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]" 
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Nama Lembaga / Perusahaan / Pribadi *</label>
              <input 
                type="text" 
                id="investor-company" 
                required 
                placeholder="Contoh: PT Borneo Capital / Angel Investor" 
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
                <option value="Pendanaan Modal Kerja (Bagi Hasil)">Pendanaan Modal Kerja (Skema Bagi Hasil)</option>
                <option value="Penyertaan Saham / Ekuitas">Penyertaan Modal Saham / Ekuitas</option>
                <option value="Kemitraan Distribusi & Rantai Pasok">Kemitraan Distribusi & Rantai Pasok</option>
                <option value="Program CSR / Binaan BUMN">Program CSR / Mitra Binaan BUMN</option>
              </select>
            </div>

            <div class="pt-3">
              <button 
                type="submit" 
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
              >
                ${getIcon('phone', 'w-4 h-4 text-slate-900')}
                <span>Kirim Pengajuan ke Kurator DPC GEKRAFS</span>
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
        <div class="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 p-6 text-center space-y-4">
          <div class="w-12 h-12 bg-blue-50 text-[#0873a6] rounded-2xl flex items-center justify-center mx-auto">
            ${getIcon('file-text', 'w-6 h-6')}
          </div>
          <h3 class="text-xl font-bold text-slate-900">
            Pendaftaran Mandiri Pelaku Ekraf
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Formulir pemetaan resmi 21 subsektor ekraf Banjarbaru selaras UU PDP tersedia pada modul interaktif di bawah.
          </p>
          <div class="pt-2 space-y-2">
            <button 
              type="button" 
              id="btn-scroll-to-stepper"
              class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#0873a6] hover:bg-[#065b84] rounded-xl shadow-md min-h-[44px]"
            >
              <span>Buka Formulir Pemetaan 5 Tahap</span>
              ${getIcon('arrow-right', 'w-4 h-4 text-white')}
            </button>
            <button 
              type="button" 
              id="btn-close-modal" 
              class="w-full px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px]"
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
  const scrollToStepper = document.getElementById('btn-scroll-to-stepper');
  const formInvestor = document.getElementById('form-investor-interest');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      store.closeModal();
      updateModalsDom();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        store.closeModal();
        updateModalsDom();
      }
    });
  }

  if (scrollToStepper) {
    scrollToStepper.addEventListener('click', () => {
      store.closeModal();
      updateModalsDom();
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
