/* ============================================================
   NorthWeb Co. — Homepage JavaScript (V5)
   ============================================================ */

const HOME_SOLUTIONS = [
  { key: 'showcase',   icon: '🛍️', title: 'Collection Showcase', desc: 'For any store or brand that needs to show products online', price: 'From ₹7,999',  accent: '#0052CC' },
  { key: 'ecommerce',  icon: '🛒', title: 'D2C E-commerce Store',  desc: 'Full online shop with cart, checkout & UPI payment',       price: 'From ₹29,999', accent: '#E8820C' },
  { key: 'restaurant', icon: '🍽️', title: 'Restaurant / Cafe',    desc: 'Digital menu, gallery, reservations, location',            price: 'From ₹9,999', accent: '#16A34A' },
  { key: 'business',   icon: '🏢', title: 'Business / Corporate',  desc: 'Professional company presence that builds credibility',    price: 'From ₹11,999', accent: '#7C3AED' },
  { key: 'portfolio',  icon: '🎨', title: 'Portfolio Website',     desc: 'Showcase your work and attract better clients',            price: 'From ₹5,999',  accent: '#DB2777' },
  { key: 'realestate', icon: '🏠', title: 'Real Estate / Property',desc: 'Property listings, photos, enquiry forms',                 price: 'From ₹17,999', accent: '#0891B2' },
  { key: 'education',  icon: '📚', title: 'Educational / Coaching',desc: 'Courses, enrollment, faculty profiles, schedule',          price: 'From ₹14,999', accent: '#D97706' },
  { key: 'gym',        icon: '💪', title: 'Gym / Fitness Studio',  desc: 'Membership plans, class schedule, trainer profiles',       price: 'From ₹9,999', accent: '#DC2626' },
  { key: 'salon',      icon: '💅', title: 'Salon / Beauty Parlor', desc: 'Services menu, gallery, appointment booking',             price: 'From ₹7,999',  accent: '#EC4899' },
  { key: 'medical',    icon: '🏥', title: 'Clinic / Medical',      desc: 'Doctor profiles, appointments, services listing',          price: 'From ₹11,999', accent: '#0D9488' },
  { key: 'event',      icon: '🎉', title: 'Event / Wedding',       desc: 'RSVP, schedule, countdown, gallery, packages',            price: 'From ₹9,999', accent: '#6D28D9' },
  { key: 'hotel',      icon: '🏨', title: 'Hotel / Homestay / PG', desc: 'Room listings, amenities, booking inquiry',                price: 'From ₹17,999', accent: '#1D4ED8' },
];

const HOME_DEMOS = [
  { key: 'showcase', icon: '🛍️', title: 'Collection Showcase Website', type: 'Clothing Store — Live Demo', live: true, url: 'https://domeweb.shop/', urlLabel: 'domeweb.shop' },
];

const FAQ_DATA = [
  {
    q: 'How much does a website cost?',
    a: 'Our websites start from ₹5,999 for a Portfolio site and go up to ₹29,999+ for an E-commerce store. Every solution page shows a clear starting price. Final cost depends on add-ons you choose (SEO, gallery, booking system, etc.). No hidden fees.'
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are delivered in 7–14 days from the day you share your content (logo, photos, text). Simple sites like Portfolio and Showcase can be done in 5–7 days. E-commerce stores may take 14–21 days depending on how many products need to be added.'
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Yes — every website we build is designed mobile-first. Over 85% of customers in Northeast India browse on phones, so we build for mobile first and then scale up for desktops. Your site will look and work perfectly on any screen size.'
  },
  {
    q: 'Do I need to provide content (photos, text)?',
    a: 'Yes — you\'ll need to share your business name, contact details, services/products, and any photos you want to use. If you don\'t have good photos, we can suggest free sources or guide you on taking better photos with your phone.'
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Every website we build includes basic on-page SEO — meta titles, descriptions, structured data (Schema), and a sitemap. This gives Google everything it needs to index your site. For ongoing ranking improvement, we have a dedicated SEO Add-On service.'
  },
  {
    q: 'What happens after the website goes live?',
    a: 'After launch, we give you 30 days of free minor edits (text changes, photo updates). For bigger changes, we offer affordable monthly maintenance plans. You also get full access to your website files so you\'re never locked in.'
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'We guide you on getting your own domain (₹800–₹1,500/year) and hosting (₹2,000–₹5,000/year). We recommend keeping them in your own name — you own everything. We can also handle the setup for you if you prefer.'
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Yes — check out our live demo at domeweb.shop (a clothing store website we built). We\'re building more demos actively. During your consultation, Ankur can also show you relevant examples from similar businesses.'
  },
];

/* ---------- RENDER SOLUTION CARDS ---------- */
function renderSolutionCards() {
  const grid = document.getElementById('solutionsGrid');
  if (!grid) return;
  grid.innerHTML = HOME_SOLUTIONS.map(s => `
    <a href="pages/solutions/${s.key}.html" class="sol-home-card" style="--card-accent:${s.accent}">
      <span class="shc-icon">${s.icon}</span>
      <div class="shc-title">${s.title}</div>
      <div class="shc-desc">${s.desc}</div>
      <div class="shc-footer">
        <span class="shc-price">${s.price}</span>
        <span class="shc-arrow">→</span>
      </div>
    </a>
  `).join('');
}

/* ---------- RENDER DEMO GRID ---------- */
function renderDemoGrid() {
  const grid = document.getElementById('demosGrid');
  if (!grid) return;
  grid.innerHTML = HOME_DEMOS.map(d => `
    <div class="demo-card live">
      <a href="${d.url}" target="_blank" rel="noopener noreferrer">
        <div class="dc-thumb">${d.icon}</div>
        <div class="dc-info">
          <span class="dc-badge live-badge">🟢 Live Demo</span>
          <div class="dc-title">${d.title}</div>
          <div class="dc-type">${d.type}</div>
          <div class="dc-link">Visit ${d.urlLabel} ↗</div>
        </div>
      </a>
    </div>`).join('');
}

/* ---------- RENDER FAQ ---------- */
function renderFAQ() {
  const grid = document.getElementById('faqGrid');
  if (!grid) return;
  grid.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        ${item.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region">${item.a}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      grid.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      // Open this one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- SCROLL ANIMATIONS (Intersection Observer) ---------- */
function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('anim-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.anim-hidden').forEach(el => io.observe(el));
}

/* ---------- CARD CURSOR GLOW EFFECT (CSS var approach — no offset bug) ---------- */
function initCardGlow() {
  const SELECTORS = '.sol-home-card, .t-card, .demo-card, .faq-item, .city-card, .whyus-card';
  document.querySelectorAll(SELECTORS).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--gx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--gy', (e.clientY - r.top) + 'px');
      card.classList.add('glow-active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('glow-active');
    });
  });
}

/* ---------- SCROLL PROGRESS BAR ---------- */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const st = document.documentElement.scrollTop;
    const sh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (sh > 0 ? (st / sh) * 100 : 0) + '%';
  }, { passive: true });
}

/* ---------- BACK TO TOP ---------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- STATS COUNTER ANIMATION ---------- */
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.textContent.replace(/[0-9]+.*/, ''); // e.g. "₹"
      let start = 0;
      const duration = 1200;
      const step = duration / target;
      const timer = setInterval(() => {
        start += Math.ceil(target / (duration / 16));
        if (start >= target) {
          el.textContent = prefix + target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = prefix + start + suffix;
        }
      }, 16);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(n => io.observe(n));
}

/* ---------- URGENCY BANNER CLOSE ---------- */
function initUrgencyBanner() {
  const btn = document.getElementById('urgencyClose');
  const banner = document.getElementById('urgency-banner');
  if (!btn || !banner) return;
  // Don't show again for 24h
  if (sessionStorage.getItem('nw-urgency-closed')) {
    banner.style.display = 'none';
    return;
  }
  btn.addEventListener('click', () => {
    banner.style.display = 'none';
    sessionStorage.setItem('nw-urgency-closed', '1');
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderSolutionCards();
  renderDemoGrid();
  renderFAQ();

  // Small delay so DOM is fully painted before observing
  requestAnimationFrame(() => {
    initScrollAnimations();
    initCardGlow();
    initScrollProgress();
    initBackToTop();
    initStatsCounter();
    initUrgencyBanner();
  });
});
