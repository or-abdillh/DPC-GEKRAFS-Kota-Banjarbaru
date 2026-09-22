import { investmentProjects } from '../data/projects.js';
import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderInvestmentDirectory() {
  return `
    <section id="investasi" class="py-16 md:py-24 bg-[#0f172a] text-white relative overflow-hidden">
      <!-- Subtle ambient glow in dark canvas -->
      <div class="absolute bottom-0 left-1/3 w-96 h-96 ambient-glow-accent rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ffcb08]/15 text-[#ffcb08] border border-[#ffcb08]/30">
              <span class="w-2 h-2 rounded-full bg-[#ffcb08]"></span>
              <span>Direktori Proyek Terkurasi (EPIC 2)</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Katalog Proyek Kreatif "Open for Investment"
            </h2>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
              Jelajahi karya dan proposal usaha kreatif Banjarbaru yang telah lolos verifikasi kurator DPC GEKRAFS. Terbuka untuk skema bagi hasil, kemitraan rantai pasok, maupun penyertaan modal kerja.
            </p>
          </div>

          <div class="shrink-0 flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <span class="text-xs text-slate-400 block">Status Kurasi DPC</span>
              <span class="text-sm font-bold text-[#ffcb08]">100% Lolos Verifikasi</span>
            </div>
          </div>
        </div>

        <!-- Investment Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${investmentProjects.map(proj => `
            <div class="bg-[#1e293b] rounded-3xl border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-slate-500 transition-all duration-300 group shadow-lg">
              
              <!-- Card Top Image & Badges -->
              <div class="relative h-48 w-full overflow-hidden">
                <img 
                  src="${proj.image}" 
                  alt="${proj.title}" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-black/30"></div>
                
                <!-- Stage & Verification Badges -->
                <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span class="px-3 py-1 text-xs font-bold bg-slate-900/80 backdrop-blur-md text-[#ffcb08] rounded-full border border-slate-700">
                    ${proj.stage}
                  </span>
                  <span class="px-2.5 py-1 text-[11px] font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-400 rounded-full border border-emerald-700/50 flex items-center gap-1">
                    ${getIcon('check', 'w-3 h-3 text-emerald-400')}
                    <span>Kurasi Lolos</span>
                  </span>
                </div>

                <div class="absolute bottom-3 left-4">
                  <span class="text-xs font-semibold text-slate-300 uppercase tracking-wider">${proj.subsector}</span>
                </div>
              </div>

              <!-- Card Content Body -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>${proj.businessName}</span>
                    <span class="flex items-center gap-1">
                      ${getIcon('map-pin', 'w-3.5 h-3.5 text-slate-400')}
                      ${proj.location}
                    </span>
                  </div>
                  
                  <h3 class="text-lg font-bold text-white group-hover:text-[#1495c9] transition-colors leading-snug">
                    ${proj.title}
                  </h3>
                  
                  <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    ${proj.summary}
                  </p>
                </div>

                <!-- Metrics Strip -->
                <div class="bg-slate-900/70 p-3.5 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400">Target Pendanaan:</span>
                    <span class="font-extrabold text-base text-[#ffcb08]">${proj.targetFunding}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Skema Kemitraan:</span>
                    <span class="font-semibold text-white">${proj.equityOrReturn}</span>
                  </div>
                </div>

                <!-- Action Button: Ajukan Minat (FR-2.3) -->
                <button 
                  type="button" 
                  data-action="express-interest" 
                  data-project-id="${proj.id}"
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
                >
                  <span>Ajukan Minat Kemitraan / Investasi</span>
                  ${getIcon('arrow-right', 'w-4 h-4 text-slate-900')}
                </button>

              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

export function initInvestmentDirectoryEvents() {
  const container = document.getElementById('investasi');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="express-interest"]');
    if (btn) {
      const projId = btn.dataset.projectId;
      const project = investmentProjects.find(p => p.id === projId);
      if (project) {
        store.openModal('investor-modal', project);
      }
    }
  });
}
