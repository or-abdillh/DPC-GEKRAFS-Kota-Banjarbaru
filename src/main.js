import './style.css';
import { initSmoothScroll } from './utils/smoothScroll.js';
import { store } from './utils/store.js';

import { renderNavbar, initNavbarEvents } from './components/Navbar.js';
import { renderHeroSection, initHeroEvents } from './components/HeroSection.js';
import { initSubsectorNavigatorEvents } from './components/SubsectorNavigator.js';
import { renderImpactDashboard } from './components/ImpactDashboard.js';
import { renderRegistrationStepper, initRegistrationStepperEvents } from './components/RegistrationStepper.js';
import { renderInvestmentDirectory, initInvestmentDirectoryEvents } from './components/InvestmentDirectory.js';
import { renderEventCalendar, initEventCalendarEvents } from './components/EventCalendar.js';
import { renderOrganizationProfile } from './components/OrganizationProfile.js';
import { renderConversionFooter, initConversionFooterEvents } from './components/ConversionFooter.js';
import { updateModalsDom } from './components/Modals.js';

function mountApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <main class="flex-1 w-full max-w-full">
      ${renderHeroSection()}
      ${renderImpactDashboard()}
      ${renderRegistrationStepper()}
      ${renderInvestmentDirectory()}
      ${renderEventCalendar()}
      ${renderOrganizationProfile()}
    </main>
    ${renderConversionFooter()}
  `;

  // Initialize event handlers for each interactive module
  initNavbarEvents();
  initHeroEvents();
  initSubsectorNavigatorEvents();
  initRegistrationStepperEvents();
  initInvestmentDirectoryEvents();
  initEventCalendarEvents();
  initConversionFooterEvents();

  // Listen for modal state changes
  store.addEventListener('modalChange', () => {
    updateModalsDom();
  });

  // Initialize Lenis Smooth Scroll
  initSmoothScroll();
}

// Start mounting when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
