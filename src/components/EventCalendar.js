import { eventsData } from '../data/events.js';
import { getIcon } from '../utils/icons.js';
import { store } from '../utils/store.js';

export function renderEventCalendar() {
  const state = store.getState();
  const activeTab = state.activeEventTab;

  return `
    <section id="event" class="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header & Switcher -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
              ${getIcon('calendar', 'w-3.5 h-3.5')}
              <span>Kalender Kreatif Kota (EPIC 3)</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Agenda Program & Festival Ekraf Banjarbaru
            </h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Jadwal festival kota, workshop sertifikasi kelembagaan, pameran kriya, dan dokumentasi pencapaian kegiatan kreatif yang telah terlaksana.
            </p>
          </div>

          <!-- Tab Switcher (FR-3.1 vs FR-3.2) -->
          <div class="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80 self-start md:self-auto">
            <button 
              type="button" 
              data-event-tab="upcoming"
              class="event-tab-btn px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 min-h-[44px] flex items-center ${
                activeTab === 'upcoming' 
                  ? 'bg-[#0873a6] text-white shadow-sm' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }"
            >
              Agenda Mendatang (Pra-Acara)
            </button>
            <button 
              type="button" 
              data-event-tab="past"
              class="event-tab-btn px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 min-h-[44px] flex items-center ${
                activeTab === 'past' 
                  ? 'bg-[#0873a6] text-white shadow-sm' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }"
            >
              Rekap & Dokumentasi (Pasca-Acara)
            </button>
          </div>
        </div>

        <!-- Dynamic Event Content Area -->
        <div id="event-list-container">
          ${activeTab === 'upcoming' ? renderUpcomingEvents() : renderPastEvents()}
        </div>

      </div>
    </section>
  `;
}

function renderUpcomingEvents() {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${eventsData.upcoming.map(evt => `
        <article class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
          <div class="relative h-48 w-full overflow-hidden">
            <img 
              src="${evt.image}" 
              alt="${evt.title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div class="absolute top-3 right-3">
              <span class="px-3 py-1 text-xs font-bold bg-[#ffcb08] text-slate-950 rounded-full shadow-sm">
                ${evt.status}
              </span>
            </div>
            <div class="absolute bottom-3 left-4 right-4">
              <span class="text-xs font-semibold text-[#1495c9] bg-slate-900/80 px-2.5 py-0.5 rounded-md">
                ${evt.subsector}
              </span>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#0873a6] transition-colors leading-snug">
                ${evt.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                ${evt.summary}
              </p>
            </div>

            <div class="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                ${getIcon('calendar', 'w-4 h-4 text-[#0873a6]')}
                <span class="font-semibold text-slate-800">${evt.date} • ${evt.time}</span>
              </div>
              <div class="flex items-center gap-2">
                ${getIcon('map-pin', 'w-4 h-4 text-[#0873a6]')}
                <span>${evt.location}</span>
              </div>
              <div class="flex items-center gap-2">
                ${getIcon('users', 'w-4 h-4 text-[#0873a6]')}
                <span class="text-slate-500">${evt.organizer}</span>
              </div>
            </div>

            <div class="pt-2 flex items-center justify-between gap-3">
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                ${evt.ticketInfo}
              </span>
              <button 
                type="button" 
                onclick="window.open('https://wa.me/628115002121?text=Halo%20Admin%20GEKRAFS%20Banjarbaru,%20saya%20ingin%20mendaftar%20untuk%20event:%20${encodeURIComponent(evt.title)}', '_blank')"
                class="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#0873a6] hover:bg-[#065b84] rounded-xl shadow-sm transition-colors min-h-[44px]"
              >
                <span>Daftar / Info Tiket</span>
                ${getIcon('arrow-right', 'w-3.5 h-3.5')}
              </button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderPastEvents() {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${eventsData.past.map(evt => `
        <article class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold text-[#0873a6] bg-blue-50 px-3 py-1 rounded-full">
                ${evt.subsector}
              </span>
              <span class="text-xs text-slate-500 font-medium">
                Dilaksanakan: ${evt.date}
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 tracking-tight">
              ${evt.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${evt.summary}
            </p>
          </div>

          <!-- Impact Metrics Strip -->
          <div class="grid grid-cols-3 gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <div>
              <span class="block text-xs text-slate-500">Partisipasi</span>
              <span class="text-xs sm:text-sm font-bold text-slate-900">${evt.participants}</span>
            </div>
            <div>
              <span class="block text-xs text-slate-500">Hasil Kemitraan</span>
              <span class="text-xs sm:text-sm font-bold text-emerald-700">${evt.dealsMade}</span>
            </div>
            <div>
              <span class="block text-xs text-slate-500">Media Cover</span>
              <span class="text-xs sm:text-sm font-bold text-slate-900">${evt.pressCoverage}</span>
            </div>
          </div>

          <!-- Photo Gallery Strip -->
          <div class="grid grid-cols-2 gap-3 pt-2">
            ${evt.gallery.map(img => `
              <div class="h-36 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <img src="${img}" alt="Dokumentasi ${evt.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

export function initEventCalendarEvents() {
  const container = document.getElementById('event');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.event-tab-btn');
    if (tabBtn) {
      const tab = tabBtn.dataset.eventTab;
      store.setActiveEventTab(tab);
      const wrapper = document.getElementById('event');
      if (wrapper) {
        wrapper.outerHTML = renderEventCalendar();
        initEventCalendarEvents();
      }
    }
  });
}
