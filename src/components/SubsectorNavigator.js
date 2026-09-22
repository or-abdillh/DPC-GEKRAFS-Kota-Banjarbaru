import { subsectorClusters, subsectorsData } from '../data/subsectors.js';
import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderSubsectorNavigator() {
  const state = store.getState();
  const currentCluster = state.activeCluster;
  const currentSubsectorId = state.selectedSubsectorId;

  const filteredSubsectors = currentCluster === 'all'
    ? subsectorsData
    : subsectorsData.filter(s => s.cluster === currentCluster);

  const selectedSubsector = subsectorsData.find(s => s.id === currentSubsectorId) || filteredSubsectors[0] || subsectorsData[0];

  return `
    <div id="subsector-navigator-container" class="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <!-- Navigator Header -->
      <div class="px-6 py-5 bg-gradient-to-r from-slate-900 to-[#0f172a] text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#ffcb08] animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-[#ffcb08]">21 Subsektor Ekonomi Kreatif</span>
          </div>
          <h3 class="text-lg sm:text-2xl font-extrabold tracking-tight text-white mt-1">Apa pun karyamu, ada tempatnya di sini.</h3>
          <p class="text-xs text-slate-300 mt-0.5 font-normal">Mengacu pada Rencana Induk Ekonomi Kreatif (Rindekraf) 2026–2045, dikelompokkan dalam empat klaster.</p>
        </div>
        <div class="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
          ${getIcon('shield-check', 'w-4 h-4 text-[#ffcb08]')}
          <span>Rindekraf Perpres No. 37/2026</span>
        </div>
      </div>

      <!-- Cluster Filter Tabs -->
      <div class="px-6 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
        ${subsectorClusters.map(c => `
          <button 
            type="button" 
            data-cluster-id="${c.id}" 
            class="cluster-tab-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 min-h-[44px] flex items-center ${
              currentCluster === c.id 
                ? 'bg-[#0873a6] text-white shadow-sm ring-2 ring-[#0873a6]/30' 
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70'
            }"
          >
            ${c.name}
          </button>
        `).join('')}
      </div>

      <!-- Main Interactive Split Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        <!-- Left: Subsectors Scrollable List -->
        <div class="lg:col-span-7 p-4 sm:p-6 max-h-[440px] overflow-y-auto no-scrollbar space-y-2.5">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Pilih Subsektor untuk Membaca Potensi Riil (${filteredSubsectors.length} Subsektor)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${filteredSubsectors.map(item => `
              <button 
                type="button" 
                data-subsector-id="${item.id}"
                class="subsector-item-btn w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group min-h-[44px] ${
                  item.id === selectedSubsector.id
                    ? 'border-[#0873a6] bg-[#0873a6]/5 ring-2 ring-[#0873a6]/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                }"
              >
                <div class="flex items-center justify-between w-full mb-2">
                  <span class="text-xs font-bold text-[#0873a6] bg-blue-50 px-2.5 py-1 rounded-lg">
                    ${item.count} Pelaku Terdata
                  </span>
                  <span class="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    ${item.tag}
                  </span>
                </div>
                <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#0873a6] transition-colors leading-snug">
                  ${item.name}
                </h4>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Right: Focused Subsector Detail Card -->
        <div class="lg:col-span-5 p-5 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
          <div>
            <div class="relative w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm border border-slate-200/80 group">
              <img 
                src="${selectedSubsector.image}" 
                alt="${selectedSubsector.name}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-2.5 py-1 text-xs font-bold text-slate-900 bg-[#ffcb08] rounded-full shadow-sm">
                  ${selectedSubsector.readiness}
                </span>
                <span class="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  Fokus Banjarbaru
                </span>
              </div>
            </div>

            <div class="space-y-2.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider text-[#0873a6]">Representasi Wilayah</span>
                <span class="text-xs text-slate-400">•</span>
                <span class="text-xs font-semibold text-slate-700">${selectedSubsector.localHero}</span>
              </div>
              <h4 class="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                ${selectedSubsector.name}
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${selectedSubsector.description}
              </p>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-5 mt-4 border-t border-slate-200/80 space-y-2">
            <button 
              type="button" 
              data-action="register-for-subsector" 
              data-subsector="${selectedSubsector.id}"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-[#0873a6] hover:bg-[#065b84] rounded-xl shadow-sm transition-all min-h-[44px]"
            >
              ${getIcon('file-text', 'w-4 h-4 text-white')}
              <span>Daftarkan Karya di Subsektor Ini</span>
            </button>
            <a 
              href="#investasi" 
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors min-h-[44px]"
            >
              <span>Eksplorasi Proyek Investasi Terkait</span>
              ${getIcon('arrow-up-right', 'w-4 h-4 text-slate-500')}
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initSubsectorNavigatorEvents() {
  const container = document.getElementById('subsector-navigator-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const clusterBtn = e.target.closest('.cluster-tab-btn');
    if (clusterBtn) {
      const clusterId = clusterBtn.dataset.clusterId;
      store.setActiveCluster(clusterId);
      refreshSubsectorNavigator();
      return;
    }

    const subsectorBtn = e.target.closest('.subsector-item-btn');
    if (subsectorBtn) {
      const subsectorId = subsectorBtn.dataset.subsectorId;
      store.setSelectedSubsector(subsectorId);
      refreshSubsectorNavigator();
      return;
    }

    const registerBtn = e.target.closest('[data-action="register-for-subsector"]');
    if (registerBtn) {
      const subsector = registerBtn.dataset.subsector;
      store.updateStepper(1, { subsector });
      store.openModal('register-modal');
      return;
    }
  });
}

function refreshSubsectorNavigator() {
  const wrapper = document.getElementById('subsector-navigator-wrapper');
  if (wrapper) {
    wrapper.innerHTML = renderSubsectorNavigator();
    initSubsectorNavigatorEvents();
  }
}
