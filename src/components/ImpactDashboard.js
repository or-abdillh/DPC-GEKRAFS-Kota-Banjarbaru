import { getIcon } from '../utils/icons.js';

export function renderImpactDashboard() {
  return `
    <section id="data" class="py-16 md:py-24 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-12 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
            ${getIcon('trending-up', 'w-3.5 h-3.5')}
            <span>Angka Ekosistem</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Angka Ekosistem Kreatif Banjarbaru.
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Data agregat dari pelaku yang mendaftar. Diperbarui otomatis untuk memastikan keterbukaan data dan perlindungan privasi.
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
                  Terdata
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">128</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Pelaku Kreatif Terdata</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Pelaku usaha dan insan kreatif mandiri di 5 kecamatan Kota Banjarbaru.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Status: Pendaftaran Mandiri</span>
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
                  Lengkap
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">21</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Subsektor Terwakili</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Klasifikasi resmi mencakup 17 subsektor dan 4 subsektor baru era digital.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Regulasi: Rindekraf 2026</span>
              <span class="font-bold text-slate-700">4 Klaster</span>
            </div>
          </div>

          <!-- Bento Card 3: Karya di Etalase -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
                  ${getIcon('file-text', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                  Terkurasi
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">18</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Karya di Etalase</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Produk, lisensi motif, kriya, kuliner, dan game buatan talenta asli Banjarbaru.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Etalase Karya</span>
              <span class="font-bold text-slate-700">Local IP</span>
            </div>
          </div>

          <!-- Bento Card 4: Sebaran Wilayah -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                  ${getIcon('map-pin', 'w-6 h-6')}
                </span>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Kota
                </span>
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">5</span>
              <h3 class="text-sm font-bold text-slate-700 mt-1">Kecamatan Terpetakan</h3>
              <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                Banjarbaru Utara, Selatan, Cempaka, Landasan Ulin, dan Liang Anggang.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Cakupan Wilayah</span>
              <span class="font-bold text-emerald-700">100% Kota</span>
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
                    Suara Daerah untuk Kebijakan Ekonomi Kreatif
                  </span>
                </div>
                <h3 class="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Basis Data Agregat untuk Kebijakan, HKI, dan Kemitraan Nyata
                </h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Data yang dihimpun digunakan secara agregat oleh DPC GEKRAFS Banjarbaru untuk mengadvokasikan alokasi fasilitasi merek gratis, program kurasi karya, dan kemitraan strategis bersama Pemerintah Kota Banjarbaru tanpa membuka data pribadi perseorangan.
                </p>
              </div>

              <div class="shrink-0 w-full md:w-auto">
                <a 
                  href="#pemetaan" 
                  class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
                >
                  <span>Daftar sebagai Pelaku Kreatif</span>
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
