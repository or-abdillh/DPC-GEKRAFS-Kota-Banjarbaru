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
        
        <!-- Section Header: Tentang Kami -->
        <div class="max-w-3xl mb-12 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
            ${getIcon('building', 'w-3.5 h-3.5')}
            <span>Tentang Kami</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Bagian dari gerakan nasional, bekerja untuk Banjarbaru.
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            GEKRAFS Banjarbaru adalah Dewan Pimpinan Cabang Gerakan Ekonomi Kreatif Nasional di Kota Banjarbaru. Kami fokus pada satu hal: membantu karya kreatif lokal tumbuh menjadi kekayaan intelektual yang bernilai dan berkelanjutan sebagai usaha.
          </p>
        </div>

        <!-- Konektivitas Nasional: 3-Tier Hierarchy & 3 Manfaat Nyata -->
        <div class="mb-14 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2.5 h-2.5 rounded-full bg-[#0873a6]"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-[#0873a6]">Konektivitas Tiga Tingkat</span>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <!-- Tier Diagram -->
            <div class="lg:col-span-5 space-y-2">
              <div class="p-3.5 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
                <span class="text-xs font-bold text-slate-900">DPP GEKRAFS</span>
                <span class="text-[11px] text-slate-500 font-medium">Tingkat Nasional</span>
              </div>
              <div class="text-center text-slate-400 text-xs leading-none">↓</div>
              <div class="p-3.5 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
                <span class="text-xs font-bold text-slate-900">DPD GEKRAFS Kalsel</span>
                <span class="text-[11px] text-slate-500 font-medium">Tingkat Provinsi</span>
              </div>
              <div class="text-center text-slate-400 text-xs leading-none">↓</div>
              <div class="p-3.5 bg-[#0873a6] text-white rounded-2xl border border-[#0873a6] flex items-center justify-between shadow-md">
                <span class="text-xs font-bold text-white">DPC GEKRAFS Banjarbaru</span>
                <span class="text-[11px] text-blue-100 font-semibold">Tingkat Kota / Lapangan</span>
              </div>
            </div>

            <!-- 3 Concrete Benefits -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5 shadow-xs">
                <div class="w-7 h-7 rounded-xl bg-blue-50 text-[#0873a6] flex items-center justify-center">
                  ${getIcon('globe', 'w-4 h-4')}
                </div>
                <h4 class="text-xs font-bold text-slate-900">Jaringan</h4>
                <p class="text-[11px] text-slate-500 leading-relaxed">Akses ke pelaku dan program GEKRAFS di berbagai daerah Indonesia.</p>
              </div>
              
              <div class="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5 shadow-xs">
                <div class="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  ${getIcon('external-link', 'w-4 h-4')}
                </div>
                <h4 class="text-xs font-bold text-slate-900">Etalase Nasional</h4>
                <p class="text-[11px] text-slate-500 leading-relaxed">Karya terpilih dapat tampil di direktori gekrafs.com.</p>
              </div>
              
              <div class="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-1.5 shadow-xs">
                <div class="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  ${getIcon('trending-up', 'w-4 h-4')}
                </div>
                <h4 class="text-xs font-bold text-slate-900">Suara Daerah</h4>
                <p class="text-[11px] text-slate-500 leading-relaxed">Data Banjarbaru ikut menjadi masukan kebijakan ekonomi kreatif.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Empat Kerja Inti: Dari karya menjadi aset, dalam empat langkah -->
        <div class="mb-14">
          <div class="max-w-2xl mb-6">
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Dari karya menjadi aset, dalam empat langkah.
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Empat kerja terstruktur yang dijalankan secara konsisten oleh pengurus DPC GEKRAFS Banjarbaru.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span class="text-xs font-extrabold text-[#0873a6] bg-blue-50 px-2 py-0.5 rounded-md">01</span>
              <h4 class="text-base font-bold text-slate-900">Petakan</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Kami mencatat siapa berkarya apa, agar potensi kota ini terlihat jelas.</p>
            </div>
            
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span class="text-xs font-extrabold text-[#0873a6] bg-blue-50 px-2 py-0.5 rounded-md">02</span>
              <h4 class="text-base font-bold text-slate-900">Lindungi</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Karya yang tercatat dan berlegalitas lebih siap dikembangkan dan dipercaya.</p>
            </div>
            
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span class="text-xs font-extrabold text-[#0873a6] bg-blue-50 px-2 py-0.5 rounded-md">03</span>
              <h4 class="text-base font-bold text-slate-900">Pertemukan</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Kami menghubungkan karya dengan pembeli, kolaborator, dan jaringan nasional.</p>
            </div>
            
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span class="text-xs font-extrabold text-[#0873a6] bg-blue-50 px-2 py-0.5 rounded-md">04</span>
              <h4 class="text-base font-bold text-slate-900">Tumbuhkan</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Karya yang siap berkembang kami pertemukan dengan mitra dan modal.</p>
            </div>
          </div>
        </div>

        <!-- Klausul Kejujuran: Yang Bukan Kami (Trust Builder) -->
        <div class="mb-14 p-6 bg-amber-50/90 rounded-3xl border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="text-xs font-bold text-amber-800 uppercase tracking-wider">Komitmen Kejujuran</span>
            <h4 class="text-base font-bold text-slate-900">Yang Bukan Kami</h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Kami bukan lembaga pelatihan dan bukan penyalur bantuan. Kami menyiapkan jalur agar karya bisa berkembang sebagai usaha.
            </p>
          </div>
          <a href="#pemetaan" class="shrink-0 px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#ffcb08] hover:bg-[#e5b600] rounded-xl shadow-xs transition-colors min-h-[44px] flex items-center justify-center">
            Gabung Sekarang
          </a>
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
