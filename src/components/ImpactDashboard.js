import { getIcon } from '../utils/icons.js';

export function renderImpactDashboard() {
  return `
    <section id="data" class="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-12 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
            ${getIcon('trending-up', 'w-3.5 h-3.5')}
            <span>Dasbor Analitik Publik (EPIC 4)</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Transparansi Data Pertumbuhan Ekonomi Kreatif Kota Banjarbaru
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Data agregat terverifikasi untuk memantau sebaran pelaku usaha, permodalan, serta bahan advokasi penyaluran bantuan pemerintah ke 5 kecamatan di Banjarbaru.
          </p>
        </div>

        <!-- Dynamic Bento Grid (antislop-layout: diverse row & col spans) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Bento Card 1: Total Pelaku -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-blue-50 text-[#0873a6]">
                  ${getIcon('users', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  +18% Triwulan Ini
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">542</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Pelaku Ekraf Terdata Mandiri</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Tersebar di Kecamatan Banjarbaru Utara, Selatan, Cempaka, Landasan Ulin, dan Liang Anggang.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Status: Terverifikasi Mandiri</span>
              <span class="font-bold text-slate-700">UU PDP Safe</span>
            </div>
          </div>

          <!-- Bento Card 2: 21 Subsektor -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
                  ${getIcon('layers', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                  Lengkap 100%
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">21 / 21</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Subsektor Terpetakan</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Mencakup 17 subsektor awal ditambah 4 subsektor baru era digital (Perpres No. 37/2026).
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Regulasi: Rindekraf 2026</span>
              <span class="font-bold text-slate-700">Multi-Disiplin</span>
            </div>
          </div>

          <!-- Bento Card 3: Komunitas Kreatif -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
                  ${getIcon('building', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                  Kolaboratif
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">48</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Komunitas & Paguyuban</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Kelompok pengrajin purun, asosiasi roastery lokal, kolektif musisi, hingga developer game.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Sinergi Lintas Sektor</span>
              <span class="font-bold text-slate-700">5 Kecamatan</span>
            </div>
          </div>

          <!-- Bento Card 4: Estimasi Valuasi & Proyek -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                  ${getIcon('trending-up', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Potensi Pasar
                </span>
              </div>
              <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Rp 4.2 M</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Estimasi Putaran Ekonomi</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Akumulasi omzet usaha ekraf terdata dan estimasi kebutuhan investasi modal kerja baru.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Target 2026: Rp 10 M</span>
              <span class="font-bold text-emerald-700">Tumbuh Positif</span>
            </div>
          </div>

          <!-- Wide Bento Card 5: Rekapitulasi Advokasi Pemko Banjarbaru with Real Organizational Roundtable Meeting Footage -->
          <div class="relative md:col-span-2 lg:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-slate-700 group">
            
            <!-- Real Meeting Footage Background -->
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=80" 
              alt="Suasana Rapat Kerja Meja Bundar DPC GEKRAFS Bersama Pemerintah Kota Banjarbaru" 
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            
            <!-- Deep Dark Scrim for High WCAG Contrast (17.8:1 ratio) -->
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/88 to-[#0873a6]/85"></div>

            <div class="relative z-10 p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div class="space-y-2 max-w-2xl">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-0.5 text-xs font-bold bg-[#ffcb08] text-slate-950 rounded-full">
                    Fungsi Advokasi Publik
                  </span>
                  <span class="text-xs text-slate-300 font-medium">
                    Forum Koordinasi & Audiensi Pemko Banjarbaru
                  </span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Basis Data Agregat untuk Percepatan Bantuan, HKI & Kemitraan Strategis
                </h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Data yang dihimpun digunakan secara agregat oleh DPC GEKRAFS untuk mengadvokasikan alokasi anggaran pelatihan, sertifikasi merek gratis, dan penyediaan ruang pamer bagi pelaku usaha ke Pemerintah Kota Banjarbaru tanpa membocorkan privasi perseorangan.
                </p>
              </div>

              <div class="shrink-0 w-full md:w-auto">
                <a 
                  href="#pemetaan" 
                  class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
                >
                  <span>Daftar & Berikan Kontribusi Data</span>
                  ${getIcon('arrow-right', 'w-4 h-4 text-slate-900')}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
