import { organizationData } from '../data/organization.js';
import { getIcon } from '../utils/icons.js';

export function renderOrganizationProfile() {
  const activities = [
    {
      title: 'Sidang Pleno & Rakorcab DPC',
      badge: 'Rapat Berkala',
      date: 'Sekretariat Creative Hub',
      desc: 'Konsolidasi berkala pengurus harian dan komite subsektor untuk mengevaluasi program kerja serta keanggotaan pelaku ekraf se-Kota Banjarbaru.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Audiensi Kebijakan Bersama Pemko',
      badge: 'Advokasi Resmi',
      date: 'Balai Kota Banjarbaru',
      desc: 'Penyampaian rekomendasi kebijakan berbasis data agregat ekonomi kreatif kepada Walikota dan Disporabudpar Kota Banjarbaru.',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'FGD Kolaborasi 21 Subsektor',
      badge: 'Forum Komite',
      date: 'Aula Sentra Kriya Banjarbaru',
      desc: 'Pertemuan tematik perajin purun, desainer sasirangan, barista kopi, musisi, dan teknolog muda merumuskan kolaborasi karya terpadu.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Klinik Inkubasi & Mentorship UMKM',
      badge: 'Pendampingan Lapangan',
      date: 'Co-Working Space Murjani',
      desc: 'Bimbingan teknis legalitas NIB, pendaftaran hak cipta motif HKI, kurasi proposal pendanaan, dan strategi branding digital.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return `
    <section id="organisasi" class="py-16 md:py-24 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-12 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
            ${getIcon('building', 'w-3.5 h-3.5')}
            <span>Profil Kelembagaan Resmi (EPIC 5)</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Dewan Pimpinan Cabang GEKRAFS Kota Banjarbaru
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Wadah pergerakan resmi bagi talenta kreatif, perumus kebijakan, dan investor untuk membangun ekosistem ekonomi kreatif yang berdaya saing di Ibukota Kalimantan Selatan.
          </p>
        </div>

        <!-- Vision, Mission & Legal Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <!-- Vision Card with Real Assembly Backdrop -->
          <div class="relative lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between group min-h-[380px]">
            <!-- Assembly Photo Background -->
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" 
              alt="Suasana Konferensi dan Sidang Anggota DPC GEKRAFS Banjarbaru" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <!-- Deep Scrim (WCAG Contrast 18:1) -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/80"></div>

            <div class="relative z-10 p-6 sm:p-8 space-y-4 text-white">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ffcb08]"></span>
                <span class="text-xs font-bold uppercase tracking-wider text-[#ffcb08]">Visi Organisasi</span>
              </div>
              <blockquote class="text-lg sm:text-xl font-bold tracking-tight text-slate-100 leading-relaxed">
                "${organizationData.vision}"
              </blockquote>
            </div>

            <div class="relative z-10 p-6 sm:p-8 pt-0 border-t border-slate-800/80 space-y-2">
              <span class="text-xs text-slate-400 block font-medium">Dasar Legalitas & Surat Keputusan:</span>
              <div class="text-xs font-semibold text-[#1495c9] bg-slate-900/90 p-3 rounded-xl border border-slate-700/80">
                ${organizationData.legalReference}
              </div>
              <p class="text-[11px] text-slate-400 leading-normal pt-1">
                Berkoordinasi aktif dengan Disporabudpar dan Pemerintah Kota Banjarbaru.
              </p>
            </div>
          </div>

          <!-- Missions List -->
          <div class="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                ${getIcon('check-circle', 'w-5 h-5 text-[#0873a6]')}
                <span>Misi Strategis DPC GEKRAFS Banjarbaru</span>
              </h3>
              <div class="space-y-3">
                ${organizationData.mission.map((m, idx) => `
                  <div class="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                    <span class="w-6 h-6 rounded-full bg-blue-50 text-[#0873a6] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ${idx + 1}
                    </span>
                    <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      ${m}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 flex items-center gap-3">
              ${getIcon('shield-check', 'w-6 h-6 text-amber-700 shrink-0')}
              <p class="text-xs text-amber-900 leading-relaxed font-medium">
                DPC GEKRAFS Banjarbaru memfasilitasi pendampingan legalitas gratis untuk pelaku ekraf rintisan di 5 kecamatan Banjarbaru.
              </p>
            </div>
          </div>

        </div>

        <!-- NEW SUBSECTION: Live Organizational Meeting & Activity Footage -->
        <div class="mb-16 pt-4">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0873a6]"></span>
                <span class="text-xs font-bold text-[#0873a6] uppercase tracking-wider">Dokumentasi Nyata</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Rapat Kerja, Audiensi & Aktivitas Lapangan DPC
              </h3>
            </div>
            <span class="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              Pergerakan Nyata di Kota Banjarbaru
            </span>
          </div>

          <!-- 4-Card Photo-Editorial Grid of Meetings and Field Activities -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${activities.map(act => `
              <div class="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
                
                <div class="relative h-48 w-full overflow-hidden">
                  <img 
                    src="${act.image}" 
                    alt="${act.title}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div class="absolute top-3 left-3">
                    <span class="px-2.5 py-0.5 text-[11px] font-bold bg-[#ffcb08] text-slate-950 rounded-full shadow-xs">
                      ${act.badge}
                    </span>
                  </div>

                  <div class="absolute bottom-3 left-3 right-3 text-white">
                    <span class="text-[11px] font-medium text-slate-300 flex items-center gap-1">
                      ${getIcon('map-pin', 'w-3 h-3 text-[#ffcb08]')}
                      ${act.date}
                    </span>
                  </div>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h4 class="text-sm font-bold text-slate-900 group-hover:text-[#0873a6] transition-colors leading-snug">
                    ${act.title}
                  </h4>
                  <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    ${act.desc}
                  </p>
                </div>

              </div>
            `).join('')}
          </div>
        </div>

        <!-- Leadership Roster & 21 Subsector Committees -->
        <div>
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-900 tracking-tight">
              Struktur Bidang Kerja & Komite Subsektor
            </h3>
            <p class="text-xs sm:text-sm text-slate-500">
              Tim fungsional yang memastikan roda pendampingan dan kurasi berjalan berkesinambungan.
            </p>
          </div>

          <!-- Committees Bento -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${organizationData.subsectorDivisions.map(div => `
              <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-[#0873a6]/40 transition-colors">
                <h4 class="text-sm font-bold text-slate-900">${div.name}</h4>
                <div class="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Cakupan:</span>
                  <span class="font-bold text-[#0873a6]">${div.leadCount}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
