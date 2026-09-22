import Lenis from 'lenis';

export function initSmoothScroll() {
  try {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return lenis;
  } catch (error) {
    console.warn('Lenis smooth scroll fallback to native smooth scroll:', error);
    return null;
  }
}
