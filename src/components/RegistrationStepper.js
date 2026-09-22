import { getIcon } from '../utils/icons.js';
import { subsectorsData } from '../data/subsectors.js';
import { store } from '../utils/store.js';

export function renderRegistrationStepper() {
  const state = store.getState();
  const currentStep = state.stepper.step;
  const formData = state.stepper.formData;

  const stepsMeta = [
    { num: 1, title: 'Identitas Karya', desc: 'Nama brand & domisili' },
    { num: 2, title: 'Subsektor & Skala', desc: 'Klasifikasi 21 sektor' },
    { num: 3, title: 'Legalitas Karya', desc: 'NIB, HKI & Merek' },
    { num: 4, title: 'Arah Karya', desc: 'Kebutuhan pengembangan' },
    { num: 5, title: 'Persetujuan Data', desc: 'Konsen UU PDP' }
  ];

  return `
    <section id="pemetaan" class="py-16 md:py-24 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header: Pilih Peranmu -->
        <div class="max-w-3xl mb-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0873a6]/10 text-[#0873a6]">
            ${getIcon('users', 'w-3.5 h-3.5')}
            <span>Pilih Peranmu</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Masuk sebagai siapa?
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Setiap orang punya perannya dalam ekosistem kreatif Banjarbaru.
          </p>
        </div>

        <!-- 3 Role Cards (Pelaku Kreatif, Kawan Kreatif, Mitra Ekosistem) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <!-- Card 1: Pelaku Kreatif -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#0873a6] transition-all group">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-blue-100 text-[#0873a6] flex items-center justify-center mb-4">
                ${getIcon('file-text', 'w-5 h-5')}
              </div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#0873a6] transition-colors">Pelaku Kreatif</h3>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Kamu berkarya atau menjalankan usaha kreatif di Banjarbaru.
              </p>
              <ul class="mt-4 space-y-2 text-xs text-slate-500">
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-[#0873a6]')} Profil & etalase karya</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-[#0873a6]')} Masuk peta ekonomi kreatif kota</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-[#0873a6]')} Peluang masuk Siap Tumbuh</li>
              </ul>
            </div>
            <div class="pt-6">
              <a href="#stepper-card" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#0873a6] hover:bg-[#065b84] rounded-xl shadow-xs transition-colors min-h-[44px]">
                <span>Daftar sebagai Pelaku</span>
                ${getIcon('arrow-right', 'w-3.5 h-3.5')}
              </a>
            </div>
          </div>

          <!-- Card 2: Kawan Kreatif -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-500 transition-all group">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                ${getIcon('heart', 'w-5 h-5')}
              </div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Kawan Kreatif</h3>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Kamu menikmati, mengikuti, dan ingin mendukung karya lokal.
              </p>
              <ul class="mt-4 space-y-2 text-xs text-slate-500">
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-amber-600')} Simpan karya favorit</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-amber-600')} Ikuti pelaku kreatif Banjarbaru</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-amber-600')} Kabar dan agenda lebih dulu</li>
              </ul>
            </div>
            <div class="pt-6">
              <a href="#event" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-900 bg-[#ffcb08] hover:bg-[#e5b600] rounded-xl shadow-xs transition-colors min-h-[44px]">
                <span>Daftar sebagai Kawan</span>
                ${getIcon('arrow-right', 'w-3.5 h-3.5')}
              </a>
            </div>
          </div>

          <!-- Card 3: Mitra Ekosistem -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-800 transition-all group">
            <div>
              <div class="w-10 h-10 rounded-2xl bg-slate-200 text-slate-800 flex items-center justify-center mb-4">
                ${getIcon('building', 'w-5 h-5')}
              </div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors">Mitra Ekosistem</h3>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Kamu mewakili lembaga, perusahaan, kampus, atau investor.
              </p>
              <ul class="mt-4 space-y-2 text-xs text-slate-500">
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-slate-700')} Akses karya Siap Tumbuh</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-slate-700')} Jadwalkan pertemuan bisnis</li>
                <li class="flex items-center gap-2">${getIcon('check', 'w-3.5 h-3.5 text-slate-700')} Kolaborasi program kemitraan</li>
              </ul>
            </div>
            <div class="pt-6">
              <a href="#investasi" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl shadow-xs transition-colors min-h-[44px]">
                <span>Ajukan Kemitraan</span>
                ${getIcon('arrow-right', 'w-3.5 h-3.5')}
              </a>
            </div>
          </div>

        </div>

        <!-- Stepper Header: Formulir Pemetaan Pelaku Kreatif -->
        <div class="max-w-3xl mb-8 space-y-2">
          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Formulir Pemetaan Pelaku Kreatif (5 Bagian)
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Data Anda dikelola secara mandiri selaras UU Perlindungan Data Pribadi No. 27/2022. Hanya data terkurasi dan agregat anonim yang dipublikasikan.
          </p>
        </div>

        <!-- Stepper Container -->
        <div id="stepper-card" class="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm max-w-4xl mx-auto">
          
          <!-- Stepper Progress Header -->
          <div class="mb-8">
            <div class="grid grid-cols-5 gap-2 sm:gap-4 mb-4">
              ${stepsMeta.map(s => `
                <button 
                  type="button" 
                  data-target-step="${s.num}"
                  class="stepper-step-indicator flex flex-col items-center sm:items-start text-center sm:text-left transition-all group min-h-[44px]"
                >
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    s.num < currentStep
                      ? 'bg-emerald-600 text-white'
                      : s.num === currentStep
                      ? 'bg-[#0873a6] text-white ring-4 ring-blue-100'
                      : 'bg-slate-200 text-slate-600'
                  }">
                    ${s.num < currentStep ? getIcon('check', 'w-4 h-4') : s.num}
                  </div>
                  <span class="text-[11px] sm:text-xs font-bold mt-1.5 line-clamp-1 ${
                    s.num === currentStep ? 'text-[#0873a6]' : 'text-slate-600'
                  }">
                    ${s.title}
                  </span>
                  <span class="hidden md:block text-[10px] text-slate-500 font-normal">
                    ${s.desc}
                  </span>
                </button>
              `).join('')}
            </div>
            
            <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div class="bg-[#0873a6] h-full transition-all duration-300" style="width: ${(currentStep / 5) * 100}%"></div>
            </div>
          </div>

          <!-- Dynamic Step Body -->
          <div id="stepper-step-content" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            ${renderStepBody(currentStep, formData)}
          </div>

          <!-- Stepper Navigation Footer -->
          <div class="mt-6 flex items-center justify-between gap-4">
            <button 
              type="button" 
              id="btn-stepper-prev" 
              class="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors min-h-[44px] ${
                currentStep === 1 ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
              }"
            >
              Kembali
            </button>

            <span class="text-xs font-semibold text-slate-500">
              Tahap ${currentStep} dari 5
            </span>

            <button 
              type="button" 
              id="btn-stepper-next" 
              class="px-6 py-2.5 text-sm font-bold text-white bg-[#0873a6] hover:bg-[#065b84] active:scale-[0.98] rounded-xl shadow-sm transition-all min-h-[44px] flex items-center gap-2"
            >
              <span>${currentStep === 5 ? 'Selesaikan Pendaftaran' : 'Lanjut Tahap Berikutnya'}</span>
              ${getIcon('arrow-right', 'w-4 h-4 text-white')}
            </button>
          </div>

        </div>

      </div>
    </section>
  `;
}

function renderStepBody(step, formData) {
  if (step === 1) {
    return `
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <span>Tahap 1: Identitas Karya & Pelaku Usaha</span>
        </h3>
        <p class="text-xs sm:text-sm text-slate-500">
          Masukkan identitas resmi usaha atau nama panggung Anda yang beroperasi di Kota Banjarbaru.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1.5">Nama Lengkap Pengelola *</label>
            <input 
              type="text" 
              id="input-full-name" 
              value="${formData.fullName || ''}" 
              placeholder="Contoh: Ahmad Rizky" 
              class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1.5">Nama Brand / Karya / Usaha *</label>
            <input 
              type="text" 
              id="input-business-name" 
              value="${formData.businessName || ''}" 
              placeholder="Contoh: Purun Lestari Banjarbaru" 
              class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all min-h-[44px]"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Kecamatan Domisili di Banjarbaru *</label>
          <select id="input-district" class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] min-h-[44px]">
            <option value="Banjarbaru Utara">Banjarbaru Utara</option>
            <option value="Banjarbaru Selatan">Banjarbaru Selatan</option>
            <option value="Cempaka">Cempaka (Sentra Purun & Pendulangan)</option>
            <option value="Landasan Ulin">Landasan Ulin</option>
            <option value="Liang Anggang">Liang Anggang</option>
          </select>
        </div>
      </div>
    `;
  }

  if (step === 2) {
    return `
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-900">
          Tahap 2: Klasifikasi Subsektor & Skala Usaha
        </h3>
        <p class="text-xs sm:text-sm text-slate-500">
          Pilih salah satu dari 21 subsektor ekraf resmi dan estimasi skala omzet usaha saat ini.
        </p>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Pilihan Subsektor Ekraf *</label>
          <select id="input-subsector" class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] min-h-[44px]">
            ${subsectorsData.map(s => `
              <option value="${s.id}" ${formData.subsector === s.id ? 'selected' : ''}>
                ${s.name} (${s.cluster})
              </option>
            `).join('')}
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Skala Usaha Berdasarkan Omzet *</label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            ${['Usaha Mikro (Omzet < Rp 300 Jt/Thn)', 'Usaha Kecil (Rp 300 Jt - Rp 2.5 M/Thn)', 'Usaha Menengah (Rp 2.5 M - Rp 50 M/Thn)'].map(scale => `
              <label class="p-3 border rounded-xl flex items-center gap-2.5 text-xs font-medium cursor-pointer transition-colors ${
                formData.scale === scale ? 'border-[#0873a6] bg-blue-50/50 text-[#0873a6] font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }">
                <input type="radio" name="scale-radio" value="${scale}" ${formData.scale === scale ? 'checked' : ''} class="text-[#0873a6]" />
                <span>${scale}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (step === 3) {
    return `
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-900">
          Tahap 3: Legalitas & Sertifikasi Usaha
        </h3>
        <p class="text-xs sm:text-sm text-slate-500">
          Pilih status legalitas yang sudah dimiliki. Jika belum ada, GEKRAFS akan memfasilitasi pendampingan resmi.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          ${[
            { id: 'NIB', label: 'NIB (Nomor Induk Berusaha OSS)' },
            { id: 'HKI', label: 'Sertifikat Hak Cipta / Merek HKI' },
            { id: 'HALAL', label: 'Sertifikasi Halal Resmi' },
            { id: 'PIRT_BPOM', label: 'P-IRT / Izin Edar BPOM' },
            { id: 'BADAN_HUKUM', label: 'PT / CV / Koperasi / Yayasan' },
            { id: 'BELUM_ADA', label: 'Belum Memiliki (Perlu Pendampingan DPC)' }
          ].map(leg => `
            <label class="p-3.5 border rounded-xl flex items-center gap-3 text-xs sm:text-sm cursor-pointer border-slate-200 hover:border-slate-300">
              <input 
                type="checkbox" 
                value="${leg.id}" 
                class="checkbox-legality rounded text-[#0873a6] focus:ring-[#0873a6] w-4 h-4" 
                ${(formData.legalities || []).includes(leg.id) ? 'checked' : ''}
              />
              <span class="font-medium text-slate-800">${leg.label}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (step === 4) {
    return `
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-900">
          Tahap 4: Kebutuhan Dukungan & Arah Pengembangan
        </h3>
        <p class="text-xs sm:text-sm text-slate-500">
          Bantu kami mengarahkan program DPC GEKRAFS yang paling relevan dengan tantangan usaha Anda.
        </p>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Prioritas Kebutuhan Utama *</label>
          <select id="input-needs" class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] min-h-[44px]">
            <option value="Akses Pendanaan Investor">Akses Pendanaan / Modal Kerja (Masuk Direktori Investasi)</option>
            <option value="Sertifikasi & HKI">Fasilitasi HKI, Merek & Legalitas Usaha</option>
            <option value="Pemasaran & Pameran">Akses Pameran Nasional & Promosi Kota (Banua Creative Fest)</option>
            <option value="Pelatihan & Inkubasi">Inkubasi Kualitas Produk & Pelatihan Manajemen</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1.5">Ringkasan Rencana Pengembangan Karya (Maks. 200 Karakter)</label>
          <textarea 
            id="input-summary" 
            rows="3" 
            placeholder="Jelaskan secara singkat rencana penambahan produk atau rencana ekspansi usaha Anda..." 
            class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#0873a6] focus:ring-2 focus:ring-[#0873a6]/20 transition-all"
          >${formData.developmentNeeds || ''}</textarea>
        </div>
      </div>
    `;
  }

  // Step 5: UU PDP Mandate
  return `
    <div class="space-y-4">
      <div class="flex items-center gap-2.5 text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
        ${getIcon('shield-check', 'w-5 h-5 text-emerald-600 shrink-0')}
        <span class="text-xs font-bold">Kepatuhan UU Pelindungan Data Pribadi (UU No. 27 Tahun 2022)</span>
      </div>

      <h3 class="text-base sm:text-lg font-bold text-slate-900">
        Tahap 5: Persetujuan Eksplisit Data Mandiri
      </h3>
      
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2 leading-relaxed">
        <p>Dengan memberikan persetujuan ini, Anda memahami dan menyetujui bahwa:</p>
        <ul class="list-disc list-inside space-y-1 text-slate-700">
          <li>Data kontak pribadi (nomor telepon, alamat rumah) bersifat rahasia dan tidak dipublikasikan ke umum.</li>
          <li>Hanya ringkasan karya dan data agregat statistik yang digunakan untuk keperluan kurasi investasi dan advokasi ke Pemko Banjarbaru.</li>
          <li>Anda memegang kendali penuh untuk memperbarui atau mencabut data mandiri kapan saja.</li>
        </ul>
      </div>

      <label class="p-4 border-2 border-[#0873a6]/40 bg-blue-50/40 rounded-xl flex items-start gap-3 cursor-pointer">
        <input 
          type="checkbox" 
          id="input-consent" 
          ${formData.dataConsent ? 'checked' : ''} 
          class="mt-1 rounded text-[#0873a6] focus:ring-[#0873a6] w-5 h-5" 
        />
        <span class="text-xs sm:text-sm font-semibold text-slate-900">
          Saya menyetujui data usaha saya diverifikasi oleh tim kurator DPC GEKRAFS Kota Banjarbaru sesuai ketentuan UU Pelindungan Data Pribadi.
        </span>
      </label>
    </div>
  `;
}

export function initRegistrationStepperEvents() {
  const container = document.getElementById('stepper-card');
  if (!container) return;

  const btnPrev = document.getElementById('btn-stepper-prev');
  const btnNext = document.getElementById('btn-stepper-next');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      const state = store.getState();
      if (state.stepper.step > 1) {
        store.updateStepper(state.stepper.step - 1);
        refreshStepper();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const state = store.getState();
      const curStep = state.stepper.step;

      // Save input from current step
      if (curStep === 1) {
        const nameEl = document.getElementById('input-full-name');
        const bizEl = document.getElementById('input-business-name');
        store.updateStepper(2, {
          fullName: nameEl ? nameEl.value : '',
          businessName: bizEl ? bizEl.value : ''
        });
      } else if (curStep === 2) {
        const subEl = document.getElementById('input-subsector');
        const scaleRadio = document.querySelector('input[name="scale-radio"]:checked');
        store.updateStepper(3, {
          subsector: subEl ? subEl.value : 'kriya',
          scale: scaleRadio ? scaleRadio.value : ''
        });
      } else if (curStep === 3) {
        const checkedBoxes = Array.from(document.querySelectorAll('.checkbox-legality:checked')).map(cb => cb.value);
        store.updateStepper(4, { legalities: checkedBoxes });
      } else if (curStep === 4) {
        const needsEl = document.getElementById('input-needs');
        const summaryEl = document.getElementById('input-summary');
        store.updateStepper(5, {
          developmentNeeds: summaryEl ? summaryEl.value : (needsEl ? needsEl.value : '')
        });
      } else if (curStep === 5) {
        const consentEl = document.getElementById('input-consent');
        if (!consentEl?.checked) {
          alert('Mohon beri centang pada kotak persetujuan data consent UU PDP.');
          return;
        }
        store.updateStepper(5, { dataConsent: true });
        showRegistrationSuccess();
        return;
      }

      refreshStepper();
    });
  }

  // Allow clicking on previous step indicators
  const stepIndicators = container.querySelectorAll('.stepper-step-indicator');
  stepIndicators.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = parseInt(btn.dataset.targetStep, 10);
      store.updateStepper(targetStep);
      refreshStepper();
    });
  });
}

function refreshStepper() {
  const wrapper = document.getElementById('pemetaan');
  if (wrapper) {
    wrapper.outerHTML = renderRegistrationStepper();
    initRegistrationStepperEvents();
  }
}

function showRegistrationSuccess() {
  const content = document.getElementById('stepper-step-content');
  if (content) {
    content.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
          ${getIcon('check-circle', 'w-10 h-10')}
        </div>
        <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
          Pendaftaran Mandiri Terverifikasi
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">
          Selamat! Usaha Anda Terdaftar di DPC GEKRAFS Banjarbaru
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Data Anda telah tercatat dengan aman selaras UU PDP No. 27/2022. Tim kurator DPC GEKRAFS akan menghubungi Anda melalui WhatsApp untuk jadwal verifikasi direktori investasi dan program kemitraan kota.
        </p>
        <div class="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a 
            href="https://wa.me/628115002121?text=Halo%20Admin%20GEKRAFS%20Banjarbaru,%20saya%20sudah%20mendaftarkan%20usaha%20saya%20di%20portal%20gekrafsbjb.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors min-h-[44px]"
          >
            ${getIcon('phone', 'w-4 h-4 text-white')}
            <span>Konfirmasi ke WhatsApp Kurator</span>
          </a>
          <button 
            type="button" 
            onclick="location.reload()" 
            class="px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 min-h-[44px]"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    `;
    const navFooter = document.querySelector('#stepper-card .mt-6');
    if (navFooter) navFooter.classList.add('hidden');
  }
}
