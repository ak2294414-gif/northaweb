/* ============================================================
   NorthWeb Co. — City Pages JS
   File: js/city.js
   Handles: Nav, Footer, Cookie, Animations for all city pages
   ============================================================ */

/* ── City Data ── */
const CITY_DATA = {
  guwahati: {
    name: 'Guwahati',
    state: 'Assam',
    eyebrow: '📍 Serving Guwahati',
    tagline: 'NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Guwahati — from Fancy Bazar to Paltan Bazar, Dispur to Narengi.',
    whyPoints: [
      "We're based in Northeast India — we understand Guwahati's local market and customer behaviour",
      'Websites built for Assamese customers — mobile-first, fast-loading, easy to navigate',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" searches in Guwahati and Assam',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Guwahati Business?',
    schema: { areaServed: 'Guwahati, Assam' }
  },
  dibrugarh: {
    name: 'Dibrugarh',
    state: 'Assam',
    eyebrow: '📍 Serving Dibrugarh',
    tagline: 'NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Dibrugarh — from Chabua to Barbaruah, Lahoal to Naharkatia.',
    whyPoints: [
      "We're based in Northeast India — we understand Dibrugarh's local market and customer behaviour",
      'Websites built for Assamese customers — mobile-first, fast-loading, easy to navigate',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" searches in Dibrugarh and Assam',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Dibrugarh Business?',
    schema: { areaServed: 'Dibrugarh, Assam' }
  },
  silchar: {
    name: 'Silchar',
    state: 'Assam',
    eyebrow: '📍 Serving Silchar',
    tagline: "NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Silchar — Barak Valley's largest city and commercial hub.",
    whyPoints: [
      "We understand Silchar's Barak Valley market — local customer behaviour and competition",
      'Websites designed for Assamese and Bengali-speaking customers in Silchar',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" searches in Silchar and Barak Valley',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Silchar Business?',
    schema: { areaServed: 'Silchar, Assam' }
  },
  jorhat: {
    name: 'Jorhat',
    state: 'Assam',
    eyebrow: '📍 Serving Jorhat',
    tagline: 'NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Jorhat — the cultural heart of Assam, home to tea estates and a thriving local economy.',
    whyPoints: [
      "We understand Jorhat's local market — from tea estate businesses to retail and services",
      'Websites built for Assamese customers — mobile-first, fast-loading, easy to navigate',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" searches in Jorhat and Upper Assam',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Jorhat Business?',
    schema: { areaServed: 'Jorhat, Assam' }
  },
  shillong: {
    name: 'Shillong',
    state: 'Meghalaya',
    eyebrow: '📍 Serving Shillong',
    tagline: 'NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Shillong — the Scotland of the East and Northeast India\'s music and culture capital.',
    whyPoints: [
      "We understand Shillong's unique market — tourism, hospitality, retail and services",
      'Websites built for Meghalaya customers — mobile-first, fast-loading, multilingual-ready',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" and tourist searches in Shillong and Meghalaya',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Shillong Business?',
    schema: { areaServed: 'Shillong, Meghalaya' }
  },
  imphal: {
    name: 'Imphal',
    state: 'Manipur',
    eyebrow: '📍 Serving Imphal',
    tagline: 'NorthWeb Co. builds fast, mobile-first, SEO-ready websites for businesses across Imphal — the gateway to Manipur and a fast-growing commercial hub in Northeast India.',
    whyPoints: [
      "We understand Imphal's growing market — from Ima Keithel traders to modern service businesses",
      'Websites built for Manipuri customers — mobile-first, fast-loading, easy to navigate',
      'WhatsApp communication throughout — Ankur responds personally within 24 hours',
      '7–14 day delivery — get online fast without months of waiting',
      'SEO-optimized for "near me" searches in Imphal and Manipur',
      'Transparent pricing — no hidden fees, no confusing contracts',
    ],
    ctaHeading: 'Ready to Get a Website for Your Imphal Business?',
    schema: { areaServed: 'Imphal, Manipur' }
  }
};

const CITY_SERVICES = [
  { icon: '🍽️', name: 'Restaurant & Cafe',       price: 'From ₹9,999',  key: 'restaurant' },
  { icon: '🏢', name: 'Business / Corporate',    price: 'From ₹11,999', key: 'business'   },
  { icon: '🛍️', name: 'Collection Showcase',     price: 'From ₹7,999',  key: 'showcase'   },
  { icon: '🏥', name: 'Clinic & Medical',         price: 'From ₹11,999', key: 'medical'    },
  { icon: '💪', name: 'Gym & Fitness',            price: 'From ₹9,999',  key: 'gym'        },
  { icon: '🎓', name: 'Educational / Coaching',   price: 'From ₹14,999', key: 'education'  },
  { icon: '🛒', name: 'D2C E-commerce Store',    price: 'From ₹29,999', key: 'ecommerce'  },
  { icon: '🏨', name: 'Hotel / Homestay / PG',   price: 'From ₹17,999', key: 'hotel'      },
  { icon: '💅', name: 'Salon / Beauty Parlor',   price: 'From ₹7,999',  key: 'salon'      },
  { icon: '🎉', name: 'Event / Wedding',          price: 'From ₹9,999',  key: 'event'      },
  { icon: '🏠', name: 'Real Estate / Property',  price: 'From ₹17,999', key: 'realestate' },
  { icon: '🎨', name: 'Portfolio Website',        price: 'From ₹5,999',  key: 'portfolio'  },
];

/* ── Detect which city this page is ── */
function detectCityKey() {
  const path = window.location.pathname;
  for (const key of Object.keys(CITY_DATA)) {
    if (path.includes(key)) return key;
  }
  // fallback: read from <body data-city="">
  return document.body.dataset.city || null;
}

/* ── Build & inject city page content into <main> ── */
function renderCityPage(cityKey) {
  const city = CITY_DATA[cityKey];
  if (!city) return;

  const main = document.getElementById('main-content');
  if (!main) return;

  const bookingHref   = '../booking.html';
  const solutionsBase = '../solutions/';
  const homeHref      = '../../index.html';

  const serviceCards = CITY_SERVICES.map(s => `
    <a href="${solutionsBase}${s.key}.html" class="csv-item csv-link" aria-label="See ${s.name} solution">
      <span class="csv-icon">${s.icon}</span>
      <div class="csv-name">${s.name}</div>
      <div class="csv-price">${s.price}</div>
      <div class="csv-arrow">→</div>
    </a>`).join('');

  const whyItems = city.whyPoints.map(p => `<li>${p}</li>`).join('');

  main.innerHTML = `
  <nav class="breadcrumb city-breadcrumb" aria-label="Breadcrumb">
    <a href="${homeHref}">Home</a>
    <span>›</span>
    <a href="${homeHref}#solutions">Solutions</a>
    <span>›</span>
    <span>${city.name}</span>
  </nav>

  <div class="city-hero">
    <span class="section-eyebrow">${city.eyebrow}</span>
    <h1>Website Design &amp; Development in <strong>${city.name}</strong>, ${city.state}</h1>
    <p>${city.tagline} Get online and start attracting more customers today.</p>
    <div class="city-btns">
      <a href="${bookingHref}" class="btn-primary">Book Free Consultation</a>
      <a href="https://wa.me/917637913832" class="btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
    </div>
  </div>

  <div class="city-services">
    <h2>All 12 Website Solutions for ${city.name} Businesses</h2>
    <p class="city-services-sub">Click any solution to see features, pricing calculator, and book a consultation.</p>
    <div class="city-service-list">${serviceCards}</div>
  </div>

  <div class="city-why">
    <div class="city-why-inner">
      <h2>Why ${city.name} Businesses Choose NorthWeb Co.</h2>
      <ul>${whyItems}</ul>
    </div>
  </div>

  <div class="city-process">
    <div class="city-process-inner">
      <div class="section-eyebrow">How It Works</div>
      <h2>From chat to live website in 5 steps</h2>
      <div class="city-steps">
        <div class="city-step"><div class="cstep-num">1</div><div class="cstep-label">Book Free Consultation</div></div>
        <div class="city-step-arrow">→</div>
        <div class="city-step"><div class="cstep-num">2</div><div class="cstep-label">Share Requirements</div></div>
        <div class="city-step-arrow">→</div>
        <div class="city-step"><div class="cstep-num">3</div><div class="cstep-label">Design & Build</div></div>
        <div class="city-step-arrow">→</div>
        <div class="city-step"><div class="cstep-num">4</div><div class="cstep-label">Review & Revise</div></div>
        <div class="city-step-arrow">→</div>
        <div class="city-step"><div class="cstep-num">5</div><div class="cstep-label">Go Live!</div></div>
      </div>
    </div>
  </div>

  <div class="city-cta">
    <h2>${city.ctaHeading}</h2>
    <p>Free consultation. No upfront payment. Just a quick chat on WhatsApp.</p>
    <div class="city-cta-btns">
      <a href="${bookingHref}" class="city-cta-btn-primary">Book Free Consultation</a>
      <a href="https://wa.me/917637913832" target="_blank" rel="noopener noreferrer" class="city-cta-btn-secondary">WhatsApp Now</a>
    </div>
  </div>`;

  /* update page title & meta dynamically */
  document.title = `Website Design & Development in ${city.name}, ${city.state} — NorthWeb Co.`;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.content = `Professional website design in ${city.name}. NorthWeb Co. builds fast, mobile-first websites for local businesses in ${city.name}. Starting from ₹6,000. Free WhatsApp consultation.`;
}

/* ── CSS injected at runtime (city-specific extras) ── */
function injectCityCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .city-breadcrumb { padding:.9rem 6%; background:var(--bg); border-bottom:1px solid var(--border); font-size:.82rem; color:var(--text-soft); display:flex; gap:.4rem; align-items:center; flex-wrap:wrap; }
    .city-breadcrumb a { color:var(--blue); text-decoration:none; }
    .city-breadcrumb a:hover { text-decoration:underline; }
    .city-hero { background:var(--white); padding:4rem 6% 3.5rem; border-bottom:1px solid var(--border); max-width:820px; margin:0 auto; }
    .city-hero h1 { font-size:clamp(1.8rem,4vw,2.8rem); font-weight:800; line-height:1.2; margin:.7rem 0 1rem; color:var(--text); }
    .city-hero h1 strong { color:var(--blue); }
    .city-hero p { font-size:1rem; color:var(--text-mid); line-height:1.75; max-width:600px; margin-bottom:1.8rem; }
    .city-btns { display:flex; gap:.8rem; flex-wrap:wrap; }
    .city-services { padding:4rem 6%; max-width:900px; margin:0 auto; }
    .city-services h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.5rem; font-weight:800; margin-bottom:.4rem; }
    .city-services-sub { font-size:.88rem; color:var(--text-soft); margin-bottom:1.5rem; }
    .city-service-list { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:.9rem; }
    .csv-item { background:var(--white); border:1.5px solid var(--border); border-radius:12px; padding:1.2rem; transition:border-color .2s, box-shadow .2s; }
    .csv-link { text-decoration:none; color:inherit; cursor:pointer; display:block; }
    .csv-link:hover { border-color:var(--blue); box-shadow:0 4px 16px rgba(0,82,204,.1); }
    .csv-icon { font-size:1.5rem; margin-bottom:.5rem; display:block; }
    .csv-name { font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:.93rem; margin-bottom:.3rem; color:var(--text); }
    .csv-price { font-size:.8rem; color:var(--blue); font-weight:600; }
    .csv-arrow { font-size:.75rem; color:var(--text-soft); margin-top:.4rem; opacity:0; transition:opacity .2s; }
    .csv-link:hover .csv-arrow { opacity:1; }
    .city-why { background:var(--bg); padding:3.5rem 6%; }
    .city-why-inner { max-width:820px; margin:0 auto; }
    .city-why h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.4rem; font-weight:800; margin-bottom:1rem; }
    .city-why ul { list-style:none; display:flex; flex-direction:column; gap:.6rem; }
    .city-why li { display:flex; gap:.7rem; align-items:flex-start; font-size:.9rem; color:var(--text-mid); }
    .city-why li::before { content:'✓'; color:var(--green); font-weight:700; flex-shrink:0; margin-top:.05rem; }
    .city-process { padding:3.5rem 6%; background:var(--white); border-top:1px solid var(--border); }
    .city-process-inner { max-width:860px; margin:0 auto; }
    .city-process .section-eyebrow { margin-bottom:.4rem; }
    .city-process h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.4rem; font-weight:800; margin-bottom:1.5rem; }
    .city-steps { display:flex; align-items:center; flex-wrap:wrap; gap:.6rem; }
    .city-step { text-align:center; }
    .cstep-num { width:36px; height:36px; border-radius:50%; background:var(--blue); color:#fff; font-weight:800; font-size:.9rem; display:flex; align-items:center; justify-content:center; margin:0 auto .4rem; }
    .cstep-label { font-size:.75rem; font-weight:600; color:var(--text); max-width:80px; }
    .city-step-arrow { font-size:1.1rem; color:var(--blue); font-weight:700; }
    .city-cta { background:var(--blue); padding:3.5rem 6%; text-align:center; }
    .city-cta h2 { font-family:'Plus Jakarta Sans',sans-serif; color:#fff; font-size:1.5rem; font-weight:800; margin-bottom:.8rem; }
    .city-cta p { color:rgba(255,255,255,.8); margin-bottom:1.5rem; }
    .city-cta-btns { display:flex; gap:.8rem; justify-content:center; flex-wrap:wrap; }
    .city-cta-btn-primary { background:#fff; color:var(--blue); font-weight:700; padding:.75rem 1.8rem; border-radius:10px; text-decoration:none; font-family:'Plus Jakarta Sans',sans-serif; }
    .city-cta-btn-secondary { background:rgba(255,255,255,.15); color:#fff; font-weight:700; padding:.75rem 1.8rem; border-radius:10px; text-decoration:none; font-family:'Plus Jakarta Sans',sans-serif; border:1.5px solid rgba(255,255,255,.3); }
    @media(max-width:600px){
      .city-steps { justify-content:center; }
      .city-step-arrow { display:none; }
    }
  `;
  document.head.appendChild(style);
}

/* ── Scroll animation for city service cards ── */
function initCityAnimations() {
  const els = document.querySelectorAll('.csv-item, .city-step, .city-why li');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('anim-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach((el, i) => {
    el.classList.add('anim-hidden');
    el.style.transitionDelay = `${(i % 8) * 45}ms`;
    obs.observe(el);
  });
}

/* ── Init ── */
function initCityPage() {
  injectCityCSS();
  const key = detectCityKey();
  if (key) renderCityPage(key);
  // run animations after content is injected
  setTimeout(initCityAnimations, 80);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCityPage);
} else {
  initCityPage();
}
