/* ============================================================
   NorthWeb Co. — Scroll Animations + Card Glow Effect
   ============================================================ */

/* ── Scroll Fade-In ── */
function initScrollAnimations() {
  const els = document.querySelectorAll(
    '.sol-home-card, .demo-card, .t-card, .ps-item, .about-inner, ' +
    '.av-stat, .sol-for-item, .sol-feature-item, .sol-related-card, ' +
    '.cpro-card, .faq-item, .compare-row, .city-card, .trust-badge'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('anim-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.classList.add('anim-hidden');
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    obs.observe(el);
  });
}

/* ── Card Cursor Glow ── */
function initCardGlow() {
  document.querySelectorAll(
    '.sol-home-card, .t-card, .demo-card, .cpro-card, .faq-item, .city-card'
  ).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.setProperty('--gx', `${x}px`);
      card.style.setProperty('--gy', `${y}px`);
      card.classList.add('glow-active');
    });
    card.addEventListener('mouseleave', () => card.classList.remove('glow-active'));
  });
}

/* ── Stats Counter ── */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const dur = 1800;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ── Scroll Progress Bar ── */
function initProgressBar() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── Back to Top ── */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCardGlow();
  initCounters();
  initProgressBar();
  initBackToTop();
  /* Re-run after dynamic content (solution pages render via JS) */
  setTimeout(() => {
    initScrollAnimations();
    initCardGlow();
    initCounters();
  }, 500);
  setTimeout(() => {
    initScrollAnimations();
    initCardGlow();
  }, 1200);
});
